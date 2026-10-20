import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class VehicleFitmentPage extends BasePage {
  readonly shopNowButton: Locator;
  readonly makeSelect: Locator;
  readonly modelSelect: Locator;
  readonly yearSelect: Locator;
  readonly categoryButton: (categoryName: string) => Locator;
  readonly hollanderCode: Locator;
  readonly resultPrices: Locator;
  readonly removeFilterButton: (value: string) => Locator;
  readonly shopAsModalHeading: Locator;
  readonly shopAsResaleOption: Locator;
  readonly materialButton: (materialName: string) => Locator;
  readonly diameterButton: (diameterLabel: string) => Locator;
  readonly boltPatternButton: (label: string) => Locator;
  readonly lugCountButton: (count: string) => Locator;
  readonly filterSummaryText: (partialText: string) => Locator;
  readonly resetFiltersButton: Locator;
  readonly notifyMeButton: Locator;
  readonly pdpNotifyMeButton: Locator;
  readonly notifyEmailInput: Locator;
  readonly notifySoonerCheckbox: Locator;
  readonly notifySubmitButton: Locator;
  readonly notifySuccessMessage: Locator;

  constructor(page: Page) {
    super(page);

    // Home page CTA (guest flow, no login)
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });

    this.makeSelect = page.locator('.ant-select-selection-search').first();
    this.modelSelect = page
      .locator('div')
      .filter({ hasText: /^Select Model$/ })
      .nth(2);
    this.yearSelect = page.locator(
      'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
    );

    this.categoryButton = (categoryName: string) =>
      page.getByRole('button', { name: categoryName, exact: true });

    this.hollanderCode = page.getByText(/^Hollander: 560-/);
    this.resultPrices = page.getByText(/^\$/);

    this.removeFilterButton = (value: string) =>
      page.getByRole('button', { name: `Remove ${value}`, exact: true });

    // Safety net: dismissed only if the "Shop As" modal shows up.
    this.shopAsModalHeading = page.getByRole('heading', { name: 'Shop As' });
    this.shopAsResaleOption = page.getByRole('button').filter({
      has: page.getByRole('heading', { name: 'Resale', exact: true }),
    });

    this.materialButton = (materialName: string) =>
      page.getByRole('button', { name: materialName, exact: true });
    this.diameterButton = (diameterLabel: string) =>
      page.getByRole('button', { name: diameterLabel, exact: true });
    this.boltPatternButton = (label: string) =>
      page.getByRole('button', { name: label, exact: true });
    this.lugCountButton = (count: string) =>
      page.getByRole('button', { name: count, exact: true });

    this.filterSummaryText = (partialText: string) =>
      page.getByText(partialText, { exact: false });

    this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });

    this.notifyMeButton = page
      .getByRole('button', { name: 'Get Restock Alert' })
      .nth(1);
    this.pdpNotifyMeButton = page
      .getByRole('button', { name: 'Get Restock Alert' })
      .last();

    // Restock dialog ("Get Notified When It's Back")
    this.notifyEmailInput = page.getByRole('textbox', { name: 'Email address' });
    this.notifySoonerCheckbox = page.locator('#sooner-restock-requested');
    this.notifySubmitButton = page.getByRole('button', {
      name: 'Notify Me When Available',
    });
    this.notifySuccessMessage = page
      .getByText(/Thanks!\s*We will notify you/i)
      .first();
  }

  /** Guest flow: open home page and click "Shop Now" to reach the filters. */
  async openHomeAndShopNow() {
    await this.page.goto('/');
    await expect(this.shopNowButton).toBeVisible({ timeout: 15000 });
    await this.shopNowButton.click();
    await this.waitForFiltersReady();
  }

  /** Waits out "Updating filters…" overlay and the ".page-loader" spinner. */
  async waitForFiltersReady() {
    const pageLoader = this.page.locator('.page-loader');
    if (await pageLoader.isVisible({ timeout: 3000 }).catch(() => false)) {
      await pageLoader.waitFor({ state: 'hidden', timeout: 15000 });
    }

    const updatingFiltersText = this.page.getByText('Updating filters', {
      exact: false,
    });
    if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
      await updatingFiltersText.waitFor({ state: 'hidden', timeout: 15000 });
    }
  }

  /** Dismisses the "Shop As" modal only if it appears (no-op otherwise). */
  async dismissShopAsModalIfPresent() {
    const isModalVisible = await this.shopAsModalHeading
      .isVisible({ timeout: 3000 })
      .catch(() => false);

    if (isModalVisible) {
      await this.shopAsResaleOption.click();
      await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
    }
  }

  private async clickClearingOverlays(locator: Locator) {
    try {
      await locator.click({ timeout: 8000 });
    } catch (err) {
      await this.waitForFiltersReady();
      await this.dismissShopAsModalIfPresent();
      await locator.click();
    }
  }

  async selectMake(make: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.makeSelect);
    await this.page.getByText(make, { exact: true }).click();
    await this.dismissShopAsModalIfPresent();
  }

  async selectModel(model: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.modelSelect);
    await this.page.getByText(model, { exact: true }).click();
  }

  async selectYear(year: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.yearSelect);
    await this.page.getByText(year, { exact: true }).click();
  }

  async selectCategory(categoryName: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.categoryButton(categoryName));
  }

  async selectMaterial(materialName: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.materialButton(materialName));
  }

  async selectDiameter(diameterLabel: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.diameterButton(diameterLabel));
  }

  async selectBoltPattern(label: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.boltPatternButton(label));
  }

  async selectLugCount(count: string) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();
    await this.clickClearingOverlays(this.lugCountButton(count));
  }

  async expectFiltersApplied(...values: string[]) {
    for (const value of values) {
      await expect(this.removeFilterButton(value)).toBeVisible({
        timeout: 10000,
      });
    }
  }

  /** After Reset, none of the previously-applied filter chips should remain. */
  async expectFiltersCleared(...previousValues: string[]) {
    for (const value of previousValues) {
      await expect(this.removeFilterButton(value)).toBeHidden({
        timeout: 10000,
      });
    }
  }

  /** Removes a single applied filter chip and waits for it to disappear. */
  async removeFilter(value: string) {
    await this.waitForFiltersReady();
    await this.removeFilterButton(value).click();
    await expect(this.removeFilterButton(value)).toBeHidden({ timeout: 10000 });
    await this.waitForFiltersReady();
  }

  async expectFilterSummaryVisible(partialText: string) {
    await expect(this.filterSummaryText(partialText)).toBeVisible({
      timeout: 10000,
    });
  }

  async goToFilteredCategory(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    await this.page.goto(`/t/categories?${query}`);
  }

  /** Fills the restock dialog, optionally ticks "I need it sooner", submits. */
  private async fillAndSubmitNotifyDialog(email: string, needItSooner: boolean) {
    await expect(this.notifyEmailInput).toBeVisible({ timeout: 10000 });
    await this.notifyEmailInput.fill(email);

    if (needItSooner) {
      await this.notifySoonerCheckbox.check();
    }

    // Toast chhota hota hai, isliye click se PEHLE wait shuru karo
    const toastShown = this.notifySuccessMessage.waitFor({
      state: 'visible',
      timeout: 15000,
    });
    await this.notifySubmitButton.click();
    await toastShown;

    await expect(this.notifyEmailInput).toBeHidden({ timeout: 10000 });
  }

  /** Listing page: click "Get Restock Alert" on the out-of-stock result. */
  async submitNotifyMe(email: string, needItSooner = false) {
    await this.waitForFiltersReady();
    await this.dismissShopAsModalIfPresent();

    await expect(this.notifyMeButton).toBeVisible({ timeout: 30000 });
    await this.notifyMeButton.scrollIntoViewIfNeeded();
    await this.notifyMeButton.click();

    await this.fillAndSubmitNotifyDialog(email, needItSooner);
  }

  /** Product page: click "Get Restock Alert" in the main section. */
  async submitNotifyMeFromPdp(email: string, needItSooner = false) {
    await expect(this.pdpNotifyMeButton).toBeVisible({ timeout: 10000 });
    await this.pdpNotifyMeButton.scrollIntoViewIfNeeded();
    await this.pdpNotifyMeButton.click();

    await this.fillAndSubmitNotifyDialog(email, needItSooner);
  }

  async goBackToListing() {
    await this.page.goBack();
    await expect(
      this.page.getByRole('heading', { name: 'Selected Filters' })
    ).toBeVisible({ timeout: 10000 });
  }

  /** Clicks Reset and waits for the filter chips to actually clear. */
  async resetFilters() {
    await this.resetFiltersButton.click();

    const selectedFiltersPanel = this.page
      .getByRole('heading', { name: 'Selected Filters' })
      .locator('..');

    await expect(
      selectedFiltersPanel.getByRole('button', { name: /^Remove /i })
    ).toHaveCount(0, { timeout: 10000 });

    await this.waitForFiltersReady();
  }

  async expectResultsVisible() {
    await expect(this.hollanderCode).toBeVisible({ timeout: 20000 });

    const priceCount = await this.resultPrices.count();
    expect(priceCount).toBeGreaterThan(0);
  }

  /** Product ke 2 links hote hain (image + title), isliye .first() */
  async clickProductByName(partialName: string) {
    await this.page
      .getByRole('link', { name: partialName })
      .first()
      .click();
  }
}