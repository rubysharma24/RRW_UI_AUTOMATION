import { test, expect } from '../fixtures/pageFixtures';
import { validUser, invalidUser } from '../test-data/login.data';

test.describe('Login Functionality - RoadReady Wheels', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
  });

  test('should navigate to login page from home page', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await expect(loginPage.page).toHaveURL(/.*\/login/);
    await loginPage.expectVisible(loginPage.pageHeading);
  });

  test('should display all login page elements correctly', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();

    await loginPage.expectVisible(loginPage.signInTab);
    await loginPage.expectVisible(loginPage.emailInput);
    await loginPage.expectVisible(loginPage.passwordInput);
    await loginPage.expectVisible(loginPage.rememberMeCheckbox);
    await loginPage.expectVisible(loginPage.loginButton);
    await loginPage.expectVisible(loginPage.forgotPasswordLink);
  });

  test('should show validation when logging in with empty credentials', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.clickLogin();

    await expect(loginPage.page).toHaveURL(/.*\/login/);
  });

  test('should show error message with invalid credentials', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.login(invalidUser.email, invalidUser.password);

    await loginPage.expectVisible(loginPage.errorMessage);
  });

  test('should login successfully with valid credentials', async ({ homePage, loginPage }) => {
    test.skip(!process.env.VALID_USER_EMAIL, 'Valid staging credentials not configured in .env');

    await homePage.goToLogin();
    await loginPage.login(validUser.email, validUser.password);

    await expect(loginPage.page).not.toHaveURL(/.*\/login/);
    await loginPage.expectVisible(loginPage.successToast);
  });

  test('should navigate to forgot password page', async ({ homePage, loginPage }) => {
    await homePage.goToLogin();
    await loginPage.clickForgotPassword();

    await expect(loginPage.page).toHaveURL(/.*forgot.*password.*/i);
  });
});