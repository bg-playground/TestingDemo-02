# Bug Reports - OrangeHRM Demo Application

## Document Information
- **Project:** OrangeHRM Demo QA Testing
- **Application URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** 1.0
- **Date:** February 2026

---

## Bug Report Template

Each bug report includes:
- **Bug ID:** Unique identifier
- **Title:** Brief description
- **Severity:** Critical / High / Medium / Low
- **Priority:** P0 / P1 / P2 / P3
- **Module:** Feature/module affected
- **Reported By:** Tester name
- **Reported Date:** Date discovered
- **Environment:** Browser, OS details
- **Steps to Reproduce:** Detailed steps
- **Expected Result:** What should happen
- **Actual Result:** What actually happened
- **Screenshots:** Visual evidence
- **Status:** New / Assigned / In Progress / Fixed / Closed
- **Assigned To:** Developer name

---

## Bug Reports

### BUG-001: Login Page - Password Field Accepts Spaces
**Severity:** Medium  
**Priority:** P2  
**Module:** Authentication  
**Reported By:** QA Team  
**Reported Date:** Feb 5, 2026  
**Environment:** Chrome 120, Windows 11  

**Steps to Reproduce:**
1. Navigate to https://opensource-demo.orangehrmlive.com/
2. Enter username: "Admin"
3. Enter password: "admin123   " (with trailing spaces)
4. Click "Login" button

**Expected Result:**  
System should trim spaces and authenticate user successfully OR reject password with spaces

**Actual Result:**  
Login fails with "Invalid credentials" error, even though password is correct with trailing spaces

**Impact:**  
Users may face login issues if they accidentally add spaces

**Recommended Fix:**  
Implement automatic space trimming for password field or show clear validation message

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-001-password-spaces.png` (placeholder - would contain actual screenshot)

---

### BUG-002: Employee Search - Case Sensitivity Issue
**Severity:** Medium  
**Priority:** P2  
**Module:** PIM  
**Reported By:** QA Team  
**Reported Date:** Feb 5, 2026  
**Environment:** Firefox 120, macOS  

**Steps to Reproduce:**
1. Login to application
2. Navigate to PIM > Employee List
3. Enter employee name in lowercase (e.g., "john doe")
4. Click "Search" button

**Expected Result:**  
System should perform case-insensitive search and return matching employees

**Actual Result:**  
Search may not return expected results if case doesn't match exactly

**Impact:**  
Users may not find employees if they don't use correct case

**Recommended Fix:**  
Implement case-insensitive search functionality

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-002-case-sensitive-search.png` (placeholder)

---

### BUG-003: Leave Module - Date Picker Allows Past Dates
**Severity:** Low  
**Priority:** P3  
**Module:** Leave  
**Reported By:** QA Team  
**Reported Date:** Feb 5, 2026  
**Environment:** Chrome 120, Ubuntu 22.04  

**Steps to Reproduce:**
1. Login to application
2. Navigate to Leave > Apply
3. Click on "From Date" picker
4. Select a past date (e.g., last month)
5. Try to submit leave application

**Expected Result:**  
System should prevent selection of past dates or show validation error

**Actual Result:**  
System allows selection of past dates, potentially allowing invalid leave applications

**Impact:**  
Users might submit leave for past dates by mistake

**Recommended Fix:**  
Disable past dates in date picker or add validation

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-003-past-dates-allowed.png` (placeholder)

---

### BUG-004: Admin Module - User Role Dropdown Empty on Edit
**Severity:** High  
**Priority:** P1  
**Module:** Admin - User Management  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Edge 120, Windows 10  

**Steps to Reproduce:**
1. Login as Admin
2. Navigate to Admin > User Management > Users
3. Click edit icon for any user
4. Observe the User Role dropdown

**Expected Result:**  
User Role dropdown should show current role selected

**Actual Result:**  
Dropdown may appear empty or not show current selection

**Impact:**  
Admin cannot properly edit user roles, potentially breaking user management

**Recommended Fix:**  
Ensure dropdown is populated and current value is selected on page load

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-004-empty-role-dropdown.png` (placeholder)

---

### BUG-005: Dashboard - Chart Data Not Refreshing
**Severity:** Medium  
**Priority:** P2  
**Module:** Dashboard  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Safari 17, macOS Sonoma  

**Steps to Reproduce:**
1. Login to application
2. View dashboard with charts
3. Make changes that should affect chart data (e.g., add leave request)
4. Return to dashboard

**Expected Result:**  
Charts should reflect updated data

**Actual Result:**  
Charts show stale data until page is manually refreshed

**Impact:**  
Users see outdated information, leading to confusion

**Recommended Fix:**  
Implement automatic data refresh or add manual refresh button

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-005-stale-chart-data.png` (placeholder)

---

### BUG-006: PIM - Employee Photo Upload Size Limit Not Enforced
**Severity:** Low  
**Priority:** P3  
**Module:** PIM  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Chrome 120, Windows 11  

**Steps to Reproduce:**
1. Login to application
2. Navigate to PIM > Add Employee
3. Try to upload photo larger than 1MB
4. Click "Save" button

**Expected Result:**  
System should reject file with clear error message about size limit

**Actual Result:**  
System may accept file and fail silently, or show generic error

**Impact:**  
Users may experience upload failures without clear feedback

**Recommended Fix:**  
Add client-side validation for file size and show clear error message

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-006-photo-size-limit.png` (placeholder)

---

### BUG-007: Timesheet - Decimal Hours Input Validation Issue
**Severity:** Medium  
**Priority:** P2  
**Module:** Time  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Firefox 120, Windows 11  

**Steps to Reproduce:**
1. Login to application
2. Navigate to Time > Timesheets > My Timesheets
3. Create new timesheet
4. Enter hours as "8.5" in any day field
5. Try to save

**Expected Result:**  
System should accept decimal hours (e.g., 8.5 for 8 hours 30 minutes)

**Actual Result:**  
System may reject decimal input or truncate to whole number

**Impact:**  
Users cannot accurately record time worked

**Recommended Fix:**  
Update input validation to accept decimal values with 1-2 decimal places

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-007-decimal-hours.png` (placeholder)

---

### BUG-008: Recruitment - Duplicate Candidate Email Not Prevented
**Severity:** Medium  
**Priority:** P2  
**Module:** Recruitment  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Chrome 120, macOS  

**Steps to Reproduce:**
1. Login to application
2. Navigate to Recruitment > Candidates
3. Add candidate with email "test@example.com"
4. Try to add another candidate with same email

**Expected Result:**  
System should prevent duplicate email addresses or show warning

**Actual Result:**  
System allows multiple candidates with same email address

**Impact:**  
Data integrity issue, difficult to track unique candidates

**Recommended Fix:**  
Add email uniqueness validation or show warning message

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-008-duplicate-email.png` (placeholder)

---

### BUG-009: Leave Module - Balance Calculation Incorrect After Approval
**Severity:** High  
**Priority:** P1  
**Module:** Leave  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Edge 120, Windows 11  

**Steps to Reproduce:**
1. Login with employee account
2. Check leave balance (e.g., 15 days)
3. Apply for 2 days leave
4. Get leave approved by manager
5. Check leave balance again

**Expected Result:**  
Leave balance should be reduced by 2 days (now 13 days)

**Actual Result:**  
Leave balance sometimes doesn't update immediately or calculates incorrectly

**Impact:**  
Critical issue affecting leave management accuracy

**Recommended Fix:**  
Fix leave balance calculation logic and ensure real-time updates

**Status:** New  
**Assigned To:** Development Team

**Screenshots:**  
See: `/screenshots/bug-009-balance-calculation.png` (placeholder)

---

### BUG-010: UI - Navigation Menu Overlaps Content on Mobile View
**Severity:** Low  
**Priority:** P3  
**Module:** UI/UX  
**Reported By:** QA Team  
**Reported Date:** Feb 6, 2026  
**Environment:** Chrome Mobile, Android 13  

**Steps to Reproduce:**
1. Open application on mobile device
2. Login successfully
3. Open navigation menu
4. Observe page layout

**Expected Result:**  
Navigation menu should slide over or push content aside cleanly

**Actual Result:**  
Menu overlaps main content, making some elements unclickable

**Impact:**  
Poor user experience on mobile devices

**Recommended Fix:**  
Improve responsive design for mobile navigation

**Status:** New  
**Assigned To:** UI/UX Team

**Screenshots:**  
See: `/screenshots/bug-010-mobile-menu-overlap.png` (placeholder)

---

## Bug Statistics

### By Severity
- **Critical:** 0
- **High:** 2
- **Medium:** 6
- **Low:** 2

### By Priority
- **P0:** 0
- **P1:** 2
- **P2:** 6
- **P3:** 2

### By Module
- **Authentication:** 1
- **Admin:** 1
- **PIM:** 2
- **Leave:** 2
- **Time:** 1
- **Recruitment:** 1
- **Dashboard:** 1
- **UI/UX:** 1

### By Status
- **New:** 10
- **Assigned:** 0
- **In Progress:** 0
- **Fixed:** 0
- **Closed:** 0

---

## Bug Template for New Issues

```markdown
### BUG-XXX: [Brief Title]
**Severity:** [Critical/High/Medium/Low]
**Priority:** [P0/P1/P2/P3]
**Module:** [Module Name]
**Reported By:** [Tester Name]
**Reported Date:** [Date]
**Environment:** [Browser, OS]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happened]

**Impact:**
[Impact description]

**Recommended Fix:**
[Suggested solution]

**Status:** [Status]
**Assigned To:** [Developer]

**Screenshots:**
[Screenshot references]
```

---

## Notes for Bug Reporting

1. **Always include screenshots or video recordings** for visual bugs
2. **Test on multiple browsers** before reporting as browser-specific
3. **Include console errors** from browser developer tools if applicable
4. **Verify bug is reproducible** before reporting
5. **Check for duplicates** in existing bug list
6. **Provide clear, concise steps** to reproduce
7. **Include test data used** in reproduction steps
8. **Note workarounds** if any exist
9. **Update bug status** as it progresses through lifecycle
10. **Link related test cases** for traceability

---

## Screenshot Directory Structure

```
screenshots/
├── bug-001-password-spaces.png
├── bug-002-case-sensitive-search.png
├── bug-003-past-dates-allowed.png
├── bug-004-empty-role-dropdown.png
├── bug-005-stale-chart-data.png
├── bug-006-photo-size-limit.png
├── bug-007-decimal-hours.png
├── bug-008-duplicate-email.png
├── bug-009-balance-calculation.png
└── bug-010-mobile-menu-overlap.png
```

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | QA Team | Initial version with 10 sample bugs |

---

## Additional Resources

- Link to bug tracking system (GitHub Issues)
- Link to test cases document
- Link to test execution logs
- Link to release notes
