# Setup and Troubleshooting Guide

Complete guide for setting up the QA Testing Framework and resolving common issues.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation Guide](#installation-guide)
3. [Common Issues](#common-issues)
4. [FAQ](#faq)
5. [Platform-Specific Instructions](#platform-specific-instructions)
6. [Performance Optimization](#performance-optimization)

---

## Prerequisites

### System Requirements

**Minimum:**
- CPU: Dual-core processor
- RAM: 4GB
- Storage: 2GB free space
- Internet: Stable connection (minimum 5 Mbps)

**Recommended:**
- CPU: Quad-core processor or better
- RAM: 8GB or more
- Storage: 5GB free space
- Internet: 10+ Mbps connection

### Software Requirements

| Software | Minimum Version | Recommended | Installation Link |
|----------|----------------|-------------|-------------------|
| Node.js | 18.0 | 20.x LTS | https://nodejs.org/ |
| npm | 9.0 | 10.x | Comes with Node.js |
| Git | 2.30 | Latest | https://git-scm.com/ |
| VS Code | Any | Latest | https://code.visualstudio.com/ |

---

## Installation Guide

### Step 1: Install Node.js and npm

#### Windows
```bash
# Download installer from https://nodejs.org/
# Run the .msi installer
# Verify installation
node --version
npm --version
```

#### macOS
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/

# Verify installation
node --version
npm --version
```

#### Linux (Ubuntu/Debian)
```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 2: Clone Repository

```bash
# Clone the repository
git clone https://github.com/bg-playground/TestingDemo-02.git

# Navigate to project directory
cd TestingDemo-02
```

### Step 3: Install Automated Testing Dependencies

```bash
# Navigate to automated testing directory
cd automated-testing

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install system dependencies (Linux only)
npx playwright install-deps
```

### Step 4: Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your settings (optional)
# The defaults work for OrangeHRM demo
```

### Step 5: Verify Installation

```bash
# Run a quick test
npm test -- --grep="TC-AUTH-001"

# If successful, you should see test execution output
```

---

## Common Issues

### Issue 1: Node.js Version Mismatch

**Symptom:**
```
Error: The engine "node" is incompatible with this module
```

**Solution:**
```bash
# Check your Node version
node --version

# If below 18, update Node.js
# Windows/macOS: Download from nodejs.org
# Linux:
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Issue 2: Playwright Browsers Not Installing

**Symptom:**
```
browserType.launch: Executable doesn't exist
```

**Solution:**
```bash
# Reinstall browsers with all dependencies
npx playwright install --with-deps chromium firefox webkit

# Linux specific: May need system libraries
sudo npx playwright install-deps
```

### Issue 3: Permission Errors on npm install

**Symptom:**
```
EACCES: permission denied
```

**Solution:**
```bash
# Option 1: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Option 2: Use sudo (not recommended)
sudo npm install --unsafe-perm=true --allow-root
```

### Issue 4: Tests Timing Out

**Symptom:**
```
Test timeout of 30000ms exceeded
```

**Solution:**
```javascript
// Increase timeout in playwright.config.js
use: {
  actionTimeout: 30000,  // Increase from 15000
  navigationTimeout: 60000  // Increase from 30000
}

// Or in specific test
test.setTimeout(60000);
```

### Issue 5: Port Already in Use

**Symptom:**
```
Error: listen EADDRINUSE: address already in use
```

**Solution:**
```bash
# Find process using the port
# Linux/macOS:
lsof -i :3000

# Windows:
netstat -ano | findstr :3000

# Kill the process
# Linux/macOS:
kill -9 <PID>

# Windows:
taskkill /PID <PID> /F
```

### Issue 6: Git Clone Fails

**Symptom:**
```
fatal: unable to access 'https://github.com/...'
```

**Solution:**
```bash
# Check internet connection
ping github.com

# Try with SSH instead of HTTPS
git clone git@github.com:bg-playground/TestingDemo-02.git

# Or check Git configuration
git config --global http.proxy ""
git config --global https.proxy ""
```

### Issue 7: Missing System Dependencies (Linux)

**Symptom:**
```
Error: libgbm.so.1: cannot open shared object file
```

**Solution:**
```bash
# Install system dependencies
sudo npx playwright install-deps

# Or manually install common dependencies
sudo apt-get install -y \
  libnss3 \
  libnspr4 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxfixes3 \
  libxrandr2 \
  libgbm1 \
  libasound2
```

### Issue 8: Cannot Find Module Errors

**Symptom:**
```
Error: Cannot find module '@playwright/test'
```

**Solution:**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Verify installation
npm list @playwright/test
```

### Issue 9: Test Report Not Opening

**Symptom:**
```
npx playwright show-report - no report found
```

**Solution:**
```bash
# Make sure tests have been run first
npm test

# Check if report exists
ls -la test-results/html-report/

# If exists, open manually
# Linux:
xdg-open test-results/html-report/index.html

# macOS:
open test-results/html-report/index.html

# Windows:
start test-results/html-report/index.html
```

### Issue 10: Flaky Tests

**Symptom:**
```
Tests pass sometimes, fail other times
```

**Solution:**
```javascript
// Add retries in playwright.config.js
retries: process.env.CI ? 2 : 0,

// Add explicit waits
await page.waitForLoadState('networkidle');

// Use more robust selectors
// Bad: page.locator('button')
// Good: page.getByRole('button', { name: 'Submit' })

// Add timeout to specific actions
await element.click({ timeout: 10000 });
```

---

## FAQ

### Q: Do I need to install all browsers?

**A:** No, you can install only the browsers you need:
```bash
# Just Chromium
npx playwright install chromium

# Just Firefox
npx playwright install firefox

# Just WebKit
npx playwright install webkit
```

### Q: Can I run tests without installing browsers system-wide?

**A:** Yes, Playwright browsers are installed in your user directory, not system-wide.

### Q: How do I run tests in headless mode?

**A:** Tests run headless by default. To run headed:
```bash
npm run test:headed
```

### Q: How do I debug a failing test?

**A:** Multiple options:
```bash
# Debug mode with inspector
npm run test:debug

# Run with UI mode
npx playwright test --ui

# Run specific test in headed mode
npx playwright test tests/ui/auth.spec.js --headed --debug
```

### Q: Can I run tests in Docker?

**A:** Yes! Here's a basic Dockerfile:
```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app
COPY automated-testing/package*.json ./
RUN npm ci
COPY automated-testing/ ./
CMD ["npm", "test"]
```

### Q: How do I update Playwright?

**A:**
```bash
# Update Playwright
npm install @playwright/test@latest

# Update browsers
npx playwright install
```

### Q: Can I run tests on different base URLs?

**A:** Yes, use environment variable:
```bash
BASE_URL=https://your-app.com npm test
```

### Q: How do I skip a test temporarily?

**A:**
```javascript
// Skip specific test
test.skip('Test name', async ({ page }) => {
  // test code
});

// Skip based on condition
test('Test name', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Not ready for Safari');
  // test code
});
```

---

## Platform-Specific Instructions

### Windows

#### PowerShell Execution Policy
```powershell
# If scripts are blocked
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Path Issues
```powershell
# Add npm global to PATH
$env:Path += ";$env:APPDATA\npm"
```

#### Antivirus Interference
- Add project folder to antivirus exclusions
- Add Node.js installation folder to exclusions

### macOS

#### Permission Issues
```bash
# Fix permissions
sudo chown -R $USER /usr/local/lib/node_modules
```

#### Xcode Command Line Tools
```bash
# Required for some npm packages
xcode-select --install
```

### Linux

#### Display Server for Headed Mode
```bash
# Install Xvfb for headless environments
sudo apt-get install xvfb

# Run with Xvfb
xvfb-run npm test
```

#### SELinux Issues (RHEL/CentOS)
```bash
# If SELinux blocks execution
sudo setenforce 0  # Temporarily disable
# Or add proper SELinux policies
```

---

## Performance Optimization

### Speed Up Test Execution

1. **Run Tests in Parallel**
```javascript
// playwright.config.js
workers: process.env.CI ? 1 : 4,  // 4 parallel workers locally
```

2. **Use Shared Browser Context**
```javascript
// For related tests
test.describe.configure({ mode: 'serial' });
```

3. **Reduce Timeouts**
```javascript
// Only for stable tests
use: {
  actionTimeout: 5000,  // Reduced from 15000
}
```

4. **Skip Unnecessary Browsers**
```bash
# Test only Chrome during development
npm run test:chrome
```

5. **Use Test Sharding**
```bash
# Split tests across multiple machines
npx playwright test --shard=1/3  # Machine 1
npx playwright test --shard=2/3  # Machine 2
npx playwright test --shard=3/3  # Machine 3
```

### Reduce Resource Usage

1. **Limit Browser Instances**
```javascript
workers: 2,  // Instead of 4
```

2. **Disable Video Recording**
```javascript
use: {
  video: 'off',  // Only enable when needed
}
```

3. **Disable Screenshots**
```javascript
use: {
  screenshot: 'off',  // Only enable when needed
}
```

---

## Getting Help

### Resources
- **Playwright Docs:** https://playwright.dev/docs/intro
- **GitHub Issues:** https://github.com/bg-playground/TestingDemo-02/issues
- **Stack Overflow:** Tag: `playwright`

### Debugging Tips
1. Use `--debug` flag for step-by-step execution
2. Add `await page.pause()` to pause at specific points
3. Check browser console logs
4. Review network requests in dev tools
5. Use Playwright Inspector: `npx playwright test --debug`

### Reporting Issues
When reporting an issue, include:
- OS and version
- Node.js version
- npm version
- Playwright version
- Complete error message
- Steps to reproduce
- Screenshots if relevant

---

**Last Updated:** February 2026  
**Version:** 1.0
