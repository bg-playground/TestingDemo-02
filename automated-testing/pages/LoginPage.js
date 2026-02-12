export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username').or(page.locator('input[name="username"]'));
    this.passwordInput = page.getByPlaceholder('Password').or(page.locator('input[name="password"]'));
    this.loginButton = page.getByRole('button', { name: 'Login' }).or(page.locator('button[type="submit"]'));
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.pageTitle = page.locator('h5');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // Wait for navigation to complete after login
    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    // Ensure dashboard is actually loaded
    await this.page.waitForURL(/.*dashboard/, { timeout: 60000 });
    await this.page.getByRole('heading', { name: 'Dashboard' }).waitFor({ state: 'visible', timeout: 60000 });
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent() || '';
  }

  async isLoginPageVisible() {
    return await this.pageTitle.isVisible();
  }
}