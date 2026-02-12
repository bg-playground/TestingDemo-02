export class PIMPage {
  constructor(page) {
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

  async isPIMPageVisible() {
    return await this.pageTitle.isVisible();
  }

  async clickAddEmployee() {
    await this.addButton.click();
  }

  async searchByEmployeeId(employeeId) {
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async getRecordsCount() {
    return await this.recordsFound.textContent() || '';
  }
}

export class AddEmployeePage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput = page.locator('input').nth(4);
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.createLoginCheckbox = page.locator('.oxd-switch-input');
  }

  async addEmployee(firstName, lastName, employeeId) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    if (employeeId) {
      await this.employeeIdInput.clear();
      await this.employeeIdInput.fill(employeeId);
    }
    await this.saveButton.click();
  }
}
