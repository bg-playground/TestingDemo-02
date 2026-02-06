import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly forgotPasswordLink: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
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

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }

  async isLoginPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }
}
