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
  - waiting for locator('a').filter({ hasText: '-2015 19x9 Audi A8 Alloy Wheel / Rim' })
    - locator resolved to <a href="/products/2011-2015-19x9-audi-a8-aluminum-wheel-rim">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 sm:p-12 z-10 border border-gray-300">…</div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 sm:p-12 z-10 border border-gray-300">…</div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 sm:p-12 z-10 border border-gray-300">…</div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6 sm:p-12 z-10 border border-gray-300">…</div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
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
          - generic [ref=e57]:
            - generic [ref=e58]:
              - generic [ref=e59]: Audi
              - button "Remove Audi" [ref=e60] [cursor=pointer]
            - generic [ref=e63]:
              - generic [ref=e64]: A Series
              - button "Remove A Series" [ref=e65] [cursor=pointer]
            - generic [ref=e68]:
              - generic [ref=e69]: "2013"
              - button "Remove 2013" [ref=e70] [cursor=pointer]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: Parts Finder
            - generic [ref=e77]:
              - generic [ref=e81]:
                - combobox [ref=e83]
                - generic "Audi" [ref=e84]
              - generic [ref=e92]:
                - combobox [ref=e94]
                - generic "A Series" [ref=e95]
              - generic [ref=e103]:
                - combobox [ref=e105]
                - generic "2013" [ref=e106]
          - generic [ref=e111]:
            - generic [ref=e112]: type
            - button "OEM Replacement Wheel" [ref=e114] [cursor=pointer]
          - generic [ref=e116]:
            - generic [ref=e117]: material
            - button "Alloy" [ref=e119] [cursor=pointer]
          - generic [ref=e121]:
            - generic [ref=e122]: diameter
            - button "19\"" [ref=e124] [cursor=pointer]
          - generic [ref=e126]:
            - generic [ref=e127]: bolt pattern
            - button "5x112mm or 5x4.4\"" [ref=e129] [cursor=pointer]
          - generic [ref=e131]:
            - generic [ref=e132]: lug count
            - button "5" [ref=e134] [cursor=pointer]
          - generic [ref=e136]:
            - generic [ref=e137]: center bore
            - button "66.45mm" [ref=e139] [cursor=pointer]
          - generic [ref=e141]:
            - generic [ref=e142]: Availability
            - generic [ref=e143] [cursor=pointer]:
              - checkbox "Include Out of Stock" [checked] [ref=e144]
              - generic [ref=e145]: Include Out of Stock
      - generic [ref=e147]:
        - generic [ref=e149]:
          - generic [ref=e150] [cursor=pointer]: Back
          - generic [ref=e151]: Audi, A Series, 2013
        - generic [ref=e153]:
          - generic [ref=e154]:
            - button "Add to wishlist" [ref=e157] [cursor=pointer]
            - link [ref=e160] [cursor=pointer]:
              - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
              - img "2011-2015 19x9 Audi A8 Alloy Wheel / Rim" [ref=e163]
          - generic [ref=e164]:
            - link [ref=e165] [cursor=pointer]:
              - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
              - heading "2011-2015 19x9 Audi A8 Alloy Wheel / Rim" [level=3] [ref=e166]
            - link "374 All-Time Units Sold" [ref=e167] [cursor=pointer]:
              - /url: /products/2011-2015-19x9-audi-a8-aluminum-wheel-rim
            - generic [ref=e169]: $222.15
            - generic [ref=e171]: "Hollander: 560-58870"
            - generic [ref=e173]:
              - generic [ref=e174]: 🚚
              - button "Please Select State" [ref=e175] [cursor=pointer]
            - generic [ref=e177]:
              - button "1" [ref=e179] [cursor=pointer]
              - button "Add To Cart" [ref=e183] [cursor=pointer]
    - generic [ref=e187]:
      - button "Close modal" [ref=e188] [cursor=pointer]
      - heading "Shop As" [level=2] [ref=e193]
      - generic [ref=e194]:
        - button [ref=e195] [cursor=pointer]:
          - heading "Wholesale" [level=3] [ref=e201]
          - paragraph [ref=e202]: "Orders of: (15+)"
        - button [ref=e203] [cursor=pointer]:
          - heading "Resale" [level=3] [ref=e210]
          - paragraph [ref=e211]: "Orders of: (1-14)"
    - contentinfo [ref=e212]:
      - generic [ref=e213]:
        - generic [ref=e214]:
          - generic [ref=e215]:
            - heading "Contact Us" [level=3] [ref=e216]
            - generic [ref=e217]:
              - paragraph [ref=e218]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e219] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e220]:
                - text: "Text:"
                - link "217-635-2033" [ref=e221] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e222] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e223]:
              - link "Visit our Facebook page" [ref=e224] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e227] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e228]
              - link "Visit our Instagram page" [ref=e229] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e233] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e237]:
              - img "BBB Accredited" [ref=e239]
              - img "WTC Member" [ref=e241]
          - generic [ref=e242]:
            - heading "Support" [level=3] [ref=e243]
            - generic [ref=e244]:
              - link "Returns and Refunds" [ref=e245] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e246] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e247] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e248] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e249] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e250] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e251] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e252] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e253]:
            - heading "Why Road Ready" [level=3] [ref=e254]
            - generic [ref=e255]:
              - link "About Us" [ref=e256] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e257] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e258]:
            - heading "Divisions" [level=3] [ref=e259]
            - generic [ref=e260]:
              - link "Wholesale" [ref=e261] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e262] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e263]:
          - paragraph [ref=e265]:
            - strong [ref=e266]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e267]:
            - paragraph [ref=e268]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e269]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e270] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  214 |   }
  215 | 
  216 |   /** After Reset, none of the previously-applied filter chips should remain. */
  217 |   async expectFiltersCleared(...previousValues: string[]) {
  218 |     for (const value of previousValues) {
  219 |       await expect(this.removeFilterButton(value)).toBeHidden({
  220 |         timeout: 10000,
  221 |       });
  222 |     }
  223 |   }
  224 | 
  225 |   async expectFilterSummaryVisible(partialText: string) {
  226 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  227 |       timeout: 10000,
  228 |     });
  229 |   }
  230 | 
  231 |   /**
  232 |    * Navigates straight to a filtered results URL — mirrors the codegen
  233 |    * recording, which reloaded the filtered listing via the address bar
  234 |    * (e.g. after opening a product from it) instead of re-picking every
  235 |    * dropdown from scratch.
  236 |    */
  237 |   async goToFilteredCategory(params: Record<string, string>) {
  238 |     const query = new URLSearchParams(params).toString();
  239 |     await this.page.goto(
  240 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  241 |     );
  242 |   }
  243 | 
  244 |   /**
  245 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  246 |    * Fills and submits the email capture, then confirms the modal actually
  247 |    * closed rather than assuming a specific success toast (whose exact copy
  248 |    * we haven't confirmed yet).
  249 |    */
  250 |   async submitNotifyMe(email: string) {
  251 |     await this.click(this.notifyMeButton);
  252 |     await this.notifyMeEmailInput.click();
  253 |     await this.notifyMeEmailInput.fill(email);
  254 |     await this.click(this.notifyMeSubmitButton);
  255 | 
  256 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  257 |   }
  258 | 
  259 |   /**
  260 |    * PDP "Notify Me" for an out-of-stock item — clicking Add To Cart on such
  261 |    * an item reveals a Submit confirm instead of actually adding it, and no
  262 |    * email field is needed (account email is used automatically).
  263 |    */
  264 |   async submitNotifyMeFromPdp() {
  265 |     await this.click(this.pdpAddToCartButton);
  266 |     await this.click(this.pdpSubmitButton);
  267 | 
  268 |     await expect(this.pdpNotifyConfirmationText).toBeVisible({
  269 |       timeout: 10000,
  270 |     });
  271 |   }
  272 | 
  273 |   /**
  274 |    * Returns to the filtered listing from a PDP using the browser's Back
  275 |    * button (mirrors clicking the actual back arrow), rather than a raw
  276 |    * URL — waits for the "Selected Filters" panel to be back on screen so
  277 |    * the next step doesn't race the navigation.
  278 |    */
  279 |   async goBackToListing() {
  280 |     await this.page.goBack();
  281 |     await expect(
  282 |       this.page.getByRole('heading', { name: 'Selected Filters' })
  283 |     ).toBeVisible({ timeout: 10000 });
  284 |   }
  285 | 
  286 |   /**
  287 |    * Clicks Reset and waits for the filter chips to actually clear before
  288 |    * moving on — resetting is followed by a re-render, so proceeding
  289 |    * immediately can land clicks on stale dropdown state.
  290 |    */
  291 |   async resetFilters() {
  292 |     await this.click(this.resetFiltersButton);
  293 | 
  294 |     // Wait for every "Remove X" chip to actually disappear before
  295 |     // continuing, instead of a blind timeout that might fire mid-re-render.
  296 |     await expect(
  297 |       this.page.getByRole('button', { name: /^Remove /i })
  298 |     ).toHaveCount(0, { timeout: 10000 });
  299 | 
  300 |     await this.page.waitForTimeout(2000);
  301 |   }
  302 | 
  303 |   async expectResultsVisible() {
  304 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  305 | 
  306 |     const priceCount = await this.resultPrices.count();
  307 |     expect(priceCount).toBeGreaterThan(0);
  308 |   }
  309 | 
  310 |   async clickProductByName(partialName: string) {
  311 |     await this.page
  312 |       .locator('a')
  313 |       .filter({ hasText: partialName })
> 314 |       .click();
      |        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  315 |   }
  316 | }
```