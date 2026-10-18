import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export interface WholesaleApplicationData {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  bestTimeToContact: string; // yyyy-MM-ddTHH:mm
  // step 2 dropdown options
  option1: string; // e.g. 'CCC'
  option2: string; // e.g. 'Dealership'
  option3: string; // e.g. 'Credit Card'
  option4: string; // e.g. 'Monthly'
  // step 3
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export class WholesaleApplicationPage extends BasePage {
  readonly pageLoader: Locator;
  readonly wholesaleLink: Locator;
  readonly getStartedButton: Locator;

  // Step 1
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly bestTime: Locator;
  readonly nextButton: Locator;

  // Step 2 (rc-select dropdowns)
  readonly dropdowns: Locator;

  // Step 3
  readonly contactName: Locator;
  readonly contactEmail: Locator;
  readonly contactPhone: Locator;
  readonly captchaFrame: Locator;

  constructor(page: Page) {
    super(page);
    this.pageLoader = page.locator('.page-loader');
    this.wholesaleLink = page.getByRole('link', { name: 'Wholesale' }).first();
    this.getStartedButton = page.getByRole('button', { name: 'Get Started' }).first();

    this.firstName = page.getByRole('textbox', { name: 'Enter your first name' });
    this.lastName = page.getByRole('textbox', { name: 'Enter your last name' });
    this.company = page.getByRole('textbox', { name: 'Enter your company name' });
    this.phone = page.getByRole('textbox', { name: '(555) 123-' });
    this.email = page.getByRole('textbox', { name: 'your.email@example.com' });
    this.bestTime = page.locator('input[name="best_time_to_contact"]');
    this.nextButton = page.locator('#get-started');

    // ids (#rc_select_N) badalte rehte hain, isliye pattern se pakdo
    this.dropdowns = page.locator('input[role="combobox"][id^="rc_select_"]');

    this.contactName = page.getByRole('textbox', { name: 'Enter full name' });
    this.contactEmail = page.getByRole('textbox', { name: 'Enter email address' });
    this.contactPhone = page.getByRole('textbox', { name: 'Enter phone number' });
    this.captchaFrame = page.locator('iframe[title*="reCAPTCHA"], iframe[src*="recaptcha"]').first();
  }

  async open() {
    await this.page.goto('/');
    await this.wholesaleLink.click();
    await expect(this.page).toHaveURL(/\/wholesale/, { timeout: 30000 });
    await expect(this.pageLoader).toBeHidden({ timeout: 30000 });
    await expect(this.getStartedButton).toBeVisible({ timeout: 20000 });
  }

  async startApplication() {
    await this.getStartedButton.click();
    await expect(this.firstName).toBeVisible({ timeout: 15000 });
  }

  async fillStep1(d: WholesaleApplicationData) {
    await this.firstName.fill(d.firstName);
    await this.lastName.fill(d.lastName);
    await this.company.fill(d.company);
    await this.phone.fill(d.phone);
    await this.email.fill(d.email);
    await this.bestTime.fill(d.bestTimeToContact);
  }

  async goToStep2() {
    await this.nextButton.click();
    await expect(this.dropdowns.first()).toBeVisible({ timeout: 15000 });
  }

  private async pickDropdown(index: number, option: string) {
    await expect(async () => {
      await this.dropdowns.nth(index).click();
      await this.page.getByText(option, { exact: true }).first().click({ timeout: 3000 });
    }).toPass({ timeout: 15000 });
  }

  async fillStep2(d: WholesaleApplicationData) {
    await this.pickDropdown(0, d.option1);
    await this.pickDropdown(1, d.option2);
    await this.pickDropdown(2, d.option3);
    await this.pickDropdown(3, d.option4);
  }

  async fillStep3(d: WholesaleApplicationData) {
    await this.contactName.fill(d.contactName);
    await this.contactEmail.fill(d.contactEmail);
    await this.contactPhone.fill(d.contactPhone);
  }

  /** yyyy-MM-ddTHH:mm, aaj se `days` din baad */
  static futureDateTime(days = 3): string {
    const d = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
    d.setHours(17, 0, 0, 0);
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
  }
}