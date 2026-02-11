import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Authentication Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
  });

  test('TC-AUTH-001: Valid Login', async ({ page }) => {
    await test.step('Enter valid credentials and login', async () => {
      await loginPage.login('Admin', 'admin123');
    });

    await test.step('Verify dashboard is displayed', async () => {
      await expect(page).toHaveURL(/.*dashboard/);
      const isDashboardVisible = await dashboardPage.isDashboardVisible();
      expect(isDashboardVisible).toBeTruthy();
    });
  });

  test('TC-AUTH-002: Invalid Username', async ({ page }) => {
    await test.step('Enter invalid username', async () => {
      await loginPage.login('InvalidUser', 'admin123');
    });

    await test.step('Verify error message is displayed', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Invalid credentials');
    });
  });

  test('TC-AUTH-003: Invalid Password', async ({ page }) => {
    await test.step('Enter invalid password', async () => {
      await loginPage.login('Admin', 'WrongPassword');
    });

    await test.step('Verify error message is displayed', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Invalid credentials');
    });
  });

  test('TC-AUTH-004: Empty Username', async ({ page }) => {
    await test.step('Leave username empty and submit', async () => {
      await loginPage.login('', 'admin123');
    });

    await test.step('Verify required field validation', async () => {
      const requiredMessage = await page.locator('.oxd-input-field-error-message').first().textContent();
      expect(requiredMessage).toContain('Required');
    });
  });

  test('TC-AUTH-005: Empty Password', async ({ page }) => {
    await test.step('Leave password empty and submit', async () => {
      await loginPage.login('Admin', '');
    });

    await test.step('Verify required field validation', async () => {
      const requiredMessage = await page.locator('.oxd-input-field-error-message').last().textContent();
      expect(requiredMessage).toContain('Required');
    });
  });

  test('TC-AUTH-006: Logout Functionality', async ({ page }) => {
    await test.step('Login successfully', async () => {
      await loginPage.login('Admin', 'admin123');
      await expect(page).toHaveURL(/.*dashboard/);
    });

    await test.step('Logout', async () => {
      await dashboardPage.logout();
    });

    await test.step('Verify redirected to login page', async () => {
      await expect(page).toHaveURL(/.*login/);
      const isLoginPageVisible = await loginPage.isLoginPageVisible();
      expect(isLoginPageVisible).toBeTruthy();
    });
  });

  test('TC-AUTH-008: SQL Injection Prevention', async ({ page }) => {
    await test.step('Attempt SQL injection in username', async () => {
      await loginPage.login("Admin' OR '1'='1", 'anything');
    });

    await test.step('Verify login fails securely', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Invalid credentials');
    });
  });

  test('TC-AUTH-009: XSS Prevention', async ({ page }) => {
    await test.step('Attempt XSS in username field', async () => {
      await loginPage.login("<script>alert('XSS')</script>", 'admin123');
    });

    await test.step('Verify no script execution', async () => {
      // If script executed, test would fail or timeout
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Invalid credentials');
    });
  });
});
