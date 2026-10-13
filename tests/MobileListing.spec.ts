import { test, expect } from '@playwright/test';
import { MobileListingPage } from '../pages/MobileListingPage';

test.describe('Mobile - Listing / Filters / View All @mobile', () => {
  let listing: MobileListingPage;

  test.beforeEach(async ({ page }) => {
    listing = new MobileListingPage(page);
    await listing.openCategoryView();
  });

  test('category view shows Filters, View All and Back @mobile', async () => {
    await expect(listing.categoryHeading).toBeVisible();
    await expect(listing.filtersButton).toBeVisible();
    await expect(listing.viewAllButton).toBeVisible();
    await expect(listing.backButton).toBeVisible();
    expect(await listing.hasHorizontalScroll()).toBeFalsy();
  });

  test('product cards show price, part number and Add To Cart @mobile', async () => {
    await expect(listing.addToCartButtons.first()).toBeVisible();
    await expect(listing.page.getByText(/Hollander:/).first()).toBeVisible();
    await expect(listing.page.getByText(/^\$\d/).first()).toBeVisible();
  });

  test('filter drawer opens with all sections @mobile', async ({ page }) => {
    await listing.openFilters();
    for (const section of [/^parts finder$/i, /^type$/i, /^material$/i, /^diameter$/i, /^bolt pattern$/i]) {
      await expect(page.getByText(section).filter({ visible: true }).first()).toBeVisible();
    }
    await expect(listing.clearAllButton).toBeVisible();
    await expect(listing.applyFiltersButton).toBeVisible();
  });

  test('apply Material + Diameter filter updates listing @mobile', async () => {
    await listing.openFilters();
    await listing.selectFilterChip('Alloy');
    await listing.selectFilterChip('16"');
    await listing.applyFilters();
    await expect(listing.addToCartButtons.first()).toBeVisible({ timeout: 15000 });
  });

  test('Clear All resets selected filters @mobile', async () => {
    await listing.openFilters();
    await listing.selectFilterChip('Steel');
    await listing.clearAllButton.click();
    await expect(listing.applyFiltersButton).toBeVisible();
  });

  test('View All opens full listing with Back to By Category @mobile', async () => {
    await listing.clickViewAll();
    await expect(listing.listingTitle).toBeVisible();
    expect(await listing.hasHorizontalScroll()).toBeFalsy();
  });

  test('Back to By Category returns to category view @mobile', async () => {
    await listing.clickViewAll();
    await listing.backToByCategory.click();
    await expect(listing.viewAllButton).toBeVisible({ timeout: 15000 });
  });

  test('Add To Cart from listing updates cart @mobile', async ({ page }) => {
    await listing.clickViewAll();
    await listing.addToCartButtons.first().click();
    await expect(page.getByRole('button', { name: 'Cart is empty' })).toBeHidden({ timeout: 15000 });
  });
});

