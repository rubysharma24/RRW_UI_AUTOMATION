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
  readonly completeOrderButton: Locator;
  readonly closeRebillModalButton: Locator;
  readonly cartSubtotalRow: Locator;
  readonly cartTaxRow: Locator;
  readonly cartTotalRow: Locator;

  constructor(page: Page) {
    super(page);

    this.openCartButton = page.getByRole('button', { name: 'Open cart' });

    this.cartHeading = page.getByRole('heading', { name: /Your Cart/ }).last();
    this.cartDrawer = this.cartHeading.locator('..').locator('..');

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
    await this.dontHavePOButton.click();
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
    const isVisible = await this.cartTaxRow.isVisible({ timeout: 5000 }).catch(() => false);
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