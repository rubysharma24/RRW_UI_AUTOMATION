# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:13:7

# Error details

```
TimeoutError: locator.textContent: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText(/^Tax$/).locator('..')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Checkout - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - link "ROADREADY" [ref=e9] [cursor=pointer]:
        - /url: /
    - banner [ref=e11]:
      - generic [ref=e14]:
        - generic [ref=e15]: Address
        - generic [ref=e22]: Review
        - generic [ref=e30]:
          - generic [ref=e31]: "3"
          - generic [ref=e32]: Payment
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e37]:
          - heading "Payment" [level=1] [ref=e38]
          - paragraph [ref=e39]: All transactions are safe and secure.
          - paragraph [ref=e40]: Please select one of the given payment methods.
          - generic [ref=e41]:
            - button "Charge Order ▶" [ref=e43] [cursor=pointer]:
              - generic [ref=e44]:
                - radio [ref=e45]
                - generic [ref=e49]: Charge Order
              - generic [ref=e50]: ▶
            - button "Credit Card ▶" [ref=e52] [cursor=pointer]:
              - generic [ref=e53]:
                - radio [ref=e54]
                - generic [ref=e57]: Credit Card
              - generic [ref=e58]: ▶
            - button "PayPal ▶" [ref=e60] [cursor=pointer]:
              - generic [ref=e61]:
                - radio [ref=e62]
                - generic [ref=e66]: PayPal
              - generic [ref=e67]: ▶
          - generic [ref=e68]:
            - button "Return to review & confirm" [ref=e69] [cursor=pointer]
            - paragraph [ref=e73]: "Order Total: $512.71"
        - generic [ref=e74]:
          - generic [ref=e75]:
            - heading "Order Summary (2 items)" [level=2] [ref=e76]
            - generic [ref=e79]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e81]
              - generic [ref=e82]:
                - paragraph [ref=e83] [cursor=pointer]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
                - paragraph [ref=e84]: "SKU: 560-03335B"
              - generic [ref=e85]:
                - paragraph [ref=e86]: $233.58
                - paragraph [ref=e87]: "Qty: 2"
            - generic [ref=e88]:
              - generic [ref=e89]:
                - generic [ref=e90]: Subtotal (2 items)
                - generic [ref=e91]: $467.16
              - generic [ref=e92]:
                - generic [ref=e93]: "Shipping: Ground Shipping (FREE)"
                - generic [ref=e96]: $0.00
              - generic [ref=e97]:
                - generic [ref=e98]: Tax
                - generic [ref=e99]: $45.55
              - generic [ref=e100]:
                - generic [ref=e101]: Total
                - generic [ref=e102]: $512.71
          - generic [ref=e104]:
            - heading "NEED HELP?" [level=2] [ref=e105]
            - generic [ref=e106]:
              - generic [ref=e113]:
                - link "HASSLE-FREE RETURNS" [ref=e114] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e115]: We strive to have the best customer service in the business.
              - generic [ref=e122]:
                - link "FREE SHIPPING" [ref=e123] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e124]: Free shipping anywhere in the continental United States.
              - generic [ref=e128]:
                - link "1-YEAR WARRANTY" [ref=e129] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e130]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e135]:
                - link "100% COMPATIBLE" [ref=e136] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e137]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - separator [ref=e138]
      - generic [ref=e139]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e140]
        - generic [ref=e141]:
          - link [ref=e142] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e146]: 1-888-790-5899
          - link [ref=e147] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e152]: support@roadreadywheels.com
          - button [ref=e153] [cursor=pointer]:
            - paragraph [ref=e157]: Live Chat
      - generic [ref=e159]:
        - generic [ref=e160]:
          - heading "Certified & Secured by:" [level=4] [ref=e161]
          - img "Trusted Secure" [ref=e164]
        - generic [ref=e165]:
          - heading "We Accept:" [level=4] [ref=e166]
          - generic [ref=e167]:
            - generic [ref=e168]:
              - img "American Express" [ref=e170]
              - img "Visa" [ref=e172]
              - img "Mastercard" [ref=e174]
              - img "Paypal" [ref=e176]
              - img "Discover" [ref=e178]
              - img "Apple Pay" [ref=e180]
              - img "Affirm" [ref=e182]
            - generic [ref=e183]:
              - img "Amazon Pay" [ref=e185]
              - img "Google Pay" [ref=e187]
    - contentinfo [ref=e188]:
      - generic [ref=e189]:
        - generic [ref=e190]:
          - generic [ref=e191]:
            - heading "Contact Us" [level=3] [ref=e192]
            - generic [ref=e193]:
              - paragraph [ref=e194]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e195] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e196]:
                - text: "Text:"
                - link "217-635-2033" [ref=e197] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e198] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e199]:
              - link "Visit our Facebook page" [ref=e200] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e203] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e204]
              - link "Visit our Instagram page" [ref=e205] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e209] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e213]:
              - img "BBB Accredited" [ref=e215]
              - img "WTC Member" [ref=e217]
          - generic [ref=e218]:
            - heading "Support" [level=3] [ref=e219]
            - generic [ref=e220]:
              - link "Returns and Refunds" [ref=e221] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e222] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e223] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e224] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e225] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e226] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e227] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e228] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e229]:
            - heading "Why Road Ready" [level=3] [ref=e230]
            - generic [ref=e231]:
              - link "About Us" [ref=e232] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e233] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e234]:
            - heading "Divisions" [level=3] [ref=e235]
            - generic [ref=e236]:
              - link "Wholesale" [ref=e237] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e238] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e239]:
          - paragraph [ref=e241]:
            - strong [ref=e242]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e243]:
            - paragraph [ref=e244]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e245]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e246] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1   | import { Page, Locator } from '@playwright/test';
  2   | import BasePage from './BasePage';
  3   | 
  4   | export default class CheckoutReviewPage extends BasePage {
  5   |   readonly shippingRadios: Locator;
  6   |   readonly continueButton: Locator;
  7   |   readonly subtotalRow: Locator;
  8   |   readonly taxRow: Locator;
  9   |   readonly totalRow: Locator;
  10  |   readonly chargeOrderButton: Locator;
  11  |   readonly continueWithChargeOrderButton: Locator;
  12  | 
  13  |   constructor(page: Page) {
  14  |     super(page);
  15  | 
  16  |     this.shippingRadios = page.getByRole('radio');
  17  |     this.continueButton = page.getByRole('button', { name: 'Continue' });
  18  | 
  19  |     // Label ke parent row ko pakdo, phir uske andar poora text nikaalo
  20  |     this.subtotalRow = page
  21  |       .getByText(/Subtotal \(\d+ items?\)/)
  22  |       .locator('..');
  23  | 
  24  |     this.taxRow = page.getByText(/^Tax$/).locator('..');
  25  | 
  26  |     this.totalRow = page.getByText(/^Total$/).locator('..');
  27  | 
  28  |     this.chargeOrderButton = page.getByRole('button', { name: /Charge Order/ });
  29  |     this.continueWithChargeOrderButton = page.getByRole('button', {
  30  |       name: 'Continue with Charge Order',
  31  |     });
  32  |   }
  33  | 
  34  |   async selectAvailableShippingOption(): Promise<string> {
  35  |     await this.shippingRadios.first().waitFor({ state: 'visible', timeout: 10000 });
  36  | 
  37  |     const count = await this.shippingRadios.count();
  38  |     for (let i = 0; i < count; i++) {
  39  |       const radio = this.shippingRadios.nth(i);
  40  |       const isEnabled = await radio.isEnabled();
  41  |       if (isEnabled) {
  42  |         // aria-label ke bajaye poore row ka text content lo
  43  |         const label = await radio.locator('..').textContent() ?? '';
  44  |         await radio.check();
  45  |         console.log('Selected shipping option:', label.trim());
  46  |         return label;
  47  |       }
  48  |     }
  49  | 
  50  |     throw new Error('No enabled shipping option found');
  51  |   }
  52  | 
  53  |   private extractAmount(text: string): number {
  54  |     const match = text.match(/\$?([\d,]+\.\d{2})/);
  55  |     if (!match) {
  56  |       throw new Error(`Could not extract amount from: "${text}"`);
  57  |     }
  58  |     return parseFloat(match[1].replace(',', ''));
  59  |   }
  60  | 
  61  |   async getSubtotal(): Promise<number> {
  62  |     const text = await this.subtotalRow.textContent();
  63  |     return this.extractAmount(text ?? '');
  64  |   }
  65  | 
  66  |   async getTax(): Promise<number> {
> 67  |     const text = await this.taxRow.textContent();
      |                                    ^ TimeoutError: locator.textContent: Timeout 10000ms exceeded.
  68  |     return this.extractAmount(text ?? '');
  69  |   }
  70  | 
  71  |   async getTotal(): Promise<number> {
  72  |     const text = await this.totalRow.textContent();
  73  |     return this.extractAmount(text ?? '');
  74  |   }
  75  | 
  76  |   extractShippingCost(shippingLabel: string): number {
  77  |     return this.extractAmount(shippingLabel);
  78  |   }
  79  | 
  80  |   async clickContinue() {
  81  |     await this.continueButton.first().click();
  82  |   }
  83  | 
  84  |   async clickSecondContinue() {
  85  |     await this.continueButton.nth(1).click();
  86  |   }
  87  | 
  88  |   async clickChargeOrder() {
  89  |     await this.chargeOrderButton.click();
  90  |   }
  91  | 
  92  |   async clickContinueWithChargeOrder() {
  93  |     await this.continueWithChargeOrderButton.click();
  94  |   }
  95  | 
  96  |   async declineUpsellInIframe() {
  97  |     const frame = this.page.frameLocator('iframe[name^="I0_"]');
  98  |     await frame.getByRole('button', { name: 'NO' }).click();
  99  |   }
  100 | }
```