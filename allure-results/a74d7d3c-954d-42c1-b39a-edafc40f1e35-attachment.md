# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:28:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0

Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Order Confirmation - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e9]:
        - link "ROADREADY" [ref=e10] [cursor=pointer]:
          - /url: /
        - generic [ref=e13]:
          - combobox "Search category" [ref=e15] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e17]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - button "Resale" [ref=e23] [cursor=pointer]
            - button "Wholesale" [ref=e25] [cursor=pointer]
          - button "Select State" [ref=e28] [cursor=pointer]
          - generic [ref=e35]: "|"
          - button [ref=e37] [cursor=pointer]
          - generic [ref=e43]: "|"
          - button "Cart is empty" [disabled] [ref=e44]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e49]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Thank You For Your Order" [level=1] [ref=e53]
          - paragraph [ref=e55]: Please keep the order number for your reference.
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]: "Order Number:"
              - text: R041888793
            - generic [ref=e59]:
              - generic [ref=e60]: "Order Date:"
              - text: 09/17/26
            - generic [ref=e61]:
              - generic [ref=e62]: "Customer Email:"
              - text: raja@g.com
          - generic [ref=e63]:
            - paragraph [ref=e64]: Would you like to send this order confirmation to anyone else? Please input the additional email address below and click SEND.
            - generic [ref=e65]:
              - textbox "Enter email" [ref=e66]
              - button "SEND" [ref=e67] [cursor=pointer]
        - generic [ref=e68]:
          - heading "Order Summary For Your Reference" [level=3] [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: Subtotal (2)
              - generic [ref=e73]: $467.16
            - generic [ref=e74]:
              - generic [ref=e75]: Shipping (Ground Shipping (FREE))
              - generic [ref=e78]: $0.00
            - generic [ref=e79]:
              - generic [ref=e80]: Tax
              - generic [ref=e81]: $45.55
            - generic [ref=e82]:
              - generic [ref=e83]: Discount
              - generic [ref=e84]: $0.00
            - generic [ref=e86]:
              - generic [ref=e87]: Total
              - generic [ref=e88]: $512.71
          - button "VIEW CONTENTS OF ORDER" [ref=e89] [cursor=pointer]
          - button "PRINT" [ref=e90] [cursor=pointer]
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "Important Order Information" [level=2] [ref=e98]
          - generic [ref=e99]:
            - paragraph [ref=e100]: PLEASE CONFIRM THE FOLLOWING INFORMATION
            - generic [ref=e101]:
              - generic [ref=e102]: "Rim Size Ordered: 16\""
              - generic [ref=e103]: "Mandatory Tire Size For Exact Fitment: 16\""
            - generic [ref=e104]:
              - generic [ref=e105]:
                - paragraph [ref=e106]: "Example: Look For The Two Numbers Immediately Following R."
                - paragraph [ref=e107]: You Dont Need Complete Or Exact Purchase
              - img "16\" Rim illustration" [ref=e110]
            - paragraph [ref=e111]: Still unsure? Click the button below to send a help request to a wheel expert.
            - button "HELP PLEASE" [ref=e112] [cursor=pointer]
        - generic [ref=e113]:
          - heading "Shipping Information" [level=2] [ref=e115]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - paragraph [ref=e118]: raja sharma
              - paragraph [ref=e119]: TCS
              - paragraph [ref=e120]: w3vvvvvvvvvvvvvv
              - paragraph [ref=e121]: Mountain View California 90012
              - paragraph [ref=e122]: United States
              - paragraph [ref=e123]: "Phone: 9368047877"
            - paragraph [ref=e125]: "Shipping Cost: $0.00"
            - generic [ref=e126]:
              - paragraph [ref=e127]: "Estimated Ship Date: Thursday, September 17th"
              - paragraph [ref=e128]: "Estimated Delivery Date: Wednesday, September 23rd - Thursday, September 24th"
        - generic [ref=e129]:
          - heading "Billing Information" [level=2] [ref=e131]
          - generic [ref=e132]:
            - generic [ref=e133]:
              - paragraph [ref=e134]: raja sharma
              - paragraph [ref=e135]: TCS
              - paragraph [ref=e136]: w3vvvvvvvvvvvvvv
              - paragraph [ref=e137]: Mountain View California 90012
              - paragraph [ref=e138]: United States
              - paragraph [ref=e139]: "Phone: 9368047877"
            - generic [ref=e144]:
              - paragraph [ref=e145]: Payment Method
              - paragraph [ref=e146]: Charge Order
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Customer Support Portal" [level=2] [ref=e150]
          - generic [ref=e151]:
            - list [ref=e152]:
              - listitem [ref=e153]:
                - paragraph [ref=e154]: Do you need to cancel this order?
              - listitem [ref=e155]:
                - paragraph [ref=e156]: Do you need to change this order?
              - listitem [ref=e157]:
                - paragraph [ref=e158]: Do you need to change your shipping information?
              - listitem [ref=e159]:
                - paragraph [ref=e160]: Any other questions?
            - button "SEND REQUEST" [ref=e162] [cursor=pointer]
        - generic [ref=e163]:
          - heading "FAQ Portal" [level=2] [ref=e165]
          - generic [ref=e166]:
            - link "Return Policy" [ref=e167] [cursor=pointer]:
              - /url: /faq
            - link "How Long Does It Take To Ship To Me" [ref=e168] [cursor=pointer]:
              - /url: /faq
            - link "Warranty Policy" [ref=e169] [cursor=pointer]:
              - /url: /faq
            - link "What Comes With My Wheel" [ref=e170] [cursor=pointer]:
              - /url: /faq
    - contentinfo [ref=e171]:
      - generic [ref=e172]:
        - generic [ref=e173]:
          - generic [ref=e174]:
            - heading "Contact Us" [level=3] [ref=e175]
            - generic [ref=e176]:
              - paragraph [ref=e177]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e178] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e179]:
                - text: "Text:"
                - link "217-635-2033" [ref=e180] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e181] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e182]:
              - link "Visit our Facebook page" [ref=e183] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e186] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e187]
              - link "Visit our Instagram page" [ref=e188] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e192] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e196]:
              - img "BBB Accredited" [ref=e198]
              - img "WTC Member" [ref=e200]
          - generic [ref=e201]:
            - heading "Support" [level=3] [ref=e202]
            - generic [ref=e203]:
              - link "Returns and Refunds" [ref=e204] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e205] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e206] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e207] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e208] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e209] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e210] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e211] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e212]:
            - heading "Why Road Ready" [level=3] [ref=e213]
            - generic [ref=e214]:
              - link "About Us" [ref=e215] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e216] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e217]:
            - heading "Divisions" [level=3] [ref=e218]
            - generic [ref=e219]:
              - link "Wholesale" [ref=e220] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e221] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e222]:
          - paragraph [ref=e224]:
            - strong [ref=e225]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e226]:
            - paragraph [ref=e227]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e228]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e229] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import BasePage from './BasePage';
  3  | 
  4  | // Trimmed to just what's actually needed on the confirmation screen:
  5  | // Order Number + Customer Email. Order Date / Subtotal / Total dropped —
  6  | // totals are now verified against the Storefront API instead of scraped
  7  | // DOM text (see utils/orderApi.ts), which is more reliable than reading
  8  | // async-rendered summary rows.
  9  | export default class OrderConfirmationPage extends BasePage {
  10 |   readonly orderNumberRow: Locator;
  11 |   readonly customerEmailRow: Locator;
  12 |   readonly chargeOrderLabel: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 | 
  17 |     // exact: true, not a /^.../ prefix regex — a prefix regex also matches
  18 |     // the ROW itself (its combined text "Order Number:R396361057" also
  19 |     // starts with "Order Number:"), which resolves to 2 elements (label +
  20 |     // row) and throws a strict-mode violation on every read. exact match
  21 |     // only matches the label span, whose own text is exactly that string.
  22 |     this.orderNumberRow = page.getByText('Order Number:', { exact: true }).locator('..');
  23 |     this.customerEmailRow = page.getByText('Customer Email:', { exact: true }).locator('..');
  24 |     this.chargeOrderLabel = page.getByText('Charge Order', { exact: true });
  25 |   }
  26 | 
  27 |   async waitForConfirmation() {
  28 |     await this.orderNumberRow.waitFor({ state: 'visible', timeout: 20000 });
  29 |   }
  30 | 
  31 |   private extractAfterLabel(text: string, label: RegExp): string {
  32 |     const match = text.match(label);
  33 |     if (!match) {
  34 |       throw new Error(`Could not extract value after label from: "${text}"`);
  35 |     }
  36 |     return text.slice((match.index ?? 0) + match[0].length).trim();
  37 |   }
  38 | 
  39 |  
  40 |   private async getRowValue(
  41 |     row: Locator,
  42 |     label: RegExp,
  43 |     timeout = 15000
  44 |   ): Promise<string> {
  45 |     let value = '';
  46 | 
  47 |     await expect(async () => {
  48 |       const text = (await row.textContent()) ?? '';
  49 |       const extracted = this.extractAfterLabel(text, label);
  50 |       expect(extracted.length).toBeGreaterThan(0);
  51 |       value = extracted;
> 52 |     }).toPass({ timeout });
     |        ^ Error: expect(received).toBeGreaterThan(expected)
  53 | 
  54 |     return value;
  55 |   }
  56 | 
  57 |   async getOrderNumber(): Promise<string> {
  58 |     return this.getRowValue(this.orderNumberRow, /^Order Number:/);
  59 |   }
  60 | 
  61 |   async getCustomerEmail(): Promise<string> {
  62 |     return this.getRowValue(this.customerEmailRow, /^Customer Email:/);
  63 |   }
  64 | 
  65 |   async expectOrderPlaced() {
  66 |     await this.waitForConfirmation();
  67 |     await this.expectVisible(this.chargeOrderLabel);
  68 |   }
  69 | }
```