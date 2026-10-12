import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

const FOLDER_ID = '0AHB9FI7YO_scUk9PVA';

function getDriveClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve(__dirname, '../credentials/google-credentials.json'),
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
  return google.drive({ version: 'v3', auth });
}

export async function uploadFileToDrive(
  filePath: string,
  driveFileName: string = path.basename(filePath)
): Promise<string> {
  const drive = getDriveClient();

  const response = await drive.files.create({
    requestBody: {
      name: driveFileName,
      parents: [FOLDER_ID],
    },
    media: {
      mimeType: 'application/zip',
      body: fs.createReadStream(filePath),
    },
    fields: 'id, webViewLink',
    supportsAllDrives: true,
  });

  const fileId = response.data.id!;

  await drive.permissions.create({
    fileId,
    requestBody: { role: 'reader', type: 'anyone' },
    supportsAllDrives: true,
  });

  return response.data.webViewLink!;
}

/**
 * Deletes report ZIPs older than `retentionDays` (default 7).
 * Only files whose name contains `namePrefix` and ".zip" are touched,
 * so other files in the folder are safe.
 */
export async function cleanFolderWithRetry(
  namePrefix: string = 'PlaywrightReport',
  retentionDays: number = 7
): Promise<void> {
  const drive = getDriveClient();
  const maxRetries = 3;
  const cutoff = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000).toISOString();

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(
      `Drive cleanup attempt ${attempt}/${maxRetries} (deleting "${namePrefix}" zips created before ${cutoff})`
    );

    const result = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed=false and name contains '${namePrefix}' and name contains '.zip' and createdTime < '${cutoff}'`,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
      fields: 'files(id, name, createdTime, ownedByMe)',
    });

    const files = result.data.files ?? [];

    if (files.length === 0) {
      console.log('No expired ZIP files to delete');
      return;
    }

    for (const file of files) {
      try {
        console.log(`Deleting: ${file.name} | created ${file.createdTime} | ownedByMe=${file.ownedByMe}`);
        await drive.files.delete({ fileId: file.id!, supportsAllDrives: true });
      } catch (err) {
        console.error(`Delete failed for ${file.name}:`, err);
      }
    }

    console.log('Waiting 5 seconds before re-check...');
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  console.error('Drive cleanup finished with leftover files (retry limit reached)');
}

export async function listFilesInFolder(folderId: string) {
  const drive = getDriveClient();
  const files: any[] = [];
  let pageToken: string | undefined;

  do {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
      fields: 'nextPageToken, files(id, name, createdTime)',
      pageToken,
    });
    files.push(...(res.data.files ?? []));
    pageToken = res.data.nextPageToken ?? undefined;
  } while (pageToken);

  return files;
}