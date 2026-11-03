import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export class FooterPage extends BasePage {
  readonly header: Locator;
  readonly footer: Locator;
  readonly pageLoader: Locator;

  constructor(page: Page) {
    super(page);

    this.header = page.getByRole('banner').first();
    this.footer = page.getByRole('contentinfo');
    this.pageLoader = page.locator('.page-loader');
  }

  footerLink(name: string | RegExp): Locator {
    return this.footer.getByRole('link', { name });
  }

  async open(path = '/') {
    
    await this.goto(path);
    await expect(this.pageLoader).toBeHidden({ timeout: 30000 });

    await expect(this.footer).toBeVisible({ timeout: 20000 });
  }


  async expectHeaderAndFooter() {
    await expect(this.header).toBeVisible({ timeout: 20000 });
    await expect(this.footer).toBeVisible({ timeout: 20000 });
    for (const title of ['Contact Us', 'Support', 'Why Road Ready', 'Divisions']) {
      await expect(this.footer.getByRole('heading', { name: title, level: 3 })).toBeVisible();
    }
  }

  async clickFooterLink(name: string | RegExp, urlPattern: RegExp) {
    const link = this.footerLink(name);
    await expect(link).toBeVisible({ timeout: 20000 });

    
    await Promise.all([
      this.page.waitForURL(urlPattern, { timeout: 30000, waitUntil: 'domcontentloaded' }),
      link.click({ timeout: 20000 }),
    ]);
    await expect(this.pageLoader).toBeHidden({ timeout: 30000 });
  }


  async allHrefs(): Promise<string[]> {
    const hrefs = await this.footer.locator('a[href]').evaluateAll((els) =>
      els.map((e) => (e as HTMLAnchorElement).getAttribute('href') || '')
    );
    return [...new Set(hrefs)];
  }
}