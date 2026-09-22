# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:27:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Close modal' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]
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
          - button "Open cart" [ref=e44] [cursor=pointer]:
            - generic [ref=e49]: "2"
    - generic:
      - generic:
        - generic:
          - heading "Your Cart (2 items)" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - checkbox "E-Mail Shopping Cart To Me"
              - text: E-Mail Shopping Cart To Me
            - generic:
              - generic:
                - textbox "Enter your email"
                - button "Send Email"
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                  - generic:
                    - generic:
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4]
                      - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart"
                    - paragraph: "SKU: 560-03335B"
                    - generic:
                      - generic:
                        - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                        - generic: "2"
                        - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                      - generic: $233.58
          - generic:
            - generic:
              - generic:
                - generic: Subtotal (2 items)
                - generic: $467.16
              - generic:
                - button "Shipping Select State":
                  - generic: Shipping
                  - generic:
                    - button "Select State"
              - generic:
                - generic: Total
                - generic: $512.71
            - generic:
              - paragraph: Express Checkouts
              - generic:
                - generic:
                  - img "Amazon Pay"
                  - generic:
                    - generic:
                      - img "AmazonPay"
                  - button "Pay with Amazon Pay"
                - generic:
                  - img "Google Pay"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - button "Pay with GPay"
                  - button "Pay with Google Pay"
            - generic:
              - button "Complete Checkout"
            - generic:
              - generic:
                - img "American Express"
              - generic:
                - img "Visa"
              - generic:
                - img "Mastercard"
              - generic:
                - img "PayPal"
              - generic:
                - img "Discover"
              - generic:
                - img "Apple Pay"
              - generic:
                - img "Affirm"
            - separator
            - generic:
              - paragraph: Questions?
              - generic:
                - link:
                  - /url: tel:1-888-790-5899
                - link:
                  - /url: mailto:support@roadreadywheels.com
                - button "Open live chat"
            - generic:
              - paragraph: Awesomely Secured 🔒
              - generic:
                - img "Trusted Secure"
    - banner [ref=e50]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: Browse By Vehicle
          - generic "Select Make" [ref=e57] [cursor=pointer]:
            - generic [ref=e59]:
              - combobox "Select Make" [ref=e61]
              - generic: Select Make
          - generic "Select Model" [ref=e62] [cursor=pointer]:
            - generic [ref=e64]:
              - combobox "Select Model" [disabled] [ref=e66]
              - generic: Select Model
          - generic "Select Year" [ref=e67] [cursor=pointer]:
            - generic [ref=e69]:
              - combobox "Select Year" [disabled] [ref=e71]
              - generic: Select Year
          - button "Search" [ref=e72] [cursor=pointer]
        - generic [ref=e73]:
          - generic [ref=e74]: Browse All Wheels
          - generic [ref=e75]:
            - button "By Category" [ref=e76] [cursor=pointer]
            - button "Top Brands" [ref=e77] [cursor=pointer]
            - button "Featured Items" [ref=e78] [cursor=pointer]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart (2 items)" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - checkbox "E-Mail Shopping Cart To Me"
              - text: E-Mail Shopping Cart To Me
            - generic:
              - generic:
                - textbox "Enter your email"
                - button "Send Email"
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                  - generic:
                    - generic:
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4]
                      - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart"
                    - paragraph: "SKU: 560-03335B"
                    - generic:
                      - generic:
                        - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                        - generic: "2"
                        - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim"
                      - generic: $233.58
          - generic:
            - generic:
              - generic:
                - generic: Subtotal (2 items)
                - generic: $467.16
              - generic:
                - button "Shipping Select State":
                  - generic: Shipping
                  - generic:
                    - button "Select State"
              - generic:
                - generic: Total
                - generic: $512.71
            - generic:
              - paragraph: Express Checkouts
              - generic:
                - generic:
                  - img "Amazon Pay"
                  - generic:
                    - generic:
                      - img "AmazonPay"
                  - button "Pay with Amazon Pay"
                - generic:
                  - img "Google Pay"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - button "Pay with GPay"
                  - button "Pay with Google Pay"
            - generic:
              - button "Complete Checkout"
            - generic:
              - generic:
                - img "American Express"
              - generic:
                - img "Visa"
              - generic:
                - img "Mastercard"
              - generic:
                - img "PayPal"
              - generic:
                - img "Discover"
              - generic:
                - img "Apple Pay"
              - generic:
                - img "Affirm"
            - separator
            - generic:
              - paragraph: Questions?
              - generic:
                - link:
                  - /url: tel:1-888-790-5899
                - link:
                  - /url: mailto:support@roadreadywheels.com
                - button "Open live chat"
            - generic:
              - paragraph: Awesomely Secured 🔒
              - generic:
                - img "Trusted Secure"
    - generic [ref=e79]:
      - generic "Background promotional video" [ref=e80]
      - button "Watch Full Video" [ref=e82] [cursor=pointer]
      - generic [ref=e85]:
        - heading "The Industry Leader in OEM Replacement Wheels" [level=1] [ref=e86]
        - paragraph [ref=e87]: Precision Made. Priced Right.
        - button "Shop Now" [ref=e88] [cursor=pointer]
    - generic [ref=e90]:
      - heading "See Why Thousands Have Chosen Road Ready" [level=2] [ref=e92]
      - generic [ref=e93]:
        - generic [ref=e94]:
          - heading "Hassle-Free Returns" [level=3] [ref=e100]
          - paragraph [ref=e101]: We strive to have the best customer service in the business
        - generic [ref=e102]:
          - heading "Fast Shipping" [level=3] [ref=e110]
          - paragraph [ref=e111]: Free shipping anywhere in the continental United States
        - generic [ref=e112]:
          - heading "1-Year Warranty" [level=3] [ref=e117]
          - paragraph [ref=e118]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
        - generic [ref=e119]:
          - heading "Compatible" [level=3] [ref=e125]
          - paragraph [ref=e126]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
    - generic [ref=e127]:
      - generic: "\""
      - generic: "\""
      - generic [ref=e128]:
        - generic [ref=e130]:
          - generic [ref=e131]:
            - blockquote [ref=e132]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
            - separator [ref=e133]
            - generic [ref=e134]: B. Greasor
          - generic [ref=e135]:
            - blockquote [ref=e136]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
            - separator [ref=e137]
            - generic [ref=e138]: G. Fuller
          - generic [ref=e139]:
            - blockquote [ref=e140]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
            - separator [ref=e141]
            - generic [ref=e142]: A. Mini
          - generic [ref=e143]:
            - blockquote [ref=e144]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
            - separator [ref=e145]
            - generic [ref=e146]: P. Rockland
          - generic [ref=e147]:
            - blockquote [ref=e148]: “Looks like the factory wheels at half the price!”
            - separator [ref=e149]
            - generic [ref=e150]: T. Thurman
          - generic [ref=e151]:
            - blockquote [ref=e152]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
            - separator [ref=e153]
            - generic [ref=e154]: E. Bienas
          - generic [ref=e155]:
            - blockquote [ref=e156]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
            - separator [ref=e157]
            - generic [ref=e158]: C. Bock
          - generic [ref=e159]:
            - blockquote [ref=e160]: “Arrived quicker than expected and works fine on our Smart Car.”
            - separator [ref=e161]
            - generic [ref=e162]: Redbudok86
          - generic [ref=e163]:
            - blockquote [ref=e164]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
            - separator [ref=e165]
            - generic [ref=e166]: Folgers4545
          - generic [ref=e167]:
            - blockquote [ref=e168]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
            - separator [ref=e169]
            - generic [ref=e170]: WN4ISX
        - generic [ref=e171]:
          - button "Go to testimonial 1" [ref=e172] [cursor=pointer]
          - button "Go to testimonial 2" [ref=e173] [cursor=pointer]
          - button "Go to testimonial 3" [ref=e174] [cursor=pointer]
          - button "Go to testimonial 4" [ref=e175] [cursor=pointer]
          - button "Go to testimonial 5" [ref=e176] [cursor=pointer]
          - button "Go to testimonial 6" [ref=e177] [cursor=pointer]
          - button "Go to testimonial 7" [ref=e178] [cursor=pointer]
          - button "Go to testimonial 8" [ref=e179] [cursor=pointer]
          - button "Go to testimonial 9" [ref=e180] [cursor=pointer]
          - button "Go to testimonial 10" [ref=e181] [cursor=pointer]
    - generic [ref=e184]:
      - generic [ref=e190]:
        - heading "Precision Made. Priced Right." [level=3] [ref=e191]: Precision Made.Priced Right.
        - paragraph [ref=e192]: Looking for the highest quality wheels for the lowest price?
        - link "Shop Now" [ref=e193] [cursor=pointer]:
          - /url: /t/categories
      - generic [ref=e202]:
        - heading "Why Road Ready" [level=3] [ref=e203]
        - paragraph [ref=e204]: We like to think of ourselves as the most trusted wheel supplier in the business. But why take our word for it? See why 40,000+ have chosen Road Ready.
        - link "Learn About" [ref=e205] [cursor=pointer]:
          - /url: /about-us
    - generic [ref=e208]:
      - generic [ref=e209]:
        - heading "Free Shipping" [level=3] [ref=e217]
        - paragraph [ref=e218]: Free shipping anywhere in the continental United States
      - generic [ref=e219]:
        - heading "Hassle-Free Returns" [level=3] [ref=e225]
        - paragraph [ref=e226]: We strive to have the best customer service in the business
      - generic [ref=e227]:
        - heading "1-Year Warranty" [level=3] [ref=e232]
        - paragraph [ref=e233]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
      - generic [ref=e234]:
        - heading "Trust the Quality" [level=3] [ref=e240]
        - paragraph [ref=e241]: All wheels have been SAEJ250 tested and DOT approved.
    - generic [ref=e243]:
      - heading "Join the Movement" [level=2] [ref=e245]
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e256]: 1,000,000+
          - paragraph [ref=e257]: Steel & aluminum wheels sold
        - generic [ref=e258]:
          - generic [ref=e265]: 99%
          - paragraph [ref=e266]: Our packages arrive safely or on time
        - generic [ref=e267]:
          - generic [ref=e275]: 500,000+
          - paragraph [ref=e276]: Truly happy customers
    - contentinfo [ref=e277]:
      - generic [ref=e278]:
        - generic [ref=e279]:
          - generic [ref=e280]:
            - heading "Contact Us" [level=3] [ref=e281]
            - generic [ref=e282]:
              - paragraph [ref=e283]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e284] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e285]:
                - text: "Text:"
                - link "217-635-2033" [ref=e286] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e287] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e288]:
              - link "Visit our Facebook page" [ref=e289] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e292] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e293]
              - link "Visit our Instagram page" [ref=e294] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e298] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e302]:
              - img "BBB Accredited" [ref=e304]
              - img "WTC Member" [ref=e306]
          - generic [ref=e307]:
            - heading "Support" [level=3] [ref=e308]
            - generic [ref=e309]:
              - link "Returns and Refunds" [ref=e310] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e311] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e312] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e313] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e314] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e315] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e316] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e317] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e318]:
            - heading "Why Road Ready" [level=3] [ref=e319]
            - generic [ref=e320]:
              - link "About Us" [ref=e321] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e322] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e323]:
            - heading "Divisions" [level=3] [ref=e324]
            - generic [ref=e325]:
              - link "Wholesale" [ref=e326] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e327] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e328]:
          - paragraph [ref=e330]:
            - strong [ref=e331]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e332]:
            - paragraph [ref=e333]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e334]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e335] [cursor=pointer]:
                - /url: https://www.w3villa.com/
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
> 19 |   await locator.waitFor({ state: 'visible' });
     |                 ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  20 |   await locator.scrollIntoViewIfNeeded();
  21 |   await locator.click();
  22 | }
  23 | 
  24 |   async fill(locator: Locator, value: string) {
  25 |     await locator.waitFor({ state: 'visible' });
  26 |     await locator.fill(value);
  27 |   }
  28 | 
  29 |   async isVisible(locator: Locator): Promise<boolean> {
  30 |     return locator.isVisible();
  31 |   }
  32 | 
  33 |   async expectVisible(locator: Locator) {
  34 |     await expect(locator).toBeVisible();
  35 |   }
  36 | 
  37 |   async expectText(locator: Locator, text: string) {
  38 |     await expect(locator).toContainText(text);
  39 |   }
  40 | }
  41 | 
```