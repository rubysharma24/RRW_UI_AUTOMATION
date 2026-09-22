import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';


export default class HomePage extends BasePage {
  readonly loginLink: Locator;
  readonly searchAllDropdown: Locator;
  readonly searchInput: Locator;
  readonly shopNowButton: Locator;
  readonly browseAllWheelsLink: Locator;
  readonly byCategoryButton: Locator;
  readonly topBrandsButton: Locator;
  readonly featuredItemsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.getByText('Login', { exact: true });
    this.searchAllDropdown = page.getByRole('button', { name: 'Search All' });
    this.searchInput = page.getByPlaceholder(/Search globally for make/i);
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' });
    this.browseAllWheelsLink = page.getByText('Browse All Wheels');
    this.byCategoryButton = page.getByRole('button', { name: 'By Category' });
    this.topBrandsButton = page.getByRole('button', { name: 'Top Brands' });
    this.featuredItemsButton = page.getByRole('button', { name: 'Featured Items' });
  }

  async open() {
    await this.goto('/');
  }

  async goToLogin() {
    await this.click(this.loginLink);
  }
}
