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

/**
 * Guest checkout via PayPal: homepage → PDP → Add To Cart → Complete
 * Checkout → guest registration (contact + address) → review → PayPal
 * popup login → order confirmation. Built the same way as
 * AmazonPayCheckoutPage: real assertions instead of the blind clicks a
 * raw recording captures, dynamic order number instead of a hardcoded
 * one, and generalized iframe locators instead of the exact
 * session-specific names a recording captures.
 */
export default class PayPalCheckoutPage extends BasePage {
  readonly shopNowButton: Locator;
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

    // Same homepage/PDP/cart-drawer locators as AmazonPayCheckoutPage -
    // this is the same site, same components.
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.cartDrawer = page.locator('[class*="z-[1000]"]');
    // This site consistently double-renders the cart drawer in the DOM
    // (confirmed repeatedly, including when empty) - unscoped, this
    // matches both copies and throws a strict-mode violation.
    this.cartSubtotalText = page.getByText(/^Subtotal \(\d+ items?\)\$/).first();

    // Two "Complete Checkout" buttons render on the page (same pattern as
    // "Pay with Amazon Pay" appearing on both the PDP and the cart
    // drawer) - scope to inside the drawer and require :visible, matching
    // the already-working locator in CartPage.completeCheckoutButton,
    // rather than an index that breaks if DOM order ever changes.
    //
    // .last() and NOT .first(): this site double-renders the entire cart
    // drawer (confirmed repeatedly, including empty-cart snapshots), and
    // both copies are position:fixed with the same z-[1000], so they
    // physically stack on screen - the later one in DOM order paints on
    // top and is what actually receives clicks. A real run confirmed
    // this exactly: .first() resolved to a real, visible button, but
    // every click attempt got intercepted by the other (later/topmost)
    // drawer instance sitting over it, regardless of which element
    // happened to be at that point on each retry.
    this.completeCheckoutButton = this.cartDrawer
      .locator('button:visible', { hasText: 'Complete Checkout' })
      .last();

    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    // NOTE: recording shows .first() for these fields, implying a second
    // matching field exists elsewhere on the page (maybe a billing
    // section) - confirm against the real DOM if this ever double-fills
    // the wrong field.
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' }).first();
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' }).first();
    this.addressLineInput = page
      .getByRole('textbox', { name: 'Address Line' })
      .first();
    this.cityInput = page.getByRole('textbox', { name: 'City' }).first();
    // Ant Design select (same widget pattern as VehicleFitmentPage's
    // Make/Model/Year). A real run showed the visible "Select State"
    // placeholder span is actually covered by Ant's own hidden
    // search-input (rendered inside a sibling ".ant-select-selection-search"
    // span for filtering), which intercepts every click aimed at the
    // placeholder - so target that search-input wrapper directly instead,
    // matching VehicleFitmentPage.makeSelect's already-working locator.
    // .first() picks the shipping section's select over the billing
    // section's identical one.
    this.stateSelect = page.locator('.ant-select-selection-search').first();
    this.zipInput = page.getByRole('textbox', { name: 'ZIP Code' }).first();
    this.phoneInput = page.getByRole('textbox', { name: 'Phone number' }).first();
    this.useShippingAddressCheckbox = page.getByRole('checkbox', {
      name: 'Use Shipping Address',
    });
    this.registrationContinueButton = page.getByRole('button', { name: 'Continue' });

    // No ^ anchor and optional whitespace: the review page renders
    // "Total" as its own text node (no space before $), but the payment
    // page (same locator, reused after navigating there) renders the
    // whole summary as one combined text blob ("...Tax $27.50 Total
    // $309.60") where Total sits mid-string with a space before $ -
    // confirmed from a real run. This matches both.
    this.reviewOrderTotalText = page.getByText(/Total\s*\$/);
    // NOTE: recording shows .nth(1) here - a second "Continue" exists on
    // this page and we don't yet know what it's for. Confirm against the
    // real DOM before trusting this long-term.
    this.reviewContinueButton = page.getByRole('button', { name: 'Continue' }).nth(1);
    this.payPalButton = page.getByRole('button', { name: 'PayPal ▶' });

    this.orderSummaryHeading = page.getByRole('heading', {
      name: 'Order Summary For Your',
    });
    this.paymentMethodText = page.getByText('PayPal');
  }

  /**
   * Same as AmazonPayCheckoutPage.clickShopNow() - same-tab route change.
   * waitForURL defaults to waitUntil: 'load', and this site never
   * reliably fires 'load' on any page (confirmed on the Amazon flow: the
   * URL had genuinely already changed yet waitForURL still timed out
   * waiting on 'load'). Passing 'domcontentloaded' explicitly is the
   * real fix; the retry wrapper stays as a cheap extra safety net.
   */
  async clickShopNow() {
    await expect(async () => {
      await this.click(this.shopNowButton);
      await this.page.waitForURL(/\/t\/categories/, {
        timeout: 5000,
        waitUntil: 'domcontentloaded',
      });
    }).toPass({ timeout: 15000 });
  }

  /**
   * Same as AmazonPayCheckoutPage.openFirstProduct() - now also confirms
   * actual navigation via URL, not just heading visibility. A real run
   * showed each card on the listing has its own level-3 heading with the
   * same product name, so a heading-only check can pass while still on
   * the listing page, before/without ever reaching the PDP.
   */
  /**
   * Waits out the same "Updating filters…" overlay and full-page
   * ".page-loader" spinner that VehicleFitmentPage.waitForFiltersReady()
   * already handles on this same /t/categories listing page. A real run
   * confirmed this: the product grid was empty and every filter control
   * was disabled under this exact overlay, and the "first product" link
   * grabbed before the wait got detached from the DOM mid-click as the
   * list refreshed underneath it.
   */
  private async waitForListingReady() {
    const pageLoader = this.page.locator('.page-loader');
    if (await pageLoader.isVisible({ timeout: 3000 }).catch(() => false)) {
      await pageLoader.waitFor({ state: 'hidden', timeout: 15000 });
    }

    const updatingFiltersText = this.page.getByText('Updating filters', {
      exact: false,
    });
    if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
      await updatingFiltersText.waitFor({ state: 'hidden', timeout: 15000 });
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

  /** Same defensive pattern as AmazonPayCheckoutPage.addProductToCart(). */
  async addProductToCart() {
    await this.click(this.addToCartButton);
    await expect(this.cartSubtotalText).toBeVisible({ timeout: 10000 });
  }

  /**
   * Clicks "Complete Checkout" and waits for the registration page. The
   * raw recording clicked this same button twice in a row before
   * navigating, which usually means the first click landed while the
   * drawer was still settling. A single click against the properly
   * scoped/visible locator plus an explicit navigation wait should be
   * enough - if this still flakes, that's a sign the double-click was
   * masking a real timing issue worth investigating properly rather than
   * clicking twice again.
   */
  async proceedToGuestCheckout() {
    await this.click(this.completeCheckoutButton);
    await this.page.waitForURL(/checkout\/registration/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
  }

  /**
   * Clicks the state select, with a fallback for the same sticky-header
   * interception pattern already handled in
   * VehicleFitmentPage.clickPdpNotifyMeButton() - a real run showed the
   * page's sticky header (position: sticky, z-[1000]) intercepting
   * clicks here, alternating with the Ant Select's own overlay, because
   * scrollIntoViewIfNeeded() can land the element right under the fixed
   * header. If the plain click is intercepted, nudge the scroll position
   * up a bit and retry once before forcing.
   */
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

  /**
   * Fills the guest contact + address form and continues.
   *
   * On a fresh browser session, checkout first shows a "Continue as
   * Guest" screen (guest / sign in / create account choice) before the
   * actual contact/address form appears - a real run confirmed this: the
   * page showed only a "Continue as Guest" heading and a single
   * "Continue" button, no form fields at all. The original recording
   * never hit this because its session already had guest mode selected.
   * Only click through if the form isn't already showing, so this still
   * works for a session that's already past that screen.
   */
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
    // NOTE: earlier version used .nth(1), copied from the original
    // recording's context. A real run confirmed only one "California"
    // (or any state) match exists in the DOM once just the shipping
    // dropdown is open - the billing section's dropdown isn't open at
    // the same time, so there's no second match to skip to.
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

  /**
   * On the review page: confirms the order total is showing, continues
   * past shipping, and confirms tax/total are showing again before
   * paying - real visibility assertions in place of the recording's
   * meaningless clicks on the same text.
   */
  async reviewOrderAndContinue() {
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.reviewContinueButton);

    // No ^ anchor: this lands on the Payment page, which renders the
    // whole order summary as one combined text blob rather than separate
    // rows - "Tax" sits mid-string there, confirmed from a real run.
    await expect(this.page.getByText(/Tax\s*\$/)).toBeVisible({ timeout: 10000 });
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
  }

  /**
   * Full PayPal sign-in flow: opens the embedded PayPal button, signs in
   * inside the OAuth popup, and confirms on PayPal's own review screen.
   * Waits for the redirect back to our own order-confirmation page rather
   * than hardcoding its URL (the raw recording had a literal order number
   * baked into a goto(), which only worked for that one past order).
   */
  /**
   * PayPal's own popup can get lost/closed after Log In (browser popup
   * handling varies) - when that happens, PayPal shows a "Don't see the
   * secure paypal browser?" recovery prompt on the MAIN page with a
   * "Click to Continue" link that re-launches the window. A real run hit
   * exactly this: the original popup reference went stale, and waiting
   * on an element inside it hung for the full test timeout instead of
   * failing with a clear error. Detect the prompt and click through it
   * if present, returning the freshly relaunched popup.
   */
  private async recoverPayPalPopupIfLost(currentPopup: Page): Promise<Page> {
    const reLaunchLink = this.page.getByRole('link', { name: 'Click to Continue' });
    const isLost = await reLaunchLink.isVisible({ timeout: 3000 }).catch(() => false);
    if (!isLost) return currentPopup;

    const newPopupPromise = this.page.waitForEvent('popup');
    await reLaunchLink.click();
    return await newPopupPromise;
  }

  async payWithPayPal(email: string, password: string) {
    const payPalLink = this.page
      .locator('iframe[name^="__zoid__paypal_buttons__"]')
      .contentFrame()
      .getByRole('link', { name: 'PayPal' });

    // Ensure the PayPal section's iframe widget has actually mounted.
    // Skipping the click when the button already read "PayPal ▼"
    // (already expanded, radio checked) turned out to be wrong on a
    // real run: the section was visually expanded but the iframe still
    // hadn't loaded, so there was nothing to click inside. Whether this
    // button toggles or just re-triggers a mount isn't confirmed either
    // way, so retry clicking (matching either arrow) until the iframe
    // link genuinely appears, rather than trying to guess its state.
    await expect(async () => {
      const payPalToggle = this.page.getByRole('button', {
        name: /^PayPal [▶▼]$/,
      });
      if (await payPalToggle.isVisible({ timeout: 1000 }).catch(() => false)) {
        await payPalToggle.click();
      }
      await expect(payPalLink).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 15000 });

    const popupPromise = this.page.waitForEvent('popup');
    await payPalLink.click();

    let payPalPopup = await popupPromise;

    await payPalPopup.getByRole('textbox', { name: 'Email or mobile number' }).fill(email);
    await payPalPopup.getByRole('button', { name: 'Next' }).click();

    await payPalPopup.getByRole('textbox', { name: 'Password' }).fill(password);
    await payPalPopup.getByRole('button', { name: 'Log In' }).click();

    payPalPopup = await this.recoverPayPalPopupIfLost(payPalPopup);

    await payPalPopup.getByTestId('submit-button-initial').click();

    await this.page.waitForURL(/order-confirmation-invoice\?orderNumber=/, {
      timeout: 40000,
      waitUntil: 'domcontentloaded',
    });

    await this.declinePaymentVerificationIfPresent();
  }

  /**
   * Some orders show an extra verification iframe ("NO"/"YES") after
   * landing on the confirmation page - only handle it if it actually
   * shows up. Iframe name has a session-specific numeric suffix
   * (recording: "I0_1790229885335"), matched on the stable "I0_" prefix.
   */
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

  /**
   * Confirms the confirmation page shows the right order number, the
   * guest's email, PayPal as the payment method, and a full order
   * summary with subtotal/tax/total - real assertions in place of the
   * recording's blind clicks on each of these text nodes.
   */
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