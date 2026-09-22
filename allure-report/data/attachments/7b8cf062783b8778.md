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
          - textbox "Search for wheels" [ref=e27]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e28]
        - generic [ref=e29]:
          - button "Select State" [ref=e32] [cursor=pointer]
          - generic [ref=e39]: "|"
          - button [ref=e41] [cursor=pointer]
          - generic [ref=e47]: "|"
          - button "Cart is empty" [disabled] [ref=e48]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - banner [ref=e53]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]: Browse By Vehicle
          - generic "Select Make" [ref=e60] [cursor=pointer]:
            - generic [ref=e62]:
              - combobox "Select Make" [ref=e64]
              - generic: Select Make
          - generic "Select Model" [ref=e68] [cursor=pointer]:
            - generic [ref=e70]:
              - combobox "Select Model" [disabled] [ref=e72]
              - generic: Select Model
          - generic "Select Year" [ref=e73] [cursor=pointer]:
            - generic [ref=e75]:
              - combobox "Select Year" [disabled] [ref=e77]
              - generic: Select Year
          - button "Search" [ref=e78] [cursor=pointer]
        - generic [ref=e79]:
          - generic [ref=e80]: Browse All Wheels
          - generic [ref=e81]:
            - button "By Category" [ref=e82] [cursor=pointer]
            - button "Top Brands" [ref=e83] [cursor=pointer]
            - button "Featured Items" [ref=e84] [cursor=pointer]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e85]:
      - generic "Background promotional video" [ref=e86]
      - button "Watch Full Video" [ref=e88] [cursor=pointer]
      - generic [ref=e91]:
        - heading "The Industry Leader in OEM Replacement Wheels" [level=1] [ref=e92]
        - paragraph [ref=e93]: Precision Made. Priced Right.
        - button "Shop Now" [ref=e94] [cursor=pointer]
    - generic [ref=e96]:
      - heading "See Why Thousands Have Chosen Road Ready" [level=2] [ref=e98]
      - generic [ref=e99]:
        - generic [ref=e100]:
          - heading "Hassle-Free Returns" [level=3] [ref=e106]
          - paragraph [ref=e107]: We strive to have the best customer service in the business
        - generic [ref=e108]:
          - heading "Fast Shipping" [level=3] [ref=e116]
          - paragraph [ref=e117]: Free shipping anywhere in the continental United States
        - generic [ref=e118]:
          - heading "1-Year Warranty" [level=3] [ref=e123]
          - paragraph [ref=e124]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
        - generic [ref=e125]:
          - heading "Compatible" [level=3] [ref=e131]
          - paragraph [ref=e132]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
    - generic [ref=e133]:
      - generic: "\""
      - generic: "\""
      - generic [ref=e134]:
        - generic [ref=e136]:
          - generic [ref=e137]:
            - blockquote [ref=e138]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
            - separator [ref=e139]
            - generic [ref=e140]: B. Greasor
          - generic [ref=e141]:
            - blockquote [ref=e142]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
            - separator [ref=e143]
            - generic [ref=e144]: G. Fuller
          - generic [ref=e145]:
            - blockquote [ref=e146]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
            - separator [ref=e147]
            - generic [ref=e148]: A. Mini
          - generic [ref=e149]:
            - blockquote [ref=e150]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
            - separator [ref=e151]
            - generic [ref=e152]: P. Rockland
          - generic [ref=e153]:
            - blockquote [ref=e154]: “Looks like the factory wheels at half the price!”
            - separator [ref=e155]
            - generic [ref=e156]: T. Thurman
          - generic [ref=e157]:
            - blockquote [ref=e158]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
            - separator [ref=e159]
            - generic [ref=e160]: E. Bienas
          - generic [ref=e161]:
            - blockquote [ref=e162]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
            - separator [ref=e163]
            - generic [ref=e164]: C. Bock
          - generic [ref=e165]:
            - blockquote [ref=e166]: “Arrived quicker than expected and works fine on our Smart Car.”
            - separator [ref=e167]
            - generic [ref=e168]: Redbudok86
          - generic [ref=e169]:
            - blockquote [ref=e170]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
            - separator [ref=e171]
            - generic [ref=e172]: Folgers4545
          - generic [ref=e173]:
            - blockquote [ref=e174]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
            - separator [ref=e175]
            - generic [ref=e176]: WN4ISX
        - generic [ref=e177]:
          - button "Go to testimonial 1" [ref=e178] [cursor=pointer]
          - button "Go to testimonial 2" [ref=e179] [cursor=pointer]
          - button "Go to testimonial 3" [ref=e180] [cursor=pointer]
          - button "Go to testimonial 4" [ref=e181] [cursor=pointer]
          - button "Go to testimonial 5" [ref=e182] [cursor=pointer]
          - button "Go to testimonial 6" [ref=e183] [cursor=pointer]
          - button "Go to testimonial 7" [ref=e184] [cursor=pointer]
          - button "Go to testimonial 8" [ref=e185] [cursor=pointer]
          - button "Go to testimonial 9" [ref=e186] [cursor=pointer]
          - button "Go to testimonial 10" [ref=e187] [cursor=pointer]
    - generic [ref=e190]:
      - generic [ref=e196]:
        - heading "Precision Made. Priced Right." [level=3] [ref=e197]: Precision Made.Priced Right.
        - paragraph [ref=e198]: Looking for the highest quality wheels for the lowest price?
        - link "Shop Now" [ref=e199] [cursor=pointer]:
          - /url: /t/categories
      - generic [ref=e208]:
        - heading "Why Road Ready" [level=3] [ref=e209]
        - paragraph [ref=e210]: We like to think of ourselves as the most trusted wheel supplier in the business. But why take our word for it? See why 40,000+ have chosen Road Ready.
        - link "Learn About" [ref=e211] [cursor=pointer]:
          - /url: /about-us
    - generic [ref=e214]:
      - generic [ref=e215]:
        - heading "Free Shipping" [level=3] [ref=e223]
        - paragraph [ref=e224]: Free shipping anywhere in the continental United States
      - generic [ref=e225]:
        - heading "Hassle-Free Returns" [level=3] [ref=e231]
        - paragraph [ref=e232]: We strive to have the best customer service in the business
      - generic [ref=e233]:
        - heading "1-Year Warranty" [level=3] [ref=e238]
        - paragraph [ref=e239]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
      - generic [ref=e240]:
        - heading "Trust the Quality" [level=3] [ref=e246]
        - paragraph [ref=e247]: All wheels have been SAEJ250 tested and DOT approved.
    - generic [ref=e249]:
      - heading "Join the Movement" [level=2] [ref=e251]
      - generic [ref=e252]:
        - generic [ref=e253]:
          - generic [ref=e262]: 1,000,000+
          - paragraph [ref=e263]: Steel & aluminum wheels sold
        - generic [ref=e264]:
          - generic [ref=e271]: 99%
          - paragraph [ref=e272]: Our packages arrive safely or on time
        - generic [ref=e273]:
          - generic [ref=e281]: 500,000+
          - paragraph [ref=e282]: Truly happy customers
    - contentinfo [ref=e283]:
      - generic [ref=e284]:
        - generic [ref=e285]:
          - generic [ref=e286]:
            - heading "Contact Us" [level=3] [ref=e287]
            - generic [ref=e288]:
              - paragraph [ref=e289]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e290] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e291]:
                - text: "Text:"
                - link "217-635-2033" [ref=e292] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e293] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e294]:
              - link "Visit our Facebook page" [ref=e295] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e298] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e299]
              - link "Visit our Instagram page" [ref=e300] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e304] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e308]:
              - img "BBB Accredited" [ref=e310]
              - img "WTC Member" [ref=e312]
          - generic [ref=e313]:
            - heading "Support" [level=3] [ref=e314]
            - generic [ref=e315]:
              - link "Returns and Refunds" [ref=e316] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e317] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e318] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e319] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e320] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e321] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e322] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e323] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e324]:
            - heading "Why Road Ready" [level=3] [ref=e325]
            - generic [ref=e326]:
              - link "About Us" [ref=e327] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e328] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e329]:
            - heading "Divisions" [level=3] [ref=e330]
            - generic [ref=e331]:
              - link "Wholesale" [ref=e332] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e333] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e334]:
          - paragraph [ref=e336]:
            - strong [ref=e337]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e338]:
            - paragraph [ref=e339]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e340]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e341] [cursor=pointer]:
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