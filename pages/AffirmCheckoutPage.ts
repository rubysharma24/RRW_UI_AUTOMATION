import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export interface GuestCheckoutInfo {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  addressLine: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

export default class AffirmCheckoutPage extends BasePage {
  readonly shopNowButton: Locator;
  readonly addToCartButton: Locator;
  readonly cartDrawer: Locator;
  readonly cartSubtotalText: Locator;
  readonly completeCheckoutButton: Locator;

  // Guest registration
  readonly guestHeading: Locator;
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly addressLineInput: Locator;
  readonly cityInput: Locator;
  readonly stateSelect: Locator;
  readonly zipInput: Locator;
  readonly phoneInput: Locator;
  readonly useShippingAddressCheckbox: Locator;
  readonly registrationContinueButton: Locator;

  // Review
  readonly orderSummaryHeading: Locator;
  readonly reviewOrderTotalText: Locator;
  readonly reviewContinueButton: Locator;

  // Payment
  readonly affirmToggle: Locator;
  readonly affirmPayButton: Locator;

  constructor(page: Page) {
    super(page);

    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.cartDrawer = page.locator('[class*="z-[1000]"]');
    this.cartSubtotalText = page.getByText(/^Subtotal \(\d+ items?\)\$/).first();

    this.completeCheckoutButton = this.cartDrawer
      .locator('button:visible', { hasText: 'Complete Checkout' })
      .last();

    this.guestHeading = page.getByRole('heading', { name: 'Continue as Guest' });
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' }).first();
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' }).first();
    this.companyInput = page
      .getByRole('textbox', { name: 'Company (optional)' })
      .first();
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

    this.orderSummaryHeading = page.getByRole('heading', {
      name: /Order Summary \(1 items?\)/,
    });
    this.reviewOrderTotalText = page.getByText(/Total\s*\$/);
    this.reviewContinueButton = page.getByRole('button', { name: 'Continue' }).first();

    this.affirmToggle = page.getByRole('button', { name: 'Affirm ▶' });
    this.affirmPayButton = page.getByRole('button', { name: 'Pay $' });
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
      await pageLoader.waitFor({ state: 'hidden', timeout: 15000 });
    }

    const updatingFiltersText = this.page.getByText('Updating filters', {
      exact: false,
    });
    if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
      await updatingFiltersText.waitFor({ state: 'hidden', timeout: 15000 });
    }
  }

  /** Listing se naam ke hisaab se product kholta hai (image + title = 2 links, isliye .first()). */
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

  async addProductToCart() {
    await this.click(this.addToCartButton);
    await expect(this.cartSubtotalText).toBeVisible({ timeout: 10000 });
  }

  async proceedToGuestCheckout() {
    await this.click(this.completeCheckoutButton);
    await this.page.waitForURL(/checkout\/registration/, {
      timeout: 15000,
      waitUntil: 'domcontentloaded',
    });
    await expect(this.guestHeading).toBeVisible({ timeout: 10000 });
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
    if (info.company) {
      await this.companyInput.fill(info.company);
    }
    await this.addressLineInput.fill(info.addressLine);
    await this.cityInput.fill(info.city);

    await this.clickStateSelect();
    await this.page.getByTitle(info.state, { exact: true }).click();

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
    await expect(this.orderSummaryHeading).toBeVisible({ timeout: 10000 });
    await expect(this.reviewOrderTotalText).toBeVisible({ timeout: 10000 });
    await this.click(this.reviewContinueButton);

    await expect(this.page.getByText(/Tax\s*\$/)).toBeVisible({ timeout: 10000 });
    await expect(this.orderSummaryHeading).toBeVisible({ timeout: 10000 });
  }

  /** Affirm option expand karta hai aur verify karta hai ki Pay button dikh raha hai (click nahi karta). */
  async selectAffirmPayment() {
    await expect(async () => {
      if (await this.affirmToggle.isVisible({ timeout: 2000 }).catch(() => false)) {
        await this.affirmToggle.click();
      }
      await expect(this.affirmPayButton).toBeVisible({ timeout: 5000 });
    }).toPass({ timeout: 30000 });
  }
}