export class AdminPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'Admin' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.usernameSearchInput = page.locator('input').nth(1);
    this.userRoleDropdown = page.locator('.oxd-select-text-input').first();
    this.employeeNameInput = page.getByPlaceholder('Type for hints...');
    this.statusDropdown = page.locator('.oxd-select-text-input').last();
    this.recordsFound = page.locator('.orangehrm-horizontal-padding span');
    this.deleteButton = page.locator('.oxd-icon-button .bi-trash');
    this.editButton = page.locator('.oxd-icon-button .bi-pencil-fill');
  }

  async isAdminPageVisible() {
    return await this.pageTitle.isVisible();
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async searchByUsername(username) {
    await this.usernameSearchInput.fill(username);
    await this.searchButton.click();
  }

  async getRecordsCount() {
    return await this.recordsFound.textContent() || '';
  }

  async clickFirstEditButton() {
    await this.editButton.first().click();
  }

  async clickFirstDeleteButton() {
    await this.deleteButton.first().click();
  }
}
