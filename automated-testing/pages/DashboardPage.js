async navigateToPIM() {
  await this.dashboardTitle.waitFor({ state: 'visible', timeout: 60000 });
  await this.ensureMenuVisible();
  await this.pimMenu.waitFor({ state: 'attached', timeout: 10000 });
  await this.pimMenu.scrollIntoViewIfNeeded();
  await this.pimMenu.waitFor({ state: 'visible', timeout: 60000 });
  await this.pimMenu.click();
  // Wait for PIM page to load
  await this.page.getByRole('heading', { name: 'PIM' }).waitFor({ state: 'visible', timeout: 60000 });
}