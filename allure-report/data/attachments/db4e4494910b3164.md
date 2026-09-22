# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - RoadReady Wheels >> should navigate to search results page after clicking search
- Location: tests\search.spec.ts:15:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Search', exact: true }) resolved to 2 elements:
    1) <button disabled type="submit" class="h-10 bg-[#bf1e2e] hover:bg-[#9d1825] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 text-white px-4 rounded-r-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 min-w-[90px]">Search</button> aka getByRole('button', { name: 'Search' }).first()
    2) <button class="h-8 px-6 bg-[#bf1e2e] hover:bg-red-700 text-white rounded text-xs transition-colors">Search</button> aka getByRole('button', { name: 'Search' }).nth(1)

Call log:
  - waiting for getByRole('button', { name: 'Search', exact: true })
    - locator resolved to <button disabled type="submit" class="h-10 bg-[#bf1e2e] hover:bg-[#9d1825] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 text-white px-4 rounded-r-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2 min-w-[90px]">Search</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T":
    - alert [ref=e2]:
      - text: Successfully logged in
      - button "close" [ref=e6] [cursor=pointer]
      - progressbar [aria-hidden] [ref=e11]
  - alert [ref=e12]
  - iframe [ref=e13]
  - generic [ref=e14]:
    - banner [ref=e15]:
      - generic [ref=e18]:
        - link "ROADREADY" [ref=e19] [cursor=pointer]:
          - /url: /
        - generic [ref=e22]:
          - combobox "Search category" [ref=e24] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e26]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - button "Resale" [ref=e32] [cursor=pointer]
            - button "Wholesale" [ref=e34] [cursor=pointer]
          - button "Select State" [ref=e37] [cursor=pointer]
          - generic [ref=e44]: "|"
          - button [ref=e46] [cursor=pointer]
          - generic [ref=e52]: "|"
          - button "Cart is empty" [disabled] [ref=e53]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - banner [ref=e58]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - generic [ref=e64]: Browse By Vehicle
          - generic "Select Make" [ref=e65] [cursor=pointer]:
            - generic [ref=e67]:
              - combobox "Select Make" [ref=e69]
              - generic: Select Make
          - generic "Select Model" [ref=e70] [cursor=pointer]:
            - generic [ref=e72]:
              - combobox "Select Model" [disabled] [ref=e74]
              - generic: Select Model
          - generic "Select Year" [ref=e75] [cursor=pointer]:
            - generic [ref=e77]:
              - combobox "Select Year" [disabled] [ref=e79]
              - generic: Select Year
          - button "Search" [ref=e80] [cursor=pointer]
        - generic [ref=e81]:
          - generic [ref=e82]: Browse All Wheels
          - generic [ref=e83]:
            - button "By Category" [ref=e84] [cursor=pointer]
            - button "Top Brands" [ref=e85] [cursor=pointer]
            - button "top product" [ref=e86] [cursor=pointer]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e87]:
      - generic "Background promotional video" [ref=e88]
      - button "Watch Full Video" [ref=e90] [cursor=pointer]
      - generic [ref=e93]:
        - heading "The Industry Leader in OEM Replacement Wheels" [level=1] [ref=e94]
        - paragraph [ref=e95]: Precision Made. Priced Right.
        - button "Shop Now" [ref=e96] [cursor=pointer]
    - generic [ref=e98]:
      - heading "See Why Thousands Have Chosen Road Ready" [level=2] [ref=e100]
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Hassle-Free Returns" [level=3] [ref=e108]
          - paragraph [ref=e109]: We strive to have the best customer service in the business
        - generic [ref=e110]:
          - heading "Fast Shipping" [level=3] [ref=e118]
          - paragraph [ref=e119]: Free shipping anywhere in the continental United States
        - generic [ref=e120]:
          - heading "1-Year Warranty" [level=3] [ref=e125]
          - paragraph [ref=e126]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
        - generic [ref=e127]:
          - heading "Compatible" [level=3] [ref=e133]
          - paragraph [ref=e134]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
    - generic [ref=e135]:
      - generic: "\""
      - generic: "\""
      - generic [ref=e136]:
        - generic [ref=e138]:
          - generic [ref=e139]:
            - blockquote [ref=e140]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
            - separator [ref=e141]
            - generic [ref=e142]: B. Greasor
          - generic [ref=e143]:
            - blockquote [ref=e144]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
            - separator [ref=e145]
            - generic [ref=e146]: G. Fuller
          - generic [ref=e147]:
            - blockquote [ref=e148]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
            - separator [ref=e149]
            - generic [ref=e150]: A. Mini
          - generic [ref=e151]:
            - blockquote [ref=e152]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
            - separator [ref=e153]
            - generic [ref=e154]: P. Rockland
          - generic [ref=e155]:
            - blockquote [ref=e156]: “Looks like the factory wheels at half the price!”
            - separator [ref=e157]
            - generic [ref=e158]: T. Thurman
          - generic [ref=e159]:
            - blockquote [ref=e160]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
            - separator [ref=e161]
            - generic [ref=e162]: E. Bienas
          - generic [ref=e163]:
            - blockquote [ref=e164]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
            - separator [ref=e165]
            - generic [ref=e166]: C. Bock
          - generic [ref=e167]:
            - blockquote [ref=e168]: “Arrived quicker than expected and works fine on our Smart Car.”
            - separator [ref=e169]
            - generic [ref=e170]: Redbudok86
          - generic [ref=e171]:
            - blockquote [ref=e172]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
            - separator [ref=e173]
            - generic [ref=e174]: Folgers4545
          - generic [ref=e175]:
            - blockquote [ref=e176]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
            - separator [ref=e177]
            - generic [ref=e178]: WN4ISX
        - generic [ref=e179]:
          - button "Go to testimonial 1" [ref=e180] [cursor=pointer]
          - button "Go to testimonial 2" [ref=e181] [cursor=pointer]
          - button "Go to testimonial 3" [ref=e182] [cursor=pointer]
          - button "Go to testimonial 4" [ref=e183] [cursor=pointer]
          - button "Go to testimonial 5" [ref=e184] [cursor=pointer]
          - button "Go to testimonial 6" [ref=e185] [cursor=pointer]
          - button "Go to testimonial 7" [ref=e186] [cursor=pointer]
          - button "Go to testimonial 8" [ref=e187] [cursor=pointer]
          - button "Go to testimonial 9" [ref=e188] [cursor=pointer]
          - button "Go to testimonial 10" [ref=e189] [cursor=pointer]
    - generic [ref=e192]:
      - generic [ref=e198]:
        - heading "Precision Made. Priced Right." [level=3] [ref=e199]: Precision Made.Priced Right.
        - paragraph [ref=e200]: Looking for the highest quality wheels for the lowest price?
        - link "Shop Now" [ref=e201] [cursor=pointer]:
          - /url: /t/categories
      - generic [ref=e210]:
        - heading "Why Road Ready" [level=3] [ref=e211]
        - paragraph [ref=e212]: We like to think of ourselves as the most trusted wheel supplier in the business. But why take our word for it? See why 40,000+ have chosen Road Ready.
        - link "Learn About" [ref=e213] [cursor=pointer]:
          - /url: /about-us
    - generic [ref=e216]:
      - generic [ref=e217]:
        - heading "Free Shipping" [level=3] [ref=e225]
        - paragraph [ref=e226]: Free shipping anywhere in the continental United States
      - generic [ref=e227]:
        - heading "Hassle-Free Returns" [level=3] [ref=e233]
        - paragraph [ref=e234]: We strive to have the best customer service in the business
      - generic [ref=e235]:
        - heading "1-Year Warranty" [level=3] [ref=e240]
        - paragraph [ref=e241]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
      - generic [ref=e242]:
        - heading "Trust the Quality" [level=3] [ref=e248]
        - paragraph [ref=e249]: All wheels have been SAEJ250 tested and DOT approved.
    - generic [ref=e251]:
      - heading "Join the Movement" [level=2] [ref=e253]
      - generic [ref=e254]:
        - generic [ref=e255]:
          - generic [ref=e264]: 1,000,000+
          - paragraph [ref=e265]: Steel & aluminum wheels sold
        - generic [ref=e266]:
          - generic [ref=e273]: 99%
          - paragraph [ref=e274]: Our packages arrive safely or on time
        - generic [ref=e275]:
          - generic [ref=e283]: 500,000+
          - paragraph [ref=e284]: Truly happy customers
    - contentinfo [ref=e285]:
      - generic [ref=e286]:
        - generic [ref=e287]:
          - generic [ref=e288]:
            - heading "Contact Us" [level=3] [ref=e289]
            - generic [ref=e290]:
              - paragraph [ref=e291]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e292] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e293]:
                - text: "Text:"
                - link "217-635-2033" [ref=e294] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e295] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e296]:
              - link "Visit our Facebook page" [ref=e297] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e300] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e301]
              - link "Visit our Instagram page" [ref=e302] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e306] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e310]:
              - img "BBB Accredited" [ref=e312]
              - img "WTC Member" [ref=e314]
          - generic [ref=e315]:
            - heading "Support" [level=3] [ref=e316]
            - generic [ref=e317]:
              - link "Returns and Refunds" [ref=e318] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e319] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e320] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e321] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e322] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e323] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e324] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e325] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e326]:
            - heading "Why Road Ready" [level=3] [ref=e327]
            - generic [ref=e328]:
              - link "About Us" [ref=e329] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e330] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e331]:
            - heading "Divisions" [level=3] [ref=e332]
            - generic [ref=e333]:
              - link "Wholesale" [ref=e334] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e335] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e336]:
          - paragraph [ref=e338]:
            - strong [ref=e339]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e340]:
            - paragraph [ref=e341]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e342]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e343] [cursor=pointer]:
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
  19 |   await locator.waitFor({ state: 'visible' });
  20 |   await locator.scrollIntoViewIfNeeded();
> 21 |   await locator.click();
     |                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Search', exact: true }) resolved to 2 elements:
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