import { test } from '../fixtures/pageFixtures';
import { amazonSandboxUser } from '../test-data/amazonPay.data';

test('should checkout using Amazon Pay', async ({ page, amazonPayCheckoutPage, cartPage }) => {
  await test.step('Go to home with a clean cart', async () => {
    await page.goto('https://staging.roadreadywheels.com/', {
      waitUntil: 'domcontentloaded',
    });

    // payWithAmazonPayFromPDP() assumes the cart is empty so the PDP's
    // "Pay with Amazon Pay" button is the only match on the page (the
    // cart drawer only renders its own copy once it has an item). A
    // leftover item from an earlier test run breaks that assumption
    // silently - the click lands on the wrong button and the popup never
    // opens - so clear it explicitly rather than relying on isolation
    // between runs.
    await cartPage.clearCartIfNotEmpty();
  });

  await test.step('Open a product', async () => {
    await amazonPayCheckoutPage.clickShopNow();
    await amazonPayCheckoutPage.openFirstProduct();
  });

  await test.step('Pay with Amazon Pay directly from PDP', async () => {
    await amazonPayCheckoutPage.payWithAmazonPayFromPDP(
      amazonSandboxUser.email,
      amazonSandboxUser.password
    );
  });

  await test.step('Complete checkout', async () => {
    await amazonPayCheckoutPage.completeCheckout();
    await amazonPayCheckoutPage.expectOrderPlaced();
  });
});