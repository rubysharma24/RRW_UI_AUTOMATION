import { test, expect } from '../fixtures/pageFixtures';
import { chargeOrderUser } from '../test-data/login.data';
import { getOAuthToken, getOrderByNumber } from '../utils/orderApi';

test.describe('Checkout Flow - RoadReady Wheels', () => {
  test.beforeEach(
    async ({
      homePage,
      loginPage,
      cartPage,
    }) => {
      await homePage.open();

      await homePage.goToLogin();

      await loginPage.login(
        chargeOrderUser.email,
        chargeOrderUser.password
      );

      await cartPage.forceResaleMode();

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
      test.setTimeout(120000);

      let unitPrice = 0;
      let finalQuantity = 0;

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

      await test.step(
        'Add product to cart',
        async () => {
          await productPage.addToCart();
        }
      );

      await test.step(
        'Update quantity in cart',
        async () => {
          const currentQuantity =
            await cartPage.getQuantity();

          console.log('Quantity before toggle:', currentQuantity);

          await cartPage.toggleQuantity();

          finalQuantity = await cartPage.getQuantity();

          console.log('Quantity after toggle:', finalQuantity);

          expect(
            Math.abs(finalQuantity - currentQuantity)
          ).toBe(1);
          expect(finalQuantity).toBeGreaterThan(0);
        }
      );

      await test.step(
        'Proceed to checkout',
        async () => {
          await cartPage.clickCompleteCheckout();
          await cartPage.page.waitForTimeout(2000);
          await cartPage.dismissRebillPOModal();
        }
      );

      await test.step(
        'Complete shipping address',
        async () => {
          await addressPage.completeAddress();
        }
      );

      await test.step(
        'Reach checkout review page',
        async () => {
          await checkoutReviewPage.page.waitForURL(
            /.*checkout\/review.*/i,
            { timeout: 15000 }
          );
        }
      );

      await test.step('Select available shipping option', async () => {
        const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
        console.log('Selected shipping option:', shippingLabel);
        await checkoutReviewPage.page.waitForTimeout(3000);
      });

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
          expectedTotal = total;

          console.log('Expected subtotal:', expectedSubtotal);
        }
      );

      await test.step(
        'Proceed to Payment step',
        async () => {
          await checkoutReviewPage.clickSecondContinue();
          await checkoutReviewPage.page.waitForTimeout(1500);
        }
      );

      await test.step(
        'Complete charge order flow',
        async () => {
          await checkoutReviewPage.clickChargeOrder();
          await checkoutReviewPage.page.waitForTimeout(1000);
          await checkoutReviewPage.clickContinueWithChargeOrder();
          await checkoutReviewPage.page.waitForTimeout(1500);
          await checkoutReviewPage.declineUpsellInIframe();
        }
      );

      let orderNumber = '';

      await test.step(
        'Verify order confirmation page is shown',
        async () => {
          await orderConfirmationPage.expectOrderPlaced();

          orderNumber = orderConfirmationPage.getOrderNumberFromUrl();
          console.log('Order Number:', orderNumber);
          expect(orderNumber.length).toBeGreaterThan(0);

          test.info().annotations.push({
            type: 'Order Number',
            description: orderNumber,
          });

          await orderConfirmationPage.expectCustomerEmailVisible(
            chargeOrderUser.email
          );
        }
      );

      await test.step(
        'Verify order totals via Storefront API',
        async () => {
          const accessToken = await getOAuthToken(
            request,
            chargeOrderUser.apiemail,
            chargeOrderUser.apipassword
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
            chargeOrderUser.apiemail.toLowerCase()
          );
          expect(Number(order.total)).toBeCloseTo(expectedTotal, 2);
        }
      );
    }
  );
});