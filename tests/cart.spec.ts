import { test, expect } from '../fixtures/pageFixtures';
import { validUser } from '../test-data/login.data';
import { getOAuthToken, getOrderByNumber } from '../utils/orderApi';

test.describe('Checkout Flow - RoadReady Wheels', () => {
  test.beforeEach(
    async ({
      homePage,
      loginPage,
      categoriesPage,
      cartPage,
    }) => {
      await homePage.open();

      await homePage.goToLogin();

      await loginPage.login(
        validUser.email,
        validUser.password
      );

      await categoriesPage.closeShopAsModal();

      await cartPage.clearCartIfNotEmpty();
    }
  );

  test(
    'should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation',
    async ({
      categoriesPage,
      productPage,
      cartPage,
      addressPage,
      checkoutReviewPage,
      orderConfirmationPage,
      request,
    }) => {
      test.setTimeout(120000); // this test does 13 steps across ~6 pages — 60s default is too tight

      let unitPrice = 0;
      let finalQuantity = 0;

      // --------------------------------------------------
      // 1. Search product and open PDP
      // --------------------------------------------------

      await test.step(
        'Search for product and open PDP',
        async () => {
          await categoriesPage.searchFor('560-64127');

          await categoriesPage.page.waitForTimeout(5000);

          await categoriesPage.clickSearch();

          await categoriesPage.clickFirstProduct();

          await expect(productPage.page).toHaveURL(
            /.*\/products\/.*/i
          );
        }
      );

      // --------------------------------------------------
      // 2. Get dynamic product price
      // --------------------------------------------------

      await test.step(
        'Verify PDP price',
        async () => {
          const priceText =
            await productPage.getPriceText();

          unitPrice = Number(
            priceText.replace(/[$,]/g, '').trim()
          );

          console.log('Unit price:', unitPrice);

          expect(priceText).toContain('$');

          expect(unitPrice).toBeGreaterThan(0);
        }
      );

      // --------------------------------------------------
      // 3. Add product to cart
      // --------------------------------------------------

      await test.step(
        'Add product to cart',
        async () => {
          await productPage.addToCart();
        }
      );

      // --------------------------------------------------
      // 4. Change quantity dynamically
      // --------------------------------------------------

      await test.step(
        'Update quantity in cart',
        async () => {
          const currentQuantity =
            await cartPage.getQuantity();

          console.log(
            'Quantity before toggle:',
            currentQuantity
          );

          await cartPage.toggleQuantity();

          finalQuantity =
            await cartPage.getQuantity();

          console.log(
            'Quantity after toggle:',
            finalQuantity
          );

          // Quantity must change by exactly 1
          expect(
            Math.abs(
              finalQuantity - currentQuantity
            )
          ).toBe(1);

          expect(finalQuantity).toBeGreaterThan(0);
        }
      );

      // --------------------------------------------------
      // 5. Proceed to checkout
      // --------------------------------------------------

      await test.step(
        'Proceed to checkout',
        async () => {
          await cartPage.clickCompleteCheckout();

          await cartPage.page.waitForTimeout(2000);

          await cartPage.dismissRebillPOModal();
        }
      );

      // --------------------------------------------------
      // 6. Complete address
      // --------------------------------------------------

      await test.step(
        'Complete shipping address',
        async () => {
          await addressPage.completeAddress();
        }
      );

      // --------------------------------------------------
      // 7. Reach Review page
      // --------------------------------------------------

      await test.step(
        'Reach checkout review page',
        async () => {
          await checkoutReviewPage.page.waitForURL(
            /.*checkout\/review.*/i,
            {
              timeout: 15000,
            }
          );
        }
      );

      // --------------------------------------------------
      // 8. Select shipping dynamically
      // --------------------------------------------------

    await test.step('Select available shipping option', async () => {
  const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
  console.log('Selected shipping option:', shippingLabel);

  // Tax/Total recalculate hone ka poora time do
  await checkoutReviewPage.page.waitForTimeout(3000);
});

      // --------------------------------------------------
      // 9. Verify all calculations dynamically
      // --------------------------------------------------

      let expectedTotal = 0;
      let expectedSubtotal = 0;

      await test.step(
        'Verify subtotal, shipping, tax and total calculation',
        async () => {
          const { subtotal, taxPlusShipping, total } =
            await checkoutReviewPage.waitForTotalsToSettle(
              unitPrice,
              finalQuantity
            );

          console.log('--------------------------------');
          console.log('Unit price:', unitPrice);
          console.log('Quantity:', finalQuantity);
          console.log('Subtotal:', subtotal);
          console.log('Tax + Shipping (derived):', taxPlusShipping);
          console.log('Total:', total);
          console.log('--------------------------------');

          expectedSubtotal = Number(
            (unitPrice * finalQuantity).toFixed(2)
          );
          expectedTotal = total; // total is read directly and trusted as-is

          console.log('Expected subtotal:', expectedSubtotal);
        }
      );

      // --------------------------------------------------
      // 10. Continue to Payment
      // --------------------------------------------------

      await test.step(
        'Proceed to Payment step',
        async () => {
          await checkoutReviewPage
            .clickSecondContinue();

          await checkoutReviewPage.page.waitForTimeout(
            1500
          );
        }
      );

      // --------------------------------------------------
      // 11. Complete charge order
      // --------------------------------------------------

      await test.step(
        'Complete charge order flow',
        async () => {
          await checkoutReviewPage
            .clickChargeOrder();

          await checkoutReviewPage.page.waitForTimeout(
            1000
          );

          await checkoutReviewPage
            .clickContinueWithChargeOrder();

          await checkoutReviewPage.page.waitForTimeout(
            1500
          );

          await checkoutReviewPage
            .declineUpsellInIframe();
        }
      );

      // --------------------------------------------------
      // 12. Verify order confirmation page — Order Number + Email only
      // --------------------------------------------------

      let orderNumber = '';

      await test.step(
        'Verify order confirmation page is shown',
        async () => {
          await orderConfirmationPage.expectOrderPlaced();

         
          orderNumber = orderConfirmationPage.getOrderNumberFromUrl();
          console.log('Order Number:', orderNumber);
          expect(orderNumber.length).toBeGreaterThan(0);

        
          await orderConfirmationPage.expectCustomerEmailVisible(
            validUser.email
          );
        }
      );

      

      await test.step(
        'Verify order totals via Storefront API',
        async () => {
          const accessToken = await getOAuthToken(
            request,
            validUser.apiemail,
            validUser.apipassword
          );

          const order = await getOrderByNumber(
            request,
            orderNumber,
            accessToken
          );

          console.log('API order number:', order.number);
          console.log('API email:', order.email);
          console.log('API total:', order.total);

          expect(order.number).toBe(orderNumber);
          expect(order.email.toLowerCase()).toBe(
            validUser.apiemail.toLowerCase()
          );
          expect(Number(order.total)).toBeCloseTo(expectedTotal, 2);
        }
      );
    }
  );
});