# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.ant-select-selection-search').first()
    - locator resolved to <span class="ant-select-selection-search">…</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-product-filters-scroll="" class="pt-4 space-y-6 flex-1 overflow-y-auto relative">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-product-filters-scroll="" class="pt-4 space-y-6 flex-1 overflow-y-auto relative">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div data-product-filters-scroll="" class="pt-4 space-y-6 flex-1 overflow-y-auto relative">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=f17e1]:
  - region "Notifications Alt+T"
  - alert [ref=f17e2]
  - generic [ref=f17e3]:
    - banner [ref=f17e4]:
      - generic [ref=f17e7]:
        - link "ROADREADY" [ref=f17e8] [cursor=pointer]:
          - /url: /
        - generic [ref=f17e11]:
          - combobox "Search category" [ref=f17e13] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=f17e15]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=f17e16]
        - generic [ref=f17e17]:
          - generic [ref=f17e18]:
            - button "Resale" [ref=f17e21] [cursor=pointer]
            - button "Wholesale" [ref=f17e23] [cursor=pointer]
          - button "Select State" [ref=f17e26] [cursor=pointer]
          - generic [ref=f17e33]: "|"
          - button [ref=f17e35] [cursor=pointer]
          - generic [ref=f17e41]: "|"
          - button "Cart is empty" [disabled] [ref=f17e42]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=f17e48]:
      - generic [ref=f17e51]:
        - generic:
          - generic: Updating filters…
          - generic:
            - generic: Parts Finder
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - combobox [disabled]
                      - generic: Select Make
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - combobox [disabled]
                      - generic: Select Model
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - combobox [disabled]
                      - generic: Select Year
          - generic:
            - generic: type
            - generic:
              - button "Aftermarket Wheel" [disabled]
              - button "Genuine OEM Reconditioned Rim" [disabled]
              - button "OEM Reconditioned Wheel" [disabled]
              - button "OEM Replacement Hubcap" [disabled]
              - button "OEM Replacement Wheel" [disabled]
              - button "OEM Surplus Wheel" [disabled]
              - button "OEM Take Off Wheel" [disabled]
              - button "OEM Wheel Rim" [disabled]
              - button "Simulator" [disabled]
              - button "Trailer" [disabled]
          - generic:
            - generic: material
            - generic:
              - button "Alloy" [disabled]
              - button "Steel" [disabled]
              - button "ABS Plastic" [disabled]
          - generic:
            - generic: diameter
            - generic:
              - button "14\"" [disabled]
              - button "15\"" [disabled]
              - button "16\"" [disabled]
              - button "17\"" [disabled]
              - button "17.5\"" [disabled]
              - button "18\"" [disabled]
              - button "19\"" [disabled]
              - button "19.5\"" [disabled]
              - button "20\"" [disabled]
              - button "21\"" [disabled]
              - button "22\"" [disabled]
              - button "22.5\"" [disabled]
              - button "23\"" [disabled]
              - button "24\"" [disabled]
              - button "24.5\"" [disabled]
          - generic:
            - generic: bolt pattern
            - generic:
              - button "3x112.5mm or 3x4.4\"" [disabled]
              - button "4x98mm or 4x3.9\"" [disabled]
              - button "4x100mm or 4x3.9\"" [disabled]
              - button "4x108mm or 4x4.3\"" [disabled]
              - button "4x114.3mm or 4x4.5\"" [disabled]
              - button "5x92.3mm or 5x3.6\"" [disabled]
              - button "5x98mm or 5x3.9\"" [disabled]
              - button "5x100mm or 5x3.9\"" [disabled]
              - button "5x105mm or 5x4.1\"" [disabled]
              - button "5x108mm or 5x4.3\"" [disabled]
              - button "5x108mm or 5x4.25\"" [disabled]
              - button "5x110mm or 5x4.3\"" [disabled]
              - button "5x112mm or 5x4.4\"" [disabled]
              - button "5x114.3mm or 5x4.5\"" [disabled]
              - button "5x114.3mm or 5x5\"" [disabled]
              - button "5x115mm or 5x4.5\"" [disabled]
              - button "5x116.4mm or 4.6\"" [disabled]
              - button "5x118.4mm or 4.7\"" [disabled]
              - button "5x120mm or 5x4.7\"" [disabled]
              - button "5x120mm or 5x4.75\"" [disabled]
              - button "5x127mm or 5x5\"" [disabled]
              - button "5x127mm or 5x4.7\"" [disabled]
              - button "5x130mm or 5x5.1\"" [disabled]
              - button "5x135mm or 5x5.3\"" [disabled]
              - button "5x139.7mm or 5x5.5\"" [disabled]
              - button "5x150mm or 5x5.9\"" [disabled]
              - button "5x160mm or 5x6.3\"" [disabled]
              - button "6x114.3mm or 6x4.5\"" [disabled]
              - button "6x115mm or 6x4.5\"" [disabled]
              - button "6x120mm or 6x4.7\"" [disabled]
              - button "6x127mm or 6x5\"" [disabled]
              - button "6x130mm or 6x5.1\"" [disabled]
              - button "6x132mm or 6x5.2\"" [disabled]
              - button "6x135mm or 6x5.3\"" [disabled]
              - button "6x139.7mm or 6x5.5\"" [disabled]
              - button "6x180mm or 6x7.1\"" [disabled]
              - button "6x205mm or 6x8.1\"" [disabled]
              - button "6x222.25mm or 6x8.75\"" [disabled]
              - button "7x150mm or 7x5.9\"" [disabled]
              - button "8x165.1mm or 8x6.5\"" [disabled]
              - button "8x170mm or 8x6.7\"" [disabled]
              - button "8x180mm or 8x7.1\"" [disabled]
              - button "8x200mm or 8x7.9\"" [disabled]
              - button "8x210mm or 8x8.3\"" [disabled]
              - button "8x225mm or 8x8.9\"" [disabled]
              - button "8x275mm or 8x10.8\"" [disabled]
              - button "10x184.1mm or 10x7.25\"" [disabled]
              - button "10-222.25mm or 10-8.75\"" [disabled]
              - button "10x225mm or 10x8.9\"" [disabled]
              - button "10x285.7mm or 10x11.2\"" [disabled]
          - generic:
            - generic: lug count
            - generic:
              - button "3" [disabled]
              - button "4" [disabled]
              - button "5" [disabled]
              - button "6" [disabled]
              - button "7" [disabled]
              - button "8" [disabled]
              - button "10" [disabled]
          - generic:
            - generic: center bore
            - generic:
              - button "46mm" [disabled]
              - button "54mm" [disabled]
              - button "54.06mm" [disabled]
              - button "54.1mm" [disabled]
              - button "56mm" [disabled]
              - button "56.1mm" [disabled]
              - button "56.5mm" [disabled]
              - button "56.6mm" [disabled]
              - button "56.8mm" [disabled]
              - button "57mm" [disabled]
              - button "57.1mm" [disabled]
              - button "57.2mm" [disabled]
              - button "58mm" [disabled]
              - button "58.1mm" [disabled]
              - button "59.1mm" [disabled]
              - button "60mm" [disabled]
              - button "60.1mm" [disabled]
              - button "60.7mm" [disabled]
              - button "63mm" [disabled]
              - button "63.1mm" [disabled]
              - button "63.3mm" [disabled]
              - button "63.4mm" [disabled]
              - button "63.5mm" [disabled]
              - button "63.6mm" [disabled]
              - button "64mm" [disabled]
              - button "64.1mm" [disabled]
              - button "64.2mm" [disabled]
              - button "65mm" [disabled]
              - button "65.1mm" [disabled]
              - button "66mm" [disabled]
              - button "66.1mm" [disabled]
              - button "66.45mm" [disabled]
              - button "66.5mm" [disabled]
              - button "66.6mm" [disabled]
              - button "66.87mm" [disabled]
              - button "66.9mm" [disabled]
              - button "67mm" [disabled]
              - button "67.1mm" [disabled]
              - button "68mm" [disabled]
              - button "70,3mm" [disabled]
              - button "70.1mm" [disabled]
              - button "70.2mm" [disabled]
              - button "70.3mm" [disabled]
              - button "70.5mm" [disabled]
              - button "70.6mm" [disabled]
              - button "70.8mm" [disabled]
              - button "71.5mm" [disabled]
              - button "71.6mm" [disabled]
              - button "71.8mm" [disabled]
              - button "72.5mm" [disabled]
              - button "72.6mm" [disabled]
              - button "73.1mm" [disabled]
              - button "74mm" [disabled]
              - button "74.1mm" [disabled]
              - button "74.5mm" [disabled]
              - button "77.8mm" [disabled]
              - button "78mm" [disabled]
              - button "78.1mm" [disabled]
              - button "78.3mm" [disabled]
              - button "81mm" [disabled]
              - button "83.7mm" [disabled]
              - button "84mm" [disabled]
              - button "84.1mm" [disabled]
              - button "84.5mm" [disabled]
              - button "87mm" [disabled]
              - button "87,1mm" [disabled]
              - button "87.1mm" [disabled]
              - button "92.5mm" [disabled]
              - button "93.1mm" [disabled]
              - button "95.1mm" [disabled]
              - button "95.2mm" [disabled]
              - button "100mm" [disabled]
              - button "100.3mm" [disabled]
              - button "106mm" [disabled]
              - button "106.1mm" [disabled]
              - button "106.2mm" [disabled]
              - button "108mm" [disabled]
              - button "108.1mm" [disabled]
              - button "110.1mm" [disabled]
              - button "110.2mm" [disabled]
              - button "110.5mm" [disabled]
              - button "110.6mm" [disabled]
              - button "116mm" [disabled]
              - button "116.6mm" [disabled]
              - button "116.7mm" [disabled]
              - button "116.8mm" [disabled]
              - button "117mm" [disabled]
              - button "120.9mm" [disabled]
              - button "121mm" [disabled]
              - button "121.0mm" [disabled]
              - button "121.15mm" [disabled]
              - button "121.2mm" [disabled]
              - button "121.3mm" [disabled]
              - button "122mm" [disabled]
              - button "123.9mm" [disabled]
              - button "124mm" [disabled]
              - button "124.1mm" [disabled]
              - button "124.2mm" [disabled]
              - button "124.46mm" [disabled]
              - button "124.9mm" [disabled]
              - button "125mm" [disabled]
              - button "125.1mm" [disabled]
              - button "125.2mm" [disabled]
              - button "133.4mm" [disabled]
              - button "138.8mm" [disabled]
              - button "139mm" [disabled]
              - button "140mm" [disabled]
              - button "142mm" [disabled]
              - button "142.1mm" [disabled]
              - button "154mm" [disabled]
              - button "154.2mm" [disabled]
              - button "161mm" [disabled]
              - button "164mm" [disabled]
              - button "165.1mm" [disabled]
              - button "167.5mm" [disabled]
              - button "170.1mm" [disabled]
              - button "170.2mm" [disabled]
              - button "220mm" [disabled]
              - button "220.1mm" [disabled]
              - button "220.9mm" [disabled]
              - button "221mm" [disabled]
              - button "222mm" [disabled]
          - generic:
            - generic: Availability
            - generic:
              - checkbox "Include Out of Stock" [checked] [disabled]
              - generic: Include Out of Stock
      - generic [ref=f17e52]: Shop Road Ready Products
    - contentinfo [ref=f17e163]:
      - generic [ref=f17e164]:
        - generic [ref=f17e165]:
          - generic [ref=f17e166]:
            - heading "Contact Us" [level=3] [ref=f17e167]
            - generic [ref=f17e168]:
              - paragraph [ref=f17e169]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=f17e170] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=f17e171]:
                - text: "Text:"
                - link "217-635-2033" [ref=f17e172] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=f17e173] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=f17e174]:
              - link "Visit our Facebook page" [ref=f17e175] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=f17e178] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=f17e179]
              - link "Visit our Instagram page" [ref=f17e180] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=f17e184] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=f17e188]:
              - img "BBB Accredited" [ref=f17e190]
              - img "WTC Member" [ref=f17e192]
          - generic [ref=f17e193]:
            - heading "Support" [level=3] [ref=f17e194]
            - generic [ref=f17e195]:
              - link "Contact Us" [ref=f17e196] [cursor=pointer]:
                - /url: /contact
              - link "FAQs" [ref=f17e197] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=f17e198] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=f17e199] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=f17e200] [cursor=pointer]:
                - /url: /privacy-policy
          - generic [ref=f17e201]:
            - heading "Why Road Ready" [level=3] [ref=f17e202]
            - generic [ref=f17e203]:
              - link "About Us" [ref=f17e204] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=f17e205] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=f17e206]:
            - heading "Divisions" [level=3] [ref=f17e207]
            - generic [ref=f17e208]:
              - link "Wholesale" [ref=f17e209] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=f17e210] [cursor=pointer]:
                - /url: /resale
        - generic [ref=f17e211]:
          - paragraph [ref=f17e213]:
            - strong [ref=f17e214]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=f17e215]:
            - paragraph [ref=f17e216]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=f17e217]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=f17e218] [cursor=pointer]:
                - /url: https://www.w3villa.com/
  - iframe [ref=f17e219]
  - iframe [ref=f17e220]:
    - button "Support" [ref=f24e4] [cursor=pointer]
```

# Test source

```ts
  77  |     // DOM level up from the heading and missed the chip container, which
  78  |     // sits deeper/separately in the DOM).
  79  |     this.removeFilterButton = (value: string) =>
  80  |       page.getByRole('button', { name: `Remove ${value}` });
  81  | 
  82  |     // The "Shop As" modal (full-screen overlay, z-[9999]) re-appears after
  83  |     // the Make selection and blocks every subsequent click underneath it.
  84  |     // Scoped via the nested heading so this doesn't collide with the plain
  85  |     // "Resale" toggle button in the header (that one has no heading inside).
  86  |     this.shopAsModalHeading = page.getByRole('heading', { name: 'Shop As' });
  87  |     this.shopAsResaleOption = page.getByRole('button').filter({
  88  |       has: page.getByRole('heading', { name: 'Resale', exact: true }),
  89  |     });
  90  |     this.shopAsWholesaleOption = page.getByRole('button').filter({
  91  |       has: page.getByRole('heading', { name: 'Wholesale', exact: true }),
  92  |     });
  93  | 
  94  |     // Same filter-button pattern as categoryButton — Material ("Alloy",
  95  |     // "Steel") and Diameter ("20\"") are just more of the same toggle-button
  96  |     // filter groups seen in the sidebar.
  97  |     this.materialButton = (materialName: string) =>
  98  |       page.getByRole('button', { name: materialName });
  99  |     this.diameterButton = (diameterLabel: string) =>
  100 |       page.getByRole('button', { name: diameterLabel });
  101 | 
  102 |     // The breadcrumb-style summary text (e.g. "Cadillac, Escalade, OEM
  103 |     // Replacement Wheel") shown above the results grid once enough filters
  104 |     // are picked — partial match since the full string grows with each
  105 |     // filter added.
  106 |     this.filterSummaryText = (partialText: string) =>
  107 |       page.getByText(partialText, { exact: false });
  108 | 
  109 |     // Shown on a result card instead of "Add To Cart" when that specific
  110 |     // filtered combination has no stock.
  111 |     this.notifyMeButton = page.getByRole('button', { name: 'Notify Me' });
  112 |     this.notifyMeEmailInput = page.getByRole('textbox', {
  113 |       name: 'example@domain.com',
  114 |     });
  115 |     this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });
  116 | 
  117 |     // Sits next to the "Selected Filters" heading — clears every applied
  118 |     // filter chip in one click.
  119 |     this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });
  120 | 
  121 |     // Out-of-stock PDP flow is different from the category-card "Notify Me"
  122 |     // flow above — no email field at all here (uses the logged-in user's
  123 |     // account email). Clicking the normal Add To Cart button on an
  124 |     // out-of-stock product reveals a "Submit" confirm instead, then this
  125 |     // text — confirmed from a real recording, not guessed.
  126 |     this.pdpAddToCartButton = page.locator('#add-to-cart-button');
  127 |     this.pdpSubmitButton = page.getByRole('button', { name: 'Submit' });
  128 |     this.pdpNotifyConfirmationText = page.getByText(
  129 |       'We will notify you when the',
  130 |       { exact: false }
  131 |     );
  132 |   }
  133 | 
  134 |   /**
  135 |    * Call once right after login — the "Shop As" modal is mandatory at that
  136 |    * point, and choosing an option is what lands you on the categories page
  137 |    * with the Make/Model/Year selects available.
  138 |    */
  139 |   async selectShopMode(mode: 'Resale' | 'Wholesale') {
  140 |     await this.shopAsModalHeading.waitFor({ state: 'visible', timeout: 10000 });
  141 | 
  142 |     const option =
  143 |       mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
  144 |     await option.click();
  145 | 
  146 |     await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });
  147 | 
  148 |     // The app appends `just_sign_in=true` to the URL after this selection,
  149 |     // and that flag keeps re-triggering the same modal on later renders
  150 |     // (e.g. once filters are applied) even though a mode was already
  151 |     // chosen — a plain wait isn't enough. Reloading clears it.
  152 |     await this.page.reload();
  153 |     await this.page.waitForLoadState('networkidle');
  154 | 
  155 |     // Defensive — in case the reload still shows it once more.
  156 |     await this.dismissShopAsModalIfPresent();
  157 |   }
  158 | 
  159 |   /**
  160 |    * Call before any dropdown/button interaction that follows a Make
  161 |    * selection — the modal can pop up more than once, not just immediately
  162 |    * after the first select. A blind wait isn't reliable because the modal's
  163 |    * appearance timing varies; actively checking and dismissing it is.
  164 |    */
  165 |   async dismissShopAsModalIfPresent() {
  166 |     const isModalVisible = await this.shopAsModalHeading
  167 |       .isVisible({ timeout: 3000 })
  168 |       .catch(() => false);
  169 | 
  170 |     if (isModalVisible) {
  171 |       await this.shopAsResaleOption.click();
  172 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  173 |     }
  174 |   }
  175 | 
  176 |   async selectMake(make: string) {
> 177 |     await this.makeSelect.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  178 |     await this.page.getByText(make, { exact: true }).click();
  179 | 
  180 |     // Modal shows up right after Make is picked — dismiss it here instead
  181 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  182 |     // window.
  183 |     await this.dismissShopAsModalIfPresent();
  184 |   }
  185 | 
  186 |   async selectModel(model: string) {
  187 |     await this.dismissShopAsModalIfPresent();
  188 |     await this.modelSelect.click();
  189 |     await this.page.getByText(model, { exact: true }).click();
  190 |   }
  191 | 
  192 |   async selectYear(year: string) {
  193 |     await this.dismissShopAsModalIfPresent();
  194 |     await this.yearSelect.click();
  195 |     await this.page.getByText(year, { exact: true }).click();
  196 |   }
  197 | 
  198 |   async selectCategory(categoryName: string) {
  199 |     await this.dismissShopAsModalIfPresent();
  200 |     await this.click(this.categoryButton(categoryName));
  201 |   }
  202 | 
  203 |   async selectMaterial(materialName: string) {
  204 |     await this.dismissShopAsModalIfPresent();
  205 |     await this.click(this.materialButton(materialName));
  206 |   }
  207 | 
  208 |   async selectDiameter(diameterLabel: string) {
  209 |     await this.dismissShopAsModalIfPresent();
  210 |     await this.click(this.diameterButton(diameterLabel));
  211 |   }
  212 | 
  213 |   /**
  214 |    * Verifies each given value has its own "Remove <value>" chip under
  215 |    * "Selected Filters" — works for any number of filters (Model, Year,
  216 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  217 |    * the unambiguous signal that a filter is actually applied.
  218 |    */
  219 |   async expectFiltersApplied(...values: string[]) {
  220 |     for (const value of values) {
  221 |       await expect(this.removeFilterButton(value)).toBeVisible({
  222 |         timeout: 10000,
  223 |       });
  224 |     }
  225 |   }
  226 | 
  227 |   /** After Reset, none of the previously-applied filter chips should remain. */
  228 |   async expectFiltersCleared(...previousValues: string[]) {
  229 |     for (const value of previousValues) {
  230 |       await expect(this.removeFilterButton(value)).toBeHidden({
  231 |         timeout: 10000,
  232 |       });
  233 |     }
  234 |   }
  235 | 
  236 |   async expectFilterSummaryVisible(partialText: string) {
  237 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  238 |       timeout: 10000,
  239 |     });
  240 |   }
  241 | 
  242 |   /**
  243 |    * Navigates straight to a filtered results URL — mirrors the codegen
  244 |    * recording, which reloaded the filtered listing via the address bar
  245 |    * (e.g. after opening a product from it) instead of re-picking every
  246 |    * dropdown from scratch.
  247 |    */
  248 |   async goToFilteredCategory(params: Record<string, string>) {
  249 |     const query = new URLSearchParams(params).toString();
  250 |     await this.page.goto(
  251 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  252 |     );
  253 |   }
  254 | 
  255 |   /**
  256 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  257 |    * Fills and submits the email capture, then confirms the modal actually
  258 |    * closed rather than assuming a specific success toast (whose exact copy
  259 |    * we haven't confirmed yet).
  260 |    */
  261 |   async submitNotifyMe(email: string) {
  262 |     await this.click(this.notifyMeButton);
  263 |     await this.notifyMeEmailInput.click();
  264 |     await this.notifyMeEmailInput.fill(email);
  265 |     await this.click(this.notifyMeSubmitButton);
  266 | 
  267 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  268 |   }
  269 | 
  270 |   /**
  271 |    * PDP "Notify Me" for an out-of-stock item — clicking Add To Cart on such
  272 |    * an item reveals a Submit confirm instead of actually adding it, and no
  273 |    * email field is needed (account email is used automatically).
  274 |    */
  275 |   async submitNotifyMeFromPdp() {
  276 |     await this.click(this.pdpAddToCartButton);
  277 |     await this.click(this.pdpSubmitButton);
```