# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:27:7

# Error details

```
Error: expect(locator).not.toHaveText(expected) failed

Locator:  getByRole('heading', { name: /Your Cart/ }).last().locator('..').locator('..').getByRole('button', { name: /Decrease quantity/i }).last().locator('..').getByText(/^\d+$/).first()
Expected: not "1"
Received: "1"
Timeout:  8000ms

Call log:
  - Expect "not toHaveText" getByRole('heading', { name: /Your Cart/ }).last().locator('..').locator('..').getByRole('button', { name: /Decrease quantity/i }).last().locator('..').getByText(/^\d+$/).first() with timeout 8000ms
  - waiting for getByRole('heading', { name: /Your Cart/ }).last().locator('..').locator('..').getByRole('button', { name: /Decrease quantity/i }).last().locator('..').getByText(/^\d+$/).first()
    16 × locator resolved to <span class="text-sm min-w-[20px] text-center">1</span>
       - unexpected value "1"

```

```yaml
- text: "1"
```

# Test source

```ts
  2   | import BasePage from './BasePage';
  3   | 
  4   | export default class CartPage extends BasePage {
  5   |   readonly cartDrawer: Locator;
  6   |   readonly cartHeading: Locator;
  7   |   readonly openCartButton: Locator;
  8   |   readonly removeItemButtons: Locator;
  9   |   readonly quantityIncreaseButton: Locator;
  10  |   readonly quantityDecreaseButton: Locator;
  11  |   readonly quantityValue: Locator;
  12  |   readonly completeCheckoutButton: Locator;
  13  |   readonly dontHavePOButton: Locator;
  14  |   readonly completeOrderButton: Locator;
  15  |   readonly closeRebillModalButton: Locator;
  16  |   readonly cartSubtotalRow: Locator;
  17  |   readonly cartTaxRow: Locator;
  18  |   readonly cartTotalRow: Locator;
  19  | 
  20  |   constructor(page: Page) {
  21  |     super(page);
  22  | 
  23  |     this.openCartButton = page.getByRole('button', { name: 'Open cart' });
  24  | 
  25  |     this.cartHeading = page.getByRole('heading', { name: /Your Cart/ }).last();
  26  |     this.cartDrawer = this.cartHeading.locator('..').locator('..');
  27  | 
  28  |     this.removeItemButtons = this.cartDrawer.getByRole('button', {
  29  |       name: /Remove .* from cart/i,
  30  |     });
  31  | 
  32  |     this.quantityDecreaseButton = this.cartDrawer
  33  |       .getByRole('button', { name: /Decrease quantity/i })
  34  |       .last();
  35  | 
  36  |     this.quantityIncreaseButton = this.cartDrawer
  37  |       .getByRole('button', { name: /Increase quantity/i })
  38  |       .last();
  39  | 
  40  |     this.quantityValue = this.quantityDecreaseButton
  41  |       .locator('..')
  42  |       .getByText(/^\d+$/)
  43  |       .first();
  44  | 
  45  |     this.completeCheckoutButton = this.cartDrawer
  46  |       .locator('button:visible', { hasText: 'Complete Checkout' })
  47  |       .first();
  48  | 
  49  |     this.completeOrderButton = page.getByRole('button', { name: 'Complete Order' });
  50  |     this.dontHavePOButton = page.getByRole('button', { name: "Don't Have PO" });
  51  |     this.closeRebillModalButton = page.getByRole('button', { name: 'Close modal' });
  52  | 
  53  |     // Cart drawer ke andar totals (Subtotal, Tax, Total)
  54  |     this.cartSubtotalRow = this.cartDrawer
  55  |       .getByText(/^Subtotal \(\d+ items?\)$/)
  56  |       .first()
  57  |       .locator('..');
  58  | 
  59  |     this.cartTaxRow = this.cartDrawer
  60  |       .getByText(/^Tax$/)
  61  |       .first()
  62  |       .locator('..');
  63  | 
  64  |     this.cartTotalRow = this.cartDrawer
  65  |       .getByText(/^Total$/)
  66  |       .first()
  67  |       .locator('..');
  68  |   }
  69  | 
  70  |   async getQuantity(): Promise<number> {
  71  |     const text = await this.quantityValue.textContent();
  72  |     if (!text) {
  73  |       throw new Error('Quantity value was not found');
  74  |     }
  75  |     const quantity = Number(text.trim());
  76  |     if (Number.isNaN(quantity)) {
  77  |       throw new Error(`Invalid quantity value: "${text}"`);
  78  |     }
  79  |     return quantity;
  80  |   }
  81  | 
  82  |   async toggleQuantity() {
  83  |     const currentQty = await this.getQuantity();
  84  |     console.log('Current quantity:', currentQty);
  85  | 
  86  |     if (currentQty > 1) {
  87  |       console.log('Clicking decrease quantity');
  88  |       await this.quantityDecreaseButton.click();
  89  |     } else {
  90  |       console.log('Clicking increase quantity');
  91  |       await this.quantityIncreaseButton.click();
  92  |     }
  93  | 
  94  |     // Increase/decrease triggers an async cart update (API call +
  95  |     // re-render) — the displayed quantity does not change the instant
  96  |     // the click fires. Reading getQuantity() again immediately after the
  97  |     // click races that update and can return the stale pre-click value
  98  |     // (which is exactly what was happening: "Quantity after toggle: 1").
  99  |     // expect(...).not.toHaveText() is a web-first assertion that retries
  100 |     // until the text actually differs from the old value, instead of
  101 |     // trusting the click alone.
> 102 |     await expect(this.quantityValue).not.toHaveText(String(currentQty), {
      |                                          ^ Error: expect(locator).not.toHaveText(expected) failed
  103 |       timeout: 8000,
  104 |     });
  105 |   }
  106 | 
  107 |   async clickCompleteCheckout() {
  108 |     await this.completeCheckoutButton.click();
  109 |   }
  110 | 
  111 |   async dismissRebillPOModal() {
  112 |     await this.dontHavePOButton.click();
  113 |   }
  114 | 
  115 |   private extractAmount(text: string): number {
  116 |     const match = text.match(/\$?\s*([\d,]+\.\d{2})/);
  117 |     if (!match) {
  118 |       throw new Error(`Could not extract amount from: "${text}"`);
  119 |     }
  120 |     return Number(match[1].replace(/,/g, ''));
  121 |   }
  122 | 
  123 |   async getCartSubtotal(): Promise<number> {
  124 |     const text = await this.cartSubtotalRow.textContent();
  125 |     return this.extractAmount(text ?? '');
  126 |   }
  127 | 
  128 |   async getCartTax(): Promise<number> {
  129 |     const isVisible = await this.cartTaxRow.isVisible({ timeout: 5000 }).catch(() => false);
  130 |     if (!isVisible) {
  131 |       console.log('Tax row not present in cart — treating as $0.00');
  132 |       return 0;
  133 |     }
  134 |     const text = await this.cartTaxRow.textContent();
  135 |     return this.extractAmount(text ?? '');
  136 |   }
  137 | 
  138 |   async getCartTotal(): Promise<number> {
  139 |     const text = await this.cartTotalRow.textContent();
  140 |     return this.extractAmount(text ?? '');
  141 |   }
  142 | 
  143 |   async clearCartIfNotEmpty() {
  144 |     const hasItems = await this.openCartButton.isVisible().catch(() => false);
  145 |     if (!hasItems) return;
  146 | 
  147 |     await this.click(this.openCartButton);
  148 |     await this.page.waitForTimeout(500);
  149 | 
  150 |     for (let i = 0; i < 10; i++) {
  151 |       const count = await this.removeItemButtons.count();
  152 |       if (count === 0) break;
  153 | 
  154 |       const button = this.removeItemButtons.first();
  155 |       const isEnabled = await button.isEnabled().catch(() => false);
  156 |       if (!isEnabled) {
  157 |         await this.page.waitForTimeout(1000);
  158 |         continue;
  159 |       }
  160 | 
  161 |       try {
  162 |         await button.click({ timeout: 5000 });
  163 |         await this.page.waitForTimeout(800);
  164 |       } catch {
  165 |         await this.page.waitForTimeout(500);
  166 |       }
  167 |     }
  168 | 
  169 |     const closeCartButton = this.page.getByRole('button', { name: 'Close cart' }).first();
  170 |     const closeVisible = await closeCartButton.isVisible().catch(() => false);
  171 |     if (closeVisible) {
  172 |       await closeCartButton.click({ force: true, timeout: 5000 }).catch(() => {
  173 |         console.log('Close cart click failed, ignoring');
  174 |       });
  175 |       await this.page.waitForTimeout(500);
  176 |     }
  177 |   }
  178 | }
```