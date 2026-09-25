import { Page, Locator, expect } from '@playwright/test';
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
 * Guest checkout via Affirm. Identical pre-payment flow to
 * PayPalCheckoutPage (homepage → PDP → Add To Cart → Complete Checkout →
 * guest registration → review → Payment page) - only the payment method
 * selection differs. Built from a raw recording that stops right after
 * filling the phone number field, so payWithAffirm() only covers that
 * far; whatever comes next (OTP code, plan selection, confirm) is
 * unknown and needs to be added once observed.
 */
export default class AffirmCheckoutPage extends BasePage {
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

  // Payment
  readonly affirmPayButton: Locator;

  // Confirmation
  readonly orderSummaryHeading: Locator;
  readonly paymentMethodText: Locator;

  constructor(page: Page) {
    super(page);

    // --- Same locators as PayPalCheckoutPage - identical site/components ---
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
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
    // Same caveat as PayPalCheckoutPage: a second "Continue" exists on
    // this page for an unconfirmed reason - inherited as-is.
    this.reviewContinueButton = page.getByRole('button', { name: 'Continue' }).nth(1);

    // --- Affirm-specific ---
    this.affirmPayButton = page.getByRole('button', { name: 'Pay $' });

    this.orderSummaryHeading = page.getByRole('heading', {
      name: 'Order Summary For Your',
    });
    this.paymentMethodText = page.getByText('Affirm');
  }

  /** Same as PayPalCheckoutPage.clickShopNow(). */
  async clickShopNow() {
    await expect(async () => {
      await this.click(this.shopNowButton);
      await this.page.waitForURL(/\/t\/categories/, {
        timeout: 5000,
        waitUntil: 'domcontentloaded',
      });
    }).toPass({ timeout: 15000 });
  }

  /** Same as PayPalCheckoutPage.waitForListingReady(). */
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

  /** Same as PayPalCheckoutPage.openFirstProduct(). */
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

  /** Same as PayPalCheckoutPage.addProductToCart(). */
  async addProductToCart() {
    await this.click(this.addToCartButton);
    await expect(this.cartSubtotalText).toBeVisible({ timeout: 10000 });
  }

  /** Same as PayPalCheckoutPage.proceedToGuestCheckout(). */
  async proceedToGuestCheckout() {
    await this.click(this.completeCheckoutButton);
    await this.page.waitForURL(/checkout\/registration/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
  }

  /** Same as PayPalCheckoutPage.clickStateSelect(). */
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

  /** Same as PayPalCheckoutPage.completeGuestRegistration(). */
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

  /** Same as PayPalCheckoutPage.reviewOrderAndContinue(). */
  async reviewOrderAndContinue() {
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.reviewContinueButton);

    await expect(this.page.getByText(/Tax\s*\$/)).toBeVisible({ timeout: 10000 });
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
  }

  /**
   * Selects Affirm and clicks its "Pay $" button. Per instruction, no
   * further validation is needed - reaching this click is sufficient to
   * confirm Affirm opens; nothing about what appears afterward is
   * checked.
   */
  async payWithAffirm() {
    await expect(async () => {
      const collapsedToggle = this.page.getByRole('button', { name: 'Affirm ▶' });
      if (await collapsedToggle.isVisible({ timeout: 2000 }).catch(() => false)) {
        await collapsedToggle.click();
      }
      await expect(this.affirmPayButton).toBeVisible({ timeout: 5000 });
    }).toPass({ timeout: 30000 });

    await this.click(this.affirmPayButton);
  }
}