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

Locator: getByRole('heading', { name: 'Selected Filters' }).locator('..').getByText('A Series', { exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Selected Filters' }).locator('..').getByText('A Series', { exact: true }) with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Selected Filters' }).locator('..').getByText('A Series', { exact: true })

```

```yaml
- region "Notifications Alt+T"
- alert: Categories - Road Ready Wheels
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
  22  |   readonly selectedFiltersPanel: Locator;
  23  | 
  24  |   constructor(page: Page) {
  25  |     super(page);
  26  | 
  27  |     this.openFinderButton = page.getByRole('button', {
  28  |       name: /Resale Orders/i,
  29  |     });
  30  | 
  31  |     // Ant Design selects render as divs with this search input class, not
  32  |     // native <select> — .first()/.nth() distinguish Make vs Model vs Year
  33  |     // since they share the same structure. Fragile by position; if the
  34  |     // widget's DOM order ever changes, these break silently (wrong dropdown
  35  |     // opens). Prefer scoping by a label/placeholder if one exists — check
  36  |     // DevTools for a more specific anchor (e.g. aria-label) before relying
  37  |     // on this long-term.
  38  |     this.makeSelect = page.locator('.ant-select-selection-search').first();
  39  |     this.modelSelect = page
  40  |       .locator('div')
  41  |       .filter({ hasText: /^Select Model$/ })
  42  |       .nth(2);
  43  |     this.yearSelect = page
  44  |       .locator(
  45  |         'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
  46  |       );
  47  | 
  48  |     this.categoryButton = (categoryName: string) =>
  49  |       page.getByRole('button', { name: categoryName });
  50  | 
  51  |     this.hollanderCode = page.getByText(/^Hollander: 560-/);
  52  | 
  53  |     // Result cards' prices — used to assert results actually rendered,
  54  |     // not just that no error was thrown.
  55  |     this.resultPrices = page.getByText(/^\$/);
  56  | 
  57  |     // Real DOM (confirmed from an actual run) shows Model and Year as
  58  |     // separate removable chips under "Selected Filters" — Make ("Audi")
  59  |     // is NOT its own chip, it's implicit from the initial selection. So
  60  |     // this scopes to that panel and checks Model/Year individually,
  61  |     // instead of guessing at one combined "Audi, A Series, 2013" string.
  62  |     this.selectedFiltersPanel = page
  63  |       .getByRole('heading', { name: 'Selected Filters' })
  64  |       .locator('..');
  65  |   }
  66  | 
  67  |   async openVehicleFinder() {
  68  |     await this.click(this.openFinderButton);
  69  |   }
  70  | 
  71  |   async selectMake(make: string) {
  72  |     await this.makeSelect.click();
  73  |     await this.page.getByText(make, { exact: true }).click();
  74  | 
  75  |     // Just a wait after this first selection — no modal interaction.
  76  |     await this.page.waitForTimeout(10000);
  77  |   }
  78  | 
  79  |   async selectModel(model: string) {
  80  |     await this.modelSelect.click();
  81  |     await this.page.getByText(model, { exact: true }).click();
  82  |   }
  83  | 
  84  |   async selectYear(year: string) {
  85  |     await this.yearSelect.click();
  86  |     await this.page.getByText(year, { exact: true }).click();
  87  |   }
  88  | 
  89  |   async selectCategory(categoryName: string) {
  90  |     await this.click(this.categoryButton(categoryName));
  91  |   }
  92  | 
  93  |   async expectFiltersApplied(model: string, year: string) {
  94  |     await expect(
  95  |       this.selectedFiltersPanel.getByText(model, { exact: true })
> 96  |     ).toBeVisible({ timeout: 10000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  97  | 
  98  |     await expect(
  99  |       this.selectedFiltersPanel.getByText(year, { exact: true })
  100 |     ).toBeVisible({ timeout: 10000 });
  101 |   }
  102 | 
  103 |   async expectResultsVisible() {
  104 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  105 | 
  106 |     const priceCount = await this.resultPrices.count();
  107 |     expect(priceCount).toBeGreaterThan(0);
  108 |   }
  109 | 
  110 |   async clickProductByName(partialName: string) {
  111 |     await this.page
  112 |       .locator('a')
  113 |       .filter({ hasText: partialName })
  114 |       .click();
  115 |   }
  116 | }
```