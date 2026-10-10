import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import * as path from 'path';
import * as fs from 'fs';

import { zipPlaywrightReport } from './zipReport';
import { uploadFileToDrive, cleanFolderWithRetry } from './GoogleDriveUploader';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

interface TestResult {
  file: string;
  title: string;
  status: string;
  duration: number;
  orderNumber?: string;
  paymentType?: string;
  browser: string;
}

interface RawSuite {
  title: string;
  suites?: RawSuite[];
  specs?: RawSpec[];
}

interface RawAnnotation {
  type: string;
  description?: string;
}

interface RawSpec {
  title: string;
  tests: Array<{
    annotations?: RawAnnotation[];
   
    projectName?: string;
    results: Array<{ status: string; duration: number; annotations?: RawAnnotation[] }>;
  }>;
}

const PAYMENT_TYPE_BY_FILE: Record<string, string> = {
  'Paypalcheckout.spec.ts': 'PayPal',
  'amazonPayCheckout.spec.ts': 'Amazon Pay',
  'creditCardCheckout.spec.ts': 'Credit Card',
  'cart.spec.ts': 'Charge Order',
};


function collectSpecsRecursively(
  suite: RawSuite,
  results: TestResult[],
  fileTitle: string
) {
  for (const spec of suite.specs ?? []) {
    for (const test of spec.tests ?? []) {
      const result = test.results?.[0];

      
      const annotations: RawAnnotation[] = test.annotations ?? result?.annotations ?? [];
      const orderNumberAnnotation = annotations.find((a) => a.type === 'Order Number');

      results.push({
        file: fileTitle,
        title: spec.title,
        status: result?.status ?? 'unknown',
        duration: result?.duration ?? 0,
        orderNumber: orderNumberAnnotation?.description,
        paymentType: PAYMENT_TYPE_BY_FILE[fileTitle],
        browser: test.projectName ?? 'unknown',
      });
    }
  }

  for (const childSuite of suite.suites ?? []) {
    collectSpecsRecursively(childSuite, results, fileTitle);
  }
}

function parseTestResults(): TestResult[] {
  const resultsPath = path.join(__dirname, '..', 'test-results.json');
  const raw = fs.readFileSync(resultsPath, 'utf-8');
  const data = JSON.parse(raw);

  const results: TestResult[] = [];

  for (const suite of data.suites ?? []) {
   
    collectSpecsRecursively(suite, results, suite.title);
  }

  return results;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}


function classDisplayName(file: string): string {
  return file.replace(/\.spec\.ts$/, '');
}

export async function sendSummaryEmail() {
  const results = parseTestResults();

  const passed = results.filter((r) => r.status === 'passed').length;
  const failed = results.filter((r) => r.status !== 'passed' && r.status !== 'skipped').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const total = results.length;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : '0';

  console.log('Zipping Playwright HTML report...');
  const zipPath = await zipPlaywrightReport();

  console.log('Cleaning old reports from Drive...');
  await cleanFolderWithRetry();

  console.log('Uploading Playwright report to Drive...');
  const driveLink = await uploadFileToDrive(zipPath, 'PlaywrightReport.zip');

 
  const paymentResults = results.filter(
    (r) => r.paymentType && r.status === 'passed' && r.orderNumber
  );

  const paymentRows = paymentResults
    .map(
      (r) => `
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827;">${escapeHtml(r.paymentType!)}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #111827;">${escapeHtml(r.title)}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #bf1e2e; font-weight: 600; font-family: monospace;">${escapeHtml(r.orderNumber!)}</td>
        </tr>`
    )
    .join('');

  const paymentTableOrNote =
    paymentResults.length > 0
      ? `
      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; margin-bottom: 28px;">
        <tr style="background: #fff7ed;">
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #9a3412;">Payment Type</th>
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #9a3412;">Test Case</th>
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #9a3412;">Order Number</th>
        </tr>
        ${paymentRows}
      </table>`
      : `<p style="font-size: 14px; color: #6b7280; margin-bottom: 24px;">No successful payment orders (PayPal / Amazon Pay / Credit Card / Charge Order) in this run.</p>`;

 
  interface TagStats {
    passed: number;
    failed: number;
    skipped: number;
    others: number;
  }

  const tagStats = new Map<string, TagStats>();

  function bumpTag(tag: string, status: string) {
    const stats = tagStats.get(tag) ?? {
      passed: 0,
      failed: 0,
      skipped: 0,
      others: 0,
    };
    if (status === 'passed') stats.passed++;
    else if (status === 'failed' || status === 'timedOut') stats.failed++;
    else if (status === 'skipped') stats.skipped++;
    else stats.others++;
    tagStats.set(tag, stats);
  }

  for (const r of results) {
    const tags = r.title.match(/@[A-Za-z0-9_]+/g);
    if (tags && tags.length > 0) {
      for (const tag of tags) {
        bumpTag(tag.slice(1), r.status);
      }
    } else {
      bumpTag('Untagged', r.status);
    }
  }

  const tagRows = Array.from(tagStats.entries())
    .map(
      ([tag, stats]) => `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827; text-align: center;">@${escapeHtml(tag)}</td>
          <td style="padding: 10px 12px; font-size: 14px; font-weight: 700; color: #16a34a; text-align: center;">${stats.passed}</td>
          <td style="padding: 10px 12px; font-size: 14px; font-weight: 700; color: #dc2626; text-align: center;">${stats.failed}</td>
          <td style="padding: 10px 12px; font-size: 14px; font-weight: 700; color: #d97706; text-align: center;">${stats.skipped}</td>
          <td style="padding: 10px 12px; font-size: 14px; font-weight: 700; color: #6b7280; text-align: center;">${stats.others}</td>
        </tr>`
    )
    .join('');

  const tagSummaryTable = `
      <p style="font-size: 15px; color: #111827; font-weight: 700; margin: 0 0 10px;">
        Tag Execution Summary
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; margin-bottom: 24px;">
        <tr style="background: #1e293b;">
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #ffffff;">Tag</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #ffffff;">✅ Passed</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #ffffff;">❌ Failed</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #ffffff;">⏭ Skipped</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #ffffff;">⚪ Others</th>
        </tr>
        ${tagRows}
      </table>`;

  /
  interface ClassStats {
    total: number;
    passed: number;
    failed: number;
  }

  const classStats = new Map<string, ClassStats>();
  for (const r of results) {
    const stats = classStats.get(r.file) ?? { total: 0, passed: 0, failed: 0 };
    stats.total++;
    if (r.status === 'passed') stats.passed++;
    else if (r.status !== 'skipped') stats.failed++;
    classStats.set(r.file, stats);
  }

  const classRows = Array.from(classStats.entries())
    .map(([file, stats]) => {
      const failedCellClass = stats.failed > 0 ? 'color: #ef4444; font-weight: 700;' : 'color: #9ca3af;';
      return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827;">${escapeHtml(classDisplayName(file))}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #111827; text-align: center;">${stats.total}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #16a34a; font-weight: 700; text-align: center;">${stats.passed}</td>
          <td style="padding: 10px 12px; font-size: 14px; text-align: center; ${failedCellClass}">${stats.failed}</td>
        </tr>`;
    })
    .join('');

  const classSummaryTable = `
      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; margin-bottom: 24px;">
        <tr style="background: #f9fafb;">
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #374151;">Test Class</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Total</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Passed</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Failed</th>
        </tr>
        ${classRows}
      </table>`;

  
  interface BrowserStats {
    total: number;
    passed: number;
    failed: number;
  }

  const browserStats = new Map<string, BrowserStats>();
  for (const r of results) {
    const stats = browserStats.get(r.browser) ?? { total: 0, passed: 0, failed: 0 };
    stats.total++;
    if (r.status === 'passed') stats.passed++;
    else if (r.status !== 'skipped') stats.failed++;
    browserStats.set(r.browser, stats);
  }

  
  const showBrowserTable = browserStats.size > 1;

  const browserRows = Array.from(browserStats.entries())
    .map(([browser, stats]) => {
      const failedCellClass = stats.failed > 0 ? 'color: #ef4444; font-weight: 700;' : 'color: #9ca3af;';
      return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827; text-transform: capitalize;">${escapeHtml(browser)}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #111827; text-align: center;">${stats.total}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #16a34a; font-weight: 700; text-align: center;">${stats.passed}</td>
          <td style="padding: 10px 12px; font-size: 14px; text-align: center; ${failedCellClass}">${stats.failed}</td>
        </tr>`;
    })
    .join('');

  const browserSummarySection = showBrowserTable
    ? `
      <p style="font-size: 15px; color: #111827; font-weight: 700; margin: 24px 0 10px;">
        🌐 Browser-wise Summary
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; margin-bottom: 24px;">
        <tr style="background: #f9fafb;">
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #374151;">Browser</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Total</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Passed</th>
          <th style="padding: 10px 12px; text-align: center; font-size: 13px; color: #374151;">Failed</th>
        </tr>
        ${browserRows}
      </table>`
    : '';

  // --- Needs Attention (failed/timed-out/skipped, unchanged) ----------
  const attentionResults = results.filter((r) => r.status !== 'passed');

  const rows = attentionResults
    .map((r) => {
      const color = r.status === 'skipped' ? '#9ca3af' : '#ef4444';
      return `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827;">${escapeHtml(r.title)}</td>
          <td style="padding: 10px 12px; font-size: 14px; font-weight: 600; color: ${color};">${r.status.toUpperCase()}</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #6b7280; text-align: right;">${(r.duration / 1000).toFixed(1)}s</td>
        </tr>`;
    })
    .join('');

  const attentionTableOrNote =
    attentionResults.length > 0
      ? `
      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
        <tr style="background: #f9fafb;">
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #374151;">Test Case (Failed / Timed Out / Skipped)</th>
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #374151;">Status</th>
          <th style="padding: 10px 12px; text-align: right; font-size: 13px; color: #374151;">Duration</th>
        </tr>
        ${rows}
      </table>`
      : `<p style="font-size: 14px; color: #22c55e; font-weight: 600;">All tests passed — nothing needs attention.</p>`;

  const html = `
  <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
    <div style="background: #bf1e2e; padding: 24px; border-radius: 8px 8px 0 0;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px;">RoadReady Wheels</h1>
      <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px; opacity: 0.9;">Automated Test Execution Report</p>
    </div>

    <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
      <p style="color: #6b7280; font-size: 13px; margin: 0 0 20px;">Generated on ${new Date().toLocaleString()}</p>

      <div style="margin-bottom: 16px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background: #f0fdf4; border-radius: 6px; padding: 16px; text-align: center; width: 33%;">
              <div style="font-size: 24px; font-weight: 700; color: #22c55e;">${passed}</div>
              <div style="font-size: 12px; color: #6b7280;">PASSED</div>
            </td>
            <td style="width: 8px;"></td>
            <td style="background: #fef2f2; border-radius: 6px; padding: 16px; text-align: center; width: 33%;">
              <div style="font-size: 24px; font-weight: 700; color: #ef4444;">${failed}</div>
              <div style="font-size: 12px; color: #6b7280;">FAILED</div>
            </td>
            <td style="width: 8px;"></td>
            <td style="background: #f9fafb; border-radius: 6px; padding: 16px; text-align: center; width: 33%;">
              <div style="font-size: 24px; font-weight: 700; color: #6b7280;">${skipped}</div>
              <div style="font-size: 12px; color: #6b7280;">SKIPPED</div>
            </td>
          </tr>
        </table>
      </div>

      <p style="font-size: 14px; color: #111827; margin-bottom: 24px;">
        <b>Pass Rate:</b> ${passRate}% (${passed}/${total} tests)
      </p>

      <p style="font-size: 15px; color: #111827; font-weight: 700; margin: 0 0 10px;">
        💳 Payment Confirmations (PayPal / Amazon Pay / Credit Card / Charge Order)
      </p>
      ${paymentTableOrNote}

      ${tagSummaryTable}

      <p style="font-size: 15px; color: #111827; font-weight: 700; margin: 0 0 10px;">
        All Test Classes
      </p>
      ${classSummaryTable}

      ${browserSummarySection}

      <p style="font-size: 15px; color: #111827; font-weight: 700; margin: 24px 0 10px;">
        Needs Attention
      </p>
      ${attentionTableOrNote}

      <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 6px; text-align: center;">
        <p style="font-size: 14px; color: #111827; margin: 0 0 10px;">Full Playwright HTML report:</p>
        <a href="${driveLink}" target="_blank"
           style="display: inline-block; background: #bf1e2e; color: #ffffff; text-decoration: none;
                  padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600;">
          View Full Report
        </a>
        <p style="font-size: 12px; color: #9ca3af; margin: 10px 0 0;">
          Download the ZIP, extract it, and open <b>index.html</b> to view the report.
        </p>
      </div>

      <p style="font-size: 12px; color: #9ca3af; margin-top: 24px;">
        This is an automated report generated by the QA automation framework.
      </p>
    </div>
  </div>
  `;

  
  if (process.env.PREVIEW_ONLY === 'true') {
    const previewPath = path.join(__dirname, '..', 'report-preview.html');
    fs.writeFileSync(previewPath, html, 'utf-8');
    console.log(`Preview written to: ${previewPath} (email NOT sent)`);
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.verify();
  console.log('SMTP authentication successful');

  const statusEmoji = failed > 0 ? '❌' : '✅';
  const resultText =
    failed > 0 ? `${passed}/${total} Tests Passed` : `All ${total} Tests Passed`;

  const subject = `${statusEmoji} RRW Playwright Automation | Staging — ${resultText}`;

  const info = await transporter.sendMail({
    from: `"RoadReady QA" <${process.env.GMAIL_USER}>`,
    to: process.env.REPORT_RECIPIENT,
    subject,
    html,
  });

  console.log('Summary email sent:', info.messageId);
}

sendSummaryEmail().catch((err) => {
  console.error('Failed to send summary email:', err);
  process.exit(1);
});