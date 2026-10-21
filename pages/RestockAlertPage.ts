import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class RestockAlertPage extends BasePage {
  readonly shopNowButton: Locator;
  readonly pageLoader: Locator;
  readonly selectBoxes: Locator;
  readonly openDropdown: Locator;
  readonly restockAlertButton: Locator;
  readonly emailInput: Locator;
  readonly soonerCheckbox: Locator;
  readonly notifySubmitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.pageLoader = page.locator('.page-loader');

    // Make / Model / Year = index 0 / 1 / 2
    this.selectBoxes = page.locator('.ant-select-selection-search');
    // Sirf open dropdown ke andar option dhoondhne ke liye (strict mode safe)
    this.openDropdown = page.locator(
      '.ant-select-dropdown:not(.ant-select-dropdown-hidden)'
    );

    this.restockAlertButton = page
      .getByRole('button', { name: 'Get Restock Alert' })
      .first();

    // Restock dialog
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.soonerCheckbox = page.locator('#sooner-restock-requested');
    this.notifySubmitButton = page.getByRole('button', {
      name: 'Notify Me When Available',
    });

    // Toast: "Thanks! We will notify you when this item is back in stock."
    this.successMessage = page.getByText(/Thanks!\s*We will notify you/i).first();
  }

  async waitForLoaderGone() {
    await expect(this.pageLoader).toBeHidden({ timeout: 15000 });
  }

  async open() {
    await this.page.goto('/');
    await expect(this.shopNowButton).toBeVisible({ timeout: 15000 });
    await this.shopNowButton.click();
    await this.waitForLoaderGone();
  }

  private async selectFromDropdown(index: number, value: string) {
    await this.waitForLoaderGone();
    await expect(async () => {
      await this.selectBoxes.nth(index).click();
      await this.openDropdown
        .getByText(value, { exact: true })
        .click({ timeout: 3000 });
    }).toPass({ timeout: 15000 });
    await this.waitForLoaderGone();
  }

  async selectMake(make: string) {
    await this.selectFromDropdown(0, make);
  }

  async selectModel(model: string) {
    await this.selectFromDropdown(1, model);
  }

  async selectYear(year: string) {
    await this.selectFromDropdown(2, year);
  }

  async selectCategory(categoryName: string) {
    await this.waitForLoaderGone();
    await this.page
      .getByRole('button', { name: categoryName, exact: true })
      .click();
    await this.waitForLoaderGone();
  }

  async submitRestockAlert(email: string, needItSooner = true) {
    await this.waitForLoaderGone();

    // Listing re-render hone par button detach ho sakta hai, isliye
    // click + dialog open hona ek saath retry hota hai (click khud scroll karta hai)
    await expect(async () => {
      await this.restockAlertButton.click({ timeout: 5000 });
      await expect(this.emailInput).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 30000 });

    await this.emailInput.fill(email);

    if (needItSooner) {
      await this.soonerCheckbox.check();
    }

    // Toast chhota hota hai, isliye click se PEHLE wait shuru karo
    const toastShown = this.successMessage.waitFor({
      state: 'visible',
      timeout: 15000,
    });

    await this.notifySubmitButton.click();
    await toastShown;

    await expect(this.emailInput).toBeHidden({ timeout: 10000 }); // dialog band
  }
}