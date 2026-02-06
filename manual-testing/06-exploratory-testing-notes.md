# Exploratory Testing Notes

## Project: OrangeHRM Demo Application

### Document Information
- **Project Name:** OrangeHRM Demo QA Testing
- **Application URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** 1.0
- **Date:** February 2026
- **Tester(s):** Brad

---

## What is Exploratory Testing?

Exploratory testing is a hands-on approach where testers are involved in minimum planning and maximum test execution. The planning involves the creation of a test charter, a short declaration of the scope of a short (1-2 hour) time-boxed test effort. Testers learn about the system while testing it and use that information to design new and better tests.

---

## Test Charter Template

Each exploratory testing session follows this template:
- **Charter ID:** Unique identifier
- **Test Mission:** What are we testing?
- **Time Box:** Duration (typically 60-120 minutes)
- **Tester:** Who performed the testing
- **Date:** When testing was performed
- **Build/Version:** Application version
- **Test Notes:** Observations and findings
- **Issues Found:** Bugs or concerns discovered
- **Questions:** Things to clarify
- **Risks:** Potential risks identified

---

## Exploratory Testing Sessions

### Session 1: Login and Authentication Flow

**Charter ID:** EXP-001  
**Test Mission:** Explore the login and authentication mechanisms, session handling, and security  
**Time Box:** 90 minutes  
**Tester:** QA Engineer  
**Date:** February 5, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Tested login with various credential combinations
- Observed session timeout behavior after 30 minutes of inactivity
- Tested "Remember Me" functionality - appears to save username but not password
- Tested login with special characters in username/password fields
- Attempted SQL injection and XSS attacks - properly sanitized
- Checked browser back button behavior after logout - correctly redirects to login
- Tested concurrent sessions from different browsers - allowed
- Tested login on different browsers (Chrome, Firefox, Edge) - consistent behavior
- Password field properly masks input
- No password reveal option available

**Areas Explored:**
1. Valid/Invalid login attempts
2. Session management
3. Security testing (SQL injection, XSS)
4. Browser compatibility
5. Logout functionality
6. Error messaging

**Issues Found:**
- BUG-001: Password field accepts trailing spaces, causing login failure even with correct password
- Minor: Error messages could be more specific (e.g., "Invalid username" vs "Invalid credentials")
- Observation: Password strength requirements not displayed on screen

**Questions:**
- What is the exact session timeout duration? (Appears to be 30 minutes)
- Should concurrent sessions be allowed?
- Is there a password complexity requirement?

**Risks:**
- Users might get locked out if trailing spaces are added to password
- Generic error messages might confuse users
- Concurrent sessions might lead to data conflicts

**Coverage:** 85% of authentication features explored

---

### Session 2: Employee Management (PIM Module)

**Charter ID:** EXP-002  
**Test Mission:** Explore employee management features including add, edit, search, and delete operations  
**Time Box:** 120 minutes  
**Tester:** QA Engineer  
**Date:** February 5, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Added employees with various data combinations
- Tested mandatory vs optional fields
- Explored photo upload feature - accepts JPG, PNG
- Tested employee search with various filters
- Edited existing employee records across different tabs
- Added contact details, emergency contacts, dependents
- Tested job assignment and salary information
- Explored employee reports generation
- Tested data export functionality
- Attempted to add duplicate employee IDs - properly prevented

**Areas Explored:**
1. Add employee workflow
2. Employee search and filters
3. Edit employee information
4. Contact and dependent management
5. Job and salary details
6. Employee reports
7. Data validation

**Issues Found:**
- BUG-002: Search functionality appears case-sensitive in some scenarios
- BUG-006: Photo upload doesn't clearly show size limit (discovered limit is 1MB)
- Observation: No bulk employee update option
- Minor: Date pickers could be more user-friendly

**Questions:**
- Can we customize the employee fields?
- Is there a limit on number of dependents?
- Can employees be imported from external systems?

**Risks:**
- Large photo files might slow down system
- Case-sensitive search might cause users to miss employees
- No data validation on some optional fields

**Interesting Findings:**
- Employee ID can be auto-generated or manual
- System tracks full history of employee changes
- Reports can be customized with various filters

**Coverage:** 80% of PIM features explored

---

### Session 3: Leave Management System

**Charter ID:** EXP-003  
**Test Mission:** Explore leave application, approval workflow, and leave balance management  
**Time Box:** 90 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Applied for various types of leave (Casual, Sick, Annual)
- Tested half-day and multiple-day leave applications
- Explored leave balance calculation
- Tested leave approval/rejection workflow as manager
- Attempted to apply for leave with insufficient balance
- Tested leave cancellation functionality
- Explored leave calendar view
- Checked leave history and reports
- Tested applying leave for weekends and holidays
- Explored leave entitlement configuration

**Areas Explored:**
1. Leave application process
2. Leave types and balance
3. Approval workflow
4. Leave calendar
5. Weekend/holiday handling
6. Leave reports

**Issues Found:**
- BUG-003: Date picker allows selection of past dates
- BUG-009: Leave balance sometimes doesn't update immediately after approval
- Observation: No notification system for leave approvals
- Minor: Leave comments field is limited in characters

**Questions:**
- How are leave carry-forwards handled?
- Can leave be applied on behalf of someone else?
- What happens to leave balance at year-end?

**Risks:**
- Leave balance calculation errors could cause serious issues
- Past date applications might create confusion
- Lack of notifications might delay approvals

**Interesting Findings:**
- System automatically skips weekends in leave calculation
- Multiple approval levels can be configured
- Leave calendar shows entire team's leave

**Coverage:** 75% of leave features explored

---

### Session 4: Admin Panel and System Configuration

**Charter ID:** EXP-004  
**Test Mission:** Explore admin functionalities including user management, system configuration, and organizational setup  
**Time Box:** 120 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Created and managed system users with different roles
- Tested role-based access control
- Explored job title, pay grade, and employment status configuration
- Tested organization structure setup
- Explored qualifications (education, skills, languages) management
- Tested nationality and country configuration
- Explored email configuration options
- Tested user bulk operations
- Checked audit log functionality
- Explored system preferences and localization

**Areas Explored:**
1. User management (CRUD operations)
2. Role and permission management
3. Job and organization configuration
4. Qualifications and skills
5. Email and notification setup
6. System preferences

**Issues Found:**
- BUG-004: User role dropdown appears empty when editing existing users
- Observation: No way to disable users temporarily (only delete)
- Minor: Some configuration options lack descriptions
- Minor: Bulk operations have limited options

**Questions:**
- Can roles and permissions be customized?
- Is there an audit trail for admin changes?
- Can we integrate with external authentication systems?

**Risks:**
- Empty dropdown could prevent user role changes
- Deleting users instead of disabling might lose historical data
- Lack of audit trail for some admin actions

**Interesting Findings:**
- Very granular permission system
- Multiple organizational structures can be configured
- Email templates can be customized

**Coverage:** 70% of admin features explored

---

### Session 5: Timesheet and Time Tracking

**Charter ID:** EXP-005  
**Test Mission:** Explore timesheet creation, submission, and approval workflow  
**Time Box:** 60 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Created timesheets for different weeks
- Added multiple projects and activities to timesheet
- Tested time entry in various formats
- Submitted timesheet for approval
- Tested approval/rejection workflow as manager
- Explored project and customer management
- Tested timesheet reports
- Attempted to submit incomplete timesheet
- Tested editing submitted timesheet

**Areas Explored:**
1. Timesheet creation and submission
2. Project and activity tracking
3. Approval workflow
4. Time format validation
5. Timesheet reports

**Issues Found:**
- BUG-007: Decimal hour input (e.g., 8.5) not consistently accepted
- Observation: No automatic time tracking or timer feature
- Minor: Cannot copy entries from one day to multiple days easily

**Questions:**
- Can timesheet approval be automated based on rules?
- Is there integration with project management tools?
- Can we track billable vs non-billable hours?

**Risks:**
- Decimal input issues might cause incorrect time recording
- Manual time entry prone to errors
- No validation for reasonable working hours (e.g., >24 hours/day)

**Interesting Findings:**
- Can copy entire previous week's timesheet
- Supports multiple projects per day
- Comprehensive timesheet reports available

**Coverage:** 65% of time module explored

---

### Session 6: Recruitment and Candidate Management

**Charter ID:** EXP-006  
**Test Mission:** Explore recruitment workflow from job posting to candidate hiring  
**Time Box:** 90 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Created job vacancies with different requirements
- Added candidates manually
- Tested candidate shortlisting
- Scheduled interviews with multiple interviewers
- Tested interview feedback recording
- Moved candidates through hiring pipeline
- Tested job offer and hiring workflow
- Explored candidate search and filtering
- Tested candidate rejection with reasons
- Explored recruitment reports

**Areas Explored:**
1. Job vacancy creation
2. Candidate management
3. Interview scheduling
4. Hiring workflow stages
5. Candidate search and reports
6. Resume attachment

**Issues Found:**
- BUG-008: System allows duplicate candidate email addresses
- Observation: No email notifications to candidates
- Minor: Interview scheduling lacks calendar integration
- Minor: Cannot bulk import candidates

**Questions:**
- Can job postings be published to external job boards?
- Is there a candidate portal for self-service?
- Can we customize the hiring workflow stages?

**Risks:**
- Duplicate emails might cause confusion
- Manual interview scheduling prone to conflicts
- Lack of notifications might delay hiring process

**Interesting Findings:**
- Multiple interview rounds can be configured
- Can attach multiple documents per candidate
- Hired candidates automatically create employee records

**Coverage:** 70% of recruitment features explored

---

### Session 7: Dashboard and Reports

**Charter ID:** EXP-007  
**Test Mission:** Explore dashboard widgets, quick actions, and reporting capabilities  
**Time Box:** 60 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Explored dashboard quick launch icons
- Tested action items and pending tasks
- Viewed various dashboard charts and graphs
- Tested report generation across modules
- Explored report customization options
- Tested report export functionality (CSV, Excel, PDF)
- Checked report scheduling capabilities
- Tested dashboard refresh behavior

**Areas Explored:**
1. Dashboard layout and widgets
2. Quick actions
3. Report generation
4. Report customization
5. Data export options

**Issues Found:**
- BUG-005: Dashboard charts don't auto-refresh, showing stale data
- Observation: Limited dashboard customization options
- Minor: Some reports take long time to generate

**Questions:**
- Can users customize their dashboard layout?
- Can reports be scheduled for automatic generation?
- Is there a dashboard for executives with high-level metrics?

**Risks:**
- Stale data on dashboard might lead to wrong decisions
- Long report generation time might timeout
- Limited customization might not meet all user needs

**Interesting Findings:**
- Dashboard shows personalized action items
- Reports support multiple export formats
- Charts are interactive with drill-down capability

**Coverage:** 60% of dashboard and reporting explored

---

### Session 8: Mobile Responsiveness and UI/UX

**Charter ID:** EXP-008  
**Test Mission:** Explore application behavior on mobile devices and responsive design  
**Time Box:** 60 minutes  
**Tester:** QA Engineer  
**Date:** February 6, 2026  
**Build/Version:** Demo Production

**Test Notes:**
- Tested application on various screen sizes
- Tested on mobile browsers (Chrome Mobile, Safari Mobile)
- Explored touch interactions
- Tested navigation menu on mobile
- Verified form input on mobile
- Tested data tables on small screens
- Checked orientation changes (portrait/landscape)
- Tested accessibility features

**Areas Explored:**
1. Responsive design
2. Mobile navigation
3. Touch interactions
4. Form usability on mobile
5. Table rendering on small screens

**Issues Found:**
- BUG-010: Navigation menu overlaps content on mobile view
- Observation: Some tables don't scroll horizontally well on mobile
- Minor: Touch targets could be larger for better usability
- Minor: Date pickers not optimized for mobile

**Questions:**
- Is a native mobile app planned?
- What is the minimum supported screen size?
- Are there accessibility requirements to meet?

**Risks:**
- Mobile usability issues might frustrate users
- Overlapping menu prevents access to content
- Poor mobile experience might reduce adoption

**Interesting Findings:**
- Most features accessible on mobile
- Reasonable performance on mobile networks
- Basic accessibility features present

**Coverage:** 50% of mobile experience explored

---

## Summary and Insights

### Overall Test Coverage
Approximately **70% of application features** explored through 8 exploratory sessions totaling 11 hours.

### Key Findings
1. **Authentication system** is generally secure and robust
2. **Core HR features (PIM, Leave, Time)** work well with minor issues
3. **Admin capabilities** are comprehensive but some UI issues exist
4. **Recruitment module** functional but lacks integration features
5. **Mobile experience** needs improvement
6. **Dashboard** useful but data refresh issues

### Critical Issues Discovered
- User role editing broken (BUG-004)
- Leave balance calculation errors (BUG-009)
- Mobile navigation problems (BUG-010)

### Positive Observations
- Generally intuitive user interface
- Comprehensive feature set for HR management
- Good data validation in most areas
- Flexible reporting capabilities
- Proper security measures in place

### Areas for Improvement
1. Real-time data updates on dashboard
2. Better mobile responsiveness
3. Email notification system
4. Bulk operations capabilities
5. More user-friendly date pickers
6. Better error messaging

### Recommendations
1. **Immediate:** Fix critical bugs (BUG-004, BUG-009)
2. **Short-term:** Improve mobile experience
3. **Medium-term:** Add notification system
4. **Long-term:** Enhance integration capabilities

---

## Best Practices Followed

1. **Time-boxed sessions:** Each session limited to 60-120 minutes
2. **Diverse test charters:** Covered different modules and aspects
3. **Note-taking:** Documented observations in real-time
4. **Risk identification:** Flagged potential issues
5. **Question logging:** Recorded unclear requirements
6. **Coverage tracking:** Estimated coverage for each session

---

## Exploratory Testing Checklist

### Before Testing
- [x] Understand application purpose and target users
- [x] Review any available documentation
- [x] Set up test environment
- [x] Define test charters
- [x] Allocate time boxes

### During Testing
- [x] Follow test charter but remain flexible
- [x] Document findings in real-time
- [x] Take screenshots of interesting behaviors
- [x] Note questions and risks
- [x] Log defects immediately

### After Testing
- [x] Compile and organize notes
- [x] Create bug reports for issues found
- [x] Update test documentation
- [x] Share findings with team
- [x] Plan follow-up sessions if needed

---

## Test Ideas for Future Sessions

1. **Performance Testing:** Load testing with multiple concurrent users
2. **Data Migration:** Testing data import/export at scale
3. **Integration Testing:** Testing with external systems (if available)
4. **Accessibility Testing:** WCAG compliance testing
5. **Localization Testing:** Testing in different languages
6. **Security Testing:** Deeper penetration testing
7. **Recovery Testing:** Testing system behavior after crashes
8. **Upgrade Testing:** Testing upgrade from older versions

---

## Tools Used

1. **Browser Developer Tools:** For inspecting elements and debugging
2. **Screen Recording Software:** To capture issues
3. **Note-taking App:** For documenting observations
4. **Screenshot Tool:** For capturing visual bugs
5. **Different Browsers:** Chrome, Firefox, Edge, Safari
6. **Mobile Devices:** Android and iOS devices

---

## Lessons Learned

1. **Time-boxing works well** - Keeps sessions focused and productive
2. **Note-taking is crucial** - Easy to forget details if not documented immediately
3. **Mix of positive and negative testing** yields best results
4. **User perspective important** - Think like end user, not just tester
5. **Questions are valuable** - They often reveal requirements gaps
6. **Risk identification** helps prioritize fixes

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Brad | Initial version with 8 test sessions |

---

## Approval

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | QA Lead | _______ | ______ |
| [Name] | Test Manager | _______ | ______ |
