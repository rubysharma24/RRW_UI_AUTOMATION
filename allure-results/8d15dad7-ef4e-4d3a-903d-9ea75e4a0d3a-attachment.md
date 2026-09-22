# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:13:7

# Error details

```
Error: Could not extract amount from: ""
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
              - 'radio "Ground Shipping (FREE) $0.00 Expected Delivery: Thursday, September 17th - Friday, September 18th" [checked] [ref=e42]'
              - generic [ref=e43]:
                - generic [ref=e44]:
                  - generic [ref=e45]: Ground Shipping (FREE)
                  - generic [ref=e46]: $0.00
                - paragraph [ref=e47]: "Expected Delivery: Thursday, September 17th - Friday, September 18th"
            - generic [ref=e48]:
              - generic [ref=e49]:
                - heading "Shipping Address" [level=3] [ref=e50]
                - button "Edit" [ref=e51] [cursor=pointer]
              - generic [ref=e55]:
                - paragraph [ref=e56]: raja sharma
                - paragraph [ref=e57]: TCS
                - paragraph [ref=e58]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e59]: Mountain View California 90012
                - paragraph [ref=e60]: United States
                - paragraph [ref=e61]: "Phone: 9368047877"
            - generic [ref=e62]:
              - generic [ref=e63]:
                - heading "Billing Address" [level=3] [ref=e64]
                - button "Edit" [ref=e65] [cursor=pointer]
              - generic [ref=e69]:
                - paragraph [ref=e70]: raja sharma
                - paragraph [ref=e71]: TCS
                - paragraph [ref=e72]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e73]: Mountain View California 90012
                - paragraph [ref=e74]: United States
                - paragraph [ref=e75]: "Phone: 9368047877"
          - generic [ref=e76]:
            - link "Edit" [ref=e78] [cursor=pointer]:
              - /url: /cart
            - generic [ref=e82]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e84]
              - generic [ref=e85]:
                - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e86] [cursor=pointer]
                - paragraph [ref=e87]: "SKU: 560-03335B"
                - paragraph [ref=e88]: "Qty: 2"
                - paragraph [ref=e89]: "Expected Delivery Date: Thursday, September 17th - Friday, September 18th"
                - paragraph [ref=e90]: $512.71
        - generic [ref=e91]:
          - generic [ref=e92]:
            - heading "Order Summary (2 items)" [level=2] [ref=e93]
            - generic [ref=e96]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e98]
              - generic [ref=e99]:
                - paragraph [ref=e100] [cursor=pointer]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
                - paragraph [ref=e101]: "SKU: 560-03335B"
              - generic [ref=e102]:
                - paragraph [ref=e103]: $233.58
                - paragraph [ref=e104]: "Qty: 2"
            - generic [ref=e105]:
              - generic [ref=e106]:
                - generic [ref=e107]: Subtotal (2 items)
                - generic [ref=e108]: $467.16
              - generic [ref=e109]:
                - generic [ref=e110]: Tax
                - generic [ref=e111]: $45.55
              - generic [ref=e112]:
                - generic [ref=e113]: "Shipping: Ground Shipping (FREE)"
                - text: $0.00
              - generic [ref=e115]:
                - generic [ref=e116]: Total
                - generic [ref=e117]: $512.71
          - generic [ref=e119]:
            - heading "NEED HELP?" [level=2] [ref=e120]
            - generic [ref=e121]:
              - generic [ref=e128]:
                - link "HASSLE-FREE RETURNS" [ref=e129] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e130]: We strive to have the best customer service in the business.
              - generic [ref=e137]:
                - link "FREE SHIPPING" [ref=e138] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e139]: Free shipping anywhere in the continental United States.
              - generic [ref=e143]:
                - link "1-YEAR WARRANTY" [ref=e144] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e145]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e150]:
                - link "100% COMPATIBLE" [ref=e151] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e152]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - generic [ref=e153]:
        - button "Return to address" [ref=e154] [cursor=pointer]
        - button "Continue" [ref=e157] [cursor=pointer]
      - separator [ref=e159]
      - generic [ref=e160]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e161]
        - generic [ref=e162]:
          - link [ref=e163] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e167]: 1-888-790-5899
          - link [ref=e168] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e173]: support@roadreadywheels.com
          - button [ref=e174] [cursor=pointer]:
            - paragraph [ref=e178]: Live Chat
      - generic [ref=e180]:
        - generic [ref=e181]:
          - heading "Certified & Secured by:" [level=4] [ref=e182]
          - img "Trusted Secure" [ref=e185]
        - generic [ref=e186]:
          - heading "We Accept:" [level=4] [ref=e187]
          - generic [ref=e188]:
            - generic [ref=e189]:
              - img "American Express" [ref=e191]
              - img "Visa" [ref=e193]
              - img "Mastercard" [ref=e195]
              - img "Paypal" [ref=e197]
              - img "Discover" [ref=e199]
              - img "Apple Pay" [ref=e201]
              - img "Affirm" [ref=e203]
            - generic [ref=e204]:
              - img "Amazon Pay" [ref=e206]
              - img "Google Pay" [ref=e208]
    - contentinfo [ref=e209]:
      - generic [ref=e210]:
        - generic [ref=e211]:
          - generic [ref=e212]:
            - heading "Contact Us" [level=3] [ref=e213]
            - generic [ref=e214]:
              - paragraph [ref=e215]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e216] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e217]:
                - text: "Text:"
                - link "217-635-2033" [ref=e218] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e219] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e220]:
              - link "Visit our Facebook page" [ref=e221] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e224] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e225]
              - link "Visit our Instagram page" [ref=e226] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e230] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e234]:
              - img "BBB Accredited" [ref=e236]
              - img "WTC Member" [ref=e238]
          - generic [ref=e239]:
            - heading "Support" [level=3] [ref=e240]
            - generic [ref=e241]:
              - link "Returns and Refunds" [ref=e242] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e243] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e244] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e245] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e246] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e247] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e248] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e249] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e250]:
            - heading "Why Road Ready" [level=3] [ref=e251]
            - generic [ref=e252]:
              - link "About Us" [ref=e253] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e254] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e255]:
            - heading "Divisions" [level=3] [ref=e256]
            - generic [ref=e257]:
              - link "Wholesale" [ref=e258] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e259] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e260]:
          - paragraph [ref=e262]:
            - strong [ref=e263]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e264]:
            - paragraph [ref=e265]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e266]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e267] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1  | import {Page , Locator} from '@playwright/test';
  2  | import BasePage from './BasePage';
  3  | 
  4  | export default class CheckoutReviewPage extends BasePage {
  5  |     readonly shippingRadios: Locator;
  6  |   readonly continueButton: Locator;
  7  |   readonly subtotalText: Locator;
  8  |   readonly taxText: Locator;
  9  |   readonly totalText: Locator;
  10 |   readonly chargeOrderButton: Locator;
  11 |   readonly continueWithChargeOrderButton: Locator;
  12 | constructor(page: Page) {
  13 |     super(page);
  14 | 
  15 |     
  16 |     this.shippingRadios = page.getByRole('radio');
  17 | 
  18 |     
  19 |     this.continueButton = page.getByRole('button', { name: 'Continue' });
  20 | 
  21 |    
  22 |     this.subtotalText = page.getByText(/Subtotal \(\d+ items?\)\$/);
  23 |     this.taxText = page.getByText(/^Tax \$/);
  24 |     this.totalText = page.getByText(/^\$\d+\.\d{2}$/).last();
  25 | 
  26 |     this.chargeOrderButton = page.getByRole('button', { name: /Charge Order/ });
  27 |     this.continueWithChargeOrderButton = page.getByRole('button', {
  28 |       name: 'Continue with Charge Order',
  29 |     });
  30 |   }
  31 |    async selectAvailableShippingOption(): Promise<string> {
  32 |     await this.shippingRadios.first().waitFor({ state: 'visible', timeout: 10000 });
  33 | 
  34 |     const count = await this.shippingRadios.count();
  35 |     for (let i = 0; i < count; i++) {
  36 |       const radio = this.shippingRadios.nth(i);
  37 |       const isEnabled = await radio.isEnabled();
  38 |       if (isEnabled) {
  39 |        
  40 |         const label = await radio.getAttribute('aria-label') ?? '';
  41 |         await radio.check();
  42 |         console.log('Selected shipping option:', label);
  43 |         return label;
  44 |       }
  45 |     }
  46 | 
  47 |     throw new Error('No enabled shipping option found');
  48 |   }
  49 |     private extractAmount(text: string): number {
  50 |     const match = text.match(/\$?([\d,]+\.\d{2})/);
  51 |     if (!match) {
> 52 |       throw new Error(`Could not extract amount from: "${text}"`);
     |             ^ Error: Could not extract amount from: ""
  53 |     }
  54 |     return parseFloat(match[1].replace(',', ''));
  55 |   }
  56 | 
  57 |   async getSubtotal(): Promise<number> {
  58 |     const text = await this.subtotalText.textContent();
  59 |     return this.extractAmount(text ?? '');
  60 |   }
  61 | 
  62 |   async getTax(): Promise<number> {
  63 |     const text = await this.taxText.textContent();
  64 |     return this.extractAmount(text ?? '');
  65 |   }
  66 | 
  67 |   async getTotal(): Promise<number> {
  68 |     const text = await this.totalText.textContent();
  69 |     return this.extractAmount(text ?? '');
  70 |   }
  71 |   extractShippingCost(shippingLabel: string): number {
  72 |     return this.extractAmount(shippingLabel);
  73 |   }
  74 | 
  75 |  
  76 |   async clickContinue() {
  77 |     await this.continueButton.first().click();
  78 |   }
  79 | 
  80 |   
  81 |   async clickSecondContinue() {
  82 |     await this.continueButton.nth(1).click();
  83 |   }
  84 | 
  85 |   async clickChargeOrder() {
  86 |     await this.chargeOrderButton.click();
  87 |   }
  88 | 
  89 |   async clickContinueWithChargeOrder() {
  90 |     await this.continueWithChargeOrderButton.click();
  91 |   }
  92 | 
  93 |   
  94 |   async declineUpsellInIframe() {
  95 |     const frame = this.page.frameLocator('iframe[name^="I0_"]');
  96 |     await frame.getByRole('button', { name: 'NO' }).click();
  97 |   }
  98 | 
  99 | }
```