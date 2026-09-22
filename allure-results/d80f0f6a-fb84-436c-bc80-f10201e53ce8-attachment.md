# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - Notify Me & Reset >> should notify me for an out-of-stock filtered result via deep link
- Location: tests\Vehiclefitmentsearch.spec.ts:103:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Cadillac, Escalade, OEM')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Cadillac, Escalade, OEM') with timeout 10000ms
  - waiting for getByText('Cadillac, Escalade, OEM')

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
- text: Escalade
- button "Remove Escalade":
  - img
- text: OEM Replacement Wheel
- button "Remove OEM Replacement Wheel":
  - img
- text: Alloy
- button "Remove Alloy":
  - img
- text: 20"
- button "Remove 20\"":
  - img
- text: Parts Finder
- combobox
- text: Select Make
- combobox
- text: Escalade
- combobox
- text: Select Year type
- button "OEM Reconditioned Wheel"
- button "OEM Replacement Wheel" [pressed]
- button "OEM Surplus Wheel"
- button "OEM Take Off Wheel"
- text: material
- button "Alloy" [pressed]
- button "Steel"
- text: diameter
- button "17\""
- button "20\"" [pressed]
- button "22\""
- text: bolt pattern
- button "6x139.7mm or 6x5.5\""
- text: lug count
- button "6"
- text: center bore
- button "78.1mm"
- text: Availability
- checkbox "Include Out of Stock" [checked]
- text: Include Out of Stock Back Escalade, OEM Replacement Wheel, 20", Alloy
- button "Add to wishlist":
  - img
- link "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim":
  - /url: /products/2015-2023-20x9-cadillac-escalade-aluminum-wheel-rim
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim"
- link "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim":
  - /url: /products/2015-2023-20x9-cadillac-escalade-aluminum-wheel-rim
  - heading "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim" [level=3]
- link "On Sale":
  - /url: /products/2015-2023-20x9-cadillac-escalade-aluminum-wheel-rim
- text: "$351.90 Hollander: 560-05698 🚚"
- button "Please Select State"
- button "Notify Me":
  - img
  - text: Notify Me
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
  96  |     // are picked — partial match since the full string grows with each
  97  |     // filter added.
  98  |     this.filterSummaryText = (partialText: string) =>
  99  |       page.getByText(partialText, { exact: false });
  100 | 
  101 |     // Shown on a result card instead of "Add To Cart" when that specific
  102 |     // filtered combination has no stock.
  103 |     this.notifyMeButton = page.getByRole('button', { name: 'Notify Me' });
  104 |     this.notifyMeEmailInput = page.getByRole('textbox', {
  105 |       name: 'example@domain.com',
  106 |     });
  107 |     this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });
  108 | 
  109 |     // Sits next to the "Selected Filters" heading — clears every applied
  110 |     // filter chip in one click.
  111 |     this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });
  112 |   }
  113 | 
  114 |   /**
  115 |    * Call before any dropdown/button interaction that follows a Make
  116 |    * selection — the modal can pop up more than once, not just immediately
  117 |    * after the first select. A blind wait isn't reliable because the modal's
  118 |    * appearance timing varies; actively checking and dismissing it is.
  119 |    */
  120 |   async dismissShopAsModalIfPresent() {
  121 |     const isModalVisible = await this.shopAsModalHeading
  122 |       .isVisible({ timeout: 3000 })
  123 |       .catch(() => false);
  124 | 
  125 |     if (isModalVisible) {
  126 |       await this.shopAsResaleOption.click();
  127 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  128 |     }
  129 |   }
  130 | 
  131 |   async openVehicleFinder() {
  132 |     await this.click(this.openFinderButton);
  133 |   }
  134 | 
  135 |   async selectMake(make: string) {
  136 |     await this.makeSelect.click();
  137 |     await this.page.getByText(make, { exact: true }).click();
  138 | 
  139 |     // Modal shows up right after Make is picked — dismiss it here instead
  140 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  141 |     // window.
  142 |     await this.dismissShopAsModalIfPresent();
  143 |   }
  144 | 
  145 |   async selectModel(model: string) {
  146 |     await this.dismissShopAsModalIfPresent();
  147 |     await this.modelSelect.click();
  148 |     await this.page.getByText(model, { exact: true }).click();
  149 |   }
  150 | 
  151 |   async selectYear(year: string) {
  152 |     await this.dismissShopAsModalIfPresent();
  153 |     await this.yearSelect.click();
  154 |     await this.page.getByText(year, { exact: true }).click();
  155 |   }
  156 | 
  157 |   async selectCategory(categoryName: string) {
  158 |     await this.dismissShopAsModalIfPresent();
  159 |     await this.click(this.categoryButton(categoryName));
  160 |   }
  161 | 
  162 |   async selectMaterial(materialName: string) {
  163 |     await this.dismissShopAsModalIfPresent();
  164 |     await this.click(this.materialButton(materialName));
  165 |   }
  166 | 
  167 |   async selectDiameter(diameterLabel: string) {
  168 |     await this.dismissShopAsModalIfPresent();
  169 |     await this.click(this.diameterButton(diameterLabel));
  170 |   }
  171 | 
  172 |   /**
  173 |    * Verifies each given value has its own "Remove <value>" chip under
  174 |    * "Selected Filters" — works for any number of filters (Model, Year,
  175 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  176 |    * the unambiguous signal that a filter is actually applied.
  177 |    */
  178 |   async expectFiltersApplied(...values: string[]) {
  179 |     for (const value of values) {
  180 |       await expect(this.removeFilterButton(value)).toBeVisible({
  181 |         timeout: 10000,
  182 |       });
  183 |     }
  184 |   }
  185 | 
  186 |   /** After Reset, none of the previously-applied filter chips should remain. */
  187 |   async expectFiltersCleared(...previousValues: string[]) {
  188 |     for (const value of previousValues) {
  189 |       await expect(this.removeFilterButton(value)).toBeHidden({
  190 |         timeout: 10000,
  191 |       });
  192 |     }
  193 |   }
  194 | 
  195 |   async expectFilterSummaryVisible(partialText: string) {
> 196 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
      |                                                       ^ Error: expect(locator).toBeVisible() failed
  197 |       timeout: 10000,
  198 |     });
  199 |   }
  200 | 
  201 |   /**
  202 |    * Navigates straight to a filtered results URL — mirrors the codegen
  203 |    * recording, which reloaded the filtered listing via the address bar
  204 |    * (e.g. after opening a product from it) instead of re-picking every
  205 |    * dropdown from scratch.
  206 |    */
  207 |   async goToFilteredCategory(params: Record<string, string>) {
  208 |     const query = new URLSearchParams(params).toString();
  209 |     await this.page.goto(
  210 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  211 |     );
  212 |   }
  213 | 
  214 |   /**
  215 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  216 |    * Fills and submits the email capture, then confirms the modal actually
  217 |    * closed rather than assuming a specific success toast (whose exact copy
  218 |    * we haven't confirmed yet).
  219 |    */
  220 |   async submitNotifyMe(email: string) {
  221 |     await this.click(this.notifyMeButton);
  222 |     await this.notifyMeEmailInput.click();
  223 |     await this.notifyMeEmailInput.fill(email);
  224 |     await this.click(this.notifyMeSubmitButton);
  225 | 
  226 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  227 |   }
  228 | 
  229 |   /**
  230 |    * Returns to the filtered listing from a PDP using the browser's Back
  231 |    * button (mirrors clicking the actual back arrow), rather than a raw
  232 |    * URL — waits for the "Selected Filters" panel to be back on screen so
  233 |    * the next step doesn't race the navigation.
  234 |    */
  235 |   async goBackToListing() {
  236 |     await this.page.goBack();
  237 |     await expect(
  238 |       this.page.getByRole('heading', { name: 'Selected Filters' })
  239 |     ).toBeVisible({ timeout: 10000 });
  240 |   }
  241 | 
  242 |   /**
  243 |    * Clicks Reset and waits for the filter chips to actually clear before
  244 |    * moving on — resetting is followed by a re-render, so proceeding
  245 |    * immediately can land clicks on stale dropdown state.
  246 |    */
  247 |   async resetFilters() {
  248 |     await this.click(this.resetFiltersButton);
  249 | 
  250 |     // Wait for every "Remove X" chip to actually disappear before
  251 |     // continuing, instead of a blind timeout that might fire mid-re-render.
  252 |     await expect(
  253 |       this.page.getByRole('button', { name: /^Remove /i })
  254 |     ).toHaveCount(0, { timeout: 10000 });
  255 | 
  256 |     await this.page.waitForTimeout(2000);
  257 |   }
  258 | 
  259 |   async expectResultsVisible() {
  260 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  261 | 
  262 |     const priceCount = await this.resultPrices.count();
  263 |     expect(priceCount).toBeGreaterThan(0);
  264 |   }
  265 | 
  266 |   async clickProductByName(partialName: string) {
  267 |     await this.page
  268 |       .locator('a')
  269 |       .filter({ hasText: partialName })
  270 |       .click();
  271 |   }
  272 | }
```