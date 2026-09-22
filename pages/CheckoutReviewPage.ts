import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CheckoutReviewPage extends BasePage {
  readonly shippingRadios: Locator;
  readonly continueButton: Locator;

  // The panel that contains the summary rows — scoping every row locator
  // to this panel is what fixes the real bug below.
  readonly orderSummaryPanel: Locator;

  // Kept for anything external still reading the whole row (getShippingCost
  // needs the full row, since its value can be a bare text node — see below).
  readonly subtotalRow: Locator;
  readonly taxRow: Locator;
  readonly shippingRow: Locator;
  readonly totalRow: Locator;

  // Label and value read as two separate locators instead of one row's
  // concatenated textContent(). "Tax" (and "Total") are not unique text on
  // this page — the codegen reference used page.getByText('Tax').nth(1),
  // which was the tell: an unscoped getByText('Tax').first() can lock onto
  // a DIFFERENT "Tax" element elsewhere on the page (e.g. a hidden cart
  // drawer echo) that never has a dollar amount, so no amount of waiting
  // ever fixes it — it's a scoping bug, not a timing bug. Scoping every
  // row to orderSummaryPanel, and reading the value element directly
  // instead of the row's full text, removes the ambiguity entirely.
  readonly subtotalValue: Locator;
  readonly taxLabel: Locator;
  readonly taxValue: Locator;
  readonly totalValue: Locator;

  readonly chargeOrderButton: Locator;
  readonly continueWithChargeOrderButton: Locator;

  // --- Credit Card payment (independent of address / Charge Order) ---
  readonly creditCardMethodButton: Locator;
  readonly cardNumberInput: Locator;
  readonly cardExpiryInput: Locator;
  readonly cardHolderNameInput: Locator;
  readonly cardCvvInput: Locator;
  readonly payButton: Locator;

  constructor(page: Page) {
    super(page);

    this.shippingRadios = page.getByRole('radio');

    this.continueButton = page.getByRole('button', {
      name: 'Continue',
    });

    // Anchor: the "Order Summary" heading's parent panel contains the
    // product lines AND the subtotal/tax/shipping/total rows, and nothing
    // outside it — every row below is scoped inside this, not the whole page.
    this.orderSummaryPanel = page
      .getByRole('heading', { name: /Order Summary/i })
      .locator('..');

    // Dynamic: matches "Subtotal (2 items)", "Subtotal (1 item)", etc.
    this.subtotalRow = this.orderSummaryPanel
      .getByText(/^Subtotal \(\d+ items?\)$/)
      .locator('..');

    this.subtotalValue = this.orderSummaryPanel
      .getByText(/^Subtotal \(\d+ items?\)$/)
      .locator('xpath=following-sibling::*[1]');

    // Dynamic tax row — scoped + exact, no .first() guesswork.
    this.taxLabel = this.orderSummaryPanel.getByText(/^Tax$/, { exact: true });
    this.taxRow = this.taxLabel.locator('..');
    this.taxValue = this.taxLabel.locator('xpath=following-sibling::*[1]');

    // Dynamic shipping row
    this.shippingRow = this.orderSummaryPanel
      .getByText(/^Shipping:/)
      .locator('..');

    // Total row
    this.totalRow = this.orderSummaryPanel
      .getByText(/^Total$/, { exact: true })
      .locator('..');

    this.totalValue = this.orderSummaryPanel
      .getByText(/^Total$/, { exact: true })
      .locator('xpath=following-sibling::*[1]');

    // "Charge Order" is a radio button (with a disclosure arrow to expand
    // its row), not a <button> — getByRole('button', {name:/Charge Order/i})
    // matched nothing, which is why it just timed out after 10s instead of
    // erroring immediately. Same class of bug as the Search button/Tax row.
    this.chargeOrderButton = page.getByRole('radio', {
      name: /Charge Order/i,
    });

    this.continueWithChargeOrderButton = page.getByRole('button', {
      name: 'Continue with Charge Order',
    });

    // Credit Card — a disclosure button that expands the card fields.
    // Confirm the actual role in DevTools before running (same "Charge
    // Order" mistake is possible here — it might turn out to be a radio
    // too); getByRole('button', ...) matches your recorded flow for now.
    this.creditCardMethodButton = page.getByRole('button', {
      name: /Credit Card/i,
    });

    this.cardNumberInput = page.getByRole('textbox', {
      name: '5678 9012 3456',
    });

    this.cardExpiryInput = page.getByRole('textbox', { name: 'MM/YYYY' });

    this.cardHolderNameInput = page.getByRole('textbox', {
      name: 'John Doe',
    });

    this.cardCvvInput = page.getByRole('textbox', {
      name: '123',
      exact: true,
    });

    // Accessible name is "Pay $<amount>" — substring match on "Pay $"
    // (Playwright's getByRole name match is substring + case-insensitive
    // by default), so this doesn't need the exact dollar amount.
    this.payButton = page.getByRole('button', { name: 'Pay $' });
  }

  async selectAvailableShippingOption(): Promise<string> {
    await this.shippingRadios.first().waitFor({
      state: 'visible',
      timeout: 10000,
    });

    const count = await this.shippingRadios.count();

    for (let i = 0; i < count; i++) {
      const radio = this.shippingRadios.nth(i);

      if (await radio.isEnabled()) {
        const label =
          (await radio.locator('..').textContent()) ?? '';

        await radio.check();

        console.log(
          'Selected shipping option:',
          label.trim()
        );

        return label.trim();
      }
    }

    throw new Error('No enabled shipping option found');
  }

  private extractAmount(text: string): number {
    const match = text.match(/\$?\s*([\d,]+\.\d{2})/);

    if (!match) {
      throw new Error(
        `Could not extract amount from: "${text}"`
      );
    }

    return Number(match[1].replace(/,/g, ''));
  }

  async getSubtotal(): Promise<number> {
    await this.subtotalValue.waitFor({ state: 'visible', timeout: 10000 });

    const text = await this.subtotalValue.textContent();

    if (!text) {
      throw new Error('Subtotal value was not found');
    }

    return this.extractAmount(text);
  }

  async getTax(): Promise<number> {
    // Scoped + exact-matched taxLabel means this is genuinely the Order
    // Summary panel's "Tax" row now, not an unrelated "Tax" elsewhere on
    // the page — so if it's still not there after waiting, it really is
    // absent (e.g. a tax-exempt state) rather than misidentified.
    try {
      await this.taxLabel.waitFor({ state: 'visible', timeout: 8000 });
    } catch {
      console.log('Tax row not present — treating tax as $0.00');
      return 0;
    }

    // Read the value element directly instead of the row's combined text.
    const text = await this.taxValue.textContent();
    if (!text) return 0;
    return this.extractAmount(text);
  }

  async getShippingCost(): Promise<number> {
    // Same isVisible() timing pitfall as getTax() had — waitFor() retries,
    // isVisible() doesn't. Harmless while shipping is FREE ($0 either way),
    // but would wrongly report $0 for paid shipping (2-Day/Overnight) the
    // moment the row renders a beat late.
    try {
      await this.shippingRow.waitFor({ state: 'visible', timeout: 8000 });
    } catch {
      console.log(
        'Shipping row not present — treating shipping as $0.00'
      );

      return 0;
    }

    const text = (await this.shippingRow.textContent()) ?? '';

    if (!text) {
      return 0;
    }

    // "Shipping: Ground Shipping (FREE)" — the label itself has no $
    // amount; the "$0.00" lives in a separate sibling text node that can
    // render a beat after the label (React re-render timing), so it's not
    // always present in textContent() at the moment we read it. Rather
    // than fight that race, treat an explicit "(FREE)" label as $0 —
    // that's what it means regardless of whether the sibling node landed
    // in time.
    if (/free/i.test(text) && !/\$?\s*[\d,]+\.\d{2}/.test(text)) {
      return 0;
    }

    return this.extractAmount(text);
  }

  async getTotal(): Promise<number> {
    await this.totalValue.waitFor({ state: 'visible', timeout: 10000 });

    const text = await this.totalValue.textContent();

    if (!text) {
      throw new Error('Total value was not found');
    }

    return this.extractAmount(text);
  }

 
  async waitForTotalsToSettle(
    unitPrice: number,
    quantity: number,
    timeout = 15000
  ): Promise<{ subtotal: number; taxPlusShipping: number; total: number }> {
    let result = { subtotal: 0, taxPlusShipping: 0, total: 0 };

    await expect(async () => {
      const subtotal = await this.getSubtotal();
      const total = await this.getTotal();

      const expectedSubtotal = Number((unitPrice * quantity).toFixed(2));
      expect(subtotal).toBeCloseTo(expectedSubtotal, 2);
      expect(total).toBeGreaterThanOrEqual(subtotal - 0.01);

      const taxPlusShipping = Number((total - subtotal).toFixed(2));

      result = { subtotal, taxPlusShipping, total };
    }).toPass({ timeout });

    return result;
  }

  async getOrderSummary(): Promise<{
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
  }> {
    const subtotal = await this.getSubtotal();
    const tax = await this.getTax();
    const shipping = await this.getShippingCost();
    const total = await this.getTotal();

    return {
      subtotal,
      tax,
      shipping,
      total,
    };
  }

  async clickContinue() {
    await this.continueButton.first().click();
  }

  async clickSecondContinue() {
    await this.continueButton.nth(1).click();
  }

  async clickChargeOrder() {
  
    await this.chargeOrderButton.check();
  }

  async clickContinueWithChargeOrder() {
    await this.continueWithChargeOrderButton.click();
  }

  async declineUpsellInIframe() {
    const frame = this.page.frameLocator('iframe[name^="I0_"]');

    await frame
      .getByRole('button', { name: 'NO' })
      .click();
  }

  // --- Credit Card payment flow ---

  /** Expands the Credit Card payment section. */
  async selectCreditCardPaymentMethod() {
    await this.click(this.creditCardMethodButton);
  }

  async fillCreditCardDetails(details: {
    cardNumber: string;
    expiryMonth: string; // e.g. 'December'
    cardHolderName: string;
    cvv: string;
  }) {
    await this.cardNumberInput.click();
    await this.cardNumberInput.fill(details.cardNumber);

    await this.cardExpiryInput.click();
    await this.page
      .getByRole('option', { name: `Choose ${details.expiryMonth}` })
      .click();

    await this.cardHolderNameInput.click();
    await this.cardHolderNameInput.fill(details.cardHolderName);

    await this.cardCvvInput.click();
    await this.cardCvvInput.fill(details.cvv);
  }

  async clickPayButton() {
    await this.click(this.payButton);
  }

  
  async declinePaymentVerificationIfPresent() {
    const frame = this.page.frameLocator('iframe[name^="I0_"]');
    const noButton = frame.getByRole('button', { name: 'NO' });

    const visible = await noButton.isVisible({ timeout: 5000 }).catch(() => false);
    if (visible) {
      await noButton.click();
    }
  }
}