import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

const CREDENTIALS_PATH = path.join(__dirname, '..', 'credentials', 'google-credentials.json');
const FOLDER_ID = '0AHB9FI7YO_scUk9PVA'; // same Drive folder as before

function getDriveClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
  return google.drive({ version: 'v3', auth });
}

/**
 * Uploads a file to the Drive folder, grants "anyone with link - reader"
 * access, and returns a shareable link.
 */
export async function uploadFileToDrive(
  filePath: string,
  driveFileName: string = path.basename(filePath)
): Promise<string> {
  const drive = getDriveClient();

  const fileMetadata = {
    name: driveFileName,
    parents: [FOLDER_ID],
  };

  const media = {
    mimeType: 'application/zip',
    body: fs.createReadStream(filePath),
  };

  const uploadedFile = await drive.files.create({
    requestBody: fileMetadata,
    media,
    fields: 'id, webViewLink',
    supportsAllDrives: true,
  });

  const fileId = uploadedFile.data.id!;

  await drive.permissions.create({
    fileId,
    requestBody: { type: 'anyone', role: 'reader' },
    supportsAllDrives: true,
  });

  console.log('File uploaded to Google Drive:', uploadedFile.data.webViewLink);
  return uploadedFile.data.webViewLink!;
}

/**
 * Deletes old ZIP files in the folder (with retry) before a new upload.
 */
export async function cleanFolderWithRetry(): Promise<void> {
  const drive = getDriveClient();
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`Drive cleanup attempt ${attempt}/${maxRetries}`);

    const result = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed=false and name contains '.zip'`,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
      fields: 'files(id, name, ownedByMe)',
    });

    const files = result.data.files ?? [];
    if (files.length === 0) {
      console.log('No ZIP files left to delete');
      return;
    }

    for (const file of files) {
      try {
        console.log(`Trying to delete: ${file.name} | ownedByMe=${file.ownedByMe}`);
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

/**
 * Lists all files in a Drive folder (with pagination).
 */
export async function listFilesInFolder(folderId: string = FOLDER_ID): Promise<void> {
  const drive = getDriveClient();
  let pageToken: string | undefined;
  let totalCount = 0;

  do {
    const result = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'nextPageToken, files(id, name, size, modifiedTime)',
      pageSize: 100,
      pageToken,
    });

    const files = result.data.files ?? [];
    for (const file of files) {
      totalCount++;
      console.log(
        `${totalCount}. Name: ${file.name} | ID: ${file.id} | Size: ${file.size ?? 'N/A'} bytes | Modified: ${file.modifiedTime}`
      );
    }

    pageToken = result.data.nextPageToken ?? undefined;
  } while (pageToken);

  console.log('Total files:', totalCount);
}