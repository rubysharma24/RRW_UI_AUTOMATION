import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class ProductPage extends BasePage {
  readonly price: Locator;
  readonly quantitySelector: Locator;
  readonly addToCartButton: Locator;
  readonly productTitle: Locator;
  readonly skipHubcapsButton: Locator;
  readonly closeHubcapsDialogButton: Locator;
  readonly wholesaleToggleButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productTitle = page.getByRole('heading', { level: 1 });
    // Scoped to the PDP's big price styling (text-3xl font-bold), not just
    // any "$X.XX" text on the page — the cart drawer shows its own price
    // in a smaller span (text-sm font-semibold), and after addToCart() that
    // extra match was winning the old .first() and returning a stale value.
    this.price = page
      .locator('span.text-3xl.font-bold')
      .filter({ hasText: /^\$\d{1,3}(,\d{3})*\.\d{2}$/ })
      .first();
    this.quantitySelector = page.getByRole('combobox').first();
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.skipHubcapsButton = page.getByRole('button', { name: 'Skip and Proceed' });
    this.closeHubcapsDialogButton = page.getByRole('button', { name: 'Close hubcaps dialog' });
    this.wholesaleToggleButton = page.getByRole('button', { name: 'wholesale' });
  }

  async getPriceText(): Promise<string> {
    await this.price.waitFor({ state: 'visible', timeout: 15000 });
    return this.price.innerText();
  }

  async setQuantity(qty: string) {
    await this.quantitySelector.selectOption(qty);
  }

  async dismissHubcapUpsellIfPresent() {
    const skipVisible = await this.skipHubcapsButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (skipVisible) {
      await this.skipHubcapsButton.click();
      return;
    }

    const closeVisible = await this.closeHubcapsDialogButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (closeVisible) {
      await this.closeHubcapsDialogButton.click();
    }
  }

  async addToCart() {
    await this.click(this.addToCartButton);
    await this.page.waitForTimeout(1500);
    await this.dismissHubcapUpsellIfPresent();
    await this.page.waitForTimeout(1000);
  }

  async switchToWholesalePricing() {
    // TEMP DEBUG: confirming the click actually registers and what the
    // button's state looks like before/after — remove once the real
    // cause is confirmed.
    console.log('Wholesale button count:', await this.wholesaleToggleButton.count());
    console.log(
      'Wholesale button class BEFORE click:',
      await this.wholesaleToggleButton.getAttribute('class')
    );

    await this.click(this.wholesaleToggleButton);

    console.log(
      'Wholesale button class AFTER click:',
      await this.wholesaleToggleButton.getAttribute('class')
    );
  }

  async waitForPriceToChange(previousPriceText: string) {
    await expect(this.price).not.toHaveText(previousPriceText, { timeout: 15000 });
  }
}