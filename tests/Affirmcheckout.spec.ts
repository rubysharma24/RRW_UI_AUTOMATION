import { test } from '../fixtures/pageFixtures';
import { guestUser } from '../test-data/Guestcheckout.data.ts';

test('should proceed to Affirm payment for guest checkout', async ({ page, affirmCheckoutPage, cartPage }) => {
  // Payment provider widgets (Affirm included) can be slow to load - a
  // real run hit the default 60s test timeout while waiting on Affirm's
  // "Loading payment options..." state, so give this test more room.
  test.setTimeout(90000);

  await test.step('Go to home with a clean cart', async () => {
    await page.goto('https://staging.roadreadywheels.com/', {
      waitUntil: 'domcontentloaded',
    });

    // Same reasoning as the Amazon Pay/PayPal specs: a leftover item
    // from an earlier test run would throw off "1 item" assumptions
    // downstream (subtotal text, quantity, etc.) rather than failing
    // loudly.
    await cartPage.clearCartIfNotEmpty();
  });

  await test.step('Open a product', async () => {
    await affirmCheckoutPage.clickShopNow();
    await affirmCheckoutPage.openFirstProduct();
  });

  await test.step('Add product to cart', async () => {
    await affirmCheckoutPage.addProductToCart();
  });

  await test.step('Proceed to guest checkout', async () => {
    await affirmCheckoutPage.proceedToGuestCheckout();
  });

  await test.step('Complete guest registration', async () => {
    await affirmCheckoutPage.completeGuestRegistration(guestUser);
  });

  await test.step('Review order and continue to payment', async () => {
    await affirmCheckoutPage.reviewOrderAndContinue();
  });

  await test.step('Pay with Affirm', async () => {
    await affirmCheckoutPage.payWithAffirm();
  });

  // Flow stops here per instruction - just reaching Affirm's panel and
  // closing it via Cancel is the whole test, nothing after.
});