import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export default class CategoriesPage extends BasePage {
  readonly closeModalButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly inStockLabels: Locator;
readonly hollanderLabels: Locator;
readonly firstProductLink: Locator;
  constructor(page: Page) {
  super(page);
  this.closeModalButton = page.getByRole('button', { name: 'Close modal' });
  this.searchInput = page.getByPlaceholder(/Search globally for make/i);

  // was: page.getByRole('button', { name: 'Search', exact: true })
  this.searchButton = this.searchInput
    .locator('..') // the search-bar container the input, category select and button all share
    .getByRole('button', { name: 'Search', exact: true });

  this.inStockLabels = page.getByText('In Stock');
  this.hollanderLabels = page.getByText(/Hollander:\s*\S+/);
  this.firstProductLink = page.locator('a[href^="/products/"]').first();



  }

  async closeShopAsModal() {
    // was: this.closeModalButton.isVisible({ timeout: 3000 }) — isVisible()
    // does NOT wait/retry, it checks the DOM once instantly. Right after
    // login the modal hasn't mounted yet, so isVisible() returned false
    // too early and the click was skipped — the modal then appeared a
    // moment later and sat there blocking every later click.
    // waitFor() actually retries until the button shows up (or the
    // timeout passes), so this only clicks once it's really there.
    try {
      await this.closeModalButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.closeModalButton.click();
    } catch {
      // Modal never appeared this run — nothing to close, continue.
    }
  }

  async searchFor(query: string) {
    await this.fill(this.searchInput, query);
  }
// method:
async clickFirstProduct() {
  await this.click(this.firstProductLink);
}
  async clickSearch() {
    
    await this.page.keyboard.press('Escape').catch(() => {});

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