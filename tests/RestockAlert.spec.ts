import { test } from '@playwright/test';
import RestockAlertPage from '../pages/RestockAlertPage';

test.describe('Restock Alert - Guest flow', () => {
  test('guest user can request a restock alert for BMW 6-Series 2018 OEM Reconditioned Wheel', async ({
    page,
  }) => {
    const restock = new RestockAlertPage(page);
    const email = `ruby.sharma+${Date.now()}@w3villa.com`;

    await test.step('Open home page and click Shop Now', async () => {
      await restock.open();
    });

    await test.step('Select BMW / 6-Series / 2018', async () => {
      await restock.selectMake('BMW');
      await restock.selectModel('6-Series');
      await restock.selectYear('2018');
    });

    await test.step('Choose OEM Reconditioned Wheel category', async () => {
      await restock.selectCategory('OEM Reconditioned Wheel');
    });

    await test.step('Submit Get Restock Alert and verify toast', async () => {
      await restock.submitRestockAlert(email, true);
    });
  });
});