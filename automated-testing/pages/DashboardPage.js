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
    this.mainMenu = page.locator('nav.oxd-main-menu, aside.oxd-sidepanel');
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
    try {
      const isMobileMenuVisible = await this.mobileMenuToggle.isVisible();
      
      if (isMobileMenuVisible) {
        // Click to open mobile menu
        await this.mobileMenuToggle.click();
        // Wait for the main navigation menu to become visible after opening
        await this.mainMenu.waitFor({ state: 'visible', timeout: 10000 });
      }
    } catch (error) {
      // Mobile menu toggle not found or timeout - likely already visible or desktop view
      // This is expected behavior, so we continue without failing
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

    // Ensure the PIM menu is attached and visible with longer timeouts for mobile
    await this.pimMenu.waitFor({ state: 'attached', timeout: 20000 });
    await this.pimMenu.scrollIntoViewIfNeeded();

    // Try up to 3 times in case of menu animation delays (especially in mobile)
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await this.pimMenu.waitFor({ state: 'visible', timeout: 20000 });
        await Promise.all([
          this.page.waitForURL(/.*pim/, { timeout: 60000 }),
          this.pimMenu.click({ force: true }),
        ]);
        // Confirm heading appears
        await this.page.getByRole('heading', { name: 'PIM' }).waitFor({ state: 'visible', timeout: 60000 });
        return;
      } catch (e) {
        // If click fails, try to open hamburger menu again and retry
        await this.ensureMenuVisible();
        // Check if page is still active before waiting
        if (this.page.isClosed && this.page.isClosed()) {
          throw new Error('Browser/page was closed unexpectedly during PIM navigation');
        }
        // Small wait before retrying
        await this.page.waitForTimeout(1000);
      }
    }
    throw new Error('Could not navigate to PIM menu in mobile view after several attempts');
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