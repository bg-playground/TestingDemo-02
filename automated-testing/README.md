# OrangeHRM Automated Testing Framework

Comprehensive automated testing suite for the OrangeHRM Demo application, featuring UI tests using Playwright and API tests.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [CI/CD Integration](#cicd-integration)
- [Writing Tests](#writing-tests)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

This automated testing framework provides:
- **UI Tests**: End-to-end tests using Playwright
- **API Tests**: REST API testing with Playwright's request library
- **Cross-browser Testing**: Chrome, Firefox, Safari, and mobile browsers
- **Page Object Model**: Maintainable and reusable test code
- **Detailed Reporting**: HTML, JSON, and JUnit reports
- **CI/CD Ready**: GitHub Actions integration

## Tech Stack

- **Test Framework**: [Playwright](https://playwright.dev/) v1.40+
- **Language**: JavaScript/Node.js
- **Test Runner**: Playwright Test Runner
- **Reporting**: HTML, JSON, JUnit
- **CI/CD**: GitHub Actions

## Project Structure

```
automated-testing/
├── pages/                      # Page Object Models
│   ├── LoginPage.js           # Login page objects
│   ├── DashboardPage.js       # Dashboard page objects
│   ├── AdminPage.js           # Admin module page objects
│   └── PIMPage.js             # PIM module page objects
├── tests/                      # Test files
│   ├── ui/                    # UI tests
│   │   ├── auth.spec.js       # Authentication tests
│   │   ├── admin.spec.js      # Admin module tests
│   │   └── pim.spec.js        # PIM module tests
│   └── api/                   # API tests
│       └── api.spec.js        # API endpoint tests
├── utils/                      # Utility functions
├── test-results/              # Test execution results (gitignored)
├── playwright.config.js       # Playwright configuration
├── package.json               # Dependencies and scripts
├── .env.example               # Environment variables template
└── README.md                  # This file
```

## Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/bg-playground/TestingDemo-02.git
cd TestingDemo-02/automated-testing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Configure Environment

```bash
cp .env.example .env
# Edit .env file with your configuration if needed
```

## Configuration

### Environment Variables

Create a `.env` file in the `automated-testing` directory:

```env
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123
TIMEOUT=30000
HEADLESS=true
```

### Playwright Configuration

The `playwright.config.js` file contains:
- Test directory paths
- Browser configurations
- Timeout settings
- Reporter configurations
- Retry logic
- Screenshot and video settings

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Specific Test Suites

```bash
# UI tests only
npm run test:ui

# API tests only
npm run test:api
```

### Run Tests in Specific Browser

```bash
# Chrome only
npm run test:chrome

# Firefox only
npm run test:firefox

# Safari only
npm run test:webkit
```

### Run Tests in Headed Mode (Visible Browser)

```bash
npm run test:headed
```

### Debug Tests

```bash
npm run test:debug
```

### Run Specific Test File

```bash
npx playwright test tests/ui/auth.spec.js
```

### Run Tests with Tag

```bash
npx playwright test --grep @smoke
```

## Test Reports

### View HTML Report

After test execution, view the detailed HTML report:

```bash
npm run test:report
```

Or manually:

```bash
npx playwright show-report test-results/html-report
```

### Report Types

1. **HTML Report**: Interactive report with screenshots and videos
   - Location: `test-results/html-report/index.html`

2. **JSON Report**: Machine-readable test results
   - Location: `test-results/results.json`

3. **JUnit Report**: For CI/CD integration
   - Location: `test-results/junit.xml`

4. **Console Output**: Real-time test execution logs

## CI/CD Integration

### GitHub Actions

The tests are integrated with GitHub Actions. See `.github/workflows/` for configuration.

Example workflow file:

```yaml
name: Automated Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: |
          cd automated-testing
          npm ci
      - name: Install Playwright
        run: |
          cd automated-testing
          npx playwright install --with-deps
      - name: Run tests
        run: |
          cd automated-testing
          npm test
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: automated-testing/test-results/
```

## Writing Tests

### Page Object Model Example

```javascript
// pages/ExamplePage.js
import { Page, Locator } from '@playwright/test';

export class ExamplePage {
  readonly page: Page;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async clickSubmit() {
    await this.submitButton.click();
  }
}
```

### Test Example

```javascript
// tests/ui/example.spec.js
import { test, expect } from '@playwright/test';
import { ExamplePage } from '../../pages/ExamplePage';

test('Example Test', async ({ page }) => {
  const examplePage = new ExamplePage(page);
  
  await test.step('Navigate to page', async () => {
    await page.goto('/example');
  });

  await test.step('Perform action', async () => {
    await examplePage.clickSubmit();
  });

  await test.step('Verify result', async () => {
    await expect(page).toHaveURL(/.*success/);
  });
});
```

## Best Practices

### 1. Use Page Object Model
- Encapsulate page elements and actions in Page Objects
- Keep tests clean and readable
- Improve maintainability

### 2. Use Test Steps
- Break tests into logical steps using `test.step()`
- Makes debugging easier
- Improves report readability

### 3. Explicit Waits
- Use Playwright's built-in auto-waiting
- Add explicit waits only when necessary
- Avoid arbitrary `waitForTimeout()`

### 4. Unique Test Data
- Use timestamps or random values for unique data
- Avoid hardcoded test data that may conflict
- Clean up test data when possible

### 5. Independent Tests
- Each test should be independent
- Don't rely on test execution order
- Use `beforeEach` for common setup

### 6. Meaningful Assertions
- Use descriptive assertion messages
- Test one thing per test
- Verify both positive and negative scenarios

### 7. Error Handling
- Take screenshots on failure (configured)
- Capture videos for failed tests (configured)
- Add meaningful error messages

## Test Coverage

### Current Test Cases

#### Authentication (9 tests)
- Valid login
- Invalid credentials
- Empty fields validation
- Logout functionality
- Security tests (SQL injection, XSS)

#### Admin Module (4 tests)
- Navigation
- User search
- Add user navigation
- Reset search

#### PIM Module (5 tests)
- Navigation
- Add employee
- Employee search
- List view

#### API Tests (13 tests)
- Resource availability
- Performance testing
- Security checks
- Response validation

**Total: 31 automated test cases**

## Troubleshooting

### Common Issues

#### 1. Tests Failing Due to Timeout

**Solution**: Increase timeout in `playwright.config.js`:
```javascript
use: {
  actionTimeout: 30000,
  navigationTimeout: 60000,
}
```

#### 2. Browser Not Installing

**Solution**: Install with dependencies:
```bash
npx playwright install --with-deps chromium
```

#### 3. Element Not Found

**Solution**:
- Verify the selector is correct
- Check if element is in iframe
- Add appropriate wait conditions
- Use Playwright Inspector for debugging:
```bash
npx playwright test --debug
```

#### 4. Tests Pass Locally But Fail in CI

**Solution**:
- Check CI environment has necessary dependencies
- Verify timeouts are appropriate for CI
- Check for race conditions
- Review CI logs for specific errors

### Debug Commands

```bash
# Run with UI mode
npx playwright test --ui

# Generate test code
npx playwright codegen https://opensource-demo.orangehrmlive.com

# Show trace
npx playwright show-trace trace.zip

# Debug specific test
npx playwright test tests/ui/auth.spec.js --debug
```

## Contributing

1. Create a feature branch
2. Write tests following the existing structure
3. Ensure all tests pass locally
4. Update documentation if needed
5. Submit pull request

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
- Create an issue in the repository
- Contact the QA team
- Refer to [Playwright Documentation](https://playwright.dev/)

## Additional Resources

- [Playwright Official Docs](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)
- [Project Manual Testing Documentation](../manual-testing/)

---

**Last Updated**: February 2026  
**Version**: 1.0.0
