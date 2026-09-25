import { test as base } from '@playwright/test';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CategoriesPage from '../pages/CategoriesPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import AddressPage from '../pages/AddressPage';
import CheckoutReviewPage from '../pages/CheckoutReviewPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import VehicleFitmentPage from '../pages/VehicleFitmentPage';
import AmazonPayCheckoutPage from '../pages/AmazonPayCheckoutPage';
import PayPalCheckoutPage from '../pages/PayPalCheckoutPage';
import AffirmCheckoutPage from '../pages/AffirmCheckoutPage';

type Fixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  categoriesPage: CategoriesPage;
  productPage: ProductPage;
  cartPage: CartPage;
  addressPage: AddressPage;
  checkoutReviewPage: CheckoutReviewPage;
  orderConfirmationPage: OrderConfirmationPage;
  vehicleFitmentPage: VehicleFitmentPage;
  amazonPayCheckoutPage: AmazonPayCheckoutPage;
  paypalCheckoutPage: PayPalCheckoutPage;
  affirmCheckoutPage: AffirmCheckoutPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  categoriesPage: async ({ page }, use) => {
    await use(new CategoriesPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  checkoutReviewPage: async ({ page }, use) => {
    await use(new CheckoutReviewPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  addressPage: async ({ page }, use) => {
    await use(new AddressPage(page));
  },

  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  },

  vehicleFitmentPage: async ({ page }, use) => {
    await use(new VehicleFitmentPage(page));
  },

  amazonPayCheckoutPage: async ({ page }, use) => {
    await use(new AmazonPayCheckoutPage(page));
  },

  paypalCheckoutPage: async ({ page }, use) => {
    await use(new PayPalCheckoutPage(page));
  },

  affirmCheckoutPage: async ({ page }, use) => {
    await use(new AffirmCheckoutPage(page));
  },
});

export { expect } from '@playwright/test';