import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { PIMPage, AddEmployeePage } from '../../pages/PIMPage';

test.describe('PIM Module Tests', () => {
  let loginPage;
  let dashboardPage;
  let pimPage;
  let addEmployeePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    pimPage = new PIMPage(page);
    addEmployeePage = new AddEmployeePage(page);

    // Login before each test
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/.*dashboard/);
    await dashboardPage.navigateToPIM();
  });

  test('TC-PIM-001: Navigate to PIM Module', async ({ page }) => {
    await test.step('Verify PIM page is displayed', async () => {
      const isPIMVisible = await pimPage.isPIMPageVisible();
      expect(isPIMVisible).toBeTruthy();
    });
  });

  test('TC-PIM-002: Click Add Employee Button', async ({ page }) => {
    await test.step('Click Add Employee button', async () => {
      await pimPage.clickAddEmployee();
    });

    await test.step('Verify Add Employee page is displayed', async () => {
      await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();
    });
  });

  test('TC-PIM-003: Add New Employee', async ({ page }) => {
    await test.step('Navigate to Add Employee page', async () => {
      await pimPage.clickAddEmployee();
    });

    await test.step('Fill employee details', async () => {
      const timestamp = Date.now();
      await addEmployeePage.addEmployee(
        `TestFirstName${timestamp}`,
        `TestLastName${timestamp}`
      );
    });

    await test.step('Verify employee is saved', async () => {
      // Wait for save to complete and page redirect
      await page.waitForTimeout(3000);
      await expect(page.getByText('Personal Details')).toBeVisible();
    });
  });

  test('TC-PIM-004: Search Employee by ID', async ({ page }) => {
    await test.step('Search for employee with ID', async () => {
      await pimPage.searchByEmployeeId('0001');
      await page.waitForTimeout(2000);
    });

    await test.step('Verify search results', async () => {
      const recordsText = await pimPage.getRecordsCount();
      expect(recordsText).toContain('Record');
    });
  });

  test('TC-PIM-005: Employee List View', async ({ page }) => {
    await test.step('Verify employee list is displayed', async () => {
      await expect(page.getByRole('table')).toBeVisible();
    });

    await test.step('Verify employee records exist', async () => {
      const recordsText = await pimPage.getRecordsCount();
      expect(recordsText).toContain('Record');
    });
  });
});
