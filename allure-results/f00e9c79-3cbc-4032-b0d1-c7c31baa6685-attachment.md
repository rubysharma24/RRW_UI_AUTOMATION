# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByText('Updating filters') to be hidden
    5 × locator resolved to visible <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">…</div>

```

# Page snapshot

```yaml
- generic [active] [ref=f15e1]:
  - region "Notifications Alt+T"
  - alert [ref=f15e2]
  - generic [ref=f15e3]:
    - banner [ref=f15e4]:
      - generic [ref=f15e7]:
        - link "ROADREADY" [ref=f15e8] [cursor=pointer]:
          - /url: /
        - generic [ref=f15e11]:
          - combobox "Search category" [ref=f15e13] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=f15e15]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=f15e16]
        - generic [ref=f15e17]:
          - generic [ref=f15e18]:
            - button "Resale" [ref=f15e21] [cursor=pointer]
            - button "Wholesale" [ref=f15e23] [cursor=pointer]
          - button "Select State" [ref=f15e26] [cursor=pointer]
          - generic [ref=f15e33]: "|"
          - button [ref=f15e35] [cursor=pointer]
          - generic [ref=f15e41]: "|"
          - button "Cart is empty" [disabled] [ref=f15e42]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=f15e48]:
      - generic [ref=f15e50]:
        - generic [ref=f15e51]:
          - generic [ref=f15e52]:
            - heading "Selected Filters" [level=3] [ref=f15e53]
            - button "Reset" [ref=f15e54] [cursor=pointer]
          - generic [ref=f15e55]:
            - generic [ref=f15e56]:
              - generic [ref=f15e57]: Cadillac
              - button "Remove Cadillac" [ref=f15e58] [cursor=pointer]
            - generic [ref=f15e61]:
              - generic [ref=f15e62]: Escalade
              - button "Remove Escalade" [ref=f15e63] [cursor=pointer]
        - generic [ref=f15e66]:
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
                        - generic "Cadillac"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - combobox [disabled]
                        - generic "Escalade"
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
                - button "Genuine OEM Reconditioned Rim" [disabled]
                - button "OEM Reconditioned Wheel" [disabled]
                - button "OEM Replacement Wheel" [disabled]
                - button "OEM Surplus Wheel" [disabled]
                - button "OEM Take Off Wheel" [disabled]
                - button "OEM Wheel Rim" [disabled]
            - generic:
              - generic: material
              - generic:
                - button "Alloy" [disabled]
                - button "Steel" [disabled]
            - generic:
              - generic: diameter
              - generic:
                - button "16\"" [disabled]
                - button "17\"" [disabled]
                - button "18\"" [disabled]
                - button "19\"" [disabled]
                - button "20\"" [disabled]
                - button "21\"" [disabled]
                - button "22\"" [disabled]
                - button "24\"" [disabled]
            - generic:
              - generic: bolt pattern
              - generic:
                - button "5x115mm or 5x4.5\"" [disabled]
                - button "5x120mm or 5x4.7\"" [disabled]
                - button "6x120mm or 6x4.7\"" [disabled]
                - button "6x139.7mm or 6x5.5\"" [disabled]
            - generic:
              - generic: lug count
              - generic:
                - button "5" [disabled]
                - button "6" [disabled]
                - button "8" [disabled]
            - generic:
              - generic: center bore
              - generic:
                - button "66mm" [disabled]
                - button "66.9mm" [disabled]
                - button "67.1mm" [disabled]
                - button "70.3mm" [disabled]
                - button "77.8mm" [disabled]
                - button "78mm" [disabled]
                - button "78.1mm" [disabled]
                - button "116.7mm" [disabled]
            - generic:
              - generic: Availability
              - generic:
                - checkbox "Include Out of Stock" [checked] [disabled]
                - generic: Include Out of Stock
      - generic [ref=f15e127]:
        - button "Previous" [disabled] [ref=f15e128]
        - generic [ref=f15e132]:
          - button "1" [ref=f15e134] [cursor=pointer]
          - button "2" [ref=f15e136] [cursor=pointer]
          - button "3" [ref=f15e138] [cursor=pointer]
          - generic [ref=f15e139]: ...
          - button "8" [ref=f15e141] [cursor=pointer]
        - button "Next" [ref=f15e142] [cursor=pointer]
    - contentinfo [ref=f15e146]:
      - generic [ref=f15e147]:
        - generic [ref=f15e148]:
          - generic [ref=f15e149]:
            - heading "Contact Us" [level=3] [ref=f15e150]
            - generic [ref=f15e151]:
              - paragraph [ref=f15e152]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=f15e153] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=f15e154]:
                - text: "Text:"
                - link "217-635-2033" [ref=f15e155] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=f15e156] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=f15e157]:
              - link "Visit our Facebook page" [ref=f15e158] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=f15e161] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=f15e162]
              - link "Visit our Instagram page" [ref=f15e163] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=f15e167] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=f15e171]:
              - img "BBB Accredited" [ref=f15e173]
              - img "WTC Member" [ref=f15e175]
          - generic [ref=f15e176]:
            - heading "Support" [level=3] [ref=f15e177]
            - generic [ref=f15e178]:
              - link "Returns and Refunds" [ref=f15e179] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=f15e180] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=f15e181] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=f15e182] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=f15e183] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=f15e184] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=f15e185] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=f15e186] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=f15e187]:
            - heading "Why Road Ready" [level=3] [ref=f15e188]
            - generic [ref=f15e189]:
              - link "About Us" [ref=f15e190] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=f15e191] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=f15e192]:
            - heading "Divisions" [level=3] [ref=f15e193]
            - generic [ref=f15e194]:
              - link "Wholesale" [ref=f15e195] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=f15e196] [cursor=pointer]:
                - /url: /resale
        - generic [ref=f15e197]:
          - paragraph [ref=f15e199]:
            - strong [ref=f15e200]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=f15e201]:
            - paragraph [ref=f15e202]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=f15e203]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=f15e204] [cursor=pointer]:
                - /url: https://www.w3villa.com/
  - iframe [ref=f15e205]
  - iframe [ref=f15e206]:
    - button "Support" [ref=f22e4] [cursor=pointer]
```

# Test source

```ts
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
  121 |     // Out-of-stock PDP shows a "Notify Me" button directly instead of "Add
  122 |     // To Cart" — there are two on the page. The FIRST one sits right below
  123 |     // the sticky header (z-[1000]) and gets its click intercepted by that
  124 |     // header on scroll-into-view (confirmed from a real failed run — the
  125 |     // button itself renders fine, Playwright's hit-test just lands under
  126 |     // the fixed header). The second one, further down near the main product
  127 |     // info section, isn't fighting the header for space — use that one via
  128 |     // .last(). Clicking it opens a dialog with the account's email
  129 |     // pre-filled; Submit inside that dialog is what actually registers the
  130 |     // request. Scoping the email/Submit locators to the dialog avoids
  131 |     // collisions with any other "Submit" button on the page.
  132 |     this.pdpNotifyMeButton = page.getByRole('button', { name: 'Notify Me' }).last();
  133 |     this.pdpNotifyDialog = page.getByRole('dialog', { name: 'Enter your Email' });
  134 |     this.pdpNotifyEmailInput = this.pdpNotifyDialog.getByRole('textbox', {
  135 |       name: 'example@domain.com',
  136 |     });
  137 |     this.pdpNotifySubmitButton = this.pdpNotifyDialog.getByRole('button', {
  138 |       name: 'Submit',
  139 |     });
  140 |   }
  141 | 
  142 |   /**
  143 |    * Call once right after login — the "Shop As" modal is mandatory at that
  144 |    * point, and choosing an option is what lands you on the categories page
  145 |    * with the Make/Model/Year selects available.
  146 |    */
  147 |   async selectShopMode(mode: 'Resale' | 'Wholesale') {
  148 |     // The modal only shows on a genuinely first-time selection for this
  149 |     // browser session — if the mode is already set (e.g. persisted from an
  150 |     // earlier test run's cookie/localStorage), it never appears at all, so
  151 |     // a hard "must be visible" wait is wrong. Check first, and skip
  152 |     // everything below if there's nothing to dismiss.
  153 |     const isModalVisible = await this.shopAsModalHeading
  154 |       .isVisible({ timeout: 5000 })
  155 |       .catch(() => false);
  156 | 
  157 |     if (!isModalVisible) {
  158 |       // No modal means the browser is landing on the plain homepage, which
  159 |       // has its own separate "Browse By Vehicle" widget — not the
  160 |       // categories page sidebar our other locators target. Navigate there
  161 |       // directly so downstream selectMake()/selectModel()/etc. always land
  162 |       // on the right DOM regardless of whether the modal showed up.
  163 |       await this.page.goto('https://staging.roadreadywheels.com/t/categories');
  164 |       await this.waitForFiltersReady();
  165 |       return;
  166 |     }
  167 | 
  168 |     const option =
  169 |       mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
  170 |     await option.click();
  171 | 
  172 |     await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });
  173 | 
  174 |     // The app appends `just_sign_in=true` to the URL after this selection,
  175 |     // and that flag keeps re-triggering the same modal on later renders
  176 |     // (e.g. once filters are applied) even though a mode was already
  177 |     // chosen — a plain wait isn't enough. Reloading clears it.
  178 |     await this.page.reload();
  179 |     await this.page.waitForLoadState('networkidle');
  180 | 
  181 |     // Defensive — in case the reload still shows it once more.
  182 |     await this.dismissShopAsModalIfPresent();
  183 | 
  184 |     // After the reload, the whole filter panel re-initializes: every
  185 |     // dropdown/button is disabled and an "Updating filters…" overlay sits
  186 |     // on top intercepting clicks. networkidle doesn't cover this app-level
  187 |     // loading state, so clicking immediately after it races the overlay.
  188 |     await this.waitForFiltersReady();
  189 |   }
  190 | 
  191 |   /**
  192 |    * Waits out the "Updating filters…" overlay AND the separate full-page
  193 |    * ".page-loader" spinner — both appear after a reload or filter-panel
  194 |    * re-init and intercept clicks on their own, independently of the
  195 |    * Shop-As modal.
  196 |    */
  197 |   async waitForFiltersReady() {
  198 |     const pageLoader = this.page.locator('.page-loader');
  199 |     if (await pageLoader.isVisible({ timeout: 3000 }).catch(() => false)) {
  200 |       await pageLoader.waitFor({ state: 'hidden', timeout: 15000 });
  201 |     }
  202 | 
  203 |     const updatingFiltersText = this.page.getByText('Updating filters', {
  204 |       exact: false,
  205 |     });
  206 | 
  207 |     if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
> 208 |       await updatingFiltersText.waitFor({ state: 'hidden', timeout: 15000 });
      |                                 ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  209 |     }
  210 |   }
  211 | 
  212 |   /**
  213 |    * Call before any dropdown/button interaction that follows a Make
  214 |    * selection — the modal can pop up more than once, not just immediately
  215 |    * after the first select. A blind wait isn't reliable because the modal's
  216 |    * appearance timing varies; actively checking and dismissing it is.
  217 |    */
  218 |   async dismissShopAsModalIfPresent() {
  219 |     const isModalVisible = await this.shopAsModalHeading
  220 |       .isVisible({ timeout: 3000 })
  221 |       .catch(() => false);
  222 | 
  223 |     if (isModalVisible) {
  224 |       await this.shopAsResaleOption.click();
  225 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  226 |     }
  227 |   }
  228 | 
  229 |   /**
  230 |    * Clicks a locator, and if it's blocked by the page-loader or a
  231 |    * Shop-As modal that popped up in the gap between our checks and the
  232 |    * actual click (a real race, confirmed from a failed run — checking
  233 |    * first isn't enough), clears whichever is blocking and retries once.
  234 |    */
  235 |   private async clickClearingOverlays(locator: Locator) {
  236 |     try {
  237 |       await locator.click({ timeout: 8000 });
  238 |     } catch (err) {
  239 |       await this.waitForFiltersReady();
  240 |       await this.dismissShopAsModalIfPresent();
  241 |       await locator.click();
  242 |     }
  243 |   }
  244 | 
  245 |   async selectMake(make: string) {
  246 |     await this.waitForFiltersReady();
  247 |     await this.dismissShopAsModalIfPresent();
  248 |     await this.clickClearingOverlays(this.makeSelect);
  249 |     await this.page.getByText(make, { exact: true }).click();
  250 | 
  251 |     // Modal shows up right after Make is picked — dismiss it here instead
  252 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  253 |     // window.
  254 |     await this.dismissShopAsModalIfPresent();
  255 |   }
  256 | 
  257 |   async selectModel(model: string) {
  258 |     await this.waitForFiltersReady();
  259 |     await this.dismissShopAsModalIfPresent();
  260 |     await this.clickClearingOverlays(this.modelSelect);
  261 |     await this.page.getByText(model, { exact: true }).click();
  262 |   }
  263 | 
  264 |   async selectYear(year: string) {
  265 |     await this.waitForFiltersReady();
  266 |     await this.dismissShopAsModalIfPresent();
  267 |     await this.clickClearingOverlays(this.yearSelect);
  268 |     await this.page.getByText(year, { exact: true }).click();
  269 |   }
  270 | 
  271 |   async selectCategory(categoryName: string) {
  272 |     await this.waitForFiltersReady();
  273 |     await this.dismissShopAsModalIfPresent();
  274 |     await this.clickClearingOverlays(this.categoryButton(categoryName));
  275 |   }
  276 | 
  277 |   async selectMaterial(materialName: string) {
  278 |     await this.waitForFiltersReady();
  279 |     await this.dismissShopAsModalIfPresent();
  280 |     await this.clickClearingOverlays(this.materialButton(materialName));
  281 |   }
  282 | 
  283 |   async selectDiameter(diameterLabel: string) {
  284 |     await this.waitForFiltersReady();
  285 |     await this.dismissShopAsModalIfPresent();
  286 |     await this.clickClearingOverlays(this.diameterButton(diameterLabel));
  287 |   }
  288 | 
  289 |   /**
  290 |    * Verifies each given value has its own "Remove <value>" chip under
  291 |    * "Selected Filters" — works for any number of filters (Model, Year,
  292 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  293 |    * the unambiguous signal that a filter is actually applied.
  294 |    */
  295 |   async expectFiltersApplied(...values: string[]) {
  296 |     for (const value of values) {
  297 |       await expect(this.removeFilterButton(value)).toBeVisible({
  298 |         timeout: 10000,
  299 |       });
  300 |     }
  301 |   }
  302 | 
  303 |   /** After Reset, none of the previously-applied filter chips should remain. */
  304 |   async expectFiltersCleared(...previousValues: string[]) {
  305 |     for (const value of previousValues) {
  306 |       await expect(this.removeFilterButton(value)).toBeHidden({
  307 |         timeout: 10000,
  308 |       });
```