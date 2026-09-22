import {
  uploadFileToDrive,
  cleanFolderWithRetry,
} from './GoogleDriveUploader';

import { sendReportLink } from './sendReport';

import * as path from 'path';
import * as fs from 'fs';

async function main() {
  const zipPath = path.join(
    __dirname,
    '..',
    'allure-report.zip'
  );

  if (!fs.existsSync(zipPath)) {
    console.error(
      'ZIP file not found. Run "npm run allure:package" first.'
    );
    process.exit(1);
  }

  await cleanFolderWithRetry();

  const link = await uploadFileToDrive(zipPath);

  console.log('\n✅ Report uploaded successfully!');
  console.log('📎 Shareable link:', link);

  await sendReportLink(link);
}

main().catch((err) => {
  console.error(
    'Failed to upload/send report:',
    err
  );

  process.exit(1);
});