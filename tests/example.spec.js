// @ts-check
import { test, expect } from '@chromatic-com/playwright';

test('has title', async ({ page }) => {
  await page.goto('https://content-scope-scripts.netlify.app/build/pages/new-tab/?feed=activity&activity=1');

  // Expect a title "to contain" a substring.
  await expect(page.locator('[data-entry-point="favorites"]')).toHaveScreenshot('favorites.png')
  await expect(page.locator('[data-entry-point="activity"]')).toHaveScreenshot('activity.png')
});
