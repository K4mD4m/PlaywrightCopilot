const { test, expect } = require('@playwright/test');

test('should log in and display Products header', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.title')).toBeVisible();
});
