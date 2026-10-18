import { test, expect } from '@playwright/test';
import { WholesaleApplicationPage, WholesaleApplicationData } from '../pages/WholesaleApplicationPage';

const stamp = Date.now();
const data: WholesaleApplicationData = {
  firstName: 'Ruby',
  lastName: 'Sharma',
  company: 'Ruby Auto Wheels QA',
  phone: '9368047877',
  email: `ruby.qa+${stamp}@example.com`,
  bestTimeToContact: WholesaleApplicationPage.futureDateTime(3),
  option1: 'CCC',
  option2: 'Dealership',
  option3: 'Credit Card',
  option4: 'Monthly',
  contactName: 'Rishabh QA',
  contactEmail: `rishabh.qa+${stamp}@example.com`,
  contactPhone: '9368047877',
};

test.describe('Wholesale user application form (till captcha)', () => {
  let form: WholesaleApplicationPage;

  test.beforeEach(async ({ page }) => {
    form = new WholesaleApplicationPage(page);
    await form.open();
    await form.startApplication();
  });

  test('step 1: contact details can be filled and moves to step 2', async () => {
    await form.fillStep1(data);
    await form.goToStep2();
    await expect(form.dropdowns.first()).toBeVisible();
  });

  test('step 2: all dropdown options can be selected and moves to step 3', async () => {
    await form.fillStep1(data);
    await form.goToStep2();
    await form.fillStep2(data);
    await expect(form.contactName).toBeVisible({ timeout: 15000 });
  });

  test('step 3: second contact details are accepted and captcha is shown', async () => {
    await form.fillStep1(data);
    await form.goToStep2();
    await form.fillStep2(data);
    await form.fillStep3(data);
    await expect(form.contactName).toHaveValue(data.contactName);
    await expect(form.contactEmail).toHaveValue(data.contactEmail);
    await expect(form.contactPhone).not.toHaveValue('');
    await expect(form.captchaFrame).toBeAttached();
  });

  test('complete form flow till captcha (no submit)', async () => {
    await form.fillStep1(data);
    await form.goToStep2();
    await form.fillStep2(data);
    await form.fillStep3(data);
    await expect(form.captchaFrame).toBeAttached();
   
  });
});