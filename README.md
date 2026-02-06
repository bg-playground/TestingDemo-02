# QA Testing Framework - OrangeHRM Demo

[![Automated Tests CI](https://github.com/bg-playground/TestingDemo-02/actions/workflows/automated-tests.yml/badge.svg)](https://github.com/bg-playground/TestingDemo-02/actions/workflows/automated-tests.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive Quality Assurance testing framework demonstrating both manual and automated testing practices for the [OrangeHRM Demo Application](https://opensource-demo.orangehrmlive.com/).

## 🎯 Project Overview

This repository showcases a complete QA testing framework including:

- ✅ **Manual Testing Suite**: Test plans, test cases, bug reports, and exploratory testing
- 🤖 **Automated Testing Framework**: UI and API tests using Playwright
- 🔄 **CI/CD Integration**: GitHub Actions for continuous testing
- 📊 **Comprehensive Documentation**: Detailed test strategies and traceability matrices
- ☁️ **Cloud Deployment Ready**: Azure deployment configuration

## 🏗️ Project Structure

```
TestingDemo-02/
├── manual-testing/               # Manual testing documentation
│   ├── 01-test-strategy.md      # Overall testing strategy
│   ├── 02-test-plan.md          # Detailed test plan
│   ├── 03-test-cases.md         # 95 test cases across all modules
│   ├── 04-bug-reports.md        # Sample bug reports with details
│   ├── 05-traceability-matrix.md # Requirements traceability (90 requirements)
│   ├── 06-exploratory-testing-notes.md # 8 exploratory test sessions
│   └── 07-test-execution-report.md # Test execution report template
│
├── automated-testing/            # Automated test framework
│   ├── pages/                   # Page Object Models
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   ├── AdminPage.js
│   │   └── PIMPage.js
│   ├── tests/
│   │   ├── ui/                  # UI tests (Playwright)
│   │   │   ├── auth.spec.js     # 9 authentication tests
│   │   │   ├── admin.spec.js    # 4 admin module tests
│   │   │   └── pim.spec.js      # 5 PIM module tests
│   │   └── api/                 # API tests
│   │       └── api.spec.js      # 13 API tests
│   ├── utils/                   # Test utilities
│   │   ├── testData.js          # Test data fixtures
│   │   └── helpers.js           # Helper functions (40+)
│   ├── playwright.config.js     # Test configuration
│   ├── package.json
│   └── README.md                # Automation framework docs
│
├── business-case/                # 📊 Manager-focused documents
│   ├── executive-case-study.md  # 20+ page comprehensive case study
│   ├── stakeholder-presentation.md # 20-slide presentation
│   ├── test-metrics-dashboard.csv # Quality metrics tracking
│   ├── risk-register.csv        # 25 risks tracked & mitigated
│   ├── test-coverage-summary.csv # Module-wise coverage analysis
│   ├── roi-analysis.csv         # 3-year financial ROI analysis
│   └── README.md                # Guide to business documents
│
├── screenshots/                  # Screenshot examples and guidelines
│   └── README.md                # Screenshot documentation
│
├── .github/workflows/            # CI/CD workflows
│   ├── automated-tests.yml      # GitHub Actions for tests
│   └── azure-deploy.yml.example # Azure deployment template
│
├── SETUP_TROUBLESHOOTING.md     # Complete setup and troubleshooting guide
├── PERFORMANCE_ACCESSIBILITY.md # Performance & accessibility testing guide
├── QUICK_START.md               # 5-minute getting started
├── CONTRIBUTING.md              # Contribution guidelines
├── CHANGELOG.md                 # Version history
└── README.md                    # This file
```

## 📋 Manual Testing Suite

### Test Documentation

| Document | Description | Key Metrics |
|----------|-------------|-------------|
| **Test Strategy** | Overall testing approach and methodologies | 11 sections, comprehensive strategy |
| **Test Plan** | Detailed test planning and scheduling | 14 sections, 5-week timeline |
| **Test Cases** | Detailed test scenarios | 95 test cases across 6 modules |
| **Bug Reports** | Sample defects found | 10 documented bugs with severity |
| **Traceability Matrix** | Requirements to test mapping | 90 requirements, 98.9% coverage |
| **Exploratory Testing** | Ad-hoc testing sessions | 8 sessions, 11 hours total |
| **Test Execution Report** | Comprehensive report template | Metrics, charts, analysis |

### Test Coverage by Module

- **Authentication**: 10 test cases
- **Admin Module**: 20 test cases  
- **PIM (Employee Management)**: 20 test cases
- **Leave Management**: 15 test cases
- **Time & Timesheets**: 10 test cases
- **Recruitment**: 15 test cases
- **Other Modules**: 5 test cases

### Key Features

- ✅ Comprehensive test cases with detailed steps
- 🐛 Sample bug reports with screenshots and severity
- 🔗 Full requirements traceability matrix
- 📝 Exploratory testing notes with findings
- 📊 Test metrics and coverage statistics

## 🤖 Automated Testing Framework

### Technology Stack

- **Framework**: Playwright v1.40+
- **Language**: JavaScript/Node.js
- **Test Runner**: Playwright Test
- **Browsers**: Chrome, Firefox, Safari, Mobile
- **Reporting**: HTML, JSON, JUnit
- **Utilities**: 40+ helper functions, test data fixtures

### Quick Start

```bash
# Navigate to automated testing directory
cd automated-testing

# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npm test

# Run specific test suite
npm run test:ui        # UI tests only
npm run test:api       # API tests only

# Run in specific browser
npm run test:chrome    # Chrome only
npm run test:firefox   # Firefox only

# View test report
npm run test:report
```

### Test Statistics

- **Total Automated Tests**: 31
- **UI Tests**: 18 (Authentication, Admin, PIM)
- **API Tests**: 13 (Performance, Security, Resources)
- **Page Objects**: 4 (Login, Dashboard, Admin, PIM)
- **Cross-browser**: Chrome, Firefox, Safari, Mobile

### Key Features

- 🎭 Page Object Model for maintainability
- 🔄 Parallel test execution
- 📸 Automatic screenshots on failure
- 🎥 Video recording for failed tests
- 📊 Multiple report formats (HTML, JSON, JUnit)
- 🌐 Cross-browser testing support
- 📱 Mobile viewport testing

## 🔄 CI/CD Integration

### GitHub Actions

Automated tests run on:
- ✅ Every push to main/develop branches
- ✅ All pull requests
- ✅ Manual workflow dispatch
- ✅ Multiple browsers in parallel

View workflow: `.github/workflows/automated-tests.yml`

### Test Results

- Test results uploaded as artifacts
- HTML reports available for download
- Test summary in workflow logs
- 30-day artifact retention

## ☁️ Azure Deployment

### Deployment Options

This project can be deployed to:

1. **Azure Static Web Apps**: For static content and documentation
2. **Azure App Service**: For full web applications

### Setup Instructions

See `.github/workflows/azure-deploy.yml.example` for deployment template.

**Steps**:
1. Create Azure resource (Static Web App or App Service)
2. Get deployment credentials
3. Add secrets to GitHub repository
4. Enable deployment workflow
5. Push to main branch

## 🎓 Application Under Test

**OrangeHRM Demo Application**
- **URL**: https://opensource-demo.orangehrmlive.com/
- **Username**: Admin
- **Password**: admin123

### Modules Tested

1. **Admin**: User management, system configuration
2. **PIM**: Employee information management
3. **Leave**: Leave application and approval
4. **Time**: Timesheet management
5. **Recruitment**: Hiring workflow management
6. **Dashboard**: Overview and quick actions

## 📖 Documentation

### Manual Testing

- [Test Strategy](./manual-testing/01-test-strategy.md) - Overall testing approach
- [Test Plan](./manual-testing/02-test-plan.md) - Detailed test planning
- [Test Cases](./manual-testing/03-test-cases.md) - All test scenarios
- [Bug Reports](./manual-testing/04-bug-reports.md) - Sample defects
- [Traceability Matrix](./manual-testing/05-traceability-matrix.md) - Requirements mapping
- [Exploratory Testing](./manual-testing/06-exploratory-testing-notes.md) - Ad-hoc testing

### Automated Testing
- [Automation README](./automated-testing/README.md) - Complete automation guide
- [Test Configuration](./automated-testing/playwright.config.js) - Playwright setup
- [UI Tests](./automated-testing/tests/ui/) - User interface tests
- [API Tests](./automated-testing/tests/api/) - API endpoint tests
- [Test Data](./automated-testing/utils/testData.js) - Reusable test fixtures
- [Helper Functions](./automated-testing/utils/helpers.js) - 40+ utilities

### Business Case & Executive Materials 📊
- [Business Case Overview](./business-case/README.md) - Guide to all business documents
- [Executive Case Study](./business-case/executive-case-study.md) - 20+ page comprehensive case study (724% ROI)
- [Stakeholder Presentation](./business-case/stakeholder-presentation.md) - 20-slide presentation deck
- [Test Metrics Dashboard](./business-case/test-metrics-dashboard.csv) - Quality metrics tracking
- [ROI Analysis](./business-case/roi-analysis.csv) - 3-year financial analysis
- [Risk Register](./business-case/risk-register.csv) - 25 risks tracked & mitigated
- [Test Coverage Summary](./business-case/test-coverage-summary.csv) - Module-wise coverage

### Setup & Advanced Testing
- [Quick Start](./QUICK_START.md) - 5-minute setup guide
- [Setup & Troubleshooting](./SETUP_TROUBLESHOOTING.md) - Complete installation guide
- [Performance & Accessibility](./PERFORMANCE_ACCESSIBILITY.md) - Advanced testing guide
- [Screenshots Guide](./screenshots/README.md) - Bug documentation best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for automated tests)
- Git
- Text editor (VS Code recommended)

### Clone Repository

```bash
git clone https://github.com/bg-playground/TestingDemo-02.git
cd TestingDemo-02
```

### Setup Automated Tests

```bash
cd automated-testing
npm install
npx playwright install
npm test
```

### View Manual Test Documentation

Open any markdown file in `manual-testing/` directory in your text editor or GitHub.

## 🧪 Test Execution

### Manual Testing

1. Review test plan and test strategy
2. Execute test cases from `03-test-cases.md`
3. Log defects using template in `04-bug-reports.md`
4. Update traceability matrix
5. Perform exploratory testing sessions

### Automated Testing

```bash
# Run all tests
npm test

# Run with UI (visible browser)
npm run test:headed

# Debug tests
npm run test:debug

# Generate code
npx playwright codegen https://opensource-demo.orangehrmlive.com
```

## 📊 Test Metrics

### Manual Testing Coverage

- **Total Requirements**: 90
- **Test Cases**: 95
- **Coverage**: 98.9%
- **Modules Covered**: 6
- **Exploratory Sessions**: 8 (11 hours)

### Automated Testing Coverage

- **Total Automated Tests**: 31
- **Pass Rate**: Target 95%+
- **Browsers**: 3 desktop + 2 mobile
- **Execution Time**: ~5-10 minutes
- **Parallel Execution**: Yes

### Defect Statistics

- **Total Bugs Documented**: 10
- **Critical**: 0
- **High**: 2
- **Medium**: 6
- **Low**: 2

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add tests or documentation
4. Ensure tests pass
5. Submit pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Brad** - Initial work and framework development

## 🙏 Acknowledgments

- OrangeHRM for providing the demo application
- Playwright team for the excellent testing framework
- GitHub Actions for CI/CD capabilities
- Azure for cloud deployment options

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Review the documentation in `manual-testing/` and `automated-testing/`
- Check [Playwright Documentation](https://playwright.dev/)

## 🔗 Useful Links

- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)
- [Playwright Documentation](https://playwright.dev/)
- [GitHub Actions](https://docs.github.com/actions)
- [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)

---

**Last Updated**: February 2026  
**Version**: 1.0.0  
**Status**: ✅ Active Development
