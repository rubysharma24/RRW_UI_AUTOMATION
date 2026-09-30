import { test, Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';


export default class AmazonPayCheckoutPage extends BasePage {
  readonly loginLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly resaleOrdersButton: Locator;
  readonly shopNowButton: Locator;
  readonly addToCartButton: Locator;
  readonly openCartButton: Locator;
  readonly cartSubtotalText: Locator;
  readonly cartDrawer: Locator;
  readonly payWithAmazonPayButtonInCart: Locator;
  readonly payWithAmazonPayButtonOnPDP: Locator;
  readonly applySalesTaxCheckbox: Locator;
  readonly continueToShippingButton: Locator;
  readonly continueToReviewButton: Locator;
  readonly placeOrderButton: Locator;
  readonly shippingAddressHeading: Locator;
  readonly orderTotalText: Locator;
  readonly paymentMethodAmazonPayText: Locator;
  readonly invoiceTotalText: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.emailInput = page.getByRole('textbox', { name: 'Enter email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

   
    this.resaleOrdersButton = page.getByRole('button', {
      name: /Resale Orders of/i,
    });

   
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });

    this.addToCartButton = page.locator('#add-to-cart-button');
    this.openCartButton = page.getByRole('button', { name: 'Open cart' });
    
    this.cartSubtotalText = page.getByText(/^Subtotal \(\d+ items?\)\$/).first();

    this.cartDrawer = page.locator('[class*="z-[1000]"]');
    
    this.payWithAmazonPayButtonInCart = this.cartDrawer
      .getByRole('button', { name: 'Pay with Amazon Pay' })
      .last();

    
    this.payWithAmazonPayButtonOnPDP = page
      .getByRole('button', { name: 'Pay with Amazon Pay' })
      .first();

    this.applySalesTaxCheckbox = page.getByRole('checkbox', {
      name: 'Apply sales tax to this order',
    });
    this.continueToShippingButton = page.getByRole('button', {
      name: 'Continue to shipping option',
    });
    this.continueToReviewButton = page.getByRole('button', {
      name: 'Continue to review order',
    });
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });

    this.shippingAddressHeading = page.getByRole('heading', {
      name: 'Shipping Address',
    });
    this.orderTotalText = page.getByText(/^Order Total\$/);
    this.paymentMethodAmazonPayText = page.getByText('Amazon pay');
    this.invoiceTotalText = page.getByText(/^\$\d/);
  }

  /** Direct login — same locators as the actual recorded flow. */
  async login(email: string, password: string) {
    await this.click(this.loginLink);

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.click(this.loginButton);

    
    await expect(this.loginLink).toBeHidden({ timeout: 10000 });
  }

  async selectResaleMode() {
    await this.click(this.resaleOrdersButton);
    await expect(this.resaleOrdersButton).toBeHidden({ timeout: 10000 });
  }

 
  async clickShopNow() {
    await expect(async () => {
      await this.click(this.shopNowButton);
      await this.page.waitForURL(/\/t\/categories/, {
        timeout: 5000,
        waitUntil: 'domcontentloaded',
      });
    }).toPass({ timeout: 15000 });
  }

  async openProductByName(productName: string) {
    await this.page.locator('a').filter({ hasText: productName }).click();

    await expect(
      this.page.getByRole('heading', { name: productName })
    ).toBeVisible({ timeout: 10000 });
  }

 
  private async waitForListingReady() {
    const pageLoader = this.page.locator('.page-loader');
    if (await pageLoader.isVisible({ timeout: 3000 }).catch(() => false)) {
      await pageLoader.waitFor({ state: 'hidden', timeout: 30000 });
    }

    const updatingFiltersText = this.page.getByText('Updating filters', {
      exact: false,
    });
    if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
      await updatingFiltersText.waitFor({ state: 'hidden', timeout: 30000 });
    }
  }

  async openFirstProduct(): Promise<string> {
    await this.waitForListingReady();

    const firstProductLink = this.page
      .locator('a')
      .filter({ hasText: /Alloy Wheel\s*\/\s*Rim/i })
      .first();

    const productName = (await firstProductLink.textContent())?.trim() ?? '';
    await firstProductLink.click();

    
    await this.page.waitForURL(/\/products\//, {
      timeout: 10000,
      waitUntil: 'domcontentloaded',
    });

    await expect(
      this.page.getByRole('heading', { name: productName, exact: false })
    ).toBeVisible({ timeout: 10000 });

    return productName;
  }

  
  async addProductToCart() {
    await this.click(this.addToCartButton);

    const cartAlreadyOpen = await this.cartSubtotalText
      .isVisible()
      .catch(() => false);
    if (!cartAlreadyOpen) {
      await this.click(this.openCartButton);
    }

    await expect(this.cartSubtotalText).toBeVisible({ timeout: 10000 });
  }

  /** Shared popup sign-in flow, used by both the cart and PDP checkout paths. */
  private async signInThroughAmazonPopup(
    button: Locator,
    email: string,
    password: string,
    closeCartDrawerFirst = false
  ) {
   
    if (closeCartDrawerFirst) {
     
      const closeCartButton = this.page.getByRole('button', { name: 'Close cart' }).last();
      if (await closeCartButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await closeCartButton.scrollIntoViewIfNeeded();
        await this.page.mouse.wheel(0, -150);
        await closeCartButton.click({ timeout: 8000 }).catch(async () => {
          await closeCartButton.click({ force: true });
        });
      }
    }

    let amazonPopup: Page | null = null;
    await expect(async () => {
      const popupPromise = this.page.waitForEvent('popup', { timeout: 8000 });

     
      await button.scrollIntoViewIfNeeded();
      await this.page.mouse.wheel(0, -150);
      await button.click({ timeout: 5000 }).catch(async () => {
        await button.click({ force: true });
      });

      amazonPopup = await popupPromise;
    }).toPass({ timeout: 20000 });

    await amazonPopup!.getByRole('textbox', { name: 'Email' }).fill(email);
    await amazonPopup!.getByRole('button', { name: 'Continue' }).click();

    await amazonPopup!.getByRole('textbox', { name: 'Password' }).fill(password);
    await amazonPopup!
      .getByRole('button', { name: 'Sign in using our secure' })
      .click();

    await amazonPopup!.waitForEvent('close', { timeout: 20000 });

    await this.page.waitForURL(/amazon_order\/address/, {
      timeout: 20000,
      waitUntil: 'domcontentloaded',
    });
  }

 
  async signInWithAmazonPay(email: string, password: string) {
    await this.signInThroughAmazonPopup(
      this.payWithAmazonPayButtonInCart,
      email,
      password
      
    );
  }

  
  async payWithAmazonPayFromPDP(email: string, password: string) {
    await this.signInThroughAmazonPopup(
      this.payWithAmazonPayButtonOnPDP,
      email,
      password,
      true // close the drawer first if it's unexpectedly open
    );
  }

  
  async applySalesTax() {
    const isPresent = await this.applySalesTaxCheckbox
      .isVisible()
      .catch(() => false);
    if (!isPresent) {
      return;
    }
    await this.applySalesTaxCheckbox.check();
    await expect(this.applySalesTaxCheckbox).toBeChecked();
  }

  async continueToShipping() {
    await expect(this.orderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.continueToShippingButton);

    await this.page.waitForURL(/amazon_order\/delivery/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
    await expect(this.shippingAddressHeading).toBeVisible({ timeout: 10000 });
  }

  async continueToReview() {
    await expect(this.orderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.continueToReviewButton);
  }

  async placeOrder() {
    await this.click(this.placeOrderButton);
    await this.page.waitForURL(/order-confirmation-invoice\?orderNumber=/, {
      timeout: 20000,
      waitUntil: 'domcontentloaded',
    });
  }

  
  async completeCheckout() {
    await this.applySalesTax();
    await this.continueToShipping();
    await this.continueToReview();
    await this.placeOrder();
  }

  async expectOrderConfirmed() {
    const url = new URL(this.page.url());
    const orderNumber = url.searchParams.get('orderNumber');
    expect(orderNumber).toBeTruthy();

    
    test.info().annotations.push({
      type: 'Order Number',
      description: orderNumber ?? 'unknown',
    });

    await expect(this.page.getByText(`Order Number: ${orderNumber}`)).toBeVisible({
      timeout: 10000,
    });

    await expect(this.paymentMethodAmazonPayText).toBeVisible({ timeout: 10000 });

    let finalTotal = 0;
    await expect(async () => {
      const totalText = await this.invoiceTotalText.first().textContent();
      finalTotal = Number(totalText?.replace(/[$,]/g, '').trim());
      expect(finalTotal).toBeGreaterThan(0);
    }).toPass({ timeout: 10000 });

    test.info().annotations.push({
      type: 'Order Total',
      description: `$${finalTotal}`,
    });
  }

  /** Alias for expectOrderConfirmed() - matches the naming used in the spec. */
  async expectOrderPlaced() {
    await this.expectOrderConfirmed();
  }
}