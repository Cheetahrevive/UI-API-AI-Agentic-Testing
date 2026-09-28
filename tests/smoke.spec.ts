import { test, expect } from '@playwright/test';

test('framework smoke test', async () => {
  expect(1 + 1).toBe(2);
});

test('example.com loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
