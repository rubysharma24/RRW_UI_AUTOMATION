import 'dotenv/config';
import { chromium, expect, FullConfig } from '@playwright/test';

export default async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const password = process.env.STAGING_PASSWORD;
  if (!baseURL) throw new Error('playwright.config.ts me use.baseURL set karo.');
  if (!password) throw new Error('STAGING_PASSWORD env variable set nahi hai.');

  const browser = await chromium.launch();
  const page = await browser.newPage({ baseURL });
  await page.goto('/');

  const gate = page.locator('#rrw-staging-gate');
  const input = gate.getByRole('textbox', { name: 'Password' });
  await input.waitFor({ state: 'visible', timeout: 20000 });
  await input.fill(password);
  await gate.getByRole('button', { name: 'Submit', exact: true }).click();
  await expect(gate).toBeHidden({ timeout: 15000 });

  await page.context().storageState({ path: 'auth/staging-gate.json' });
  await browser.close();
}