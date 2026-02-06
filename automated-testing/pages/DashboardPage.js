import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardTitle: Locator;
  readonly userDropdown: Locator;
  readonly logoutOption: Locator;
  readonly quickLaunchSection: Locator;
  readonly timeAtWorkWidget: Locator;
  readonly myActionsWidget: Locator;
  readonly adminMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly timeMenu: Locator;
  readonly recruitmentMenu: Locator;

  constructor(page: Page) {
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

  async isDashboardVisible(): Promise<boolean> {
    return await this.dashboardTitle.isVisible();
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutOption.click();
  }

  async navigateToAdmin() {
    await this.adminMenu.click();
  }

  async navigateToPIM() {
    await this.pimMenu.click();
  }

  async navigateToLeave() {
    await this.leaveMenu.click();
  }

  async navigateToTime() {
    await this.timeMenu.click();
  }

  async navigateToRecruitment() {
    await this.recruitmentMenu.click();
  }

  async getUsername(): Promise<string> {
    await this.userDropdown.click();
    const username = await this.page.locator('.oxd-userdropdown-name').textContent();
    await this.page.keyboard.press('Escape'); // Close dropdown
    return username || '';
  }
}
