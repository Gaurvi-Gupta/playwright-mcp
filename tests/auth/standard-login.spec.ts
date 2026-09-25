import { test, expect } from '../../src/fixtures/base';
import { LoginPage } from '../../src/pages/LoginPage';

const users = require('../data/users.json');

test.describe('Authentication', () => {
  test('standard user can log in @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    const inventoryPage = await loginPage.loginAs(users.standard);

    await expect(page).toHaveURL(/\/inventory\.html/);
    await expect(inventoryPage.productsHeader).toBeVisible();
  });
});
