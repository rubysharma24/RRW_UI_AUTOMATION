import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';


export default class VehicleFitmentPage extends BasePage {
  readonly makeSelect: Locator;
  readonly modelSelect: Locator;
  readonly yearSelect: Locator;
  readonly categoryButton: (categoryName: string) => Locator;
  readonly hollanderCode: Locator;
  readonly resultPrices: Locator;
  readonly removeFilterButton: (value: string) => Locator;
  readonly shopAsModalHeading: Locator;
  readonly shopAsResaleOption: Locator;
  readonly shopAsWholesaleOption: Locator;
  readonly materialButton: (materialName: string) => Locator;
  readonly diameterButton: (diameterLabel: string) => Locator;
  readonly filterSummaryText: (partialText: string) => Locator;
  readonly notifyMeButton: Locator;
  readonly notifyMeEmailInput: Locator;
  readonly notifyMeSubmitButton: Locator;
  readonly resetFiltersButton: Locator;
  readonly pdpNotifyMeButton: Locator;
  readonly pdpNotifyDialog: Locator;
  readonly pdpNotifyEmailInput: Locator;
  readonly pdpNotifySubmitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.makeSelect = page.locator('.ant-select-selection-search').first();
    this.modelSelect = page
      .locator('div')
      .filter({ hasText: /^Select Model$/ })
      .nth(2);
    this.yearSelect = page.locator(
      'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
    );

    // FIX: exact: true — without it, name matching is substring-based and
    // collides with unrelated buttons elsewhere on the page (e.g. cart
    // drawer items) whose accessible name merely *contains* this text.
    this.categoryButton = (categoryName: string) =>
      page.getByRole('button', { name: categoryName, exact: true });

    this.hollanderCode = page.getByText(/^Hollander: 560-/);

    // Result cards' prices — used to assert results actually rendered,
    // not just that no error was thrown.
    this.resultPrices = page.getByText(/^\$/);

    // FIX: exact: true — `Remove ${value}` was also matching the cart
    // drawer's "Remove <product name> from cart" buttons via substring.
    this.removeFilterButton = (value: string) =>
      page.getByRole('button', { name: `Remove ${value}`, exact: true });

    // The "Shop As" modal (full-screen overlay, z-[9999]) re-appears after
    // the Make selection and blocks every subsequent click underneath it.
    // Scoped via the nested heading so this doesn't collide with the plain
    // "Resale" toggle button in the header (that one has no heading inside).
    this.shopAsModalHeading = page.getByRole('heading', { name: 'Shop As' });
    this.shopAsResaleOption = page.getByRole('button').filter({
      has: page.getByRole('heading', { name: 'Resale', exact: true }),
    });
    this.shopAsWholesaleOption = page.getByRole('button').filter({
      has: page.getByRole('heading', { name: 'Wholesale', exact: true }),
    });

    // FIX: exact: true — 'Alloy' / 'Steel' / diameter labels were matching
    // the cart drawer's "Remove ... Alloy Wheel / Rim from cart",
    // "Decrease/Increase quantity of ... Alloy Wheel / Rim" buttons too,
    // since those accessible names contain the material name as a substring.
    // This was the direct cause of the strict-mode violation.
    this.materialButton = (materialName: string) =>
      page.getByRole('button', { name: materialName, exact: true });
    this.diameterButton = (diameterLabel: string) =>
      page.getByRole('button', { name: diameterLabel, exact: true });

    // The breadcrumb-style summary text (e.g. "Cadillac, Escalade, OEM
    // Replacement Wheel") shown above the results grid once enough filters
    // are picked — partial match since the full string grows with each
    // filter added.
    this.filterSummaryText = (partialText: string) =>
      page.getByText(partialText, { exact: false });

    // Shown on a result card instead of "Add To Cart" when that specific
    // filtered combination has no stock.
    this.notifyMeButton = page.getByRole('button', { name: 'Notify Me' });
    this.notifyMeEmailInput = page.getByRole('textbox', {
      name: 'example@domain.com',
    });
    this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });

    // Sits next to the "Selected Filters" heading — clears every applied
    // filter chip in one click.
    this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });

    this.pdpNotifyMeButton = page.getByRole('button', { name: 'Notify Me' }).last();
    this.pdpNotifyDialog = page.getByRole('dialog', { name: 'Enter your Email' });
    this.pdpNotifyEmailInput = this.pdpNotifyDialog.getByRole('textbox', {
      name: 'example@domain.com',
    });
    this.pdpNotifySubmitButton = this.pdpNotifyDialog.getByRole('button', {
      name: 'Submit',
    });
  }

  /**
   * Call once right after login — the "Shop As" modal is mandatory at that
   * point, and choosing an option is what lands you on the categories page
   * with the Make/Model/Year selects available.
   */
  async selectShopMode(mode: 'Resale' | 'Wholesale') {
    const isModalVisible = await this.shopAsModalHeading
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isModalVisible) {
      await this.page.goto('https://staging.roadreadywheels.com/t/categories');
      await this.waitForFiltersReady();
      return;
    }

    const option =
      mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
    await option.click();

    await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });

    await this.page.reload();
    await this.page.waitForLoadState('networkidle');

    await this.dismissShopAsModalIfPresent();

    await this.waitForFiltersReady();
  }

  /**
   * Waits out the "Updating filters…" overlay AND the separate full-page
   * ".page-loader" spinner — both appear after a reload or filter-panel
   * re-init and intercept clicks on their own, independently of the
   * Shop-As modal.
   */
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

  /**
   * Call before any dropdown/button interaction that follows a Make
   * selection — the modal can pop up more than once, not just immediately
   * after the first select. A blind wait isn't reliable because the modal's
   * appearance timing varies; actively checking and dismissing it is.
   */
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

  async expectFilterSummaryVisible(partialText: string) {
    await expect(this.filterSummaryText(partialText)).toBeVisible({
      timeout: 10000,
    });
  }

  async goToFilteredCategory(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    await this.page.goto(
      `https://staging.roadreadywheels.com/t/categories?${query}`
    );
  }

  async submitNotifyMe(email: string) {
    await this.click(this.notifyMeButton);
    await this.notifyMeEmailInput.click();
    await this.notifyMeEmailInput.fill(email);
    await this.click(this.notifyMeSubmitButton);

    await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  }

  private async clickPdpNotifyMeButton() {
    try {
      await this.click(this.pdpNotifyMeButton);
    } catch (err) {
      await this.pdpNotifyMeButton.scrollIntoViewIfNeeded();
      await this.page.mouse.wheel(0, -150);
      await this.pdpNotifyMeButton.click({ timeout: 8000 }).catch(async () => {
        await this.pdpNotifyMeButton.click({ force: true });
      });
    }
  }

  async submitNotifyMeFromPdp(email?: string) {
    await this.clickPdpNotifyMeButton();
    await expect(this.pdpNotifyDialog).toBeVisible({ timeout: 10000 });

    if (email) {
      await this.pdpNotifyEmailInput.fill(email);
    }

    await this.click(this.pdpNotifySubmitButton);
    await expect(this.pdpNotifyDialog).toBeHidden({ timeout: 10000 });
  }

  async goBackToListing() {
    await this.page.goBack();
    await expect(
      this.page.getByRole('heading', { name: 'Selected Filters' })
    ).toBeVisible({ timeout: 10000 });
  }

  /**
   * Clicks Reset and waits for the filter chips to actually clear before
   * moving on — resetting is followed by a re-render, so proceeding
   * immediately can land clicks on stale dropdown state.
   */
  async resetFilters() {
    await this.click(this.resetFiltersButton);

    // Scoped to the Selected Filters panel so the cart drawer's
    // "Remove ... from cart" button (which also matches /^Remove /i) can
    // never be counted here and block this assertion from settling.
    const selectedFiltersPanel = this.page
      .getByRole('heading', { name: 'Selected Filters' })
      .locator('..');

    await expect(
      selectedFiltersPanel.getByRole('button', { name: /^Remove /i })
    ).toHaveCount(0, { timeout: 10000 });

    await this.page.waitForTimeout(2000);
  }

  async expectResultsVisible() {
    await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });

    const priceCount = await this.resultPrices.count();
    expect(priceCount).toBeGreaterThan(0);
  }

  async clickProductByName(partialName: string) {
    await this.page
      .locator('a')
      .filter({ hasText: partialName })
      .click();
  }
}