  async navigateToPIM() {
    await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
    await this.ensureMenuVisible();
    
    // Add delay for mobile menu animations (especially Safari)
    await this.page.waitForTimeout(1000);
    
    await this.pimMenu.waitFor({ state: 'attached', timeout: 10000 });
    await this.pimMenu.scrollIntoViewIfNeeded();
    await this.pimMenu.waitFor({ state: 'visible', timeout: 60000 });
    
    // Use force click to handle Mobile Safari quirks where element may be present but not "clickable"
    // This is a known workaround for mobile viewport testing
    await this.pimMenu.click({ force: true });
    
    // Wait for PIM page to load
    await this.page.getByRole('heading', { name: 'PIM' }).waitFor({ state: 'visible', timeout: 60000 });
  }