import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';


export default class OrderConfirmationPage extends BasePage {
  readonly orderConfirmedHeading: Locator;
  readonly orderNumberText: Locator;

  constructor(page: Page) {
    super(page);

    // GUESSED — confirm the real heading text/role and swap this in.
    this.orderConfirmedHeading = page.getByRole('heading', {
      name: /order confirmed|thank you for your order/i,
    });

    this.orderNumberText = page.getByText(/Order Number:/i);
  }

 
  async expectOrderPlaced() {
    await this.page.waitForURL(/order-confirmation-invoice\?orderNumber=/, {
      timeout: 20000,
    });
    await expect(this.orderConfirmedHeading).toBeVisible({ timeout: 10000 });
  }

 
  getOrderNumberFromUrl(): string {
    const url = new URL(this.page.url());
    return url.searchParams.get('orderNumber') ?? '';
  }

  
  async expectCustomerEmailVisible(email: string) {
    await expect(this.page.getByText(email)).toBeVisible({ timeout: 10000 });
  }
}