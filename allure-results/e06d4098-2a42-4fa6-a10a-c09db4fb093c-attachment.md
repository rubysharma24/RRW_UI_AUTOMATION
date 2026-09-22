# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Functionality - RoadReady Wheels >> should navigate to login page from home page
- Location: tests\login.spec.ts:9:7

# Error details

```
Error: page.goto: Test ended.
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
     |                     ^ Error: page.goto: Test ended.
  12 |   }
  13 | 
  14 |   async getTitle(): Promise<string> {
  15 |     return this.page.title();
  16 |   }
  17 | 
  18 |  async click(locator: Locator) {
  19 |   await locator.waitFor({ state: 'visible' });
  20 |   await locator.scrollIntoViewIfNeeded();
  21 |   await expect(locator).toBeEnabled({ timeout: 15000 });
  22 |   await locator.click();
  23 | }
  24 | 
  25 |   async fill(locator: Locator, value: string) {
  26 |     await locator.waitFor({ state: 'visible' });
  27 |     await locator.fill(value);
  28 |   }
  29 | 
  30 |   async isVisible(locator: Locator): Promise<boolean> {
  31 |     return locator.isVisible();
  32 |   }
  33 | 
  34 |   async expectVisible(locator: Locator) {
  35 |     await expect(locator).toBeVisible();
  36 |   }
  37 | 
  38 |   async expectText(locator: Locator, text: string) {
  39 |     await expect(locator).toContainText(text);
  40 |   }
  41 | }
  42 | 
```