import { Page, Locator, expect } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = '/') {
    await this.page.goto(path);
    await this.dismissStagingGate();
  }

  /** Staging password gate aaye to password daal kar nikal jata hai, warna kuch nahi karta. */
  async dismissStagingGate() {
    const passwordInput = this.page.getByPlaceholder('Enter password');

    const gateShown = await passwordInput
      .waitFor({ state: 'visible', timeout: 2000 })
      .then(() => true)
      .catch(() => false);
    if (!gateShown) return;

    const password = process.env.STAGING_PASSWORD;
    if (!password) {
      throw new Error('STAGING_PASSWORD environment variable is not set');
    }

    // Page hydrate hote waqt React input reset kar deta hai, isliye poora
    // fill -> value check -> submit -> gate gayab hone tak ek saath retry hota hai.
    await expect(async () => {
      await passwordInput.fill(password);
      await expect(passwordInput).toHaveValue(password, { timeout: 2000 });
      await this.page.getByRole('button', { name: 'Submit' }).click();
      await expect(passwordInput).toBeHidden({ timeout: 5000 });
    }).toPass({ timeout: 30000 });
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async click(locator: Locator) {
    await expect(async () => {
      await locator.waitFor({ state: 'visible' });
      await locator.scrollIntoViewIfNeeded();
      await expect(locator).toBeEnabled({ timeout: 5000 });
      await locator.click({ timeout: 5000 });
    }).toPass({ timeout: 20000 });
  }

  async fill(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, text: string) {
    await expect(locator).toContainText(text);
  }
}