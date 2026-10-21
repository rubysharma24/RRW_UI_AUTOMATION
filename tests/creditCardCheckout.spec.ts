import { test, expect } from '../fixtures/pageFixtures';
import { validUser } from '../test-data/login.data';
import { getOAuthToken, getOrderByNumber } from '../utils/orderApi';

test.describe('Checkout Flow - Credit Card Payment', () => {
  test.beforeEach(
    async ({ homePage, loginPage, cartPage }) => {
      await homePage.open();
      await homePage.goToLogin();
      await loginPage.login(validUser.email, validUser.password);

      
      await cartPage.forceResaleMode();

      await cartPage.clearCartIfNotEmpty();
    }
  );

  test(
    'should complete order using Credit Card payment',
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
      const quantity = 1; // fixed — this flow isn't testing quantity toggling

      // --------------------------------------------------
      // 1. Search product and open PDP
      // --------------------------------------------------
      await test.step('Search for product and open PDP', async () => {
        await categoriesPage.searchFor('Ford');
        await categoriesPage.page.waitForTimeout(3000);
        await categoriesPage.clickSearch();
        await categoriesPage.clickFirstProduct();

        await expect(productPage.page).toHaveURL(/.*\/products\/.*/i);
      });

      // --------------------------------------------------
      // 2. Capture PDP price and add to cart
      // --------------------------------------------------
      await test.step('Verify PDP price and add to cart', async () => {
        const priceText = await productPage.getPriceText();
        unitPrice = Number(priceText.replace(/[$,]/g, '').trim());

        console.log('Unit price:', unitPrice);
        expect(unitPrice).toBeGreaterThan(0);

        // Shows up in the Playwright HTML report under Annotations, unlike
        // console.log which is tucked away in the stdout tab.
        test.info().annotations.push({
          type: 'Unit Price',
          description: `$${unitPrice}`,
        });

        await productPage.addToCart();
      });

      // --------------------------------------------------
      // 3. Proceed to checkout
      // --------------------------------------------------
      await test.step('Proceed to checkout', async () => {
        await cartPage.clickCompleteCheckout();
        await cartPage.page.waitForTimeout(2000);
        await cartPage.dismissRebillPOModal();
      });

      // --------------------------------------------------
      // 4. Complete address (selects a saved address)
      // --------------------------------------------------
      await test.step('Complete shipping address', async () => {
        await addressPage.completeAddress();

        // Phone is a required field on the address step. If the saved address
        // has no phone, the browser blocks "Continue" ("Please fill out this
        // field") and we never reach the review page — so fill it and retry.
        const phone = addressPage.page.getByPlaceholder('Phone number');
        if ((await phone.isVisible()) && !(await phone.inputValue())) {
          await phone.fill('9876543210');
          await addressPage.page.getByRole('button', { name: 'Continue' }).click();
        }
      });

      // --------------------------------------------------
      // 5. Reach Review page and select shipping
      // --------------------------------------------------
      await test.step('Reach checkout review page', async () => {
        await expect(checkoutReviewPage.page).toHaveURL(/.*checkout\/review.*/i, {
          timeout: 15000,
        });
      });

      let expectedTotal = 0;
      let expectedSubtotal = 0;

      await test.step('Select shipping and verify totals', async () => {
        const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
        console.log('Selected shipping option:', shippingLabel);
        test.info().annotations.push({
          type: 'Shipping Option',
          description: shippingLabel,
        });

        await checkoutReviewPage.page.waitForTimeout(3000);

        const { subtotal, total } = await checkoutReviewPage.waitForTotalsToSettle(
          unitPrice,
          quantity
        );

        expectedSubtotal = Number((unitPrice * quantity).toFixed(2));
        expectedTotal = total;

        console.log('--------------------------------');
        console.log('Unit price:', unitPrice);
        console.log('Quantity:', quantity);
        console.log('Subtotal:', subtotal);
        console.log('Total:', total);
        console.log('--------------------------------');

        test.info().annotations.push(
          { type: 'Quantity', description: String(quantity) },
          { type: 'Subtotal', description: `$${subtotal}` },
          { type: 'Total', description: `$${total}` }
        );

        // Sanity check: subtotal on the review page should match what we
        // expect from the PDP price × quantity — catches a pricing
        // mismatch here rather than only at the very end via the API.
        expect(subtotal).toBeCloseTo(expectedSubtotal, 2);
      });

      // --------------------------------------------------
      // 6. Continue to Payment step
      // --------------------------------------------------
      await test.step('Proceed to Payment step', async () => {
        await checkoutReviewPage.clickSecondContinue();
        await checkoutReviewPage.page.waitForTimeout(1500);
      });

      // --------------------------------------------------
      // 7. Pay with Credit Card
      // --------------------------------------------------
      await test.step('Pay with Credit Card', async () => {
        await checkoutReviewPage.selectCreditCardPaymentMethod();
        await checkoutReviewPage.page.waitForTimeout(1000);

        await checkoutReviewPage.fillCreditCardDetails({
          cardNumber: '4111111111111111',
          expiryMonth: 'December',
          cardHolderName: 'ruby',
          cvv: '123',
        });

        await checkoutReviewPage.clickPayButton();
        await checkoutReviewPage.page.waitForTimeout(1500);

        // Optional — only clicks NO if a verification iframe actually shows up
        await checkoutReviewPage.declinePaymentVerificationIfPresent();
      });

      // --------------------------------------------------
      // 8. Verify order confirmation page — Order Number + Email
      // --------------------------------------------------
      let orderNumber = '';

      await test.step('Verify order confirmation page is shown', async () => {
        await orderConfirmationPage.expectOrderPlaced();

        orderNumber = orderConfirmationPage.getOrderNumberFromUrl();
        console.log('Order Number:', orderNumber);
        expect(orderNumber.length).toBeGreaterThan(0);

        test.info().annotations.push({
          type: 'Order Number',
          description: orderNumber,
        });

        await orderConfirmationPage.expectCustomerEmailVisible(validUser.apiemail);
      });

      // --------------------------------------------------
      // 9. Verify order via Storefront API
      // --------------------------------------------------
      await test.step('Verify order totals via Storefront API', async () => {
        const accessToken = await getOAuthToken(
          request,
          validUser.apiemail,
          validUser.apipassword
        );

        const order = await getOrderByNumber(request, orderNumber, accessToken);

        console.log('API order number:', order.number);
        console.log('API email:', order.email);
        console.log('API total:', order.total);

        test.info().annotations.push(
          { type: 'API Order Number', description: order.number },
          { type: 'API Email', description: order.email },
          { type: 'API Total', description: `$${order.total}` }
        );

        expect(order.number).toBe(orderNumber);
        expect(order.email.toLowerCase()).toBe(validUser.apiemail.toLowerCase());
        expect(Number(order.total)).toBeCloseTo(expectedTotal, 2);
      });
    }
  );
});