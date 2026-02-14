# Copilot Instructions for TestingDemo-02

This repository is a comprehensive QA testing framework demonstrating both manual and automated testing practices for the OrangeHRM Demo Application.

## Repository Overview

- **Type**: QA Testing Framework with Manual and Automated Tests
- **Size**: Multi-module testing project
- **Main Technology**: JavaScript/Node.js with Playwright (v1.40+)
- **Application Under Test**: OrangeHRM Demo (https://opensource-demo.orangehrmlive.com/)
- **Test Coverage**: 95 manual test cases + 31 automated tests (18 UI + 13 API)

## Repository Purpose

This project showcases various software testing methodologies, patterns, and best practices. When working on this repository, prioritize code quality, test coverage, and clear documentation.

## Coding Standards

- Write clean, readable, and maintainable code
- Follow language-specific conventions and best practices
- Use meaningful variable and function names that clearly express intent
- Keep functions and methods focused on a single responsibility
- Comment complex logic and non-obvious implementation decisions

## Testing Best Practices

- **Test Coverage**: Aim for comprehensive test coverage across all code changes
- **Test Types**: Include unit tests, integration tests, and end-to-end tests as appropriate
- **Test Quality**: Write tests that are:
  - Clear and easy to understand
  - Independent and isolated
  - Fast and reliable
  - Focused on behavior rather than implementation
- **Test Organization**: Structure tests to mirror the code organization
- **Test Documentation**: Include descriptive test names and comments explaining the purpose of complex test scenarios

## Documentation Requirements

- Update README.md when adding new features or making significant changes
- Document public APIs, classes, and functions
- Include usage examples where appropriate
- Keep documentation up-to-date with code changes
- Add comments for complex algorithms or business logic

## Code Review Guidelines

- Ensure all tests pass before submitting code
- Verify that new code follows the established patterns in the repository
- Check for proper error handling and edge cases
- Review security implications of code changes
- Validate that documentation is updated as needed

## Technology Stack

When adding new dependencies or technologies:
- Ensure they align with the repository's educational purpose
- Provide clear documentation on setup and usage
- Include tests demonstrating the technology's usage
- Consider the learning value for software testing concepts

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in the present tense (e.g., "Add", "Fix", "Update")
- Reference related issues or tickets when applicable
- Keep the first line under 72 characters
- Add detailed explanations in the commit body when necessary

## Project Structure

```
TestingDemo-02/
├── manual-testing/               # Manual test documentation (Markdown files)
├── automated-testing/            # Automated test framework (Playwright + Node.js)
│   ├── pages/                   # Page Object Models
│   ├── tests/
│   │   ├── ui/                  # UI tests (Playwright)
│   │   └── api/                 # API tests
│   ├── utils/                   # Test utilities and helpers
│   ├── playwright.config.js     # Test configuration
│   └── package.json             # Node.js dependencies
├── business-case/                # Business documentation and metrics
├── screenshots/                  # Screenshot examples
├── .github/
│   ├── workflows/               # CI/CD workflows
│   │   ├── automated-tests.yml  # Main test automation
│   │   └── ci.yml               # CI workflow
│   └── copilot-instructions.md  # This file
├── README.md                    # Main project documentation
├── QUICK_START.md               # 5-minute getting started guide
├── CONTRIBUTING.md              # Contribution guidelines
└── SETUP_TROUBLESHOOTING.md     # Setup and troubleshooting guide
```

## Build and Test Instructions

### Prerequisites
- Node.js 18+ (required for automated tests)
- Git
- npm (comes with Node.js)

### Setup Steps (First Time)
Always run these commands from the `automated-testing/` directory:

```bash
cd automated-testing
npm install                    # Install dependencies
npx playwright install --with-deps  # Install browsers (required!)
```

**IMPORTANT**: Always run `npx playwright install --with-deps` after `npm install`. The `--with-deps` flag is required to install system dependencies.

### Running Tests

All test commands must be run from the `automated-testing/` directory:

```bash
# Run all tests (default)
npm test

# Run specific test suites
npm run test:ui              # UI tests only
npm run test:api             # API tests only

# Run in specific browsers
npm run test:chrome          # Chrome/Chromium only
npm run test:firefox         # Firefox only
npm run test:webkit          # Safari/WebKit only

# Debug tests (opens inspector)
npm run test:debug

# Run with visible browser
npm run test:headed

# View test report
npm run test:report
```

### Test Execution Times
- Full test suite: ~5-10 minutes
- UI tests only: ~3-5 minutes
- API tests only: ~1-2 minutes
- Single test file: ~30-60 seconds

### Common Build Issues and Fixes

1. **Missing browsers error**: Always run `npx playwright install --with-deps` after npm install
2. **Permission errors on Linux**: May need `sudo` for `npx playwright install --with-deps`
3. **Tests timing out**: The demo application (opensource-demo.orangehrmlive.com) can be slow; tests have 90s timeouts configured
4. **Flaky tests**: Some tests may fail intermittently due to demo app performance; rerun tests to verify

## CI/CD Workflows

The repository has two GitHub Actions workflows:

### 1. `automated-tests.yml`
- Triggers: Push to `main` branch
- Working directory: `./automated-testing`
- Steps:
  1. Checkout code
  2. Setup Node.js 18
  3. Run `npm install`
  4. Run `npx playwright install --with-deps`
  5. Run `npm test`

### 2. `ci.yml`
- Triggers: Push to `main` and pull requests
- Working directory: `./automated-testing`
- Same steps as automated-tests.yml with additional project structure logging

**Note**: Both workflows run from the `automated-testing/` directory. When modifying workflows, ensure the `working-directory` is set correctly.

## Key Configuration Files

- **automated-testing/playwright.config.js**: Playwright test configuration
  - Test timeout: 90 seconds per test
  - Expect timeout: 5 seconds for assertions
  - Browsers: Chromium, Firefox, WebKit
  - Retries: 0 (no automatic retries)
  - Reporters: HTML, JSON, JUnit
  - Screenshot on failure: Enabled
  - Video on failure: Enabled
  - Parallel execution: Enabled

- **automated-testing/package.json**: Node.js project configuration
  - Main dependency: @playwright/test (^1.40.0)
  - Additional: dotenv (^16.3.1)

## Working with Automated Tests

### Page Object Model Pattern
Tests use Page Object Model (POM) for maintainability:
- Page objects are in `automated-testing/pages/`
- Each page object represents a page/component (LoginPage, DashboardPage, AdminPage, PIMPage)
- Tests should interact with page objects, not directly with selectors

### Test Organization
- **UI Tests** (`tests/ui/`): End-to-end browser automation tests
  - `auth.spec.js`: 9 authentication tests
  - `admin.spec.js`: 4 admin module tests
  - `pim.spec.js`: 5 PIM module tests
- **API Tests** (`tests/api/`): API endpoint validation
  - `api.spec.js`: 13 API tests (performance, security, resources)

### Test Utilities
- `utils/testData.js`: Test data fixtures and constants
- `utils/helpers.js`: 40+ helper functions

### Adding New Tests
1. Create test file in appropriate directory (`tests/ui/` or `tests/api/`)
2. Follow existing test structure using `test()` and `test.step()`
3. Use page objects for UI tests
4. Add descriptive test names (e.g., "TC-XXX: Description")
5. Run tests to verify: `npx playwright test <test-file>`

## Working with Manual Tests

Manual test documentation is in Markdown format in the `manual-testing/` directory:
- Test cases, plans, and strategies are documentation-only (no code)
- No build or test steps required for manual testing files
- Update traceability matrix when modifying requirements or test cases

## Validation Steps

Before submitting changes:
1. If modifying automated tests, always run from `automated-testing/` directory:
   ```bash
   cd automated-testing
   npm test
   ```
2. If tests fail, check that:
   - You're in the correct directory (`automated-testing/`)
   - Dependencies are installed (`npm install`)
   - Browsers are installed (`npx playwright install --with-deps`)
3. For documentation changes (manual testing, README, etc.), no tests are required
4. Ensure any new dependencies align with the repository's educational purpose

## Troubleshooting Guide

### "Cannot find module" errors
```bash
cd automated-testing
rm -rf node_modules package-lock.json
npm install
npx playwright install --with-deps
```

### Tests timing out or failing intermittently
- The demo application can be slow
- Tests have 90s timeouts configured in playwright.config.js
- Rerun tests to verify if it's a genuine failure

### CI/CD workflow failures
- Check that `working-directory: ./automated-testing` is set in workflow file
- Ensure all commands use correct paths
- Verify Node.js version is 18+ in workflow

### Browser installation issues
- Always use `npx playwright install --with-deps` (not just `npx playwright install`)
- On Linux, may require sudo for system dependencies
- Check disk space if installation fails

## Important Notes

- **Always work from `automated-testing/` directory** when running test commands
- **Always run `npx playwright install --with-deps`** after `npm install`
- **Don't modify working files** unless fixing bugs related to your changes
- **Test execution order**: Tests run in parallel by default; ensure tests are independent
- **Application credentials** are in README.md and test fixtures (Admin/admin123)
