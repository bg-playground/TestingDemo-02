import { Page, Locator } from '@playwright/test';

export class PIMPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly addButton: Locator;
  readonly searchButton: Locator;
  readonly employeeNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly recordsFound: Locator;
  readonly deleteButton: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'PIM' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.employeeNameInput = page.getByPlaceholder('Type for hints...').first();
    this.employeeIdInput = page.locator('input').nth(1);
    this.recordsFound = page.locator('.orangehrm-horizontal-padding span');
    this.deleteButton = page.locator('.oxd-icon-button .bi-trash');
    this.editButton = page.locator('.oxd-icon-button .bi-pencil-fill');
  }

  async isPIMPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async clickAddEmployee() {
    await this.addButton.click();
  }

  async searchByEmployeeId(employeeId: string) {
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async getRecordsCount(): Promise<string> {
    return await this.recordsFound.textContent() || '';
  }
}

export class AddEmployeePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly createLoginCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput = page.locator('input').nth(4);
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.createLoginCheckbox = page.locator('.oxd-switch-input');
  }

  async addEmployee(firstName: string, lastName: string, employeeId?: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    if (employeeId) {
      await this.employeeIdInput.clear();
      await this.employeeIdInput.fill(employeeId);
    }
    await this.saveButton.click();
  }
}
