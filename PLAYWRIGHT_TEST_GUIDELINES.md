// Zestaw reguł pisania testów w Playwright:
// 1. Każdy test powinien być niezależny i nie polegać na efektach ubocznych innych testów.
// 2. Testy powinny jasno opisywać swój cel w nazwie (np. 'should display correct title').
// 3. Używaj selektorów opartych na rolach lub tekstach, aby były odporne na zmiany struktury HTML.
// 4. Sprawdzaj widoczność, obecność, tekst lub inne właściwości elementów po interakcji.
// 5. Unikaj twardych oczekiwań na timeouty, korzystaj z wbudowanych asercji Playwrighta.
// 6. Testy powinny być krótkie i skupiać się na jednej funkcjonalności.
// 7. Komentuj nietypowe lub złożone kroki testowe.
// 8. Stosuj async/await dla operacji asynchronicznych.
// 9. Unikaj powtarzania kodu, stosuj funkcje pomocnicze jeśli to konieczne.
// 10. Testy powinny być czytelne i łatwe do utrzymania.

// Przykładowe dodatkowe testy zgodne z powyższymi regułami:

test('should display main navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('navigation')).toBeVisible();
});

test('should open Docs page from navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/.*docs/);
  await expect(page.getByRole('heading', { name: /Getting Started/ })).toBeVisible();
});

test('should have a visible search input', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByPlaceholder('Search')).toBeVisible();
});

test('should show correct footer text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('footer')).toContainText('© Microsoft');
});

test('should navigate to API reference from Docs', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'API Reference' }).click();
  await expect(page).toHaveURL(/.*api/);
  await expect(page.getByRole('heading', { name: /API Reference/ })).toBeVisible();
});