import { Page, Locator, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class WishlistPage extends BasePage {
  readonly closeModalButton: Locator;
  readonly resaleOptionButton: Locator;
  readonly addToWishlistButtons: Locator;
  readonly removeFromWishlistButtons: Locator;
  readonly addedToast: Locator;
  readonly removedToast: Locator;
  readonly accountMenuButton: Locator;
  readonly wishlistNavLink: Locator;
  readonly wishlistHeading: Locator;
  readonly emptyHeading: Locator;
  readonly itemsInWishlistText: Locator;
  readonly addToCartButtons: Locator;
  readonly closeCartButton: Locator;
  readonly continueShoppingLink: Locator;
  readonly browseWheelsLink: Locator;

  constructor(page: Page) {
    super(page);

    this.closeModalButton = page.getByRole('button', { name: 'Close modal' });
    // "Shop As" modal's Resale option — the name carries a changing range
    // ("Resale Orders of: (1-14)"), so match on the stable prefix only.
    this.resaleOptionButton = page.getByRole('button', { name: /Resale Orders of/ });

    this.addToWishlistButtons = page.getByRole('button', { name: 'Add to wishlist' });
    this.removeFromWishlistButtons = page.getByRole('button', { name: 'Remove from wishlist' });

    this.addedToast = page.getByText('Added to wishlist');
    this.removedToast = page.getByText('Removed from wishlist');

    // Account icon: no aria-label AND no visible text — the only header
    // button satisfying both at once (cart has an aria-label; Search /
    // Resale / Wholesale / Select State have visible text).
    this.accountMenuButton = page
      .getByRole('banner')
      .locator('button:not([aria-label])')
      .filter({ hasText: /^$/ });

    this.wishlistNavLink = page.getByRole('link', { name: 'Wishlist' });
    this.wishlistHeading = page.getByRole('heading', { name: 'My Wishlist' });
    this.emptyHeading = page.getByRole('heading', { name: 'Your wishlist is empty' });
    // Singular "item in your wishlist" for 1 item, "items in..." for >1.
    this.itemsInWishlistText = page.getByText(/item(s)? in your wishlist/i);

    this.addToCartButtons = page.getByRole('button', { name: 'Add to Cart' });
    // Multiple "Close cart" buttons can exist in the DOM at once, so this
    // stays unscoped and the visible one is resolved at call time.
    this.closeCartButton = page.getByRole('button', { name: 'Close cart' });
    this.continueShoppingLink = page.getByRole('link', { name: 'Continue Shopping' });
    this.browseWheelsLink = page.getByRole('link', { name: 'Browse Wheels' });
  }

  /** Just dismiss the "Shop As" popup after login — no Resale/Wholesale choice. */
  async dismissShopAsModal() {
    const visible = await this.closeModalButton.isVisible({ timeout: 5000 }).catch(() => false);
    if (visible) {
      await this.click(this.closeModalButton);
    }
  }

  /** Pick "Resale" in the post-login "Shop As" modal (skips quietly if the modal doesn't show). */
  async selectResaleMode() {
    const visible = await this.resaleOptionButton.isVisible({ timeout: 5000 }).catch(() => false);
    if (visible) {
      await this.click(this.resaleOptionButton);
      await expect(this.resaleOptionButton).toBeHidden({ timeout: 10000 });
    }
  }

  /**
   * The "Shop As" modal and the cart drawer can reappear mid-flow and block
   * clicks underneath them. Called inside every retry loop below.
   * Never call .isVisible()/.click() directly on the multi-match
   * closeCartButton (strict-mode violation swallowed by .catch) — click
   * whichever "Close cart" button is actually visible right now.
   */
  private async closeOverlaysIfPresent() {
    const modalVisible = await this.closeModalButton.isVisible({ timeout: 1000 }).catch(() => false);
    if (modalVisible) {
      await this.closeModalButton.click({ timeout: 3000 }).catch(() => {});
    }

    const cartCloseButtons = await this.closeCartButton.all();
    for (const btn of cartCloseButtons) {
      const visible = await btn.isVisible().catch(() => false);
      if (visible) {
        await btn.click({ timeout: 3000 }).catch(() => {});
      }
    }
  }

  /** index = which product's heart on the listing page (0 = first, 1 = second, ...). */
  async addItemToWishlist(index: number = 0) {
    await expect(async () => {
      await this.closeOverlaysIfPresent();
      await this.addToWishlistButtons.nth(index).click({ timeout: 5000 });
    }).toPass({ timeout: 20000 });
  }

  async addMultipleItemsToWishlist(count: number) {
    for (let i = 0; i < count; i++) {
      await this.addItemToWishlist();
    }
  }

  async expectItemAdded() {
    await expect(this.addedToast).toBeVisible({ timeout: 10000 });
  }

  async openWishlist() {
    // One retry unit: (re)open the account dropdown only when the Wishlist
    // link isn't showing, then click the link. If the dropdown closes between
    // the two clicks, the next attempt reopens it instead of waiting forever.
    await expect(async () => {
      await this.closeOverlaysIfPresent();

      if (!(await this.wishlistNavLink.first().isVisible())) {
        await this.accountMenuButton.click({ timeout: 5000 });
      }
      await this.wishlistNavLink.first().click({ timeout: 5000 });
    }).toPass({ timeout: 30000 });

    await expect(this.wishlistHeading.or(this.emptyHeading)).toBeVisible({ timeout: 10000 });

    // The heading renders before the item list does — wait for the list
    // itself (empty state, or first item rendered) before any caller
    // trusts removeFromWishlistButtons.count().
    await expect(
      this.emptyHeading.or(this.removeFromWishlistButtons.first())
    ).toBeVisible({ timeout: 10000 });
  }

  async expectWishlistHasItems() {
    await expect(this.wishlistHeading).toBeVisible();
    await expect(this.itemsInWishlistText).toBeVisible();
  }

  /** Exact number of items in the wishlist (one "Remove from wishlist" button per item). */
  async expectWishlistItemCount(count: number) {
    await expect(this.wishlistHeading).toBeVisible({ timeout: 10000 });
    await expect(this.removeFromWishlistButtons).toHaveCount(count, { timeout: 10000 });
  }

  async addFirstItemToCartFromWishlist() {
    await expect(async () => {
      await this.closeOverlaysIfPresent();
      await this.addToCartButtons.first().click({ timeout: 5000 });
    }).toPass({ timeout: 20000 });
  }

  async closeCart() {
    const cartCloseButtons = await this.closeCartButton.all();
    for (const btn of cartCloseButtons) {
      const visible = await btn.isVisible().catch(() => false);
      if (visible) {
        await this.click(btn);
      }
    }
  }

  async clickContinueShopping() {
    await this.click(this.continueShoppingLink);
  }

 async removeFirstItem() {
  const countBefore = await this.removeFromWishlistButtons.count();

  // Click + "count actually dropped" in ONE retry unit: if the click was
  // swallowed (handler not attached yet) or the removal didn't go through,
  // the next attempt clicks again instead of only polling the count.
  await expect(async () => {
    await this.closeOverlaysIfPresent();

    // Skip the click if a removal from the previous attempt already landed.
    if ((await this.removeFromWishlistButtons.count()) >= countBefore) {
      await this.removeFromWishlistButtons.first().click({ timeout: 5000 });
    }

    await expect
      .poll(() => this.removeFromWishlistButtons.count(), { timeout: 4000 })
      .toBeLessThan(countBefore);
  }).toPass({ timeout: 30000 });
}
  async removeAllItems() {
    while (await this.removeFromWishlistButtons.count() > 0) {
      await this.removeFirstItem();
    }
  }

  async expectItemRemoved() {
    await expect(this.removedToast).toBeVisible({ timeout: 10000 });
  }

  async expectWishlistEmpty() {
    await expect(this.emptyHeading).toBeVisible({ timeout: 10000 });
  }

  async clickBrowseWheels() {
    await this.click(this.browseWheelsLink);
  }

  /**
   * Ensures the wishlist starts empty: opens it, removes whatever is
   * there (nothing to remove if already empty), confirms the empty state,
   * then clicks Browse Wheels so the test body starts on the listing page.
   */
  async clearWishlist() {
    await this.openWishlist();
    await this.removeAllItems();
    await this.expectWishlistEmpty();
    await this.clickBrowseWheels();
  }
}