# Contributing to QA Testing Framework

Thank you for considering contributing to this QA Testing Framework! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Welcome newcomers and beginners
- Focus on what is best for the community
- Show empathy towards others

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, test cases)
- **Describe the behavior you observed and what you expected**
- **Include screenshots or videos** if applicable
- **Mention your environment** (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any similar features** in other projects

### Contributing Code

#### Types of Contributions

1. **New Test Cases**: Add manual or automated test cases
2. **Bug Fixes**: Fix issues in existing tests or documentation
3. **New Features**: Add new testing capabilities or frameworks
4. **Documentation**: Improve or add documentation
5. **CI/CD**: Enhance automation and deployment workflows

## Getting Started

### 1. Fork the Repository

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/TestingDemo-02.git
cd TestingDemo-02
```

### 2. Set Up Development Environment

```bash
# Add upstream remote
git remote add upstream https://github.com/bg-playground/TestingDemo-02.git

# Install automated testing dependencies
cd automated-testing
npm install
npx playwright install

# Create a branch for your changes
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Follow the existing code structure
- Write clear commit messages
- Add tests for new features
- Update documentation

## Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `docs/description` - Documentation updates
- `test/description` - Test additions or updates

### Commit Message Format

```
type(scope): brief description

Detailed description if needed

- Bullet points for key changes
- Reference issues: Fixes #123
```

**Types**: feat, fix, docs, test, refactor, style, chore

**Example**:
```
test(auth): add password strength validation tests

- Added 5 new test cases for password validation
- Updated LoginPage page object
- Fixes #45
```

## Style Guidelines

### JavaScript/Node.js Code

- Use ES6+ features
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing formatting (2 spaces, semicolons)
- Use async/await for asynchronous code

**Example**:
```javascript
// Good
async function loginUser(username, password) {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);
  await this.loginButton.click();
}

// Avoid
async function login(u, p) {
  await this.usernameInput.fill(u);
  await this.passwordInput.fill(p);
  await this.loginButton.click();
}
```

### Markdown Documentation

- Use proper headers hierarchy (H1 → H2 → H3)
- Include table of contents for long documents
- Use code blocks with language specification
- Add links to related documentation
- Keep line length reasonable (80-100 characters)

### Test Cases

Manual test cases should include:
- Test Case ID
- Clear title
- Module/Feature
- Priority
- Preconditions
- Detailed steps
- Expected results

Automated tests should:
- Use descriptive test names
- Include test steps with `test.step()`
- Have clear assertions
- Be independent and isolated
- Clean up test data

## Testing Guidelines

### Writing Automated Tests

1. **Use Page Object Model**
   ```javascript
   // pages/ExamplePage.js
   export class ExamplePage {
     constructor(page) {
       this.page = page;
       this.submitButton = page.getByRole('button', { name: 'Submit' });
     }
   }
   ```

2. **Structure Tests Clearly**
   ```javascript
   test('Test description', async ({ page }) => {
     await test.step('Setup', async () => {
       // Setup code
     });
     
     await test.step('Execute action', async () => {
       // Test action
     });
     
     await test.step('Verify result', async () => {
       // Assertions
     });
   });
   ```

3. **Use Meaningful Assertions**
   ```javascript
   // Good
   await expect(page).toHaveURL(/.*dashboard/);
   expect(errorMessage).toContain('Invalid credentials');
   
   // Avoid
   expect(true).toBe(true);
   ```

### Running Tests Locally

Before submitting:

```bash
# Run all tests
npm test

# Run specific test
npx playwright test tests/ui/auth.spec.js

# Run in debug mode
npm run test:debug

# Check test coverage
npm run test:coverage
```

### Test Data

- Use timestamps or random values for unique data
- Don't hardcode sensitive information
- Clean up test data after execution
- Use environment variables for configuration

## Documentation

### Adding Documentation

When adding or modifying features:

1. **Update README**: Add to main README if significant feature
2. **Inline Comments**: Add comments for complex logic
3. **Test Documentation**: Document test cases and scenarios
4. **API Documentation**: Document any new functions or classes

### Documentation Standards

- Write in clear, simple English
- Use examples and code snippets
- Keep documentation up-to-date with code
- Include screenshots for UI features
- Add links to related documentation

## Pull Request Process

### Before Submitting

1. **Update documentation** for any changed features
2. **Add or update tests** for new functionality
3. **Ensure all tests pass** locally
4. **Update CHANGELOG** if applicable
5. **Rebase on latest main** to avoid conflicts

### Creating a Pull Request

1. **Push your branch** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request** on GitHub
   - Use a clear, descriptive title
   - Reference related issues
   - Describe your changes in detail
   - Add screenshots if relevant

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Test addition

   ## Testing Done
   - Describe testing performed
   - List test commands run

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Documentation updated
   - [ ] Tests added/updated
   - [ ] All tests passing
   - [ ] No new warnings

   ## Related Issues
   Fixes #(issue number)
   ```

### PR Review Process

1. **Automated Checks**: CI/CD runs tests automatically
2. **Code Review**: Maintainers review your code
3. **Feedback**: Address any requested changes
4. **Approval**: PR is approved by maintainers
5. **Merge**: PR is merged to main branch

### After Merge

- Delete your feature branch
- Update your local main branch
- Close related issues

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Questions?

Feel free to:
- Open an issue for questions
- Ask in pull request discussions
- Contact maintainers

## Recognition

Contributors will be:
- Listed in project documentation
- Mentioned in release notes
- Credited in commits

Thank you for contributing to making this project better! 🎉
