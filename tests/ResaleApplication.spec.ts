import { test, expect } from '@playwright/test';
import { ResaleApplicationPage, ResaleApplicationData } from '../pages/ResaleApplicationPage';

const stamp = Date.now();
const data: ResaleApplicationData = {
  firstName: 'Ruby',
  lastName: 'Sharma',
  company: 'Ruby Resale QA',
  phone: '9368047877',
  email: `ruby.resale+${stamp}@example.com`,
  bestTimeToContact: ResaleApplicationPage.futureDateTime(3),
  customerIndustry: '9',
};

test.describe('Resale user application form', () => {
  let form: ResaleApplicationPage;

  test.beforeEach(async ({ page }) => {
    form = new ResaleApplicationPage(page);
    await form.open();
    await form.startApplication();
  });

  test('application form opens with all fields visible', async () => {
    await expect(form.firstName).toBeVisible();
    await expect(form.lastName).toBeVisible();
    await expect(form.company).toBeVisible();
    await expect(form.phone).toBeVisible();
    await expect(form.email).toBeVisible();
    await expect(form.bestTime).toBeVisible();
    await expect(form.customerIndustry).toBeVisible();
  });

  test('all fields can be filled and customer industry selected', async () => {
    await form.fillForm(data);
    await expect(form.firstName).toHaveValue(data.firstName);
    await expect(form.lastName).toHaveValue(data.lastName);
    await expect(form.company).toHaveValue(data.company);
    await expect(form.email).toHaveValue(data.email);
    await expect(form.bestTime).toHaveValue(data.bestTimeToContact);
    await expect(form.customerIndustry).toHaveValue(data.customerIndustry);
  });
});
