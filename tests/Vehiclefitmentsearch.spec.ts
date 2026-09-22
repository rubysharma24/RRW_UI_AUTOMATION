import { test, expect } from '../fixtures/pageFixtures';
import { validUser } from '../test-data/login.data';

test.describe('Vehicle Fitment Search - End to End', () => {
  test.beforeEach(async ({ homePage, loginPage }) => {
    await homePage.open();
    await homePage.goToLogin();
    await loginPage.login(validUser.email, validUser.password);
  });

  test('should search two vehicles, reset between them, and notify me for an out-of-stock result', async ({
    vehicleFitmentPage,
    productPage,
  }) => {
    // --------------------------------------------------
    // 1. Mandatory "Shop As" modal right after login — no separate
    // "open finder" trigger exists, selecting Resale here is what lands
    // us on the categories page with the Make/Model/Year selects.
    // --------------------------------------------------
    await test.step('Select Resale shop mode', async () => {
      await vehicleFitmentPage.selectShopMode('Resale');
    });

    // --------------------------------------------------
    // 2. First vehicle: Audi, A Series, 2013 — no Category/Material/
    // Diameter filters this time, matches the recorded flow.
    // --------------------------------------------------
    await test.step('Search Audi, A Series, 2013', async () => {
      await vehicleFitmentPage.selectMake('Audi');
      await vehicleFitmentPage.selectModel('A Series');
      await vehicleFitmentPage.selectYear('2013');
      await vehicleFitmentPage.expectFiltersApplied('A Series', '2013');
    });

    await test.step('Open the Audi A8 wheel and verify PDP', async () => {
      await vehicleFitmentPage.clickProductByName(
        '-2015 19x9 Audi A8 Alloy Wheel / Rim'
      );

      await expect(productPage.productTitle).toContainText(/Audi A8/i, {
        timeout: 10000,
      });

      const priceText = await productPage.getPriceText();
      const price = Number(priceText.replace(/[$,]/g, '').trim());
      expect(price).toBeGreaterThan(0);
    });

    // --------------------------------------------------
    // 3. Deep-link back to the Audi listing, then Reset — mirrors the
    // recorded page.goto(...) + Reset click.
    // --------------------------------------------------
    await test.step('Return to the Audi listing and reset filters', async () => {
      await vehicleFitmentPage.goToFilteredCategory({
        make: 'Audi',
        model: 'A Series',
        year: '2013',
      });

      await vehicleFitmentPage.resetFilters();
      await vehicleFitmentPage.expectFiltersCleared('A Series', '2013');
    });

    // --------------------------------------------------
    // 4. Second vehicle: Cadillac Escalade, OEM Replacement Wheel,
    // Alloy, 20" — this combination is out of stock.
    // --------------------------------------------------
    await test.step('Search Cadillac Escalade with Category/Material/Diameter filters', async () => {
      await vehicleFitmentPage.selectMake('Cadillac');
      await vehicleFitmentPage.selectModel('Escalade');
      await vehicleFitmentPage.expectFiltersApplied('Escalade');

      await vehicleFitmentPage.selectCategory('OEM Replacement Wheel');
      await vehicleFitmentPage.selectMaterial('Alloy');
      await vehicleFitmentPage.selectDiameter('20"');

      await vehicleFitmentPage.expectFiltersApplied(
        'OEM Replacement Wheel',
        'Alloy',
        '20"'
      );
    });

    // --------------------------------------------------
    // 5. Open the matching product, then Notify Me for it via the PDP
    // Add To Cart -> Submit flow (out of stock, no email field needed).
    // --------------------------------------------------
    await test.step('Open the Cadillac Escalade wheel and verify PDP', async () => {
      await vehicleFitmentPage.clickProductByName('2015-2023 Cadillac Escalade');

      await expect(productPage.productTitle).toContainText(
        /Cadillac Escalade/i,
        { timeout: 10000 }
      );

      const priceText = await productPage.getPriceText();
      const price = Number(priceText.replace(/[$,]/g, '').trim());
      expect(price).toBeGreaterThan(0);
    });

await test.step('Notify Me for the out-of-stock Escalade wheel', async () => {
  await vehicleFitmentPage.submitNotifyMeFromPdp('ruby.sharma@w3villa.com');
});
  });
});