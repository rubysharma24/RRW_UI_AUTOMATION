import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },

  workers: process.env.CI ? 3 : 1,

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
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    navigationTimeout: 45 * 1000,
  },

  projects: [
    // ---------- Desktop ----------
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      grepInvert: /@mobile/,
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   grepInvert: /@mobile/,
    // },
    // {
    //   name: 'webkit', // Safari engine
    //   use: { ...devices['Desktop Safari'] },
    //   grepInvert: /@mobile/,
    // },
    // {
    //   name: 'edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   grepInvert: /@mobile/,
    // },

    // ---------- Mobile (disabled) ----------
    // {
    //   name: 'mobile-chrome',
    //   use: { ...devices['Pixel 7'] },
    //   grep: /@mobile/,
    // },
    // {
    //   name: 'mobile-safari',
    //   use: { ...devices['iPhone 14'] },
    //   grep: /@mobile/,
    // },
  ],
});