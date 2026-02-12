export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard' });
    this.userDropdown = page.locator('.oxd-userdropdown');
    this.logoutOption = page.getByText('Logout');
    this.quickLaunchSection = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'Quick Launch' });
    this.timeAtWorkWidget = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'Time at Work' });
    this.myActionsWidget = page.locator('.orangehrm-dashboard-widget-name', { hasText: 'My Actions' });
    this.mobileMenuToggle = page.locator('button.oxd-icon-button.oxd-main-menu-button');
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

  async ensureMenuVisible() {
    // Check if mobile menu toggle is visible (indicates mobile viewport)
    const isMobileMenuVisible = await this.mobileMenuToggle.isVisible().catch(() => false);
    
    if (isMobileMenuVisible) {
      // Click to open mobile menu
      await this.mobileMenuToggle.click();
      // Wait for menu animation
      await this.page.waitForTimeout(500);
    }
  }

  async navigateToAdmin() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    await this.adminMenu.scrollIntoViewIfNeeded();
    await this.adminMenu.waitFor({ state: 'visible', timeout: 60000 });
    await this.adminMenu.click();
    // Wait for Admin page to load
    await this.page.getByRole('heading', { name: 'Admin' }).waitFor({ state: 'visible', timeout: 60000 });
  }

  async navigateToPIM() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    await this.pimMenu.scrollIntoViewIfNeeded();
    await this.pimMenu.waitFor({ state: 'visible', timeout: 60000 });
    await this.pimMenu.click();
    // Wait for PIM page to load
    await this.page.getByRole('heading', { name: 'PIM' }).waitFor({ state: 'visible', timeout: 60000 });
  }

  async navigateToLeave() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    await this.leaveMenu.scrollIntoViewIfNeeded();
    await this.leaveMenu.waitFor({ state: 'visible', timeout: 60000 });
    await this.leaveMenu.click();
  }

  async navigateToTime() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    await this.timeMenu.scrollIntoViewIfNeeded();
    await this.timeMenu.waitFor({ state: 'visible', timeout: 60000 });
    await this.timeMenu.click();
  }

  async navigateToRecruitment() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    await this.recruitmentMenu.scrollIntoViewIfNeeded();
    await this.recruitmentMenu.waitFor({ state: 'visible', timeout: 60000 });
    await this.recruitmentMenu.click();
  }

  async getUsername() {
    await this.userDropdown.click();
    const username = await this.page.locator('.oxd-userdropdown-name').textContent();
    await this.page.keyboard.press('Escape'); // Close dropdown
    return username || '';
  }
}