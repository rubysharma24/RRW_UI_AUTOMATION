# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search >> should find and open a compatible wheel by Make/Model/Year/Category
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/^Audi, A Series, 2013/)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/^Audi, A Series, 2013/) with timeout 10000ms
  - waiting for getByText(/^Audi, A Series, 2013/)

```

```yaml
- region "Notifications Alt+T"
- alert: Categories - Road Ready Wheels
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
- heading "Selected Filters" [level=3]
- button "Reset"
- text: A Series
- button "Remove A Series":
  - img
- text: "2013"
- button "Remove 2013":
  - img
- text: Parts Finder
- combobox
- text: Select Make
- combobox
- text: A Series
- combobox
- text: 2013 type
- button "OEM Replacement Wheel"
- text: material
- button "Alloy"
- text: diameter
- button "19\""
- text: bolt pattern
- button "5x112mm or 5x4.4\""
- text: lug count
- button "5"
- text: center bore
- button "66.45mm"
- text: Availability
- checkbox "Include Out of Stock" [checked]
- text: Include Out of Stock Back A Series, 2013
- button "Add to wishlist":
  - img
- link "2011-2015 19x9 Audi A8 Alloy Wheel / Rim":
  - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
  - img "2011-2015 19x9 Audi A8 Alloy Wheel / Rim"
- link "2011-2015 19x9 Audi A8 Alloy Wheel / Rim":
  - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
  - heading "2011-2015 19x9 Audi A8 Alloy Wheel / Rim" [level=3]
- link "374 All-Time Units Sold":
  - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
- text: "$222.15 Hollander: 560-58870 🚚"
- button "Please Select State"
- button "1":
  - text: "1"
  - img
- button "Add To Cart"
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
```

# Test source

```ts
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
  59  | 
  60  |     // "Shop As" is an Ant Design modal — .ant-modal-content scopes to the
  61  |     // dialog only, so "Resale" here never matches the "Resale" pill in the
  62  |     // header. Confirm this class in DevTools if it's not being found.
  63  |     this.shopAsModal = page
  64  |       .locator('.ant-modal-content')
  65  |       .filter({ hasText: 'Shop As' });
  66  | 
  67  |     this.shopAsResaleOption = this.shopAsModal.getByText('Resale', {
  68  |       exact: true,
  69  |     });
  70  |   }
  71  | 
  72  |   /**
  73  |    * Dismisses the "Shop As" modal by clicking "Resale" if it's showing.
  74  |    * It does not clear on its own — this is a real click, not a wait.
  75  |    */
  76  |   async dismissShopAsModalIfPresent() {
  77  |     const visible = await this.shopAsModal
  78  |       .isVisible({ timeout: 8000 })
  79  |       .catch(() => false);
  80  | 
  81  |     if (visible) {
  82  |       await this.shopAsResaleOption.click();
  83  |       await this.shopAsModal.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
  84  |       await this.page.waitForTimeout(10000);
  85  |     }
  86  |   }
  87  | 
  88  |   async openVehicleFinder() {
  89  |     await this.click(this.openFinderButton);
  90  |   }
  91  | 
  92  |   async selectMake(make: string) {
  93  |     await this.makeSelect.click();
  94  |     await this.page.getByText(make, { exact: true }).click();
  95  | 
  96  |     // The selection already applies behind the "Shop As" modal that pops
  97  |     // up right after — no need to reselect anything, just dismiss it
  98  |     // before touching the next dropdown.
  99  |     await this.dismissShopAsModalIfPresent();
  100 |   }
  101 | 
  102 |   async selectModel(model: string) {
  103 |     await this.modelSelect.click();
  104 |     await this.page.getByText(model, { exact: true }).click();
  105 |   }
  106 | 
  107 |   async selectYear(year: string) {
  108 |     await this.yearSelect.click();
  109 |     await this.page.getByText(year, { exact: true }).click();
  110 |   }
  111 | 
  112 |   async selectCategory(categoryName: string) {
  113 |     await this.click(this.categoryButton(categoryName));
  114 |   }
  115 | 
  116 |   async expectVehicleSelected(expectedSummaryPrefix: string) {
  117 |     await expect(
  118 |       this.page.getByText(new RegExp(`^${expectedSummaryPrefix}`))
> 119 |     ).toBeVisible({ timeout: 10000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  120 |   }
  121 | 
  122 |   async expectResultsVisible() {
  123 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  124 | 
  125 |     const priceCount = await this.resultPrices.count();
  126 |     expect(priceCount).toBeGreaterThan(0);
  127 |   }
  128 | 
  129 |   async clickProductByName(partialName: string) {
  130 |     await this.page
  131 |       .locator('a')
  132 |       .filter({ hasText: partialName })
  133 |       .click();
  134 |   }
  135 | }
```