import { test } from '../fixtures/pageFixtures';
import { amazonSandboxUser } from '../test-data/amazonPay.data';

test('should checkout using Amazon Pay', async ({ page, amazonPayCheckoutPage, cartPage }) => {
  await test.step('Go to home with a clean cart', async () => {
    await page.goto('https://staging.roadreadywheels.com/', {
      waitUntil: 'domcontentloaded',
    });

    
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