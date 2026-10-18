import { test, expect } from '@playwright/test';
import { FooterPage } from '../pages/FooterPage';

const internalLinks = [
  { name: 'Returns and Refunds', url: /\/faq\/i-want-to-return-my-rim-and-get-a-full-refund\?id=7/ },
  { name: 'Contact Us', url: /\/contact/ },
  { name: 'Warranty', url: /\/faq\/what-is-your-product-warranty\?id=9/ },
  { name: 'FAQs', url: /\/faq$/ },
  { name: 'Wheel Requests', url: /\/wheel-requests/ },
  { name: 'Terms of Service', url: /\/terms-of-service/ },
  { name: 'Privacy Policy', url: /\/privacy-policy/ },
  { name: 'Shipping Policy', url: /\/faq\/how-long-does-it-take-to-ship-to-me\?id=1/ },
  { name: 'About Us', url: /\/about-us/ },
  { name: 'Price Comparison', url: /\/price-comparison/ },
  { name: 'Wholesale', url: /\/wholesale/ },
  { name: 'Resale', url: /\/resale/ },
];

test.describe('Footer links', () => {
  let footer: FooterPage;

  test.beforeEach(async ({ page }) => {
    footer = new FooterPage(page);
    await footer.open('/');
  });

  test('footer has all 4 columns on home page', async () => {
    await footer.expectHeaderAndFooter();
  });

  for (const link of internalLinks) {
    test(`footer link "${link.name}" opens correct page with header and footer`, async ({ page }) => {
      await footer.clickFooterLink(link.name, link.url);
      await expect(page).toHaveURL(link.url);
      // Destination page par bhi header + footer
      await footer.expectHeaderAndFooter();
      await expect(page.getByText(/404|page not found/i).first()).toBeHidden();
    });
  }

  test('contact details and social links have correct hrefs', async () => {
    await expect(footer.footer.locator('a[href^="tel:+18887905899"]')).toBeVisible();
    await expect(footer.footer.locator('a[href^="tel:+12176352033"]')).toBeVisible();
    await expect(footer.footer.locator('a[href="mailto:support@roadreadywheels.com"]')).toBeVisible();
    await expect(footer.footer.locator('a[href*="facebook.com/roadreadywheels"]')).toBeVisible();
    await expect(footer.footer.locator('a[href*="twitter.com/RoadReadyWheel1"]')).toBeVisible();
    await expect(footer.footer.locator('a[href*="instagram.com/roadreadywheels"]')).toBeVisible();
    await expect(footer.footer.locator('a[href*="youtube.com/channel/"]')).toBeVisible();
  });

  test('no broken internal footer links (HTTP < 400)', async ({ request, baseURL }) => {
    const hrefs = await footer.allHrefs();
    const internal = hrefs.filter((h) => h.startsWith('/') || h.startsWith(baseURL ?? 'http://__none__'));
    expect(internal.length).toBeGreaterThan(0);
    for (const href of internal) {
      const res = await request.get(href.startsWith('/') ? `${baseURL}${href}` : href);
      expect.soft(res.status(), `Broken link: ${href}`).toBeLessThan(400);
    }
  });
});
