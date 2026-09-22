import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import * as path from 'path';
import * as fs from 'fs';

import { zipPlaywrightReport } from './zipReport';
import { uploadFileToDrive, cleanFolderWithRetry } from './GoogleDriveUploader';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

interface TestResult {
  title: string;
  status: string;
  duration: number;
}

interface RawSuite {
  title: string;
  suites?: RawSuite[];
  specs?: RawSpec[];
}

interface RawSpec {
  title: string;
  tests: Array<{
    results: Array<{ status: string; duration: number }>;
  }>;
}

/**
 * Playwright JSON reporter ka structure kitni bhi depth tak nested ho
 * sakta hai (describe blocks ki wajah se). Ye function recursively
 * har level ke andar jaake saare specs collect karta hai.
 */
function collectSpecsRecursively(suite: RawSuite, results: TestResult[]) {
  for (const spec of suite.specs ?? []) {
    for (const test of spec.tests ?? []) {
      results.push({
        title: spec.title,
        status: test.results[0]?.status ?? 'unknown',
        duration: test.results[0]?.duration ?? 0,
      });
    }
  }

  for (const childSuite of suite.suites ?? []) {
    collectSpecsRecursively(childSuite, results);
  }
}

function parseTestResults(): TestResult[] {
  const resultsPath = path.join(__dirname, '..', 'test-results.json');
  const raw = fs.readFileSync(resultsPath, 'utf-8');
  const data = JSON.parse(raw);

  const results: TestResult[] = [];

  for (const suite of data.suites ?? []) {
    collectSpecsRecursively(suite, results);
  }

  return results;
}

export async function sendSummaryEmail() {
  const results = parseTestResults();

  const passed = results.filter((r) => r.status === 'passed').length;
  const failed = results.filter((r) => r.status === 'failed').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const total = results.length;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : '0';

  // Zip the actual Playwright HTML report and upload it to Drive so the
  // email can link to the full report, not just this summary table.
  console.log('Zipping Playwright HTML report...');
  const zipPath = await zipPlaywrightReport();

  console.log('Cleaning old reports from Drive...');
  await cleanFolderWithRetry();

  console.log('Uploading Playwright report to Drive...');
  const driveLink = await uploadFileToDrive(zipPath, 'PlaywrightReport.zip');

  // Note: Allure report sharing was tried and dropped — the allure-report/
  // folder (with attachments/videos/history) ran to ~333MB, too large to
  // usefully zip/upload/email. Only the lightweight Playwright HTML report
  // is shared here.

  // Scaling problem: at 10 tests, a full table is fine. At 500, a row-per-
  // test table makes the email huge and hard to scan — and past ~102KB
  // Gmail clips the message and adds a "View entire message" link, so the
  // bottom half wouldn't even render inline anyway. Fix: only list tests
  // that need attention (failed/skipped) in the email body. Passed tests
  // just get a count — the full row-by-row list for all 500 already lives
  // in the linked HTML report, which is what the email should point to,
  // not duplicate.
  const attentionResults = results.filter((r) => r.status !== 'passed');

  const rows = attentionResults
    .map((r) => {
      const color = r.status === 'failed' ? '#ef4444' : '#9ca3af';
      return `
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-size: 14px; color: #111827;">${r.title}</td>
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
          <th style="padding: 10px 12px; text-align: left; font-size: 13px; color: #374151;">Test Case (Failed / Skipped)</th>
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

      <div style="margin-bottom: 24px;">
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

      <p style="font-size: 14px; color: #111827; margin-bottom: 16px;">
        <b>Pass Rate:</b> ${passRate}% (${passed}/${total} tests)
      </p>

      <p style="font-size: 13px; color: #6b7280; margin-bottom: 12px;">
        ${passed} test${passed === 1 ? '' : 's'} passed (see full list in the report below).
        Showing only tests that need attention:
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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.verify();
  console.log('SMTP authentication successful');

  // Match the style of the existing API report subject line
  // (e.g. "✅ RRW API Automation | Staging — All 26 Tags Passed"):
  // status emoji + "RRW <suite> | Staging — <result>".
  const statusEmoji = failed > 0 ? '❌' : '✅';
  const resultText =
    failed > 0
      ? `${passed}/${total} Tests Passed`
      : `All ${total} Tests Passed`;

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