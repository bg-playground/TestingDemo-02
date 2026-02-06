import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { AdminPage } from '../../pages/AdminPage';

test.describe('Admin Module Tests', () => {
  let loginPage;
  let dashboardPage;
  let adminPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    adminPage = new AdminPage(page);

    // Login before each test
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/.*dashboard/);
    await dashboardPage.navigateToAdmin();
  });

  test('TC-ADMIN-001: Navigate to Admin Module', async ({ page }) => {
    await test.step('Verify Admin page is displayed', async () => {
      const isAdminVisible = await adminPage.isAdminPageVisible();
      expect(isAdminVisible).toBeTruthy();
    });
  });

  test('TC-ADMIN-002: Search User by Username', async ({ page }) => {
    await test.step('Search for Admin user', async () => {
      await adminPage.searchByUsername('Admin');
      await page.waitForTimeout(2000); // Wait for search results
    });

    await test.step('Verify search results are displayed', async () => {
      const recordsText = await adminPage.getRecordsCount();
      expect(recordsText).toContain('Record');
    });
  });

  test('TC-ADMIN-003: Add Button Click', async ({ page }) => {
    await test.step('Click Add button', async () => {
      await adminPage.clickAddButton();
    });

    await test.step('Verify Add User page is displayed', async () => {
      await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();
    });
  });

  test('TC-ADMIN-007: Reset Search', async ({ page }) => {
    await test.step('Perform a search', async () => {
      await adminPage.searchByUsername('Admin');
      await page.waitForTimeout(1000);
    });

    await test.step('Click Reset button', async () => {
      await adminPage.resetButton.click();
      await page.waitForTimeout(1000);
    });

    await test.step('Verify search fields are cleared', async () => {
      const usernameValue = await adminPage.usernameSearchInput.inputValue();
      expect(usernameValue).toBe('');
    });
  });
});
