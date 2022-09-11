import { test, expect } from '@playwright/test';

test.describe('creating sections', () => {
  test('foo', async ({ page }) => {
    await page.goto('/');
    await page.screenshot({ path: 'foo.png' });
  });
});
