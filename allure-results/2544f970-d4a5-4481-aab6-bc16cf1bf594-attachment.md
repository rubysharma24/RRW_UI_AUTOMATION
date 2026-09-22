# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: creditCardCheckout.spec.ts >> Checkout Flow - Credit Card Payment >> should complete order using Credit Card payment
- Location: tests\creditCardCheckout.spec.ts:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Charge Order', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Charge Order', { exact: true }) with timeout 5000ms
  - waiting for getByText('Charge Order', { exact: true })

```

```yaml
- region "Notifications Alt+T"
- alert: Order Confirmation - Road Ready Wheels
- iframe
- iframe
- banner:
  - link "ROADREADY":
    - /url: /
  - combobox "Search category":
    - option "Search All" [selected]
    - option "Hollander"
    - option "OE#"
  - textbox "Search for wheels":
    - /placeholder: Search globally for make, model, part number... . . .
  - button "Search" [disabled]
  - button "Resale"
  - button "Wholesale"
  - button "Select State":
    - img
    - text: Select State
  - text: "|"
  - button:
    - img
    - img
  - text: "|"
  - button "Cart is empty" [disabled]:
    - img
- heading "Your Cart 0 items" [level=2]
- button "Close cart":
  - img
- paragraph: Your cart is empty
- heading "Thank You For Your Order" [level=1]
- paragraph: Please keep the order number for your reference.
- text: "Order Number: R850230824 Order Date: 09/18/26 Customer Email: raja@g.com"
- paragraph: Would you like to send this order confirmation to anyone else? Please input the additional email address below and click SEND.
- textbox "Enter email"
- button "SEND"
- heading "Order Summary For Your Reference" [level=3]
- text: Subtotal (1) $233.58 Shipping (Ground Shipping (FREE)) $0.00 Tax $22.77 Discount $0.00 Total $256.35
- button "VIEW CONTENTS OF ORDER"
- button "PRINT":
  - img
  - text: PRINT
- heading "Important Order Information" [level=2]
- paragraph: PLEASE CONFIRM THE FOLLOWING INFORMATION
- text: "Rim Size Ordered: 16\" Mandatory Tire Size For Exact Fitment: 16\""
- paragraph: "Example: Look For The Two Numbers Immediately Following R."
- paragraph: You Dont Need Complete Or Exact Purchase
- img "16\" Rim illustration"
- paragraph: Still unsure? Click the button below to send a help request to a wheel expert.
- button "HELP PLEASE"
- heading "Shipping Information" [level=2]
- paragraph: raja sharma
- paragraph: TCS
- paragraph: w3vvvvvvvvvvvvvv
- paragraph: Mountain View California 90012
- paragraph: United States
- paragraph: "Phone: 9368047877"
- paragraph: "Shipping Cost: $0.00"
- paragraph: "Estimated Ship Date: Friday, September 18th"
- paragraph: "Estimated Delivery Date: Thursday, September 24th - Friday, September 25th"
- heading "Billing Information" [level=2]
- paragraph: raja sharma
- paragraph: TCS
- paragraph: w3vvvvvvvvvvvvvv
- paragraph: Mountain View California 90012
- paragraph: United States
- paragraph: "Phone: 9368047877"
- paragraph: Payment Method
- paragraph: Credit Card
- heading "Customer Support Portal" [level=2]
- list:
  - listitem:
    - paragraph: Do you need to cancel this order?
  - listitem:
    - paragraph: Do you need to change this order?
  - listitem:
    - paragraph: Do you need to change your shipping information?
  - listitem:
    - paragraph: Any other questions?
- button "SEND REQUEST"
- heading "FAQ Portal" [level=2]
- link "Return Policy":
  - /url: /faq
- link "How Long Does It Take To Ship To Me":
  - /url: /faq
- link "Warranty Policy":
  - /url: /faq
- link "What Comes With My Wheel":
  - /url: /faq
- contentinfo:
  - heading "Contact Us" [level=3]
  - paragraph:
    - text: "Call:"
    - link "1-888-790-5899":
      - /url: tel:+18887905899
  - paragraph:
    - text: "Text:"
    - link "217-635-2033":
      - /url: tel:+12176352033
  - link "support@roadreadywheels.com":
    - /url: mailto:support@roadreadywheels.com
  - link "Visit our Facebook page":
    - /url: https://www.facebook.com/roadreadywheels/
    - img
  - link "X (Twitter)":
    - /url: https://twitter.com/RoadReadyWheel1
    - img "X (Twitter)"
  - link "Visit our Instagram page":
    - /url: https://www.instagram.com/roadreadywheels/
    - img
  - link "Visit our YouTube channel":
    - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
    - img
  - img "BBB Accredited"
  - img "WTC Member"
  - heading "Support" [level=3]
  - link "Returns and Refunds":
    - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
  - link "Contact Us":
    - /url: /contact
  - link "Warranty":
    - /url: /faq/what-is-your-product-warranty?id=9
  - link "FAQs":
    - /url: /faq
  - link "Wheel Requests":
    - /url: /wheel-requests
  - link "Terms of Service":
    - /url: /terms-of-service
  - link "Privacy Policy":
    - /url: /privacy-policy
  - link "Shipping Policy":
    - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
  - heading "Why Road Ready" [level=3]
  - link "About Us":
    - /url: /about-us
  - link "Price Comparison":
    - /url: /price-comparison
  - heading "Divisions" [level=3]
  - link "Wholesale":
    - /url: /wholesale
  - link "Resale":
    - /url: /resale
  - paragraph:
    - strong: "DISCLAIMER :"
    - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
  - paragraph: 2026 Road Ready Wheels All Rights Reserved
  - paragraph:
    - text: Made with ❤️ at
    - link "W3villa Technologies":
      - /url: https://www.w3villa.com/
- iframe
- dialog:
  - iframe
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export default class BasePage {
  4  |   readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async goto(path: string = '/') {
  11 |     await this.page.goto(path);
  12 |   }
  13 | 
  14 |   async getTitle(): Promise<string> {
  15 |     return this.page.title();
  16 |   }
  17 | 
  18 |  async click(locator: Locator) {
  19 |   await locator.waitFor({ state: 'visible' });
  20 |   await locator.scrollIntoViewIfNeeded();
  21 |   await expect(locator).toBeEnabled({ timeout: 15000 });
  22 |   await locator.click();
  23 | }
  24 | 
  25 |   async fill(locator: Locator, value: string) {
  26 |     await locator.waitFor({ state: 'visible' });
  27 |     await locator.fill(value);
  28 |   }
  29 | 
  30 |   async isVisible(locator: Locator): Promise<boolean> {
  31 |     return locator.isVisible();
  32 |   }
  33 | 
  34 |   async expectVisible(locator: Locator) {
> 35 |     await expect(locator).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  36 |   }
  37 | 
  38 |   async expectText(locator: Locator, text: string) {
  39 |     await expect(locator).toContainText(text);
  40 |   }
  41 | }
  42 | 
```