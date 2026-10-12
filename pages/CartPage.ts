import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CartPage extends BasePage {
  readonly cartDrawer: Locator;
  readonly cartHeading: Locator;
  readonly openCartButton: Locator;
  readonly removeItemButtons: Locator;
  readonly quantityIncreaseButton: Locator;
  readonly quantityDecreaseButton: Locator;
  readonly quantityValue: Locator;
  readonly completeCheckoutButton: Locator;
  readonly dontHavePOButton: Locator;
  readonly switchToResaleButton: Locator;
  readonly completeOrderButton: Locator;
  readonly closeRebillModalButton: Locator;
  readonly cartSubtotalRow: Locator;
  readonly cartTaxRow: Locator;
  readonly cartTotalRow: Locator;
  readonly resaleToggleButton: Locator;
  readonly wholesaleToggleButton: Locator;
  readonly shopAsHeading: Locator;
  readonly shopAsResaleOption: Locator;

  constructor(page: Page) {
    super(page);

    this.openCartButton = page.getByRole('button', { name: 'Open cart' });

    this.cartHeading = page.getByRole('heading', { name: /Your Cart/ }).last();
    this.cartDrawer = this.cartHeading.locator('..').locator('..');

    this.resaleToggleButton = page.getByRole('button', { name: 'Resale', exact: true });
    this.wholesaleToggleButton = page.getByRole('button', { name: 'Wholesale', exact: true });

    
    this.shopAsHeading = page.getByRole('heading', { name: 'Shop As' });
    this.shopAsResaleOption = page.getByRole('button', { name: /Resale Orders of/i });

    this.removeItemButtons = this.cartDrawer.getByRole('button', {
      name: /Remove .* from cart/i,
    });

    this.quantityDecreaseButton = this.cartDrawer
      .getByRole('button', { name: /Decrease quantity/i })
      .last();

    this.quantityIncreaseButton = this.cartDrawer
      .getByRole('button', { name: /Increase quantity/i })
      .last();

    this.quantityValue = this.quantityDecreaseButton
      .locator('..')
      .getByText(/^\d+$/)
      .first();

    this.completeCheckoutButton = this.cartDrawer
      .locator('button:visible', { hasText: 'Complete Checkout' })
      .first();

    this.completeOrderButton = page.getByRole('button', { name: 'Complete Order' });
    this.dontHavePOButton = page.getByRole('button', { name: "Don't Have PO" });
    // The "Oops! You need at least 15 units..." modal's own button -
    // different from the header's resaleToggleButton.
    this.switchToResaleButton = page.getByRole('button', { name: 'Switch to resale' });
    this.closeRebillModalButton = page.getByRole('button', { name: 'Close modal' });

    // Cart drawer ke andar totals (Subtotal, Tax, Total)
    this.cartSubtotalRow = this.cartDrawer
      .getByText(/^Subtotal \(\d+ items?\)$/)
      .first()
      .locator('..');

    this.cartTaxRow = this.cartDrawer
      .getByText(/^Tax$/)
      .first()
      .locator('..');

    this.cartTotalRow = this.cartDrawer
      .getByText(/^Total$/)
      .first()
      .locator('..');
  }

  
  async forceResaleMode() {
    
    await this.chooseResaleInShopAsModalIfOpen(8000);

   
    await this.page.waitForLoadState('domcontentloaded');

    const categoriesUrl = new URL('/t/categories', this.page.url()).toString();

    await expect(async () => {
      try {
        await this.page.goto(categoriesUrl, { waitUntil: 'domcontentloaded' });
      } catch (e) {
        // Another navigation interrupted goto (page is already moving to
        // the target). Anything else is a real error.
        if (!/NS_BINDING_ABORTED/.test(String(e))) throw e;
        await this.page.waitForLoadState('domcontentloaded');
      }
      await expect(this.page).toHaveURL(/\/t\/categories/);
    }).toPass({ timeout: 20000 });

    for (const toggle of [this.wholesaleToggleButton, this.resaleToggleButton]) {
      // Safety net: if the modal re-appears, resolve it before clicking.
      await this.chooseResaleInShopAsModalIfOpen(1500);
      await this.click(toggle);
      await this.page.waitForLoadState('domcontentloaded');
    }

    await this.chooseResaleInShopAsModalIfOpen(1500);
  }

  
  private async appearsWithin(locator: Locator, timeout: number): Promise<boolean> {
    return locator
      .waitFor({ state: 'visible', timeout })
      .then(() => true)
      .catch(() => false);
  }

  private async chooseResaleInShopAsModalIfOpen(waitMs: number) {
    if (!(await this.appearsWithin(this.shopAsHeading, waitMs))) return;

    await this.shopAsResaleOption.click();
    await expect(this.shopAsHeading).toBeHidden({ timeout: 10000 });
  }

  async getQuantity(): Promise<number> {
    const text = await this.quantityValue.textContent();
    if (!text) {
      throw new Error('Quantity value was not found');
    }
    const quantity = Number(text.trim());
    if (Number.isNaN(quantity)) {
      throw new Error(`Invalid quantity value: "${text}"`);
    }
    return quantity;
  }

  async toggleQuantity() {
    const currentQty = await this.getQuantity();
    console.log('Current quantity:', currentQty);

    const button =
      currentQty > 1 ? this.quantityDecreaseButton : this.quantityIncreaseButton;
    const action = currentQty > 1 ? 'decrease' : 'increase';

    await expect(async () => {
      console.log(`Clicking ${action} quantity`);
      await button.click();
      await expect(this.quantityValue).not.toHaveText(String(currentQty), {
        timeout: 3000,
      });
    }).toPass({ timeout: 12000 });
  }

  async clickCompleteCheckout() {
    await this.completeCheckoutButton.click();
  }

  
  async dismissRebillPOModal() {
   
    const po = this.dontHavePOButton
      .waitFor({ state: 'visible', timeout: 8000 })
      .then(() => 'po' as const)
      .catch(() => null);
    const resale = this.switchToResaleButton
      .waitFor({ state: 'visible', timeout: 8000 })
      .then(() => 'resale' as const)
      .catch(() => null);

    const which = await Promise.race([po, resale]);

    if (which === 'po') {
      await this.dontHavePOButton.click();
    } else if (which === 'resale') {
      await this.switchToResaleButton.click();
    }
    // null: neither modal showed up - nothing to dismiss.
  }

  private extractAmount(text: string): number {
    const match = text.match(/\$?\s*([\d,]+\.\d{2})/);
    if (!match) {
      throw new Error(`Could not extract amount from: "${text}"`);
    }
    return Number(match[1].replace(/,/g, ''));
  }

  async getCartSubtotal(): Promise<number> {
    const text = await this.cartSubtotalRow.textContent();
    return this.extractAmount(text ?? '');
  }

  async getCartTax(): Promise<number> {
    const isVisible = await this.appearsWithin(this.cartTaxRow, 5000);
    if (!isVisible) {
      console.log('Tax row not present in cart — treating as $0.00');
      return 0;
    }
    const text = await this.cartTaxRow.textContent();
    return this.extractAmount(text ?? '');
  }

  async getCartTotal(): Promise<number> {
    const text = await this.cartTotalRow.textContent();
    return this.extractAmount(text ?? '');
  }

  async clearCartIfNotEmpty() {
    const hasItems = await this.openCartButton.isVisible().catch(() => false);
    if (!hasItems) return;

    await this.click(this.openCartButton);
    await this.page.waitForTimeout(500);

    for (let i = 0; i < 10; i++) {
      const count = await this.removeItemButtons.count();
      if (count === 0) break;

      const button = this.removeItemButtons.first();
      const isEnabled = await button.isEnabled().catch(() => false);
      if (!isEnabled) {
        await this.page.waitForTimeout(1000);
        continue;
      }

      try {
        await button.click({ timeout: 5000 });
        await this.page.waitForTimeout(800);
      } catch {
        await this.page.waitForTimeout(500);
      }
    }

    const closeCartButton = this.page.getByRole('button', { name: 'Close cart' }).first();
    const closeVisible = await closeCartButton.isVisible().catch(() => false);
    if (closeVisible) {
      await closeCartButton.click({ force: true, timeout: 5000 }).catch(() => {
        console.log('Close cart click failed, ignoring');
      });
      await this.page.waitForTimeout(500);
    }
  }
}