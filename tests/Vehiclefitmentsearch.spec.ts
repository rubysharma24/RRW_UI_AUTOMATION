import { test, expect } from '../fixtures/pageFixtures';

test.describe('Vehicle Fitment Search - Guest End to End', () => {
  test('should filter Cadillac CT-Series, reset, clear Acura filters, and open Buick Enclave PDP', async ({
    vehicleFitmentPage,
    productPage,
  }) => {
    await test.step('Open home page and click Shop Now', async () => {
      await vehicleFitmentPage.openHomeAndShopNow();
    });

    await test.step('Search Cadillac, CT-Series, 2023', async () => {
      await vehicleFitmentPage.selectMake('Cadillac');
      await vehicleFitmentPage.selectModel('CT-Series');
      await vehicleFitmentPage.selectYear('2023');
      await vehicleFitmentPage.expectFiltersApplied('Cadillac', 'CT-Series', '2023');
    });

    await test.step('Apply Diameter, Bolt Pattern and Lug Count filters', async () => {
      await vehicleFitmentPage.selectDiameter('19"');
      await vehicleFitmentPage.selectBoltPattern('5x120mm or 5x4.7"');
      await vehicleFitmentPage.selectLugCount('5');
      await vehicleFitmentPage.expectFiltersApplied('19"', '5x120mm or 5x4.7"', '5');
    });

    await test.step('Reset all filters', async () => {
      await vehicleFitmentPage.resetFilters();
      await vehicleFitmentPage.expectFiltersCleared('Cadillac', 'CT-Series', '2023');
    });

    await test.step('Search Acura ILX and apply Alloy material', async () => {
      await vehicleFitmentPage.selectMake('Acura');
      await vehicleFitmentPage.selectModel('ILX');
      await vehicleFitmentPage.selectMaterial('Alloy');
      await vehicleFitmentPage.expectFiltersApplied('Acura', 'ILX', 'Alloy');
    });

    await test.step('Remove Alloy, ILX and Acura filter chips one by one', async () => {
      await vehicleFitmentPage.removeFilter('Alloy');
      await vehicleFitmentPage.removeFilter('ILX');
      await vehicleFitmentPage.removeFilter('Acura');
    });

    await test.step('Search Buick, Enclave, 2023', async () => {
      await vehicleFitmentPage.selectMake('Buick');
      await vehicleFitmentPage.selectModel('Enclave');
      await vehicleFitmentPage.selectYear('2023');
      await vehicleFitmentPage.expectFiltersApplied('Buick', 'Enclave', '2023');
    });

    await test.step('Open Buick Enclave wheel and verify PDP', async () => {
      await vehicleFitmentPage.clickProductByName('2018-2024 20x8 Buick Enclave');

      await expect(productPage.productTitle).toContainText(/Buick Enclave/i, {
        timeout: 10000,
      });

      const priceText = await productPage.getPriceText();
      const price = Number(priceText.replace(/[$,]/g, '').trim());
      expect(price).toBeGreaterThan(0);
    });
  });
});