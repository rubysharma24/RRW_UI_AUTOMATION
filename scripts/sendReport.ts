import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '..', '.env'),
});


export async function sendReportLink(driveLink: string) {
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log(
    'GMAIL_APP_PASSWORD:',
    process.env.GMAIL_APP_PASSWORD ? 'Loaded' : 'Missing'
  );
  console.log('REPORT_RECIPIENT:', process.env.REPORT_RECIPIENT);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.verify();
  console.log('SMTP authentication successful');

  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.REPORT_RECIPIENT,
    subject: `RoadReady Wheels - Test Report - ${new Date().toLocaleDateString()}`,
    text: `Please find the latest Playwright test execution report at: ${driveLink}`,
    html: `
      <p>Hi,</p>
      <p>Please find the latest Playwright test execution report at the link below:</p>
      <p><a href="${driveLink}" target="_blank">${driveLink}</a></p>
      <p>Download the ZIP, extract it, and open <b>index.html</b> to view the report.</p>
      <p>Regards,<br/>QA Team</p>
    `,
  });

  console.log('Report sent successfully:', info.messageId);
}