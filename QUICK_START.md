# Quick Start Guide

Get up and running with the QA Testing Framework in 5 minutes!

## 🚀 For Testers (Manual Testing)

### View Test Documentation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bg-playground/TestingDemo-02.git
   cd TestingDemo-02
   ```

2. **Browse manual testing docs**
   ```
   manual-testing/
   ├── 01-test-strategy.md       ← Start here
   ├── 02-test-plan.md           ← Then review this
   ├── 03-test-cases.md          ← 95 test cases
   ├── 04-bug-reports.md         ← Bug reporting guide
   ├── 05-traceability-matrix.md ← Requirements mapping
   └── 06-exploratory-testing-notes.md ← Exploratory sessions
   ```

3. **Access the application**
   - URL: https://opensource-demo.orangehrmlive.com/
   - Username: `Admin`
   - Password: `admin123`

4. **Start testing!**
   - Pick a test case from `03-test-cases.md`
   - Execute the steps
   - Report any bugs using the template

---

## 🤖 For Automation Engineers

### Run Automated Tests

1. **Clone and setup**
   ```bash
   git clone https://github.com/bg-playground/TestingDemo-02.git
   cd TestingDemo-02/automated-testing
   ```

2. **Install dependencies**
   ```bash
   npm install
   npx playwright install
   ```

3. **Run tests**
   ```bash
   # Run all tests
   npm test

   # Run with visible browser
   npm run test:headed

   # Run specific suite
   npm run test:ui    # UI tests only
   npm run test:api   # API tests only
   ```

4. **View results**
   ```bash
   npm run test:report
   ```

**That's it!** Tests will run and generate reports.

---

## 📊 View Test Reports

### HTML Report (Recommended)

```bash
cd automated-testing
npm run test:report
```

Opens an interactive HTML report in your browser with:
- Test execution results
- Screenshots of failures
- Videos of failed tests
- Detailed error messages
- Execution timeline

### Console Output

Real-time test execution logs appear in terminal with:
- ✅ Passed tests
- ❌ Failed tests
- ⏱️ Execution time
- 📊 Summary statistics

---

## 🔧 Common Tasks

### Add a New Manual Test Case

1. Open `manual-testing/03-test-cases.md`
2. Copy existing test case template
3. Fill in details:
   ```markdown
   ### TC-MODULE-XXX: Test Title
   - **Priority:** P0/P1/P2/P3
   - **Module:** Module Name
   - **Preconditions:** Required state
   - **Test Steps:**
     1. Step 1
     2. Step 2
   - **Expected Result:** What should happen
   ```
4. Update traceability matrix

### Add a New Automated Test

1. Navigate to `automated-testing/tests/ui/`
2. Create or open test file (e.g., `auth.spec.js`)
3. Add test:
   ```javascript
   test('TC-XXX: Test Description', async ({ page }) => {
     await test.step('Step 1', async () => {
       // Test code
     });
     
     await test.step('Verify result', async () => {
       await expect(page).toHaveURL(/.*expected/);
     });
   });
   ```
4. Run test: `npx playwright test tests/ui/auth.spec.js`

### Debug a Failing Test

```bash
# Run in debug mode
npm run test:debug

# Or debug specific test
npx playwright test tests/ui/auth.spec.js --debug

# View trace of last run
npx playwright show-trace trace.zip
```

---

## 🌐 Browser Testing

### Test in Different Browsers

```bash
# Chrome only
npm run test:chrome

# Firefox only
npm run test:firefox

# Safari only
npm run test:webkit

# All browsers
npm test
```

### Mobile Testing

Tests automatically run on mobile viewports:
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

Configure in `playwright.config.js`

---

## 📝 Report a Bug

1. **Reproduce the issue**
   - Follow test steps
   - Note unexpected behavior
   - Take screenshots

2. **Create bug report**
   - Open `manual-testing/04-bug-reports.md`
   - Use the template provided
   - Include all details

3. **File GitHub Issue** (optional)
   ```bash
   # Go to GitHub repository
   # Click "Issues" → "New Issue"
   # Use bug report template
   ```

---

## 🆘 Troubleshooting

### Tests Not Running?

```bash
# Check Node version (need 18+)
node --version

# Reinstall dependencies
cd automated-testing
rm -rf node_modules package-lock.json
npm install

# Reinstall browsers
npx playwright install --with-deps
```

### Tests Failing Unexpectedly?

```bash
# Update Playwright
npm install @playwright/test@latest

# Clear test results
rm -rf test-results/

# Run single test to isolate issue
npx playwright test tests/ui/auth.spec.js --project=chromium
```

### Can't View Reports?

```bash
# Make sure tests have run first
npm test

# Then view report
npm run test:report

# Or manually open
open test-results/html-report/index.html  # Mac
start test-results/html-report/index.html # Windows
```

---

## 📚 Next Steps

### Learn More

1. **Manual Testing**
   - Read Test Strategy: `manual-testing/01-test-strategy.md`
   - Review Test Plan: `manual-testing/02-test-plan.md`
   - Practice with Test Cases: `manual-testing/03-test-cases.md`

2. **Automated Testing**
   - Read Automation Guide: `automated-testing/README.md`
   - Study Page Objects: `automated-testing/pages/`
   - Review Test Examples: `automated-testing/tests/`

3. **Contributing**
   - Read Contributing Guide: `CONTRIBUTING.md`
   - Check open issues on GitHub
   - Submit your first PR!

### Join the Community

- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest features
- 🤝 Contribute code
- 📖 Improve documentation

---

## 🎯 Quick Reference

### Essential Commands

```bash
# Manual Testing
cd TestingDemo-02
open manual-testing/          # Browse docs

# Automated Testing
cd automated-testing
npm install                   # Setup
npm test                      # Run all tests
npm run test:report          # View results
npm run test:debug           # Debug tests

# Development
git checkout -b feature/name  # New branch
git add .                     # Stage changes
git commit -m "message"       # Commit
git push origin feature/name  # Push changes
```

### Important Files

```
📁 TestingDemo-02/
├── 📄 README.md                    ← Project overview
├── 📄 QUICK_START.md               ← This file
├── 📄 CONTRIBUTING.md              ← How to contribute
├── 📁 manual-testing/
│   └── 📄 *.md                     ← Test documentation
└── 📁 automated-testing/
    ├── 📄 README.md                ← Automation guide
    ├── 📄 package.json             ← Dependencies
    └── 📄 playwright.config.js     ← Test config
```

### Application Credentials

- **URL**: https://opensource-demo.orangehrmlive.com/
- **Username**: `Admin`
- **Password**: `admin123`

---

## ✅ Success Checklist

After following this guide, you should be able to:

- [ ] Clone and access the repository
- [ ] View manual testing documentation
- [ ] Run automated tests locally
- [ ] View test reports
- [ ] Execute manual test cases
- [ ] Add new test cases
- [ ] Debug failing tests
- [ ] Understand project structure

---

## 💬 Need Help?

- 📖 Check [README.md](README.md) for detailed info
- 🔧 Review [Troubleshooting](#troubleshooting) section
- 🐛 Open an issue on GitHub
- 📚 Read [Playwright Docs](https://playwright.dev/)

---

**Happy Testing! 🎉**

Last Updated: February 2026
