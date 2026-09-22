# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Functionality - RoadReady Wheels >> should show error message with invalid credentials
- Location: tests\login.spec.ts:33:7

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://staging.roadreadywheels.com/", waiting until "load"

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
> 11 |     await this.page.goto(path);
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  12 |   }
  13 | 
  14 |   async getTitle(): Promise<string> {
  15 |     return this.page.title();
  16 |   }
  17 | 
  18 |  async click(locator: Locator) {
  19 |   await locator.waitFor({ state: 'visible' });
  20 |   await locator.scrollIntoViewIfNeeded();
  21 |   await locator.click();
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