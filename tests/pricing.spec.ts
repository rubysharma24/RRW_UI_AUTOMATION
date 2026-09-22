import { test, expect } from '../fixtures/pageFixtures';
import { validUser } from '../test-data/login.data';

test.describe('Pricing - Resale vs Wholesale', () => {
  test.beforeEach(
    async ({ homePage, loginPage, categoriesPage, cartPage }) => {
      await homePage.open();
      await homePage.goToLogin();
      await loginPage.login(validUser.email, validUser.password);
      await categoriesPage.closeShopAsModal();
      await cartPage.clearCartIfNotEmpty();
    }
  );

  test(
    'wholesale price should be lower than resale price for the same product @PricingFlow',
    async ({ categoriesPage, productPage, cartPage }) => {
      // --------------------------------------------------
      // 1. Search product and open PDP
      // --------------------------------------------------
      await test.step('Search for product and open PDP', async () => {
        await categoriesPage.searchFor('honda');
        await categoriesPage.page.waitForTimeout(3000);
        await categoriesPage.clickSearch();
        await categoriesPage.clickFirstProduct();
      });

      // --------------------------------------------------
      // 2. Capture resale price and add to cart
      // --------------------------------------------------
      let resalePrice = 0;
      let resalePriceText = '';

      await test.step('Capture resale price and add to cart', async () => {
        resalePriceText = await productPage.getPriceText();
        resalePrice = Number(resalePriceText.replace(/[$,]/g, '').trim());

        console.log('Resale price:', resalePrice);
        expect(resalePrice).toBeGreaterThan(0);

        await productPage.addToCart();
      });

      // --------------------------------------------------
      // 3. Close cart drawer
      // --------------------------------------------------
      // NOTE: check whether CartPage already has a method for this
      // (e.g. closeCartDrawer()) — if it does, use that instead of this
      // inline locator so the whole framework stays consistent.
      await test.step('Close cart drawer', async () => {
        await cartPage.page
          .getByRole('button', { name: 'Close cart' })
          .nth(1)
          .click();
      });

      // --------------------------------------------------
      // 4. Switch to wholesale pricing, capture price, add to cart
      // --------------------------------------------------
      let wholesalePrice = 0;

      await test.step('Switch to wholesale pricing and add to cart', async () => {
        await productPage.switchToWholesalePricing();

        // waits for the price text to actually change before reading it —
        // avoids reading the stale resale price due to the async re-render
        await productPage.waitForPriceToChange(resalePriceText);

        const wholesalePriceText = await productPage.getPriceText();
        wholesalePrice = Number(wholesalePriceText.replace(/[$,]/g, '').trim());

        console.log('Wholesale price:', wholesalePrice);
        expect(wholesalePrice).toBeGreaterThan(0);

        await productPage.addToCart();
      });

      // --------------------------------------------------
      // 5. Verify wholesale price is lower than resale price
      // --------------------------------------------------
      await test.step('Verify wholesale price is lower than resale price', async () => {
        console.log('--------------------------------');
        console.log('Resale price:', resalePrice);
        console.log('Wholesale price:', wholesalePrice);
        console.log('--------------------------------');

        expect(wholesalePrice).toBeLessThan(resalePrice);
      });
    }
  );
});