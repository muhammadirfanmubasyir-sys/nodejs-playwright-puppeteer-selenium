import { test, expect } from '@playwright/test';

test('sample', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();
});