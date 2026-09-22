import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export default class AddressPage extends BasePage {
  readonly addressOptions: Locator;
  readonly useShippingAddressCheckbox: Locator;
  readonly salesTaxCheckbox: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);

    // Address options plain text hain, "TCS," ya "US User" se shuru hote hain
    this.addressOptions = page.locator('text=/TCS,|US User/');

    this.useShippingAddressCheckbox = page.getByRole('checkbox', {
      name: 'Use Shipping Address',
    });

    this.salesTaxCheckbox = page.getByRole('checkbox', {
      name: 'Apply sales tax to this order',
    });

    this.continueButton = page.getByRole('button', {
      name: 'Continue',
      exact: true,
    });
  }

  /**
   * Available address options me se ek random address select karta hai.
   */
  async selectRandomAddress() {
    await this.addressOptions.first().waitFor({ state: 'visible' });

    const count = await this.addressOptions.count();
    if (count === 0) {
      throw new Error('No shipping addresses found');
    }

    const randomIndex = Math.floor(Math.random() * count);
    console.log(`Selecting random address: ${randomIndex + 1} of ${count}`);

    const randomAddress = this.addressOptions.nth(randomIndex);
    const addressText = await randomAddress.textContent();
    console.log('Selected address:', addressText?.trim());

    await randomAddress.click();
  }

  async selectUseShippingAddress() {
    // Guard existence first — was assuming this checkbox is always there.
    const exists = await this.useShippingAddressCheckbox
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!exists) {
      console.log('Use Shipping Address checkbox not present — skipping');
      return;
    }

    if (!(await this.useShippingAddressCheckbox.isChecked())) {
      await this.useShippingAddressCheckbox.check();
    }
  }

  async selectSalesTax() {
    // "Apply sales tax to this order" only renders for some account types
    // (wholesale/business) — was unconditionally calling isChecked() on it,
    // which waits on a locator that can legitimately match nothing for a
    // regular account. Check existence first instead of assuming it's
    // always on the page.
    const exists = await this.salesTaxCheckbox
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!exists) {
      console.log('Sales tax checkbox not present — skipping (not a wholesale account)');
      return;
    }

    if (!(await this.salesTaxCheckbox.isChecked())) {
      await this.salesTaxCheckbox.check();
      // Checking this can trigger a tax recalculation / re-render — give
      // it a beat to settle before the next action touches the page,
      // rather than clicking Continue immediately mid-render.
      await this.page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    }
  }

  async clickContinue() {
    // Use BasePage's click() (waits for visible + enabled) instead of a
    // raw locator.click(), consistent with the rest of the framework —
    // and safer if Continue is briefly disabled while tax/address state
    // is still settling.
    await this.click(this.continueButton);
  }

  async completeAddress() {
    await this.selectRandomAddress();
    await this.selectUseShippingAddress();
    await this.selectSalesTax();
    await this.clickContinue();
  }
}