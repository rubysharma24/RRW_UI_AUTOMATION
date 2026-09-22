import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';


export default class LoginPage extends BasePage {
  readonly pageHeading: Locator;
  readonly signInTab: Locator;
  readonly createAccountTab: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly showPasswordIcon: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorMessage: Locator; 
readonly successToast: Locator;
  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Welcome' });
    this.signInTab = page.getByRole('button', { name: 'Sign In' });
    this.createAccountTab = page.getByRole('button', { name: 'Create Account' });
    this.emailInput = page.getByPlaceholder('Enter email');
    this.passwordInput = page.getByPlaceholder('Enter password');
    this.showPasswordIcon = page.locator('input[placeholder="Enter password"] ~ *').first();
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByText('Forgot Password?');
    this.errorMessage = page.locator('[class*="error"], [role="alert"]');
    this.successToast = page.getByText('Successfully logged in');
  }

  async open() {
    await this.goto('/login');
  }

  async enterEmail(email: string) {
    await this.fill(this.emailInput, email);
  }

  async enterPassword(password: string) {
    await this.fill(this.passwordInput, password);
  }

  async toggleRememberMe() {
    await this.click(this.rememberMeCheckbox);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

 
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async clickForgotPassword() {
    await this.click(this.forgotPasswordLink);
      await this.page.waitForTimeout(3000);
  }
}
