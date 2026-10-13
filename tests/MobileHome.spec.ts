import { test, expect } from '@playwright/test';
import MobileHomePage from '../pages/MobileHomePage';

test.describe('Mobile - Home page @mobile', () => {
  let home: MobileHomePage;

  test.beforeEach(async ({ page }) => {
    home = new MobileHomePage(page);
    await home.open();
  });

  test('page fits the screen (no horizontal scroll) @mobile', async () => {
    expect(await home.hasHorizontalScroll()).toBe(false);
  });

  test('header and quick links are visible @mobile', async () => {
    await expect(home.logo).toBeVisible();
    await expect(home.searchInput).toBeVisible();
    await expect(home.cartButton).toBeVisible();
    await expect(home.menuButton).toBeVisible();

    await expect(home.byCategoryButton).toBeVisible();
    await expect(home.topBrandsButton).toBeVisible();
    await expect(home.featuredItemsButton).toBeVisible();
  });

  test('search bar and parts finder are visible @mobile', async () => {
    await expect(home.searchInput).toBeVisible();
    await expect(home.makeSelect).toBeVisible();
  });

  test('hamburger menu opens and shows Login @mobile', async () => {
    await home.openMenu();
    await expect(home.loginLink).toBeVisible();
  });

  test('Shop Now opens the categories page @mobile', async ({ page }) => {
    await home.clickShopNow();
    await expect(page).toHaveURL(/\/t\/categories/);
  });
});