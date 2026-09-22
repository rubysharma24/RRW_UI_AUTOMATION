# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search >> should find and open a compatible wheel by Make/Model/Year/Category
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /^Select Model$/ }).nth(2)
    - locator resolved to <div class="ant-select-selector">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Categories - Road Ready Wheels
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
    - generic [ref=e50]:
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]:
            - heading "Selected Filters" [level=3] [ref=e55]
            - button "Reset" [ref=e56] [cursor=pointer]
          - generic [ref=e58]:
            - generic [ref=e59]: Audi
            - button "Remove Audi" [ref=e60] [cursor=pointer]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Parts Finder
            - generic [ref=e67]:
              - generic [ref=e71]:
                - combobox [ref=e73]
                - generic "Audi" [ref=e74]
              - generic [ref=e82]:
                - combobox [ref=e84]
                - generic: Select Model
              - generic [ref=e88]:
                - combobox [ref=e90]
                - generic: Select Year
          - generic [ref=e91]:
            - generic [ref=e92]: type
            - generic [ref=e93]:
              - button "OEM Reconditioned Wheel" [ref=e94] [cursor=pointer]
              - button "OEM Replacement Wheel" [ref=e96] [cursor=pointer]
          - generic [ref=e98]:
            - generic [ref=e99]: material
            - generic [ref=e100]:
              - button "Alloy" [ref=e101] [cursor=pointer]
              - button "Steel" [ref=e103] [cursor=pointer]
          - generic [ref=e105]:
            - generic [ref=e106]: diameter
            - generic [ref=e107]:
              - button "15\"" [ref=e108] [cursor=pointer]
              - button "18\"" [ref=e110] [cursor=pointer]
              - button "19\"" [ref=e112] [cursor=pointer]
              - button "20\"" [ref=e114] [cursor=pointer]
          - generic [ref=e116]:
            - generic [ref=e117]: bolt pattern
            - button "5x112mm or 5x4.4\"" [ref=e119] [cursor=pointer]
          - generic [ref=e121]:
            - generic [ref=e122]: lug count
            - button "5" [ref=e124] [cursor=pointer]
          - generic [ref=e126]:
            - generic [ref=e127]: center bore
            - generic [ref=e128]:
              - button "57mm" [ref=e129] [cursor=pointer]
              - button "66.45mm" [ref=e131] [cursor=pointer]
              - button "66.5mm" [ref=e133] [cursor=pointer]
          - generic [ref=e135]:
            - generic [ref=e136]: Availability
            - generic [ref=e137] [cursor=pointer]:
              - checkbox "Include Out of Stock" [checked] [ref=e138]
              - generic [ref=e139]: Include Out of Stock
      - generic [ref=e141]:
        - generic [ref=e143]:
          - generic [ref=e144] [cursor=pointer]: Back
          - generic [ref=e145]: Audi
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - button "Add to wishlist" [ref=e151] [cursor=pointer]
              - link [ref=e154] [cursor=pointer]:
                - /url: /products/1996-2001-15x6-audi-a4-steel-wheel-rim
                - img "1996-2001 15x6 Audi A4 Steel Wheel / Rim" [ref=e157]
            - generic [ref=e158]:
              - link [ref=e159] [cursor=pointer]:
                - /url: /products/1996-2001-15x6-audi-a4-steel-wheel-rim
                - heading "1996-2001 15x6 Audi A4 Steel Wheel / Rim" [level=3] [ref=e160]
              - link "2,724 All-Time Units Sold" [ref=e161] [cursor=pointer]:
                - /url: /products/1996-2001-15x6-audi-a4-steel-wheel-rim
              - generic [ref=e163]: $96.08
              - generic [ref=e165]: "Hollander: 560-58681"
              - generic [ref=e168]:
                - generic [ref=e169]: 🚚
                - button "Please Select State" [ref=e170] [cursor=pointer]
              - generic [ref=e172]:
                - button "1" [ref=e174] [cursor=pointer]
                - button "Add To Cart" [ref=e178] [cursor=pointer]
          - generic [ref=e179]:
            - generic [ref=e180]:
              - button "Add to wishlist" [ref=e183] [cursor=pointer]
              - link [ref=e186] [cursor=pointer]:
                - /url: /products/2013-2017-audi-q5-19x8-genuine-oem-alloy-wheel-rim
                - img "2013-2017 Audi Q5 19x8 Genuine OEM Alloy Wheel / Rim" [ref=e189]
            - generic [ref=e190]:
              - link [ref=e191] [cursor=pointer]:
                - /url: /products/2013-2017-audi-q5-19x8-genuine-oem-alloy-wheel-rim
                - heading "2013-2017 Audi Q5 19x8 Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e192]
              - link "New" [ref=e193] [cursor=pointer]:
                - /url: /products/2013-2017-audi-q5-19x8-genuine-oem-alloy-wheel-rim
              - generic [ref=e195]: $248.89
              - generic [ref=e197]: "Hollander: 560-58919"
              - generic [ref=e199]:
                - generic [ref=e200]: 🚚
                - button "Please Select State" [ref=e201] [cursor=pointer]
              - generic [ref=e203]:
                - button "1" [ref=e205] [cursor=pointer]
                - button "Add To Cart" [ref=e209] [cursor=pointer]
          - generic [ref=e210]:
            - generic [ref=e211]:
              - button "Add to wishlist" [ref=e214] [cursor=pointer]
              - link [ref=e217] [cursor=pointer]:
                - /url: /products/2009-2017-18x8-audi-q5-aluminum-wheel-rim
                - img "2009-2017 Audi Q5 18x8 Alloy Wheel / Rim" [ref=e220]
            - generic [ref=e221]:
              - link [ref=e222] [cursor=pointer]:
                - /url: /products/2009-2017-18x8-audi-q5-aluminum-wheel-rim
                - heading "2009-2017 Audi Q5 18x8 Alloy Wheel / Rim" [level=3] [ref=e223]
              - link "On Sale" [ref=e224] [cursor=pointer]:
                - /url: /products/2009-2017-18x8-audi-q5-aluminum-wheel-rim
              - generic [ref=e226]: $173.27
              - generic [ref=e228]: "Hollander: 560-58889"
              - generic [ref=e231]:
                - generic [ref=e232]: 🚚
                - button "Please Select State" [ref=e233] [cursor=pointer]
              - generic [ref=e235]:
                - button "1" [ref=e237] [cursor=pointer]
                - button "Add To Cart" [ref=e241] [cursor=pointer]
          - generic [ref=e242]:
            - generic [ref=e243]:
              - button "Add to wishlist" [ref=e246] [cursor=pointer]
              - link [ref=e249] [cursor=pointer]:
                - /url: /products/2018-2020-audi-q5-20x8-genuine-oem-alloy-wheel-rim
                - img "2018-2020 Audi Q5 20x8 Genuine OEM Alloy Wheel / Rim" [ref=e252]
            - generic [ref=e253]:
              - link [ref=e254] [cursor=pointer]:
                - /url: /products/2018-2020-audi-q5-20x8-genuine-oem-alloy-wheel-rim
                - heading "2018-2020 Audi Q5 20x8 Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e255]
              - link "New" [ref=e256] [cursor=pointer]:
                - /url: /products/2018-2020-audi-q5-20x8-genuine-oem-alloy-wheel-rim
              - generic [ref=e258]: $337.57
              - generic [ref=e260]: "Hollander: 560-59038"
              - generic [ref=e262]:
                - generic [ref=e263]: 🚚
                - button "Please Select State" [ref=e264] [cursor=pointer]
              - generic [ref=e266]:
                - button "1" [ref=e268] [cursor=pointer]
                - button "Add To Cart" [ref=e272] [cursor=pointer]
          - generic [ref=e273]:
            - generic [ref=e274]:
              - button "Add to wishlist" [ref=e277] [cursor=pointer]
              - link [ref=e280] [cursor=pointer]:
                - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
                - img "2011-2015 19x9 Audi A8 Alloy Wheel / Rim" [ref=e283]
            - generic [ref=e284]:
              - link [ref=e285] [cursor=pointer]:
                - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
                - heading "2011-2015 19x9 Audi A8 Alloy Wheel / Rim" [level=3] [ref=e286]
              - link "374 All-Time Units Sold" [ref=e287] [cursor=pointer]:
                - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
              - generic [ref=e289]: $222.15
              - generic [ref=e291]: "Hollander: 560-58870"
              - generic [ref=e294]:
                - generic [ref=e295]: 🚚
                - button "Please Select State" [ref=e296] [cursor=pointer]
              - generic [ref=e298]:
                - button "1" [ref=e300] [cursor=pointer]
                - button "Add To Cart" [ref=e304] [cursor=pointer]
          - generic [ref=e305]:
            - generic [ref=e306]:
              - button "Add to wishlist" [ref=e309] [cursor=pointer]
              - link [ref=e312] [cursor=pointer]:
                - /url: /products/2017-2019-19x8-5-audi-q7-genuine-oem-alloy-wheel-rim
                - img "2017-2019 19x8.5 Audi Q7 Genuine OEM Alloy Wheel / Rim" [ref=e315]
            - generic [ref=e316]:
              - link [ref=e317] [cursor=pointer]:
                - /url: /products/2017-2019-19x8-5-audi-q7-genuine-oem-alloy-wheel-rim
                - heading "2017-2019 19x8.5 Audi Q7 Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e318]
              - link "On Sale" [ref=e319] [cursor=pointer]:
                - /url: /products/2017-2019-19x8-5-audi-q7-genuine-oem-alloy-wheel-rim
              - generic [ref=e321]: $248.08
              - generic [ref=e323]: "Hollander: 560-59011"
              - generic [ref=e325]:
                - generic [ref=e326]: 🚚
                - button "Please Select State" [ref=e327] [cursor=pointer]
              - generic [ref=e329]:
                - button "1" [ref=e331] [cursor=pointer]
                - button "Add To Cart" [ref=e335] [cursor=pointer]
          - generic [ref=e336]:
            - generic [ref=e337]:
              - button "Add to wishlist" [ref=e340] [cursor=pointer]
              - link [ref=e343] [cursor=pointer]:
                - /url: /products/1995-2001-15x6-audi-a6-steel-wheel-rim
                - img "1995-2001 15x6 Audi A6 Steel Wheel / Rim" [ref=e346]
            - generic [ref=e347]:
              - link [ref=e348] [cursor=pointer]:
                - /url: /products/1995-2001-15x6-audi-a6-steel-wheel-rim
                - heading "1995-2001 15x6 Audi A6 Steel Wheel / Rim" [level=3] [ref=e349]
              - link "2,724 All-Time Units Sold" [ref=e350] [cursor=pointer]:
                - /url: /products/1995-2001-15x6-audi-a6-steel-wheel-rim
              - generic [ref=e352]: $96.08
              - generic [ref=e354]: "Hollander: 560-58681"
              - generic [ref=e357]:
                - generic [ref=e358]: 🚚
                - button "Please Select State" [ref=e359] [cursor=pointer]
              - generic [ref=e361]:
                - button "1" [ref=e363] [cursor=pointer]
                - button "Add To Cart" [ref=e367] [cursor=pointer]
          - generic [ref=e368]:
            - generic [ref=e369]:
              - button "Add to wishlist" [ref=e372] [cursor=pointer]
              - link [ref=e375] [cursor=pointer]:
                - /url: /products/1992-1994-15x6-audi-100-steel-wheel-rim
                - img "1992-1994 15x6 Audi 100 Steel Wheel/Rim" [ref=e378]
            - generic [ref=e379]:
              - link [ref=e380] [cursor=pointer]:
                - /url: /products/1992-1994-15x6-audi-100-steel-wheel-rim
                - heading "1992-1994 15x6 Audi 100 Steel Wheel/Rim" [level=3] [ref=e381]
              - link "2,724 All-Time Units Sold" [ref=e382] [cursor=pointer]:
                - /url: /products/1992-1994-15x6-audi-100-steel-wheel-rim
              - generic [ref=e384]: $96.08
              - generic [ref=e386]: "Hollander: 560-58681"
              - generic [ref=e389]:
                - generic [ref=e390]: 🚚
                - button "Please Select State" [ref=e391] [cursor=pointer]
              - generic [ref=e393]:
                - button "1" [ref=e395] [cursor=pointer]
                - button "Add To Cart" [ref=e399] [cursor=pointer]
          - generic [ref=e400]:
            - generic [ref=e401]:
              - button "Add to wishlist" [ref=e404] [cursor=pointer]
              - link [ref=e407] [cursor=pointer]:
                - /url: /products/2013-2017-19x8-audi-q5-aluminum-wheel-rim
                - img "2013-2017 Audi Q5 19x8 Alloy Wheel / Rim" [ref=e410]
            - generic [ref=e411]:
              - link [ref=e412] [cursor=pointer]:
                - /url: /products/2013-2017-19x8-audi-q5-aluminum-wheel-rim
                - heading "2013-2017 Audi Q5 19x8 Alloy Wheel / Rim" [level=3] [ref=e413]
              - link "382 All-Time Units Sold" [ref=e414] [cursor=pointer]:
                - /url: /products/2013-2017-19x8-audi-q5-aluminum-wheel-rim
              - generic [ref=e416]: $209.88
              - generic [ref=e418]: "Hollander: 560-58919"
              - generic [ref=e420]:
                - generic [ref=e421]: 🚚
                - button "Please Select State" [ref=e422] [cursor=pointer]
              - button "Notify Me" [ref=e424] [cursor=pointer]
    - generic [ref=e431]:
      - button "Close modal" [ref=e432] [cursor=pointer]
      - heading "Shop As" [level=2] [ref=e437]
      - generic [ref=e438]:
        - button [ref=e439] [cursor=pointer]:
          - heading "Wholesale" [level=3] [ref=e445]
          - paragraph [ref=e446]: "Orders of: (15+)"
        - button [ref=e447] [cursor=pointer]:
          - heading "Resale" [level=3] [ref=e454]
          - paragraph [ref=e455]: "Orders of: (1-14)"
    - contentinfo [ref=e456]:
      - generic [ref=e457]:
        - generic [ref=e458]:
          - generic [ref=e459]:
            - heading "Contact Us" [level=3] [ref=e460]
            - generic [ref=e461]:
              - paragraph [ref=e462]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e463] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e464]:
                - text: "Text:"
                - link "217-635-2033" [ref=e465] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e466] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e467]:
              - link "Visit our Facebook page" [ref=e468] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e471] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e472]
              - link "Visit our Instagram page" [ref=e473] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e477] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e481]:
              - img "BBB Accredited" [ref=e483]
              - img "WTC Member" [ref=e485]
          - generic [ref=e486]:
            - heading "Support" [level=3] [ref=e487]
            - generic [ref=e488]:
              - link "Returns and Refunds" [ref=e489] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e490] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e491] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e492] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e493] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e494] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e495] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e496] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e497]:
            - heading "Why Road Ready" [level=3] [ref=e498]
            - generic [ref=e499]:
              - link "About Us" [ref=e500] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e501] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e502]:
            - heading "Divisions" [level=3] [ref=e503]
            - generic [ref=e504]:
              - link "Wholesale" [ref=e505] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e506] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e507]:
          - paragraph [ref=e509]:
            - strong [ref=e510]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e511]:
            - paragraph [ref=e512]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e513]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e514] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | import BasePage from './BasePage';
  3   | 
  4   | /**
  5   |  * Handles the "vehicle fitment" search widget — the Make / Model / Year /
  6   |  * Category cascading selects (Ant Design dropdowns) that narrow down to a
  7   |  * list of compatible wheels, reached here via the "Resale Orders" trigger.
  8   |  *
  9   |  * NOTE: confirm which page this trigger button actually lives on (Home?
  10  |  * Account/Orders?) — if it's on an existing page object (e.g. HomePage),
  11  |  * move openVehicleFinder() there instead of keeping it here.
  12  |  */
  13  | export default class VehicleFitmentPage extends BasePage {
  14  |   readonly openFinderButton: Locator;
  15  |   readonly makeSelect: Locator;
  16  |   readonly modelSelect: Locator;
  17  |   readonly yearSelect: Locator;
  18  |   readonly vehicleSummaryText: Locator;
  19  |   readonly categoryButton: (categoryName: string) => Locator;
  20  |   readonly hollanderCode: Locator;
  21  |   readonly resultPrices: Locator;
  22  | 
  23  |   constructor(page: Page) {
  24  |     super(page);
  25  | 
  26  |     this.openFinderButton = page.getByRole('button', {
  27  |       name: /Resale Orders/i,
  28  |     });
  29  | 
  30  |     // Ant Design selects render as divs with this search input class, not
  31  |     // native <select> — .first()/.nth() distinguish Make vs Model vs Year
  32  |     // since they share the same structure. Fragile by position; if the
  33  |     // widget's DOM order ever changes, these break silently (wrong dropdown
  34  |     // opens). Prefer scoping by a label/placeholder if one exists — check
  35  |     // DevTools for a more specific anchor (e.g. aria-label) before relying
  36  |     // on this long-term.
  37  |     this.makeSelect = page.locator('.ant-select-selection-search').first();
  38  |     this.modelSelect = page
  39  |       .locator('div')
  40  |       .filter({ hasText: /^Select Model$/ })
  41  |       .nth(2);
  42  |     this.yearSelect = page
  43  |       .locator(
  44  |         'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
  45  |       );
  46  | 
  47  |     // The running summary text, e.g. "Audi, A Series, 2013, OEM..." —
  48  |     // confirms the cascading selection actually applied before moving on.
  49  |     this.vehicleSummaryText = page.getByText(/^Audi, A Series, 2013/);
  50  | 
  51  |     this.categoryButton = (categoryName: string) =>
  52  |       page.getByRole('button', { name: categoryName });
  53  | 
  54  |     this.hollanderCode = page.getByText(/^Hollander: 560-/);
  55  | 
  56  |     // Result cards' prices — used to assert results actually rendered,
  57  |     // not just that no error was thrown.
  58  |     this.resultPrices = page.getByText(/^\$/);
  59  |   }
  60  | 
  61  |   async openVehicleFinder() {
  62  |     await this.click(this.openFinderButton);
  63  |   }
  64  | 
  65  |   async selectMake(make: string) {
  66  |     await this.makeSelect.click();
  67  |     await this.page.getByText(make, { exact: true }).click();
  68  |   }
  69  | 
  70  |   async selectModel(model: string) {
> 71  |     await this.modelSelect.click();
      |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  72  |     await this.page.getByText(model, { exact: true }).click();
  73  |   }
  74  | 
  75  |   async selectYear(year: string) {
  76  |     await this.yearSelect.click();
  77  |     await this.page.getByText(year, { exact: true }).click();
  78  |   }
  79  | 
  80  |   async selectCategory(categoryName: string) {
  81  |     await this.click(this.categoryButton(categoryName));
  82  |   }
  83  | 
  84  |   async expectVehicleSelected(expectedSummaryPrefix: string) {
  85  |     await expect(
  86  |       this.page.getByText(new RegExp(`^${expectedSummaryPrefix}`))
  87  |     ).toBeVisible({ timeout: 10000 });
  88  |   }
  89  | 
  90  |   async expectResultsVisible() {
  91  |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  92  | 
  93  |     const priceCount = await this.resultPrices.count();
  94  |     expect(priceCount).toBeGreaterThan(0);
  95  |   }
  96  | 
  97  |   async clickProductByName(partialName: string) {
  98  |     await this.page
  99  |       .locator('a')
  100 |       .filter({ hasText: partialName })
  101 |       .click();
  102 |   }
  103 | }
```