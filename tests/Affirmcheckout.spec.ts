import { test } from '../fixtures/pageFixtures';
import { guestUser } from '../test-data/Guestcheckout.data';

test('should reach Affirm payment option for guest checkout', async ({
  page,
  affirmCheckoutPage,
  cartPage,
}) => {
 
  test.setTimeout(90000);

  await test.step('Go to home with a clean cart', async () => {
    await page.goto('https://staging.roadreadywheels.com/', {
      waitUntil: 'domcontentloaded',
    });
  
    await cartPage.clearCartIfNotEmpty();
  });

  await test.step('Shop Now and open Toyota Corolla wheel', async () => {
    await affirmCheckoutPage.clickShopNow();
    await affirmCheckoutPage.openProductByName('2019-2025 Toyota Corolla 18x8');
  });

  await test.step('Add product to cart', async () => {
    await affirmCheckoutPage.addProductToCart();
  });

  await test.step('Complete Checkout and continue as guest', async () => {
    await affirmCheckoutPage.proceedToGuestCheckout();
  });

  await test.step('Fill guest registration details', async () => {
    await affirmCheckoutPage.completeGuestRegistration(guestUser);
  });

  await test.step('Review order and continue to payment', async () => {
    await affirmCheckoutPage.reviewOrderAndContinue();
  });

  await test.step('Select Affirm payment option', async () => {
    await affirmCheckoutPage.selectAffirmPayment();
  });


});