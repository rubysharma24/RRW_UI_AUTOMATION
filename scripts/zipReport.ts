// Confirmed via `node -e "console.log(require('archiver'))"`: this

const archiverModule: any = require('archiver');

if (typeof archiverModule?.ZipArchive !== 'function') {
  throw new Error(
    `archiver module does not have a ZipArchive class. Module keys: ` +
      `${Object.keys(archiverModule ?? {}).join(', ')}. ` +
      `Run "npm ls archiver" and check node_modules/archiver/package.json ` +
      `to see what actually got installed under that name.`
  );
}

const ZipArchive = archiverModule.ZipArchive;
import * as fs from 'fs';
import * as path from 'path';


export async function zipFolder(
  reportDir: string,
  outputZipPath: string
): Promise<string> {
  if (!fs.existsSync(reportDir)) {
    throw new Error(
      `Report folder not found at: ${reportDir}. ` +
        'Generate the report first (run tests / run "allure generate").'
    );
  }

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputZipPath);
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on('close', () => resolve(outputZipPath));
    archive.on('error', (err: Error) => reject(err));

    archive.pipe(output);
    archive.directory(reportDir, false);
    archive.finalize();
  });
}


export async function zipPlaywrightReport(
  reportDir: string = path.join(__dirname, '..', 'playwright-report'),
  outputZipPath: string = path.join(__dirname, '..', 'playwright-report.zip')
): Promise<string> {
  return zipFolder(reportDir, outputZipPath);
}

