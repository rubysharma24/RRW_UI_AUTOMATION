# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:27:7

# Error details

```
Error: Could not extract amount from: "Shipping: Ground Shipping (FREE)"
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
        - generic [ref=e23]:
          - generic [ref=e24]: "2"
          - generic [ref=e25]: Review
        - generic [ref=e28]:
          - generic [ref=e29]: "3"
          - generic [ref=e30]: Payment
    - generic [ref=e31]:
      - generic [ref=e32]:
        - heading "Confirm" [level=1] [ref=e33]
        - button "Continue" [ref=e34] [cursor=pointer]
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - heading "Shipments" [level=2] [ref=e39]
            - generic [ref=e41] [cursor=pointer]:
              - 'radio "Ground Shipping (FREE) $0.00 Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd" [checked] [ref=e42]'
              - generic [ref=e43]:
                - generic [ref=e44]:
                  - generic [ref=e45]: Ground Shipping (FREE)
                  - generic [ref=e46]: $0.00
                - paragraph [ref=e47]: "Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd"
            - generic [ref=e49] [cursor=pointer]:
              - 'radio "2-Day Shipping $150.00 Expected Delivery: Friday, September 18th" [ref=e50]'
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - generic [ref=e53]: 2-Day Shipping
                  - generic [ref=e54]: $150.00
                - paragraph [ref=e55]: "Expected Delivery: Friday, September 18th"
            - generic [ref=e57] [cursor=pointer]:
              - 'radio "Overnight Shipping $250.00 Expected Delivery: Thursday, September 17th" [ref=e58]'
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: Overnight Shipping
                  - generic [ref=e62]: $250.00
                - paragraph [ref=e63]: "Expected Delivery: Thursday, September 17th"
            - generic [ref=e64]:
              - generic [ref=e65]:
                - heading "Shipping Address" [level=3] [ref=e66]
                - button "Edit" [ref=e67] [cursor=pointer]
              - generic [ref=e71]:
                - paragraph [ref=e72]: raja sharma
                - paragraph [ref=e73]: TCS
                - paragraph [ref=e74]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e75]: Mountain View California 90012
                - paragraph [ref=e76]: United States
                - paragraph [ref=e77]: "Phone: 9368047877"
            - generic [ref=e78]:
              - generic [ref=e79]:
                - heading "Billing Address" [level=3] [ref=e80]
                - button "Edit" [ref=e81] [cursor=pointer]
              - generic [ref=e85]:
                - paragraph [ref=e86]: raja sharma
                - paragraph [ref=e87]: TCS
                - paragraph [ref=e88]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e89]: Mountain View California 90012
                - paragraph [ref=e90]: United States
                - paragraph [ref=e91]: "Phone: 9368047877"
          - generic [ref=e92]:
            - link "Edit" [ref=e94] [cursor=pointer]:
              - /url: /cart
            - generic [ref=e98]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e100]
              - generic [ref=e101]:
                - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e102] [cursor=pointer]
                - paragraph [ref=e103]: "SKU: 560-03335B"
                - paragraph [ref=e104]: "Qty: 2"
                - paragraph [ref=e105]: "Expected Delivery Date: Tuesday, September 22nd - Wednesday, September 23rd"
                - paragraph [ref=e106]: $512.71
        - generic [ref=e107]:
          - generic [ref=e108]:
            - heading "Order Summary (2 items)" [level=2] [ref=e109]
            - generic [ref=e112]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e114]
              - generic [ref=e115]:
                - paragraph [ref=e116] [cursor=pointer]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
                - paragraph [ref=e117]: "SKU: 560-03335B"
              - generic [ref=e118]:
                - paragraph [ref=e119]: $233.58
                - paragraph [ref=e120]: "Qty: 2"
            - generic [ref=e121]:
              - generic [ref=e122]:
                - generic [ref=e123]: Subtotal (2 items)
                - generic [ref=e124]: $467.16
              - generic [ref=e125]:
                - generic [ref=e126]: Tax
                - generic [ref=e127]: $45.55
              - generic [ref=e128]:
                - generic [ref=e129]: "Shipping: Ground Shipping (FREE)"
                - text: $0.00
              - generic [ref=e131]:
                - generic [ref=e132]: Total
                - generic [ref=e133]: $512.71
          - generic [ref=e135]:
            - heading "NEED HELP?" [level=2] [ref=e136]
            - generic [ref=e137]:
              - generic [ref=e144]:
                - link "HASSLE-FREE RETURNS" [ref=e145] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e146]: We strive to have the best customer service in the business.
              - generic [ref=e153]:
                - link "FREE SHIPPING" [ref=e154] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e155]: Free shipping anywhere in the continental United States.
              - generic [ref=e159]:
                - link "1-YEAR WARRANTY" [ref=e160] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e161]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e166]:
                - link "100% COMPATIBLE" [ref=e167] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e168]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - generic [ref=e169]:
        - button "Return to address" [ref=e170] [cursor=pointer]
        - button "Continue" [ref=e173] [cursor=pointer]
      - separator [ref=e175]
      - generic [ref=e176]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e177]
        - generic [ref=e178]:
          - link [ref=e179] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e183]: 1-888-790-5899
          - link [ref=e184] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e189]: support@roadreadywheels.com
          - button [ref=e190] [cursor=pointer]:
            - paragraph [ref=e194]: Live Chat
      - generic [ref=e196]:
        - generic [ref=e197]:
          - heading "Certified & Secured by:" [level=4] [ref=e198]
          - img "Trusted Secure" [ref=e201]
        - generic [ref=e202]:
          - heading "We Accept:" [level=4] [ref=e203]
          - generic [ref=e204]:
            - generic [ref=e205]:
              - img "American Express" [ref=e207]
              - img "Visa" [ref=e209]
              - img "Mastercard" [ref=e211]
              - img "Paypal" [ref=e213]
              - img "Discover" [ref=e215]
              - img "Apple Pay" [ref=e217]
              - img "Affirm" [ref=e219]
            - generic [ref=e220]:
              - img "Amazon Pay" [ref=e222]
              - img "Google Pay" [ref=e224]
    - contentinfo [ref=e225]:
      - generic [ref=e226]:
        - generic [ref=e227]:
          - generic [ref=e228]:
            - heading "Contact Us" [level=3] [ref=e229]
            - generic [ref=e230]:
              - paragraph [ref=e231]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e232] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e233]:
                - text: "Text:"
                - link "217-635-2033" [ref=e234] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e235] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e236]:
              - link "Visit our Facebook page" [ref=e237] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e240] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e241]
              - link "Visit our Instagram page" [ref=e242] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e246] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e250]:
              - img "BBB Accredited" [ref=e252]
              - img "WTC Member" [ref=e254]
          - generic [ref=e255]:
            - heading "Support" [level=3] [ref=e256]
            - generic [ref=e257]:
              - link "Returns and Refunds" [ref=e258] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e259] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e260] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e261] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e262] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e263] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e264] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e265] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e266]:
            - heading "Why Road Ready" [level=3] [ref=e267]
            - generic [ref=e268]:
              - link "About Us" [ref=e269] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e270] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e271]:
            - heading "Divisions" [level=3] [ref=e272]
            - generic [ref=e273]:
              - link "Wholesale" [ref=e274] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e275] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e276]:
          - paragraph [ref=e278]:
            - strong [ref=e279]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e280]:
            - paragraph [ref=e281]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e282]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e283] [cursor=pointer]:
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
  7   | 
  8   |   readonly subtotalRow: Locator;
  9   |   readonly taxRow: Locator;
  10  |   readonly shippingRow: Locator;
  11  |   readonly totalRow: Locator;
  12  | 
  13  |   readonly chargeOrderButton: Locator;
  14  |   readonly continueWithChargeOrderButton: Locator;
  15  | 
  16  |   constructor(page: Page) {
  17  |     super(page);
  18  | 
  19  |     this.shippingRadios = page.getByRole('radio');
  20  | 
  21  |     this.continueButton = page.getByRole('button', {
  22  |       name: 'Continue',
  23  |     });
  24  | 
  25  |     // Dynamic: matches "Subtotal (2 items)", "Subtotal (1 item)", etc.
  26  |     this.subtotalRow = page
  27  |       .getByText(/^Subtotal \(\d+ items?\)$/)
  28  |       .locator('..');
  29  | 
  30  |     // Dynamic tax row
  31  |     this.taxRow = page
  32  |   .getByText(/^Tax$/)
  33  |   .first()
  34  |   .locator('..');
  35  | 
  36  |     // Dynamic shipping row
  37  |     this.shippingRow = page
  38  |       .getByText(/^Shipping:/)
  39  |       .locator('..');
  40  | 
  41  |     // Total row
  42  |     this.totalRow = page
  43  |       .getByText(/^Total$/)
  44  |       .locator('..');
  45  | 
  46  |     this.chargeOrderButton = page.getByRole('button', {
  47  |       name: /Charge Order/i,
  48  |     });
  49  | 
  50  |     this.continueWithChargeOrderButton = page.getByRole('button', {
  51  |       name: 'Continue with Charge Order',
  52  |     });
  53  |   }
  54  | 
  55  |   async selectAvailableShippingOption(): Promise<string> {
  56  |     await this.shippingRadios.first().waitFor({
  57  |       state: 'visible',
  58  |       timeout: 10000,
  59  |     });
  60  | 
  61  |     const count = await this.shippingRadios.count();
  62  | 
  63  |     for (let i = 0; i < count; i++) {
  64  |       const radio = this.shippingRadios.nth(i);
  65  | 
  66  |       if (await radio.isEnabled()) {
  67  |         const label =
  68  |           (await radio.locator('..').textContent()) ?? '';
  69  | 
  70  |         await radio.check();
  71  | 
  72  |         console.log(
  73  |           'Selected shipping option:',
  74  |           label.trim()
  75  |         );
  76  | 
  77  |         return label.trim();
  78  |       }
  79  |     }
  80  | 
  81  |     throw new Error('No enabled shipping option found');
  82  |   }
  83  | 
  84  |   private extractAmount(text: string): number {
  85  |     const match = text.match(/\$?\s*([\d,]+\.\d{2})/);
  86  | 
  87  |     if (!match) {
> 88  |       throw new Error(
      |             ^ Error: Could not extract amount from: "Shipping: Ground Shipping (FREE)"
  89  |         `Could not extract amount from: "${text}"`
  90  |       );
  91  |     }
  92  | 
  93  |     return Number(match[1].replace(/,/g, ''));
  94  |   }
  95  | 
  96  |   async getSubtotal(): Promise<number> {
  97  |     const text = await this.subtotalRow.textContent();
  98  | 
  99  |     if (!text) {
  100 |       throw new Error('Subtotal row was not found');
  101 |     }
  102 | 
  103 |     return this.extractAmount(text);
  104 |   }
  105 | 
  106 |  async getTax(): Promise<number> {
  107 |   const isVisible = await this.taxRow.isVisible({ timeout: 8000 }).catch(() => false);
  108 |   if (!isVisible) {
  109 |     console.log('Tax row not present — treating tax as $0.00');
  110 |     return 0;
  111 |   }
  112 |   const text = await this.taxRow.textContent();
  113 |   if (!text) return 0;
  114 |   return this.extractAmount(text);
  115 | }
  116 | 
  117 |   async getShippingCost(): Promise<number> {
  118 |     const isVisible = await this.shippingRow
  119 |       .isVisible()
  120 |       .catch(() => false);
  121 | 
  122 |     if (!isVisible) {
  123 |       console.log(
  124 |         'Shipping row not present — treating shipping as $0.00'
  125 |       );
  126 | 
  127 |       return 0;
  128 |     }
  129 | 
  130 |     const text = await this.shippingRow.textContent();
  131 | 
  132 |     if (!text) {
  133 |       return 0;
  134 |     }
  135 | 
  136 |     return this.extractAmount(text);
  137 |   }
  138 | 
  139 |   async getTotal(): Promise<number> {
  140 |     const text = await this.totalRow.textContent();
  141 | 
  142 |     if (!text) {
  143 |       throw new Error('Total row was not found');
  144 |     }
  145 | 
  146 |     return this.extractAmount(text);
  147 |   }
  148 | 
  149 |   async getOrderSummary(): Promise<{
  150 |     subtotal: number;
  151 |     tax: number;
  152 |     shipping: number;
  153 |     total: number;
  154 |   }> {
  155 |     const subtotal = await this.getSubtotal();
  156 |     const tax = await this.getTax();
  157 |     const shipping = await this.getShippingCost();
  158 |     const total = await this.getTotal();
  159 | 
  160 |     return {
  161 |       subtotal,
  162 |       tax,
  163 |       shipping,
  164 |       total,
  165 |     };
  166 |   }
  167 | 
  168 |   async clickContinue() {
  169 |     await this.continueButton.first().click();
  170 |   }
  171 | 
  172 |   async clickSecondContinue() {
  173 |     await this.continueButton.nth(1).click();
  174 |   }
  175 | 
  176 |   async clickChargeOrder() {
  177 |     await this.chargeOrderButton.click();
  178 |   }
  179 | 
  180 |   async clickContinueWithChargeOrder() {
  181 |     await this.continueWithChargeOrderButton.click();
  182 |   }
  183 | 
  184 |   async declineUpsellInIframe() {
  185 |     const frame = this.page.frameLocator('iframe[name^="I0_"]');
  186 | 
  187 |     await frame
  188 |       .getByRole('button', { name: 'NO' })
```