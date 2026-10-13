import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class MobileHomePage extends BasePage {
  readonly logo: Locator;
  readonly searchCategory: Locator;
  readonly searchInput: Locator;
  readonly cartButton: Locator;
  readonly menuButton: Locator;
  readonly byCategoryButton: Locator;
  readonly topBrandsButton: Locator;
  readonly featuredItemsButton: Locator;
  readonly makeSelect: Locator;
  readonly shopNowButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    super(page);

   
    const header = page.getByRole('banner');

    this.logo = header.locator('a[href="/"]').first();
    this.searchCategory = page.getByRole('combobox', { name: 'Search category' });
    this.searchInput = page.getByRole('textbox', { name: 'Search for wheels' });
    this.cartButton = header.getByRole('button', { name: /cart/i });


    this.menuButton = header.getByRole('button', { name: 'Toggle menu' });

    this.byCategoryButton = page.getByRole('button', { name: 'By Category' });
    this.topBrandsButton = page.getByRole('button', { name: 'Top Brands' });
    this.featuredItemsButton = page.getByRole('button', { name: 'Featured Items' });

   
    this.makeSelect = page.getByRole('combobox').filter({ hasText: 'Make' }).first();

    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });

    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(this.shopNowButton).toBeVisible({ timeout: 15000 });
  }

  async hasHorizontalScroll(): Promise<boolean> {
    return this.page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
  }


  async openMenu() {
    await expect(async () => {
      if (!(await this.loginLink.isVisible())) {
        await this.menuButton.click({ timeout: 5000 });
      }
      await expect(this.loginLink).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 20000 });
  }

  async clickShopNow() {
    await expect(async () => {
      await this.shopNowButton.click({ timeout: 5000 });
      await this.page.waitForURL(/\/t\/categories/, {
        timeout: 5000,
        waitUntil: 'domcontentloaded',
      });
    }).toPass({ timeout: 20000 });
  }
}