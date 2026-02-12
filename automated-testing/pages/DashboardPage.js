export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard' });
    this.userDropdown = page.locator('.oxd-userdropdown');
    this.logoutOption = page.getByText('Logout');
    this.quickLaunchSection = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'Quick Launch' });
    this.timeAtWorkWidget = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'Time at Work' });
    this.myActionsWidget = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'My Actions' });
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.leaveMenu = page.getByRole('link', { name: 'Leave' });
    this.timeMenu = page.getByRole('link', { name: 'Time' });
    this.recruitmentMenu = page.getByRole('link', { name: 'Recruitment' });
  }

  async isDashboardVisible() {
    return await this.dashboardTitle.isVisible();
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutOption.click();
  }

  async navigateToAdmin() {
    await this.adminMenu.waitFor({ state: 'visible' });
    await this.adminMenu.click();
  }

  async navigateToPIM() {
    await this.pimMenu.waitFor({ state: 'visible' });
    await this.pimMenu.click();
  }

  async navigateToLeave() {
    await this.leaveMenu.waitFor({ state: 'visible' });
    await this.leaveMenu.click();
  }

  async navigateToTime() {
    await this.timeMenu.waitFor({ state: 'visible' });
    await this.timeMenu.click();
  }

  async navigateToRecruitment() {
    await this.recruitmentMenu.waitFor({ state: 'visible' });
    await this.recruitmentMenu.click();
  }

  async getUsername() {
    await this.userDropdown.click();
    const username = await this.page.locator('.oxd-userdropdown-name').textContent();
    await this.page.keyboard.press('Escape'); // Close dropdown
    return username || '';
  }
}