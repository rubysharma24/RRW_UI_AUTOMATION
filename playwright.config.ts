import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },

 
  globalSetup: require.resolve('./scripts/global-setup'),

  workers: 1,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['allure-playwright'],
    ['json', { outputFile: 'test-results.json' }],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://staging.roadreadywheels.com',
    storageState: 'auth/staging-gate.json', 
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'off' : 'retain-on-failure',
    actionTimeout: 10 * 1000,
    navigationTimeout: 45 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      grepInvert: /@mobile/,
    },
  ],
});