import { test } from '../fixtures/pageFixtures';
import { wishlistUser } from '../test-data/wishlist.data';

test.describe('Wishlist Flow - RoadReady Wheels', () => {
  test.describe.configure({ timeout: 120_000 });

  test.beforeEach(async ({ homePage, loginPage, wishlistPage }) => {
    await homePage.open();
    await homePage.goToLogin();
    await loginPage.login(wishlistUser.email, wishlistUser.password);

    await wishlistPage.selectResaleMode();
   
    await wishlistPage.clearWishlist();
  });

  test('should add an item to wishlist from listing and verify it in the wishlist', async ({
    wishlistPage,
  }) => {
    await test.step('Click heart on the 2nd product and validate toast', async () => {
      await wishlistPage.addItemToWishlist(1);
      await wishlistPage.expectItemAdded();
    });

    await test.step('Open wishlist and verify the item is added', async () => {
      await wishlistPage.openWishlist();
      await wishlistPage.expectWishlistHasItems();
      await wishlistPage.expectWishlistItemCount(1);
    });
  });
});