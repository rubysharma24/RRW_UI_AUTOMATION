import { test, Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export interface GuestCheckoutInfo {
  email: string;
  firstName: string;
  lastName: string;
  addressLine: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

export default class PayPalCheckoutPage extends BasePage {
  readonly shopNowButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly addToCartButton: Locator;
  readonly cartDrawer: Locator;
  readonly cartSubtotalText: Locator;
  readonly completeCheckoutButton: Locator;

  // Guest registration (/checkout/registration)
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressLineInput: Locator;
  readonly cityInput: Locator;
  readonly stateSelect: Locator;
  readonly zipInput: Locator;
  readonly phoneInput: Locator;
  readonly useShippingAddressCheckbox: Locator;
  readonly registrationContinueButton: Locator;

  // Review (/checkout/review)
  readonly reviewOrderTotalText: Locator;
  readonly reviewContinueButton: Locator;
  readonly payPalButton: Locator;

  // Confirmation
  readonly orderSummaryHeading: Locator;
  readonly paymentMethodText: Locator;

  constructor(page: Page) {
    super(page);

    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });

    // Header global search
    this.searchInput = page.getByRole('textbox', { name: 'Search for wheels' });
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true });

    this.addToCartButton = page.locator('#add-to-cart-button');
    this.cartDrawer = page.locator('[class*="z-[1000]"]');
    this.cartSubtotalText = page.getByText(/^Subtotal \(\d+ items?\)\$/).first();

    this.completeCheckoutButton = this.cartDrawer
      .locator('button:visible', { hasText: 'Complete Checkout' })
      .last();

    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' }).first();
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' }).first();
    this.addressLineInput = page
      .getByRole('textbox', { name: 'Address Line' })
      .first();
    this.cityInput = page.getByRole('textbox', { name: 'City' }).first();
    this.stateSelect = page.locator('.ant-select-selection-search').first();
    this.zipInput = page.getByRole('textbox', { name: 'ZIP Code' }).first();
    this.phoneInput = page.getByRole('textbox', { name: 'Phone number' }).first();
    this.useShippingAddressCheckbox = page.getByRole('checkbox', {
      name: 'Use Shipping Address',
    });
    this.registrationContinueButton = page.getByRole('button', { name: 'Continue' });

    this.reviewOrderTotalText = page.getByText(/Total\s*\$/);
    this.reviewContinueButton = page.getByRole('button', { name: 'Continue' }).nth(1);
    this.payPalButton = page.getByRole('button', { name: 'PayPal ▶' });

    this.orderSummaryHeading = page.getByRole('heading', {
      name: 'Order Summary For Your',
    });
    this.paymentMethodText = page.getByText('PayPal');
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

  /** Header search me keyword daal kar Search dabata hai. */
  async searchFor(term: string) {
    await this.waitForListingReady();
    await this.searchInput.fill(term);
    await expect(this.searchButton).toBeEnabled({ timeout: 5000 });
    await this.searchButton.click();
    await this.waitForListingReady();
  }

  /** Search result me make/category button (e.g. 'Bmw') par click karta hai. */
  async selectSearchResultGroup(name: string) {
    const groupButton = this.page.getByRole('button', { name }).first();
    await expect(groupButton).toBeVisible({ timeout: 15000 });
    await groupButton.click();
    await this.waitForListingReady();
  }

  /** Listing se product naam se kholta hai (image + title = 2 links, isliye .first()). */
  async openProductByName(partialName: string) {
    await this.waitForListingReady();

    await this.page
      .getByRole('link', { name: partialName })
      .first()
      .click();

    await this.page.waitForURL(/\/products\//, {
      timeout: 10000,
      waitUntil: 'domcontentloaded',
    });

    await expect(this.addToCartButton).toBeVisible({ timeout: 10000 });
  }

  /** Pehla Alloy Wheel product kholta hai (purane specs ke liye). */
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

  /** Extend "damage protection" popup ka decline button (main page ya iframe me), warna null. */
  private async findProtectionDeclineButton(): Promise<Locator | null> {
    const pattern = /I don.t want protection/i;

    const onPage = this.page.getByText(pattern).first();
    if (await onPage.isVisible().catch(() => false)) return onPage;

    for (const frame of this.page.frames()) {
      const inFrame = frame.getByText(pattern).first();
      if (await inFrame.isVisible().catch(() => false)) return inFrame;
    }
    return null;
  }

  async addProductToCart() {
    await this.click(this.addToCartButton);

    // Extend popup sirf kuch runs/regions (CI) me aata hai: aaye to decline karo,
    // na aaye to seedha cart subtotal ka wait karo.
    await expect(async () => {
      if (await this.cartSubtotalText.isVisible().catch(() => false)) return;

      const decline = await this.findProtectionDeclineButton();
      if (decline) {
        await decline.click({ timeout: 3000 }).catch(() => {});
      }

      await expect(this.cartSubtotalText).toBeVisible({ timeout: 2000 });
    }).toPass({ timeout: 20000 });
  }

  async proceedToGuestCheckout() {
    await this.click(this.completeCheckoutButton);
    await this.page.waitForURL(/checkout\/registration/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
  }

  private async clickStateSelect() {
    try {
      await this.click(this.stateSelect);
    } catch {
      await this.stateSelect.scrollIntoViewIfNeeded();
      await this.page.mouse.wheel(0, -150);
      await this.stateSelect.click({ timeout: 8000 }).catch(async () => {
        await this.stateSelect.click({ force: true });
      });
    }
  }

  async completeGuestRegistration(info: GuestCheckoutInfo) {
    const formAlreadyVisible = await this.emailInput
      .isVisible({ timeout: 3000 })
      .catch(() => false);
    if (!formAlreadyVisible) {
      await this.click(this.registrationContinueButton);
      await expect(this.emailInput).toBeVisible({ timeout: 10000 });
    }

    await this.emailInput.fill(info.email);
    await this.firstNameInput.fill(info.firstName);
    await this.lastNameInput.fill(info.lastName);
    await this.addressLineInput.fill(info.addressLine);
    await this.cityInput.fill(info.city);

    await this.clickStateSelect();
    await this.page.getByText(info.state, { exact: true }).first().click();

    await this.zipInput.fill(info.zip);
    await this.phoneInput.fill(info.phone);

    await this.useShippingAddressCheckbox.check();
    await expect(this.useShippingAddressCheckbox).toBeChecked();

    await this.click(this.registrationContinueButton);
    await this.page.waitForURL(/checkout\/review/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
  }

  async reviewOrderAndContinue() {
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.reviewContinueButton);

    await expect(this.page.getByText(/Tax\s*\$/)).toBeVisible({ timeout: 10000 });
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
  }

  private async findClickToContinueLink(): Promise<Locator | null> {
    const onPage = this.page.getByRole('link', { name: 'Click to Continue' });
    if (await onPage.isVisible().catch(() => false)) {
      return onPage;
    }
    for (const frame of this.page.frames()) {
      const inFrame = frame.getByRole('link', { name: 'Click to Continue' });
      if (await inFrame.isVisible().catch(() => false)) {
        return inFrame;
      }
    }
    return null;
  }

  /**
   * PayPal popup ka final confirm button. Purana layout: submit-button-initial /
   * "Complete Purchase". Naya layout (CI): sirf "Pay". Teeno me se jo pehle dikhe.
   */
  private async waitForPayPalConfirmButton(
    popup: Page,
    timeout: number
  ): Promise<Locator | null> {
    const confirmButton = popup
      .getByTestId('submit-button-initial')
      .or(popup.getByRole('button', { name: 'Complete Purchase' }))
      .or(popup.getByRole('button', { name: 'Pay', exact: true }))
      .first();

    const visible = await confirmButton
      .waitFor({ state: 'visible', timeout })
      .then(() => true)
      .catch(() => false);

    return visible ? confirmButton : null;
  }

  private async finishPayPalPayment(initialPopup: Page) {
    test.setTimeout(Math.max(test.info().timeout, 150000));

    const CONFIRMATION_URL = /order-confirmation-invoice\?orderNumber=/;
    const MAX_PAYPAL_ERRORS = 3;
    const CLOSED_GRACE_MS = 15000;
    const MAX_RELAUNCHES = 2;
    const log = (msg: string) =>
      console.log(`[PayPal ${new Date().toISOString().slice(11, 19)}] ${msg}`);
    const where = (p: Page) => {
      try {
        return new URL(p.url()).pathname;
      } catch {
        return p.url();
      }
    };

    let popup = initialPopup;
    let confirmClickedAt = 0;
    let closedSince = 0;
    let loggedClosed = false;
    let relaunches = 0;
    let lastTryAgainAt = 0;
    let paypalErrorCount = 0;
    let gaveUp = false;

    await expect(async () => {
      if (CONFIRMATION_URL.test(this.page.url())) return;

      if (!popup.isClosed()) {
        closedSince = 0;
        loggedClosed = false;

        const errorPage = popup.getByText(/Things don.t appear to be working/i);
        if (await errorPage.isVisible().catch(() => false)) {
          if (Date.now() - lastTryAgainAt > 8000) {
            paypalErrorCount++;
            log(`PayPal error page shown (#${paypalErrorCount}) at ${where(popup)}`);
            if (paypalErrorCount >= MAX_PAYPAL_ERRORS) {
              gaveUp = true;
              return; // leave toPass; the error is thrown below
            }
            const tryAgain = popup
              .getByRole('button', { name: /try again/i })
              .or(popup.getByRole('link', { name: /try again/i }));
            await tryAgain.first().click({ timeout: 5000 }).catch(() => {});
            lastTryAgainAt = Date.now();
          }
        } else if (Date.now() - confirmClickedAt > 20000) {
          log(`popup open at ${where(popup)}`);
          const target = await this.waitForPayPalConfirmButton(popup, 5000);
          if (target) {
            log('confirm button visible -> clicking once');
            await target.click({ timeout: 5000 }).catch(() => {});
            confirmClickedAt = Date.now();
          }
        }
      } else {
        if (!closedSince) closedSince = Date.now();
        if (!loggedClosed) {
          log('popup closed - waiting for the redirect to the confirmation page');
          loggedClosed = true;
        }

        if (Date.now() - closedSince > CLOSED_GRACE_MS && relaunches < MAX_RELAUNCHES) {
          const reLaunchLink = await this.findClickToContinueLink();
          if (reLaunchLink) {
            relaunches++;
            log(
              `popup closed with no redirect -> relaunch attempt ${relaunches}/${MAX_RELAUNCHES}`
            );
            const popupPromise = this.page
              .waitForEvent('popup', { timeout: 8000 })
              .catch(() => null);
            await reLaunchLink.click();
            popup = (await popupPromise) ?? popup;
            closedSince = 0;
            loggedClosed = false;
            confirmClickedAt = 0;
          }
        }
      }

      expect(this.page.url()).toMatch(CONFIRMATION_URL);
    }).toPass({ timeout: 120000, intervals: [1000] });

    if (gaveUp) {
      throw new Error(
        `PayPal's popup showed its own error page ("Things don't appear to be working at the moment") ` +
          `${MAX_PAYPAL_ERRORS} times, even after clicking "Try again". This is a PayPal-side/sandbox ` +
          `failure, not a locator problem - re-run later, or check the sandbox buyer account and PayPal ` +
          `sandbox status.`
      );
    }
  }

  async payWithPayPal(email: string, password: string) {
    // iframe me 2 buttons hote hain: "PayPal" aur "Pay Later".
    // data-funding-source="paypal" unique hai, isliye strict mode violation nahi aayega.
    const payPalLink = this.page
      .locator('iframe[name^="__zoid__paypal_buttons__"]')
      .contentFrame()
      .locator('[data-funding-source="paypal"]');

    await expect(async () => {
      const collapsedToggle = this.page.getByRole('button', { name: 'PayPal ▶' });
      if (await collapsedToggle.isVisible({ timeout: 2000 }).catch(() => false)) {
        await collapsedToggle.click();
      }
      await expect(payPalLink).toBeVisible({ timeout: 5000 });
    }).toPass({ timeout: 30000 });

    const popupPromise = this.page.waitForEvent('popup');
    await payPalLink.click();

    const payPalPopup = await popupPromise;

    await payPalPopup.getByRole('textbox', { name: 'Email or mobile number' }).fill(email);
    await payPalPopup.getByRole('button', { name: 'Next' }).click();

    await payPalPopup.getByRole('textbox', { name: 'Password' }).fill(password);
    await payPalPopup.getByRole('button', { name: 'Log In' }).click();

    await this.finishPayPalPayment(payPalPopup);

    await this.declinePaymentVerificationIfPresent();
  }

  async declinePaymentVerificationIfPresent() {
    const verificationFrame = this.page.locator('iframe[name^="I0_"]');
    const isPresent = await verificationFrame.isVisible({ timeout: 5000 }).catch(() => false);
    if (!isPresent) return;

    await verificationFrame.contentFrame()?.getByRole('button', { name: 'NO' }).click();
  }

  /** Reads the order number straight from the confirmation URL. */
  getOrderNumberFromUrl(): string {
    const url = new URL(this.page.url());
    return url.searchParams.get('orderNumber') ?? '';
  }

  async expectOrderConfirmed(email: string) {
    const orderNumber = this.getOrderNumberFromUrl();
    expect(orderNumber).toBeTruthy();

    test.info().annotations.push({ type: 'Order Number', description: orderNumber });

    await this.declinePaymentVerificationIfPresent();

    await expect(this.page.getByText(`Order Number: ${orderNumber}`)).toBeVisible({
      timeout: 10000,
    });
    await expect(this.page.getByText(`Customer Email: ${email}`)).toBeVisible({
      timeout: 10000,
    });
    await expect(this.page.getByText('Payment Method')).toBeVisible({ timeout: 10000 });
    await expect(this.paymentMethodText).toBeVisible({ timeout: 10000 });

    await expect(this.orderSummaryHeading).toBeVisible({ timeout: 10000 });
    await expect(this.page.getByText(/^Subtotal \(\d+\)\$/)).toBeVisible({
      timeout: 10000,
    });
    await expect(this.page.getByText(/^Tax\s*\$/)).toBeVisible({ timeout: 10000 });
    await expect(this.page.getByText(/^Total\$/)).toBeVisible({ timeout: 10000 });
  }
}