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
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent() || '';
  }

  async isLoginPageVisible() {
    return await this.pageTitle.isVisible();
  }
}
