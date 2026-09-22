import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

/**
 * Handles the "vehicle fitment" search widget — the Make / Model / Year /
 * Category cascading selects (Ant Design dropdowns) on the categories page.
 *
 * The "Shop As" modal (Resale/Wholesale) shows up automatically right after
 * login — there's no separate "open finder" trigger button. What we used to
 * chase as an "openFinderButton" (matching /Resale Orders/i) was actually
 * this same modal's "Resale" option all along — its accessible name is the
 * concatenation of its heading ("Resale") and paragraph ("Orders of: (1-14)"),
 * i.e. "Resale Orders of: (1-14)". Selecting it is what lands you on the
 * categories page with these Make/Model/Year selects — confirmed from a real
 * codegen recording. selectShopMode() below replaces the old openFinderButton
 * concept entirely.
 */
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

    // Ant Design selects render as divs with this search input class, not
    // native <select> — .first()/.nth() distinguish Make vs Model vs Year
    // since they share the same structure. Fragile by position; if the
    // widget's DOM order ever changes, these break silently (wrong dropdown
    // opens). Prefer scoping by a label/placeholder if one exists — check
    // DevTools for a more specific anchor (e.g. aria-label) before relying
    // on this long-term.
    this.makeSelect = page.locator('.ant-select-selection-search').first();
    this.modelSelect = page
      .locator('div')
      .filter({ hasText: /^Select Model$/ })
      .nth(2);
    this.yearSelect = page
      .locator(
        'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
      );

    this.categoryButton = (categoryName: string) =>
      page.getByRole('button', { name: categoryName });

    this.hollanderCode = page.getByText(/^Hollander: 560-/);

    // Result cards' prices — used to assert results actually rendered,
    // not just that no error was thrown.
    this.resultPrices = page.getByText(/^\$/);

    // Real DOM (confirmed from an actual run) shows Model and Year as
    // separate removable chips under "Selected Filters" — Make ("Audi")
    // is NOT its own chip, it's implicit from the initial selection.
    //
    // A "Remove X" button IS the definition of an applied filter chip, so
    // checking for it directly is unambiguous — no parent-traversal scoping
    // needed at all (the earlier `.locator('..')` approach only walked one
    // DOM level up from the heading and missed the chip container, which
    // sits deeper/separately in the DOM).
    this.removeFilterButton = (value: string) =>
      page.getByRole('button', { name: `Remove ${value}` });

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

    // Same filter-button pattern as categoryButton — Material ("Alloy",
    // "Steel") and Diameter ("20\"") are just more of the same toggle-button
    // filter groups seen in the sidebar.
    this.materialButton = (materialName: string) =>
      page.getByRole('button', { name: materialName });
    this.diameterButton = (diameterLabel: string) =>
      page.getByRole('button', { name: diameterLabel });

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

    // Out-of-stock PDP shows a "Notify Me" button directly instead of "Add
    // To Cart" — there are two on the page. The FIRST one sits right below
    // the sticky header (z-[1000]) and gets its click intercepted by that
    // header on scroll-into-view (confirmed from a real failed run — the
    // button itself renders fine, Playwright's hit-test just lands under
    // the fixed header). The second one, further down near the main product
    // info section, isn't fighting the header for space — use that one via
    // .last(). Clicking it opens a dialog with the account's email
    // pre-filled; Submit inside that dialog is what actually registers the
    // request. Scoping the email/Submit locators to the dialog avoids
    // collisions with any other "Submit" button on the page.
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
    // The modal only shows on a genuinely first-time selection for this
    // browser session — if the mode is already set (e.g. persisted from an
    // earlier test run's cookie/localStorage), it never appears at all, so
    // a hard "must be visible" wait is wrong. Check first, and skip
    // everything below if there's nothing to dismiss.
    const isModalVisible = await this.shopAsModalHeading
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!isModalVisible) {
      // No modal means the browser is landing on the plain homepage, which
      // has its own separate "Browse By Vehicle" widget — not the
      // categories page sidebar our other locators target. Navigate there
      // directly so downstream selectMake()/selectModel()/etc. always land
      // on the right DOM regardless of whether the modal showed up.
      await this.page.goto('https://staging.roadreadywheels.com/t/categories');
      await this.waitForFiltersReady();
      return;
    }

    const option =
      mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
    await option.click();

    await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });

    // The app appends `just_sign_in=true` to the URL after this selection,
    // and that flag keeps re-triggering the same modal on later renders
    // (e.g. once filters are applied) even though a mode was already
    // chosen — a plain wait isn't enough. Reloading clears it.
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');

    // Defensive — in case the reload still shows it once more.
    await this.dismissShopAsModalIfPresent();

    // After the reload, the whole filter panel re-initializes: every
    // dropdown/button is disabled and an "Updating filters…" overlay sits
    // on top intercepting clicks. networkidle doesn't cover this app-level
    // loading state, so clicking immediately after it races the overlay.
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

  /**
   * Clicks a locator, and if it's blocked by the page-loader or a
   * Shop-As modal that popped up in the gap between our checks and the
   * actual click (a real race, confirmed from a failed run — checking
   * first isn't enough), clears whichever is blocking and retries once.
   */
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

    // Modal shows up right after Make is picked — dismiss it here instead
    // of blindly waiting, since it doesn't reliably appear within a fixed
    // window.
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

  /**
   * Verifies each given value has its own "Remove <value>" chip under
   * "Selected Filters" — works for any number of filters (Model, Year,
   * Category, Material, Diameter, ...), since a chip's "Remove" button is
   * the unambiguous signal that a filter is actually applied.
   */
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

  /**
   * Navigates straight to a filtered results URL — mirrors the codegen
   * recording, which reloaded the filtered listing via the address bar
   * (e.g. after opening a product from it) instead of re-picking every
   * dropdown from scratch.
   */
  async goToFilteredCategory(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    await this.page.goto(
      `https://staging.roadreadywheels.com/t/categories?${query}`
    );
  }

  /**
   * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
   * Fills and submits the email capture, then confirms the modal actually
   * closed rather than assuming a specific success toast (whose exact copy
   * we haven't confirmed yet).
   */
  async submitNotifyMe(email: string) {
    await this.click(this.notifyMeButton);
    await this.notifyMeEmailInput.click();
    await this.notifyMeEmailInput.fill(email);
    await this.click(this.notifyMeSubmitButton);

    await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  }

  /**
   * Clicks the PDP "Notify Me" button, with a fallback for the sticky
   * header (z-[1000]) still overlapping it on some viewports even after
   * switching to the lower button. If the plain click is intercepted,
   * nudge the scroll position up a bit (clears the button from directly
   * under the fixed header) and retry once before forcing.
   */
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

  /**
   * PDP "Notify Me" for an out-of-stock item — the button itself opens a
   * dialog with the account email pre-filled; Submit inside that dialog is
   * what registers the request. The dialog closing is the success signal —
   * more reliable than guessing at a specific confirmation string.
   */
  async submitNotifyMeFromPdp(email?: string) {
    await this.clickPdpNotifyMeButton();
    await expect(this.pdpNotifyDialog).toBeVisible({ timeout: 10000 });

    if (email) {
      await this.pdpNotifyEmailInput.fill(email);
    }

    await this.click(this.pdpNotifySubmitButton);
    await expect(this.pdpNotifyDialog).toBeHidden({ timeout: 10000 });
  }

  /**
   * Returns to the filtered listing from a PDP using the browser's Back
   * button (mirrors clicking the actual back arrow), rather than a raw
   * URL — waits for the "Selected Filters" panel to be back on screen so
   * the next step doesn't race the navigation.
   */
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

    // Wait for every "Remove X" chip to actually disappear before
    // continuing, instead of a blind timeout that might fire mid-re-render.
    await expect(
      this.page.getByRole('button', { name: /^Remove /i })
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