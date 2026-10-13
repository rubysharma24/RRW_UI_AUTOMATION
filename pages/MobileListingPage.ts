import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export class MobileListingPage extends BasePage {
  // Category view (Alloy Wheels + Filters / View All / Back)
  readonly categoryHeading: Locator;
  readonly filtersButton: Locator;
  readonly viewAllButton: Locator;
  readonly backButton: Locator;
  readonly pageLoader: Locator;

  // Listing page (after View All)
  readonly listingTitle: Locator;
  readonly backToByCategory: Locator;
  readonly productCards: Locator;
  readonly addToCartButtons: Locator;

  // Filter drawer
  readonly partsFinderHeading: Locator;
  readonly makeSelect: Locator;
  readonly modelSelect: Locator;
  readonly yearSelect: Locator;
  readonly clearAllButton: Locator;
  readonly applyFiltersButton: Locator;

  constructor(page: Page) {
    super(page);
    // By Category page par 6 sections hain, isliye pehla section use karte hain
    this.categoryHeading = page.getByRole('heading', { name: 'Alloy Wheels', level: 5 }).first();
    this.filtersButton = page.getByRole('button', { name: 'Filters' }).first();
    this.viewAllButton = page.getByRole('button', { name: 'View All' }).first();
    this.backButton = page.getByRole('button', { name: 'Back', exact: true }).first();
    this.pageLoader = page.locator('.page-loader');

    // View All listing page
    this.listingTitle = page.getByText('Alloy Wheels', { exact: true }).filter({ visible: true }).first();
    this.backToByCategory = page.getByRole('button', { name: 'Back to By Category' });
    this.addToCartButtons = page.getByRole('button', { name: /add to cart/i });
    this.productCards = page
      .locator('div')
      .filter({ has: this.addToCartButtons })
      .filter({ hasText: /Hollander:/ });

    // Filter drawer
    this.partsFinderHeading = page.getByText(/^parts finder$/i).filter({ visible: true }).first();
    this.makeSelect = page.getByRole('combobox').filter({ hasText: 'Make' }).first();
    this.modelSelect = page.getByRole('combobox').filter({ hasText: 'Model' }).first();
    this.yearSelect = page.getByRole('combobox').filter({ hasText: 'Year' }).first();
    this.clearAllButton = page.getByRole('button', { name: 'Clear All' });
    this.applyFiltersButton = page.getByRole('button', { name: 'Apply Filters' });
  }

  /** Home -> By Category -> category view */

  async waitForLoaderGone() {
  await expect(this.pageLoader).toBeHidden({ timeout: 30000 });
}

  async openCategoryView() {
  await this.page.goto('/');
  await this.page.getByRole('button', { name: 'By Category' }).click();
  await expect(this.page).toHaveURL(/\/t\/categories/, { timeout: 20000 });
  await this.waitForLoaderGone();
  await expect(this.filtersButton).toBeVisible({ timeout: 20000 });
}

  async openFilters() {
  await this.waitForLoaderGone();
  await expect(async () => {
    await this.filtersButton.click({ timeout: 5000 });
    await expect(this.applyFiltersButton).toBeVisible({ timeout: 5000 });
  }).toPass({ timeout: 20000 });
}

  /** Filter chips (Type / Material / Diameter / Bolt Pattern) are buttons */
  filterChip(label: string): Locator {
    return this.page.getByRole('button', { name: label, exact: true });
  }

  async selectFilterChip(label: string) {
    const chip = this.filterChip(label);
    await chip.scrollIntoViewIfNeeded();
    await chip.click();
  }

  async applyFilters() {
    await this.applyFiltersButton.click();
    await expect(this.applyFiltersButton).toBeHidden({ timeout: 15000 });
  }

  async clickViewAll() {
  await this.waitForLoaderGone();
  await expect(async () => {
    await this.viewAllButton.click({ timeout: 5000 });
    await expect(this.backToByCategory).toBeVisible({ timeout: 5000 });
  }).toPass({ timeout: 30000 });
  await this.waitForLoaderGone();
  await expect(this.addToCartButtons.first()).toBeVisible({ timeout: 15000 });
}

  async hasHorizontalScroll(): Promise<boolean> {
    return this.page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );
  }
}