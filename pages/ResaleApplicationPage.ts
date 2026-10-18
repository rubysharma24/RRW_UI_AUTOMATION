import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export interface ResaleApplicationData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  bestTimeToContact: string; // yyyy-MM-ddTHH:mm
  customerIndustry: string;  // <select> ki option value ya label
}

export class ResaleApplicationPage extends BasePage {
  readonly pageLoader: Locator;
  readonly shopNowButton: Locator;
  readonly resaleLink: Locator;
  readonly getStartedButton: Locator;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly bestTime: Locator;
  readonly customerIndustry: Locator;

  constructor(page: Page) {
    super(page);
    this.pageLoader = page.locator('.page-loader');
    this.shopNowButton = page.getByRole('button', { name: 'Shop Now' }).first();
    this.resaleLink = page.getByRole('link', { name: 'Resale' }).first();
    this.getStartedButton = page.getByRole('button', { name: 'Get Started' }).first();

    this.firstName = page.getByRole('textbox', { name: 'First Name *' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name *' });
    this.company = page.getByRole('textbox', { name: 'Company Name *' });
    this.phone = page.getByRole('textbox', { name: 'Phone *' });
    this.email = page.getByRole('textbox', { name: 'Email *' });
    this.bestTime = page.getByRole('textbox', { name: 'Best Time To Contact' });
    this.customerIndustry = page.getByLabel('Customer Industry');
  }

  /** Home -> Shop Now -> Resale */
  async open() {
    await this.page.goto('/');
    await this.shopNowButton.click();
    await expect(this.pageLoader).toBeHidden({ timeout: 30000 });
    await this.resaleLink.click();
    await expect(this.page).toHaveURL(/\/resale/, { timeout: 30000 });
    await expect(this.pageLoader).toBeHidden({ timeout: 30000 });
    await expect(this.getStartedButton).toBeVisible({ timeout: 20000 });
  }

  async startApplication() {
    await this.getStartedButton.click();
    await expect(this.firstName).toBeVisible({ timeout: 15000 });
  }

  async fillForm(d: ResaleApplicationData) {
    await this.firstName.fill(d.firstName);
    await this.lastName.fill(d.lastName);
    await this.company.fill(d.company);
    await this.phone.fill(d.phone);
    await this.email.fill(d.email);
    await this.bestTime.fill(d.bestTimeToContact);
    await this.bestTime.press('Tab');
    await this.customerIndustry.selectOption(d.customerIndustry);
  }

  /** yyyy-MM-ddTHH:mm, aaj se `days` din baad */
  static futureDateTime(days = 3): string {
    const d = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    d.setHours(16, 30, 0, 0);
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
  }
}