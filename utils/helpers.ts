/**
 * Generic, page-independent helper functions go here.
 * Example: random email generator, date formatter, env checks, etc.
 *
 * NAYA HELPER ADD KARNA HO TO bas ek naya exported function add karo,
 * kisi cheez ko import/restructure karne ki zarurat nahi.
 */

export function generateRandomEmail(prefix = 'test'): string {
  const random = Math.floor(Math.random() * 1_000_000);
  return `${prefix}_${random}@example.com`;
}

export function isCI(): boolean {
  return !!process.env.CI;
}
