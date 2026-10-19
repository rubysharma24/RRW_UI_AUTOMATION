import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import * as path from 'path';

// Local: .env se load hota hai. CI me .env nahi hoti, wahan GitHub secrets env se aate hain.
dotenv.config({
  path: path.join(__dirname, '..', '.env'),
});

export async function sendReportLink(driveLink?: string) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, REPORT_RECIPIENT } = process.env;

  console.log('GMAIL_USER:', GMAIL_USER ? 'Loaded' : 'Missing');
  console.log('GMAIL_APP_PASSWORD:', GMAIL_APP_PASSWORD ? 'Loaded' : 'Missing');
  console.log('REPORT_RECIPIENT:', REPORT_RECIPIENT ? 'Loaded' : 'Missing');

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !REPORT_RECIPIENT) {
    throw new Error(
      'Email env missing: GMAIL_USER, GMAIL_APP_PASSWORD, REPORT_RECIPIENT teeno set hone chahiye'
    );
  }

  // CI me GitHub run ka link, local me jo driveLink diya ho wo
  const isCI = !!process.env.GITHUB_RUN_ID;
  const reportLink = isCI
    ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
    : driveLink;

  if (!reportLink) {
    throw new Error('Report link nahi mila (driveLink empty hai aur CI run nahi hai)');
  }

  const instruction = isCI
    ? 'Open the link, scroll to <b>Artifacts</b>, download <b>playwright-report</b>, extract it and open <b>index.html</b> to view the report.'
    : 'Download the ZIP, extract it, and open <b>index.html</b> to view the report.';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  await transporter.verify();
  console.log('SMTP authentication successful');

  const info = await transporter.sendMail({
    from: GMAIL_USER,
    to: REPORT_RECIPIENT,
    subject: `RoadReady Wheels - Test Report - ${new Date().toLocaleDateString()}`,
    text: `Please find the latest Playwright test execution report at: ${reportLink}`,
    html: `
      <p>Hi,</p>
      <p>Please find the latest Playwright test execution report at the link below:</p>
      <p><a href="${reportLink}" target="_blank">${reportLink}</a></p>
      <p>${instruction}</p>
      <p>Regards,<br/>QA Team</p>
    `,
  });

  console.log('Report sent successfully:', info.messageId);
}