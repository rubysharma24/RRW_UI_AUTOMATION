import { test, expect } from '../fixtures/pageFixtures';
import { validUser } from '../test-data/login.data';

test.describe('Search Functionality - RoadReady Wheels', () => {
  test.beforeEach(async ({ homePage, loginPage }) => {
    await homePage.open();
    await homePage.goToLogin();
    await loginPage.login(validUser.email, validUser.password);
  });

  test('should close Shop As modal', async ({ categoriesPage }) => {
    await categoriesPage.closeShopAsModal();
  });

  test('should navigate to search results page after clicking search', async ({ categoriesPage }) => {
    await categoriesPage.closeShopAsModal();
    await categoriesPage.searchFor('560-64127');
    await categoriesPage.clickSearch();

    await expect(categoriesPage.page).toHaveURL(/.*560-64127.*/i);
  });

  test('should navigate to listing page and show only matching Hollander products', async ({ categoriesPage }) => {
    await categoriesPage.closeShopAsModal();
    await categoriesPage.searchFor('560-64127');
    await categoriesPage.page.waitForTimeout(5000);
    await categoriesPage.clickSearch();

    await expect(categoriesPage.page).toHaveURL(/.*560-64127.*/i);

    await categoriesPage.hollanderLabels.first().waitFor({ state: 'visible', timeout: 15000 });

    const hollanderTexts = await categoriesPage.getAllHollanderTexts();

    expect(hollanderTexts.length).toBeGreaterThan(0);

    for (const text of hollanderTexts) {
      expect(text).toContain('560-64127');
    }
  });
});