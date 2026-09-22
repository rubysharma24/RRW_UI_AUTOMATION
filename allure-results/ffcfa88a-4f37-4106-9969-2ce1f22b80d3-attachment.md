# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('dialog', { name: 'Enter your Email' })
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" getByRole('dialog', { name: 'Enter your Email' }) with timeout 10000ms
  - waiting for getByRole('dialog', { name: 'Enter your Email' })
    23 × locator resolved to <div role="dialog" aria-modal="true" aria-labelledby=":r9:" class="ant-modal css-l9pxc0">…</div>
       - unexpected value "visible"

```

```yaml
- dialog "Enter your Email":
  - button "Close"
  - text: Enter your Email
  - textbox "example@domain.com" [invalid]
  - text: Please enter your email!
  - button "Cancel"
  - button "Submit"
```

# Test source

```ts
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
  309 |     }
  310 |   }
  311 | 
  312 |   async expectFilterSummaryVisible(partialText: string) {
  313 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  314 |       timeout: 10000,
  315 |     });
  316 |   }
  317 | 
  318 |   /**
  319 |    * Navigates straight to a filtered results URL — mirrors the codegen
  320 |    * recording, which reloaded the filtered listing via the address bar
  321 |    * (e.g. after opening a product from it) instead of re-picking every
  322 |    * dropdown from scratch.
  323 |    */
  324 |   async goToFilteredCategory(params: Record<string, string>) {
  325 |     const query = new URLSearchParams(params).toString();
  326 |     await this.page.goto(
  327 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  328 |     );
  329 |   }
  330 | 
  331 |   /**
  332 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  333 |    * Fills and submits the email capture, then confirms the modal actually
  334 |    * closed rather than assuming a specific success toast (whose exact copy
  335 |    * we haven't confirmed yet).
  336 |    */
  337 |   async submitNotifyMe(email: string) {
  338 |     await this.click(this.notifyMeButton);
  339 |     await this.notifyMeEmailInput.click();
  340 |     await this.notifyMeEmailInput.fill(email);
  341 |     await this.click(this.notifyMeSubmitButton);
  342 | 
  343 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  344 |   }
  345 | 
  346 |   /**
  347 |    * Clicks the PDP "Notify Me" button, with a fallback for the sticky
  348 |    * header (z-[1000]) still overlapping it on some viewports even after
  349 |    * switching to the lower button. If the plain click is intercepted,
  350 |    * nudge the scroll position up a bit (clears the button from directly
  351 |    * under the fixed header) and retry once before forcing.
  352 |    */
  353 |   private async clickPdpNotifyMeButton() {
  354 |     try {
  355 |       await this.click(this.pdpNotifyMeButton);
  356 |     } catch (err) {
  357 |       await this.pdpNotifyMeButton.scrollIntoViewIfNeeded();
  358 |       await this.page.mouse.wheel(0, -150);
  359 |       await this.pdpNotifyMeButton.click({ timeout: 8000 }).catch(async () => {
  360 |         await this.pdpNotifyMeButton.click({ force: true });
  361 |       });
  362 |     }
  363 |   }
  364 | 
  365 |   /**
  366 |    * PDP "Notify Me" for an out-of-stock item — the button itself opens a
  367 |    * dialog with the account email pre-filled; Submit inside that dialog is
  368 |    * what registers the request. The dialog closing is the success signal —
  369 |    * more reliable than guessing at a specific confirmation string.
  370 |    */
  371 |   async submitNotifyMeFromPdp(email?: string) {
  372 |     await this.clickPdpNotifyMeButton();
  373 |     await expect(this.pdpNotifyDialog).toBeVisible({ timeout: 10000 });
  374 | 
  375 |     if (email) {
  376 |       await this.pdpNotifyEmailInput.fill(email);
  377 |     }
  378 | 
  379 |     await this.click(this.pdpNotifySubmitButton);
> 380 |     await expect(this.pdpNotifyDialog).toBeHidden({ timeout: 10000 });
      |                                        ^ Error: expect(locator).toBeHidden() failed
  381 |   }
  382 | 
  383 |   /**
  384 |    * Returns to the filtered listing from a PDP using the browser's Back
  385 |    * button (mirrors clicking the actual back arrow), rather than a raw
  386 |    * URL — waits for the "Selected Filters" panel to be back on screen so
  387 |    * the next step doesn't race the navigation.
  388 |    */
  389 |   async goBackToListing() {
  390 |     await this.page.goBack();
  391 |     await expect(
  392 |       this.page.getByRole('heading', { name: 'Selected Filters' })
  393 |     ).toBeVisible({ timeout: 10000 });
  394 |   }
  395 | 
  396 |   /**
  397 |    * Clicks Reset and waits for the filter chips to actually clear before
  398 |    * moving on — resetting is followed by a re-render, so proceeding
  399 |    * immediately can land clicks on stale dropdown state.
  400 |    */
  401 |   async resetFilters() {
  402 |     await this.click(this.resetFiltersButton);
  403 | 
  404 |     // Wait for every "Remove X" chip to actually disappear before
  405 |     // continuing, instead of a blind timeout that might fire mid-re-render.
  406 |     await expect(
  407 |       this.page.getByRole('button', { name: /^Remove /i })
  408 |     ).toHaveCount(0, { timeout: 10000 });
  409 | 
  410 |     await this.page.waitForTimeout(2000);
  411 |   }
  412 | 
  413 |   async expectResultsVisible() {
  414 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  415 | 
  416 |     const priceCount = await this.resultPrices.count();
  417 |     expect(priceCount).toBeGreaterThan(0);
  418 |   }
  419 | 
  420 |   async clickProductByName(partialName: string) {
  421 |     await this.page
  422 |       .locator('a')
  423 |       .filter({ hasText: partialName })
  424 |       .click();
  425 |   }
  426 | }
```