# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - RoadReady Wheels >> should navigate to search results page after clicking search
- Location: tests\search.spec.ts:15:7

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByRole('button', { name: 'Search', exact: true }) resolved to 2 elements:
    1) <button disabled type="submit" class="h-10 bg-[#bf1e2e] hover:bg-[#9d1825] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 text-white px-4 rounded-r-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 min-w-[90px]">Search</button> aka getByRole('button', { name: 'Search' }).nth(1)
    2) <button class="h-8 px-6 bg-[#bf1e2e] hover:bg-red-700 text-white rounded text-xs transition-colors">Search</button> aka getByRole('button', { name: 'Search' }).nth(2)

Call log:
  - waiting for getByRole('button', { name: 'Search', exact: true }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - region "Notifications Alt+T":
    - alert [ref=e2]:
      - text: Successfully logged in
      - button "close" [ref=e6] [cursor=pointer]
      - progressbar [aria-hidden] [ref=e11]
  - alert [ref=e12]
  - iframe [ref=e13]
  - iframe [ref=e14]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e15]:
    - banner [ref=e16]:
      - generic [ref=e19]:
        - link "ROADREADY" [ref=e20] [cursor=pointer]:
          - /url: /
        - generic [ref=e23]:
          - combobox "Search category" [ref=e25] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - generic [ref=e26]:
            - textbox "Search for wheels" [active] [ref=e27]:
              - /placeholder: Search globally for make, model, part number... . . .
              - text: 560-64127
            - button "Clear search" [ref=e28] [cursor=pointer]
          - button "Search" [disabled] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - button "Resale" [ref=e37] [cursor=pointer]
            - button "Wholesale" [ref=e39] [cursor=pointer]
          - button "Select State" [ref=e42] [cursor=pointer]
          - generic [ref=e49]: "|"
          - button [ref=e51] [cursor=pointer]
          - generic [ref=e57]: "|"
          - button "Open cart" [ref=e58] [cursor=pointer]:
            - generic [ref=e63]: "2"
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
                      - generic:
                        - paragraph: Loading Amazon Pay...
                  - button "Pay with Amazon Pay"
                - generic:
                  - img "Google Pay"
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
    - banner [ref=e64]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e70]: Browse By Vehicle
          - generic "Select Make" [ref=e71] [cursor=pointer]:
            - generic [ref=e73]:
              - combobox "Select Make" [ref=e75]
              - generic: Select Make
          - generic "Select Model" [ref=e76] [cursor=pointer]:
            - generic [ref=e78]:
              - combobox "Select Model" [disabled] [ref=e80]
              - generic: Select Model
          - generic "Select Year" [ref=e81] [cursor=pointer]:
            - generic [ref=e83]:
              - combobox "Select Year" [disabled] [ref=e85]
              - generic: Select Year
          - button "Search" [ref=e86] [cursor=pointer]
        - generic [ref=e87]:
          - generic [ref=e88]: Browse All Wheels
          - generic [ref=e89]:
            - button "By Category" [ref=e90] [cursor=pointer]
            - button "Top Brands" [ref=e91] [cursor=pointer]
            - button "top product" [ref=e92] [cursor=pointer]
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
                      - generic:
                        - paragraph: Loading Amazon Pay...
                  - button "Pay with Amazon Pay"
                - generic:
                  - img "Google Pay"
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
    - generic [ref=e93]:
      - generic "Background promotional video" [ref=e94]
      - button "Watch Full Video" [ref=e96] [cursor=pointer]
      - generic [ref=e99]:
        - heading "The Industry Leader in OEM Replacement Wheels" [level=1] [ref=e100]
        - paragraph [ref=e101]: Precision Made. Priced Right.
        - button "Shop Now" [ref=e102] [cursor=pointer]
    - generic [ref=e104]:
      - heading "See Why Thousands Have Chosen Road Ready" [level=2] [ref=e106]
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Hassle-Free Returns" [level=3] [ref=e114]
          - paragraph [ref=e115]: We strive to have the best customer service in the business
        - generic [ref=e116]:
          - heading "Fast Shipping" [level=3] [ref=e124]
          - paragraph [ref=e125]: Free shipping anywhere in the continental United States
        - generic [ref=e126]:
          - heading "1-Year Warranty" [level=3] [ref=e131]
          - paragraph [ref=e132]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
        - generic [ref=e133]:
          - heading "Compatible" [level=3] [ref=e139]
          - paragraph [ref=e140]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
    - generic [ref=e141]:
      - generic: "\""
      - generic: "\""
      - generic [ref=e142]:
        - generic [ref=e144]:
          - generic [ref=e145]:
            - blockquote [ref=e146]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
            - separator [ref=e147]
            - generic [ref=e148]: B. Greasor
          - generic [ref=e149]:
            - blockquote [ref=e150]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
            - separator [ref=e151]
            - generic [ref=e152]: G. Fuller
          - generic [ref=e153]:
            - blockquote [ref=e154]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
            - separator [ref=e155]
            - generic [ref=e156]: A. Mini
          - generic [ref=e157]:
            - blockquote [ref=e158]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
            - separator [ref=e159]
            - generic [ref=e160]: P. Rockland
          - generic [ref=e161]:
            - blockquote [ref=e162]: “Looks like the factory wheels at half the price!”
            - separator [ref=e163]
            - generic [ref=e164]: T. Thurman
          - generic [ref=e165]:
            - blockquote [ref=e166]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
            - separator [ref=e167]
            - generic [ref=e168]: E. Bienas
          - generic [ref=e169]:
            - blockquote [ref=e170]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
            - separator [ref=e171]
            - generic [ref=e172]: C. Bock
          - generic [ref=e173]:
            - blockquote [ref=e174]: “Arrived quicker than expected and works fine on our Smart Car.”
            - separator [ref=e175]
            - generic [ref=e176]: Redbudok86
          - generic [ref=e177]:
            - blockquote [ref=e178]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
            - separator [ref=e179]
            - generic [ref=e180]: Folgers4545
          - generic [ref=e181]:
            - blockquote [ref=e182]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
            - separator [ref=e183]
            - generic [ref=e184]: WN4ISX
        - generic [ref=e185]:
          - button "Go to testimonial 1" [ref=e186] [cursor=pointer]
          - button "Go to testimonial 2" [ref=e187] [cursor=pointer]
          - button "Go to testimonial 3" [ref=e188] [cursor=pointer]
          - button "Go to testimonial 4" [ref=e189] [cursor=pointer]
          - button "Go to testimonial 5" [ref=e190] [cursor=pointer]
          - button "Go to testimonial 6" [ref=e191] [cursor=pointer]
          - button "Go to testimonial 7" [ref=e192] [cursor=pointer]
          - button "Go to testimonial 8" [ref=e193] [cursor=pointer]
          - button "Go to testimonial 9" [ref=e194] [cursor=pointer]
          - button "Go to testimonial 10" [ref=e195] [cursor=pointer]
    - generic [ref=e198]:
      - generic [ref=e204]:
        - heading "Precision Made. Priced Right." [level=3] [ref=e205]: Precision Made.Priced Right.
        - paragraph [ref=e206]: Looking for the highest quality wheels for the lowest price?
        - link "Shop Now" [ref=e207] [cursor=pointer]:
          - /url: /t/categories
      - generic [ref=e216]:
        - heading "Why Road Ready" [level=3] [ref=e217]
        - paragraph [ref=e218]: We like to think of ourselves as the most trusted wheel supplier in the business. But why take our word for it? See why 40,000+ have chosen Road Ready.
        - link "Learn About" [ref=e219] [cursor=pointer]:
          - /url: /about-us
    - generic [ref=e222]:
      - generic [ref=e223]:
        - heading "Free Shipping" [level=3] [ref=e231]
        - paragraph [ref=e232]: Free shipping anywhere in the continental United States
      - generic [ref=e233]:
        - heading "Hassle-Free Returns" [level=3] [ref=e239]
        - paragraph [ref=e240]: We strive to have the best customer service in the business
      - generic [ref=e241]:
        - heading "1-Year Warranty" [level=3] [ref=e246]
        - paragraph [ref=e247]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
      - generic [ref=e248]:
        - heading "Trust the Quality" [level=3] [ref=e254]
        - paragraph [ref=e255]: All wheels have been SAEJ250 tested and DOT approved.
    - generic [ref=e257]:
      - heading "Join the Movement" [level=2] [ref=e259]
      - generic [ref=e260]:
        - generic [ref=e261]:
          - generic [ref=e270]: 1,000,000+
          - paragraph [ref=e271]: Steel & aluminum wheels sold
        - generic [ref=e272]:
          - generic [ref=e279]: 99%
          - paragraph [ref=e280]: Our packages arrive safely or on time
        - generic [ref=e281]:
          - generic [ref=e289]: 500,000+
          - paragraph [ref=e290]: Truly happy customers
    - contentinfo [ref=e291]:
      - generic [ref=e292]:
        - generic [ref=e293]:
          - generic [ref=e294]:
            - heading "Contact Us" [level=3] [ref=e295]
            - generic [ref=e296]:
              - paragraph [ref=e297]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e298] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e299]:
                - text: "Text:"
                - link "217-635-2033" [ref=e300] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e301] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e302]:
              - link "Visit our Facebook page" [ref=e303] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e306] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e307]
              - link "Visit our Instagram page" [ref=e308] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e312] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e316]:
              - img "BBB Accredited" [ref=e318]
              - img "WTC Member" [ref=e320]
          - generic [ref=e321]:
            - heading "Support" [level=3] [ref=e322]
            - generic [ref=e323]:
              - link "Returns and Refunds" [ref=e324] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e325] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e326] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e327] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e328] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e329] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e330] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e331] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e332]:
            - heading "Why Road Ready" [level=3] [ref=e333]
            - generic [ref=e334]:
              - link "About Us" [ref=e335] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e336] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e337]:
            - heading "Divisions" [level=3] [ref=e338]
            - generic [ref=e339]:
              - link "Wholesale" [ref=e340] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e341] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e342]:
          - paragraph [ref=e344]:
            - strong [ref=e345]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e346]:
            - paragraph [ref=e347]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e348]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e349] [cursor=pointer]:
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
     |                 ^ Error: locator.waitFor: Error: strict mode violation: getByRole('button', { name: 'Search', exact: true }) resolved to 2 elements:
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