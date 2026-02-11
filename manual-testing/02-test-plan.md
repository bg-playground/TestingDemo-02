# Test Plan Document

## Project: OrangeHRM Demo Application

### Document Information
- **Project Name:** OrangeHRM Demo QA Testing
- **Application URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** 1.0
- **Date:** February 2026
- **Test Plan Owner:** Brad

---

## 1. Introduction

### 1.1 Purpose
This test plan describes the testing approach and overall framework for testing the OrangeHRM Demo application. It identifies the items to be tested, features to be tested, testing tasks, and personnel responsible for different tasks.

### 1.2 Scope

#### In Scope
- **Admin Module:** User management, job titles, qualifications
- **PIM (Personal Information Management):** Employee records, reports
- **Leave Module:** Leave requests, leave types, entitlements
- **Time Module:** Timesheets, attendance records
- **Recruitment Module:** Job vacancies, candidates, applications
- **My Info Module:** Personal details, contact information
- **Performance Module:** KPIs, reviews, trackers
- **Dashboard:** Quick launch, action items, charts

#### Out of Scope
- Third-party integrations not included in demo
- Mobile native application testing
- Payment/Payroll processing (if not in demo)
- Database direct manipulation

### 1.3 Test Objectives
1. Verify all functional requirements are implemented correctly
2. Ensure the application is stable and reliable
3. Validate user workflows and business processes
4. Identify defects before production deployment
5. Ensure cross-browser compatibility
6. Validate security measures (authentication, authorization)

---

## 2. Test Items

### 2.1 Features to be Tested
1. **Authentication & Authorization**
   - Login functionality
   - Logout functionality
   - Password reset
   - Session management
   - Role-based access control

2. **Admin Module**
   - User management (Add, Edit, Delete, Search)
   - Job management
   - Organization structure
   - Qualifications
   - System users

3. **PIM Module**
   - Add employee
   - Edit employee information
   - Delete employee
   - Search employees
   - Employee reports

4. **Leave Module**
   - Apply for leave
   - Approve/Reject leave
   - Leave balance
   - Leave types configuration
   - Leave reports

5. **Time Module**
   - Timesheet submission
   - Timesheet approval
   - Attendance records
   - Project time tracking

6. **Recruitment Module**
   - Add job vacancy
   - Add candidate
   - Application workflow
   - Interview scheduling
   - Candidate reports

### 2.2 Features Not to be Tested
- Infrastructure components (unless impacting functionality)
- Third-party services not available in demo
- Features requiring special licenses
- Deprecated features

---

## 3. Test Approach

### 3.1 Testing Phases

#### Phase 1: Smoke Testing (Week 1)
- Verify critical functionality is working
- Test major user workflows
- Environment validation

#### Phase 2: Functional Testing (Week 2-3)
- Detailed test case execution
- Positive and negative scenarios
- Boundary value testing
- Data validation

#### Phase 3: Integration Testing (Week 3)
- Module interactions
- Data flow between modules
- API integration validation

#### Phase 4: Regression Testing (Week 4)
- Re-test critical paths
- Automated regression suite execution
- Defect verification

#### Phase 5: UAT (Week 5)
- End-user validation
- Real-world scenarios
- Final sign-off

### 3.2 Testing Types

#### 3.2.1 Manual Testing
- Exploratory testing
- Usability testing
- Ad-hoc testing
- Accessibility testing

#### 3.2.2 Automated Testing
- UI functional tests (Playwright/Selenium)
- API tests (REST endpoints)
- Regression test suite
- CI/CD integrated tests

---

## 4. Test Environment

### 4.1 Application Under Test
- **URL:** https://opensource-demo.orangehrmlive.com/
- **Username:** Admin
- **Password:** admin123

### 4.2 Hardware Requirements
- Workstation with minimum 8GB RAM
- Internet connectivity (stable, minimum 10 Mbps)
- Multiple monitors (recommended for testing)

### 4.3 Software Requirements
- **Browsers:** Chrome 120+, Firefox 120+, Edge 120+, Safari 17+
- **Test Automation:** Node.js 18+, Python 3.9+
- **API Testing:** Postman, curl
- **Screen Recording:** OBS Studio, browser extensions
- **Documentation:** VS Code, Markdown preview

### 4.4 Test Data
- Sample employee records
- Test user accounts with different roles
- Leave request scenarios
- Recruitment candidate data

---

## 5. Test Schedule

### 5.1 Milestones

| Phase | Activity | Start Date | End Date | Effort (Days) |
|-------|----------|------------|----------|---------------|
| Preparation | Test plan creation | Week 1 Day 1 | Week 1 Day 2 | 2 |
| Preparation | Test case design | Week 1 Day 3 | Week 1 Day 5 | 3 |
| Execution | Smoke testing | Week 2 Day 1 | Week 2 Day 1 | 1 |
| Execution | Functional testing | Week 2 Day 2 | Week 3 Day 5 | 9 |
| Execution | Integration testing | Week 3 Day 1 | Week 3 Day 3 | 3 |
| Execution | Regression testing | Week 4 Day 1 | Week 4 Day 3 | 3 |
| Closure | UAT | Week 4 Day 4 | Week 5 Day 2 | 4 |
| Closure | Test report | Week 5 Day 3 | Week 5 Day 5 | 3 |

### 5.2 Dependencies
- Test environment must be available and stable
- Test data must be prepared
- Access credentials must be provided
- Defect tracking system must be configured

---

## 6. Test Deliverables

### 6.1 Before Testing
- Test Strategy Document
- Test Plan (this document)
- Test Cases
- Test Data
- Test Environment Setup Guide

### 6.2 During Testing
- Test Execution Reports (daily)
- Defect Reports
- Test Logs
- Status Updates

### 6.3 After Testing
- Test Summary Report
- Test Metrics Report
- Defect Summary Report
- Lessons Learned Document

---

## 7. Test Cases

### 7.1 Test Case Organization
Test cases are organized by module and functionality:
```
manual-testing/
├── 03-test-cases.md (Master test case document)
```

### 7.2 Test Case Template
Each test case includes:
- Test Case ID
- Test Case Title
- Module/Feature
- Priority
- Preconditions
- Test Steps
- Expected Results
- Actual Results
- Status (Pass/Fail)
- Comments

---

## 8. Defect Management

### 8.1 Defect Tracking
- **Tool:** GitHub Issues
- **Labels:** bug, enhancement, documentation, test-case
- **Severity:** Critical, High, Medium, Low
- **Priority:** P0, P1, P2, P3

### 8.2 Defect Reporting Process
1. QA discovers defect during testing
2. QA verifies defect is reproducible
3. QA creates GitHub issue with detailed information
4. QA assigns appropriate severity and priority
5. Developer fixes and marks as resolved
6. QA verifies fix and closes issue

### 8.3 Defect Report Template
- **Title:** Clear, concise description
- **Description:** Detailed steps to reproduce
- **Expected Result:** What should happen
- **Actual Result:** What actually happened
- **Screenshots/Videos:** Visual evidence
- **Environment:** Browser, OS, application version
- **Severity/Priority:** Classification

---

## 9. Entry and Exit Criteria

### 9.1 Entry Criteria
- [ ] Test plan approved
- [ ] Test cases reviewed and approved
- [ ] Test environment ready and accessible
- [ ] Test data prepared
- [ ] Required access/credentials provided
- [ ] Defect tracking system configured

### 9.2 Exit Criteria
- [ ] All planned test cases executed
- [ ] 95%+ test case pass rate
- [ ] No critical or high-priority open defects
- [ ] Regression testing completed successfully
- [ ] Test summary report completed
- [ ] Stakeholder approval obtained

---

## 10. Suspension and Resumption Criteria

### 10.1 Suspension Criteria
Testing will be suspended if:
- Critical defects blocking test execution
- Test environment unavailable for extended period
- Major functionality not working
- Significant changes to requirements

### 10.2 Resumption Criteria
Testing will resume when:
- Critical defects are fixed and verified
- Test environment is restored
- Functionality is restored
- Requirements are finalized and communicated

---

## 11. Risks and Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Environment instability | High | Use stable demo version, document issues |
| Insufficient test data | Medium | Create test data generation scripts |
| Resource unavailability | Medium | Cross-train team members |
| Requirement changes | High | Maintain flexible test cases, version control |
| Browser compatibility issues | Medium | Test on multiple browsers early |

---

## 12. Roles and Responsibilities

| Role | Name | Responsibilities |
|------|------|------------------|
| Test Manager | [Name] | Test planning, resource allocation, reporting |
| Test Lead | [Name] | Test case review, execution oversight, defect triage |
| QA Engineer | [Name] | Test case execution, defect logging, retesting |
| Automation Engineer | [Name] | Automation framework, script development |
| Business Analyst | [Name] | Requirements clarification, UAT support |

---

## 13. Communication Plan

### 13.1 Status Meetings
- **Daily Standup:** 15 minutes, testing status update
- **Weekly Review:** 1 hour, detailed progress, blockers
- **Sprint Review:** 2 hours, demo, metrics, retrospective

### 13.2 Reports
- **Daily:** Test execution summary email
- **Weekly:** Detailed test status report
- **End of Phase:** Phase completion report with metrics

### 13.3 Communication Channels
- **Email:** Status reports, formal communication
- **Slack/Teams:** Daily updates, quick questions
- **GitHub:** Defect tracking, code reviews
- **Wiki/Confluence:** Documentation, knowledge base

---

## 14. Approval

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | Test Manager | _______ | ______ |
| [Name] | Project Manager | _______ | ______ |
| [Name] | Product Owner | _______ | ______ |

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Brad | Initial version |
