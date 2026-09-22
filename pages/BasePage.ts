import { Page, Locator, expect } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

 async click(locator: Locator) {
  await locator.waitFor({ state: 'visible' });
  await locator.scrollIntoViewIfNeeded();
  await expect(locator).toBeEnabled({ timeout: 15000 });
  await locator.click();
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
