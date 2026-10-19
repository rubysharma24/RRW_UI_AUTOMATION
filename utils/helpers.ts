

export function generateRandomEmail(prefix = 'test'): string {
  const random = Math.floor(Math.random() * 1_000_000);
  return `${prefix}_${random}@example.com`;
}

export function isCI(): boolean {
  return !!process.env.CI;
}
