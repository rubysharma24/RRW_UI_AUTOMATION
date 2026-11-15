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
  readonly stagingGate: Locator;
  readonly stagingPasswordInput: Locator;
  readonly stagingSubmitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.pageLoader = page.locator('.page-loader');

    // Staging password gate (overlay jo home page ke upar aata hai)
    this.stagingGate = page.locator('#rrw-staging-gate');
    this.stagingPasswordInput = this.stagingGate.getByRole('textbox', {
      name: 'Password',
    });
    this.stagingSubmitButton = this.stagingGate.getByRole('button', {
      name: 'Submit',
      exact: true,
    });

    // Make / Model / Year = index 0 / 1 / 2
    this.selectBoxes = page.locator('.ant-select-selection-search');

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

    this.successMessage = page.getByText(/Thanks!\s*We will notify you/i).first();
  }

  /** Staging password gate aaye to password daal ke nikalo, warna no-op. */
  async passStagingGateIfPresent() {
    // Gate page hydrate hone ke baad render hota hai, isliye lamba wait
    const gateShown = await this.stagingPasswordInput
      .waitFor({ state: 'visible', timeout: 20000 })
      .then(() => true)
      .catch(() => false);
    if (!gateShown) return;

    const password = process.env.STAGING_PASSWORD;
    if (!password) {
      throw new Error(
        'Staging gate aaya hai, par STAGING_PASSWORD env variable set nahi hai.'
      );
    }

    await this.stagingPasswordInput.click();
    await this.stagingPasswordInput.fill(password);

    // React controlled input kabhi fill ignore kar deta hai, to key-by-key type karo
    if ((await this.stagingPasswordInput.inputValue()) !== password) {
      await this.stagingPasswordInput.clear();
      await this.stagingPasswordInput.pressSequentially(password, { delay: 50 });
    }
    await expect(this.stagingPasswordInput).toHaveValue(password);

    await this.stagingSubmitButton.click();
    await expect(this.stagingGate).toBeHidden({ timeout: 15000 });
  }

  async waitForLoaderGone() {
    await expect(this.pageLoader).toBeHidden({ timeout: 15000 });
  }

  async open() {
    await this.page.goto('/');
    await this.passStagingGateIfPresent();
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

    await expect(async () => {
      await this.restockAlertButton.click({ timeout: 5000 });
      await expect(this.emailInput).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 30000 });

    await this.emailInput.fill(email);

    if (needItSooner) {
      await this.soonerCheckbox.check();
    }

    const toastShown = this.successMessage.waitFor({
      state: 'visible',
      timeout: 15000,
    });

    await this.notifySubmitButton.click();
    await toastShown;

    await expect(this.emailInput).toBeHidden({ timeout: 10000 });
  }
}