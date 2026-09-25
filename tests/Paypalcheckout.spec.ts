import { test } from '../fixtures/pageFixtures';
import { guestUser, payPalSandboxUser } from '../test-data/Guestcheckout.data.ts';

test('should complete guest checkout using PayPal', async ({ page, paypalCheckoutPage }) => {
  await test.step('Go to home and open a product', async () => {
    await page.goto('https://staging.roadreadywheels.com/');
    await paypalCheckoutPage.clickShopNow();
    await paypalCheckoutPage.openFirstProduct();
  });

  await test.step('Add product to cart', async () => {
    await paypalCheckoutPage.addProductToCart();
  });

  await test.step('Proceed to guest checkout', async () => {
    await paypalCheckoutPage.proceedToGuestCheckout();
  });

  await test.step('Complete guest registration', async () => {
    await paypalCheckoutPage.completeGuestRegistration(guestUser);
  });

  await test.step('Review order and continue to payment', async () => {
    await paypalCheckoutPage.reviewOrderAndContinue();
  });

  await test.step('Pay with PayPal', async () => {
    await paypalCheckoutPage.payWithPayPal(
      payPalSandboxUser.email,
      payPalSandboxUser.password
    );
  });

  await test.step('Verify order confirmation', async () => {
    await paypalCheckoutPage.expectOrderConfirmed(guestUser.email);
  });
});