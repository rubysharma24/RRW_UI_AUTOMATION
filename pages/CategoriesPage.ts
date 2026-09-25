import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CategoriesPage extends BasePage {
  readonly closeModalButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly inStockLabels: Locator;
  readonly hollanderLabels: Locator;
  readonly firstProductLink: Locator;
  readonly closeCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.closeModalButton = page.getByRole('button', { name: 'Close modal' });
    this.searchInput = page.getByPlaceholder(/Search globally for make/i);

   
    this.searchButton = page
      .getByRole('banner')
      .getByRole('button', { name: 'Search', exact: true });

    this.inStockLabels = page.getByText('In Stock');
    this.hollanderLabels = page.getByText(/Hollander:\s*\S+/);
    this.firstProductLink = page.locator('a[href^="/products/"]').first();
    this.closeCartButton = page.getByRole('button', { name: 'Close cart' });
  }

  async closeShopAsModal(timeout = 5000) {
    
    try {
      await this.closeModalButton.waitFor({ state: 'visible', timeout });
      await this.closeModalButton.click();
    } catch {
      
    }
  }

  async closeCartIfOpen(timeout = 1500) {
    
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        await this.closeCartButton.waitFor({ state: 'visible', timeout });
        await this.closeCartButton.click();
        await expect(this.closeCartButton).toBeHidden({ timeout: 5000 });
        return;
      } catch {
        // Either wasn't open, or didn't close — try once more before giving up.
      }
    }
  }

  async searchFor(query: string) {
    await this.fill(this.searchInput, query);
    // Guard against a re-render (e.g. leftover cart state, page reactivity)
    // silently clearing the field right after fill.
    await expect(this.searchInput).toHaveValue(query);
  }

  async clickFirstProduct() {
    await this.click(this.firstProductLink);
  }

  async clickSearch() {
    await this.closeShopAsModal(1500);
    await this.closeCartIfOpen();
    await this.page.keyboard.press('Escape').catch(() => {});

    await expect(this.searchButton).toBeEnabled({ timeout: 10000 });

    try {
      await this.click(this.searchButton);
    } catch {
      await this.searchInput.press('Enter');
    }
  }

  async getSuggestionCount(): Promise<number> {
    return this.inStockLabels.count();
  }

  async getAllHollanderTexts(): Promise<string[]> {
    return this.hollanderLabels.allTextContents();
  }
}