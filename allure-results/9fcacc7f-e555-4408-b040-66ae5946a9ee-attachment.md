# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pricing.spec.ts >> Pricing - Resale vs Wholesale >> wholesale price should be lower than resale price for the same product @PricingFlow
- Location: tests\pricing.spec.ts:15:7

# Error details

```
Error: expect(locator).not.toHaveText(expected) failed

Locator:  getByText(/^\$\d{1,3}(,\d{3})*\.\d{2}$/).first()
Expected: not "$173.00"
Received: "$173.00"
Timeout:  8000ms

Call log:
  - Expect "not toHaveText" getByText(/^\$\d{1,3}(,\d{3})*\.\d{2}$/).first() with timeout 8000ms
  - waiting for getByText(/^\$\d{1,3}(,\d{3})*\.\d{2}$/).first()
    19 × locator resolved to <span class="text-sm font-semibold">$173.00</span>
       - unexpected value "$173.00"

```

```yaml
- text: $173.00
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import BasePage from './BasePage';
  3  | 
  4  | export default class ProductPage extends BasePage {
  5  |   readonly price: Locator;
  6  |   readonly quantitySelector: Locator;
  7  |   readonly addToCartButton: Locator;
  8  |   readonly productTitle: Locator;
  9  |   readonly skipHubcapsButton: Locator;
  10 |   readonly closeHubcapsDialogButton: Locator;
  11 |   readonly wholesaleToggleButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     super(page);
  15 |     this.productTitle = page.getByRole('heading', { level: 1 });
  16 |     this.price = page.getByText(/^\$\d{1,3}(,\d{3})*\.\d{2}$/).first();
  17 |     this.quantitySelector = page.getByRole('combobox').first();
  18 |     this.addToCartButton = page.locator('#add-to-cart-button');
  19 |     this.skipHubcapsButton = page.getByRole('button', { name: 'Skip and Proceed' });
  20 |     this.closeHubcapsDialogButton = page.getByRole('button', { name: 'Close hubcaps dialog' });
  21 |     this.wholesaleToggleButton = page.getByRole('button', { name: 'wholesale' });
  22 |   }
  23 | 
  24 |   async getPriceText(): Promise<string> {
  25 |     await this.price.waitFor({ state: 'visible', timeout: 15000 });
  26 |     return this.price.innerText();
  27 |   }
  28 | 
  29 |   async setQuantity(qty: string) {
  30 |     await this.quantitySelector.selectOption(qty);
  31 |   }
  32 | 
  33 |   async dismissHubcapUpsellIfPresent() {
  34 |     const skipVisible = await this.skipHubcapsButton.isVisible({ timeout: 3000 }).catch(() => false);
  35 |     if (skipVisible) {
  36 |       await this.skipHubcapsButton.click();
  37 |       return;
  38 |     }
  39 | 
  40 |     const closeVisible = await this.closeHubcapsDialogButton.isVisible({ timeout: 3000 }).catch(() => false);
  41 |     if (closeVisible) {
  42 |       await this.closeHubcapsDialogButton.click();
  43 |     }
  44 |   }
  45 | 
  46 |   async addToCart() {
  47 |     await this.click(this.addToCartButton);
  48 |     await this.page.waitForTimeout(1500);
  49 |     await this.dismissHubcapUpsellIfPresent();
  50 |     await this.page.waitForTimeout(1000);
  51 |   }
  52 | 
  53 |   async switchToWholesalePricing() {
  54 |     await this.click(this.wholesaleToggleButton);
  55 |   }
  56 | 
  57 |   async waitForPriceToChange(previousPriceText: string) {
> 58 |     await expect(this.price).not.toHaveText(previousPriceText, { timeout: 8000 });
     |                                  ^ Error: expect(locator).not.toHaveText(expected) failed
  59 |   }
  60 | }
```