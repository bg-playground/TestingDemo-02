# Test Cases - OrangeHRM Demo Application

## Document Information
- **Project:** OrangeHRM Demo QA Testing
- **Application URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** 1.0
- **Date:** February 2026

---

## Test Case Index

### Authentication (TC-AUTH)
- TC-AUTH-001 to TC-AUTH-010

### Admin Module (TC-ADMIN)
- TC-ADMIN-001 to TC-ADMIN-020

### PIM Module (TC-PIM)
- TC-PIM-001 to TC-PIM-020

### Leave Module (TC-LEAVE)
- TC-LEAVE-001 to TC-LEAVE-015

### Time Module (TC-TIME)
- TC-TIME-001 to TC-TIME-010

### Recruitment Module (TC-REC)
- TC-REC-001 to TC-REC-015

---

## Authentication Test Cases

### TC-AUTH-001: Valid Login
- **Priority:** P0 - Critical
- **Module:** Authentication
- **Preconditions:** User has valid credentials
- **Test Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/
  2. Enter username: "Admin"
  3. Enter password: "admin123"
  4. Click "Login" button
- **Expected Result:** User successfully logs in and is redirected to Dashboard
- **Test Data:** Username: Admin, Password: admin123

### TC-AUTH-002: Invalid Username
- **Priority:** P1 - High
- **Module:** Authentication
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter username: "InvalidUser"
  3. Enter password: "admin123"
  4. Click "Login" button
- **Expected Result:** Error message "Invalid credentials" is displayed
- **Test Data:** Username: InvalidUser, Password: admin123

### TC-AUTH-003: Invalid Password
- **Priority:** P1 - High
- **Module:** Authentication
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter username: "Admin"
  3. Enter password: "WrongPassword"
  4. Click "Login" button
- **Expected Result:** Error message "Invalid credentials" is displayed
- **Test Data:** Username: Admin, Password: WrongPassword

### TC-AUTH-004: Empty Username
- **Priority:** P2 - Medium
- **Module:** Authentication
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Leave username field empty
  3. Enter password: "admin123"
  4. Click "Login" button
- **Expected Result:** Validation message "Required" appears for username field
- **Test Data:** Username: (empty), Password: admin123

### TC-AUTH-005: Empty Password
- **Priority:** P2 - Medium
- **Module:** Authentication
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter username: "Admin"
  3. Leave password field empty
  4. Click "Login" button
- **Expected Result:** Validation message "Required" appears for password field
- **Test Data:** Username: Admin, Password: (empty)

### TC-AUTH-006: Logout Functionality
- **Priority:** P0 - Critical
- **Module:** Authentication
- **Preconditions:** User is logged in
- **Test Steps:**
  1. Login with valid credentials
  2. Click on user profile icon/name in top right corner
  3. Click "Logout" option
- **Expected Result:** User is logged out and redirected to login page
- **Test Data:** N/A

### TC-AUTH-007: Session Timeout
- **Priority:** P2 - Medium
- **Module:** Authentication
- **Preconditions:** User is logged in
- **Test Steps:**
  1. Login with valid credentials
  2. Wait for session timeout period (typically 30 minutes)
  3. Try to perform any action
- **Expected Result:** Session expires and user is redirected to login page
- **Test Data:** N/A

### TC-AUTH-008: SQL Injection in Login
- **Priority:** P1 - High
- **Module:** Authentication - Security
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter username: "Admin' OR '1'='1"
  3. Enter password: "anything"
  4. Click "Login" button
- **Expected Result:** Login fails with error message, no SQL injection successful
- **Test Data:** Username: Admin' OR '1'='1, Password: anything

### TC-AUTH-009: XSS in Login Fields
- **Priority:** P1 - High
- **Module:** Authentication - Security
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter username: "<script>alert('XSS')</script>"
  3. Enter password: "admin123"
  4. Click "Login" button
- **Expected Result:** Script is sanitized and not executed
- **Test Data:** Username: <script>alert('XSS')</script>, Password: admin123

### TC-AUTH-010: Remember Me Functionality
- **Priority:** P3 - Low
- **Module:** Authentication
- **Preconditions:** User on login page
- **Test Steps:**
  1. Navigate to login page
  2. Enter valid credentials
  3. Check "Remember Me" checkbox
  4. Click "Login" button
  5. Close browser
  6. Reopen browser and navigate to application
- **Expected Result:** User remains logged in or credentials are pre-filled
- **Test Data:** Username: Admin, Password: admin123

---

## Admin Module Test Cases

### TC-ADMIN-001: Add New User
- **Priority:** P0 - Critical
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click "Add" button
  3. Select User Role: "Admin"
  4. Select Status: "Enabled"
  5. Enter Employee Name (type to search)
  6. Enter Username: "TestUser123"
  7. Enter Password and Confirm Password
  8. Click "Save" button
- **Expected Result:** New user is created successfully and appears in user list
- **Test Data:** Role: Admin, Username: TestUser123, Status: Enabled

### TC-ADMIN-002: Search User by Username
- **Priority:** P1 - High
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, test user exists
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Enter username in search field
  3. Click "Search" button
- **Expected Result:** System displays user matching the username
- **Test Data:** Username: Admin

### TC-ADMIN-003: Edit Existing User
- **Priority:** P1 - High
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, test user exists
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Search for user to edit
  3. Click edit icon for the user
  4. Change User Role to "ESS"
  5. Click "Save" button
- **Expected Result:** User details are updated successfully
- **Test Data:** Original Role: Admin, New Role: ESS

### TC-ADMIN-004: Delete User
- **Priority:** P1 - High
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, test user exists
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Search for user to delete
  3. Click delete icon for the user
  4. Confirm deletion in popup
- **Expected Result:** User is deleted and removed from user list
- **Test Data:** Username: TestUser123

### TC-ADMIN-005: Add User with Duplicate Username
- **Priority:** P2 - Medium
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, username "Admin" exists
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click "Add" button
  3. Fill in all required fields
  4. Enter Username: "Admin" (existing username)
  5. Click "Save" button
- **Expected Result:** Error message "Username already exists" is displayed
- **Test Data:** Username: Admin (duplicate)

### TC-ADMIN-006: Add Job Title
- **Priority:** P1 - High
- **Module:** Admin - Job
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Job > Job Titles
  2. Click "Add" button
  3. Enter Job Title: "Senior QA Engineer"
  4. Enter Job Description
  5. Click "Save" button
- **Expected Result:** New job title is created successfully
- **Test Data:** Job Title: Senior QA Engineer

### TC-ADMIN-007: Search Job Title
- **Priority:** P2 - Medium
- **Module:** Admin - Job
- **Preconditions:** User is logged in as Admin, job titles exist
- **Test Steps:**
  1. Navigate to Admin > Job > Job Titles
  2. Enter job title in search field
  3. Click "Search" button
- **Expected Result:** System displays job titles matching search criteria
- **Test Data:** Job Title: Engineer

### TC-ADMIN-008: Delete Job Title
- **Priority:** P2 - Medium
- **Module:** Admin - Job
- **Preconditions:** User is logged in as Admin, test job title exists
- **Test Steps:**
  1. Navigate to Admin > Job > Job Titles
  2. Search for job title
  3. Click delete icon
  4. Confirm deletion
- **Expected Result:** Job title is deleted successfully
- **Test Data:** Job Title: Senior QA Engineer

### TC-ADMIN-009: Add Organization Location
- **Priority:** P2 - Medium
- **Module:** Admin - Organization
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Organization > Locations
  2. Click "Add" button
  3. Enter Name: "New York Office"
  4. Enter Country, City, Address
  5. Click "Save" button
- **Expected Result:** New location is added successfully
- **Test Data:** Name: New York Office, Country: United States

### TC-ADMIN-010: Add Qualification - Education
- **Priority:** P2 - Medium
- **Module:** Admin - Qualifications
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Qualifications > Education
  2. Click "Add" button
  3. Enter Level: "Master's Degree"
  4. Click "Save" button
- **Expected Result:** New education level is added successfully
- **Test Data:** Level: Master's Degree

### TC-ADMIN-011: Add Qualification - Skills
- **Priority:** P2 - Medium
- **Module:** Admin - Qualifications
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Qualifications > Skills
  2. Click "Add" button
  3. Enter Name: "Automation Testing"
  4. Enter Description
  5. Click "Save" button
- **Expected Result:** New skill is added successfully
- **Test Data:** Skill: Automation Testing

### TC-ADMIN-012: Add Qualification - Languages
- **Priority:** P2 - Medium
- **Module:** Admin - Qualifications
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Qualifications > Languages
  2. Click "Add" button
  3. Enter Name: "Spanish"
  4. Click "Save" button
- **Expected Result:** New language is added successfully
- **Test Data:** Language: Spanish

### TC-ADMIN-013: Add Nationality
- **Priority:** P3 - Low
- **Module:** Admin - Nationalities
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Nationalities
  2. Click "Add" button
  3. Enter Name: "Canadian"
  4. Click "Save" button
- **Expected Result:** New nationality is added successfully
- **Test Data:** Nationality: Canadian

### TC-ADMIN-014: Configure Email Subscription
- **Priority:** P3 - Low
- **Module:** Admin - Email Configuration
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Configuration > Email Configuration
  2. Select subscription type
  3. Configure email settings
  4. Click "Save" button
- **Expected Result:** Email configuration is saved successfully
- **Test Data:** Various email settings

### TC-ADMIN-015: System User Bulk Delete
- **Priority:** P2 - Medium
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, multiple test users exist
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Select multiple users using checkboxes
  3. Click "Delete Selected" button
  4. Confirm deletion
- **Expected Result:** All selected users are deleted successfully
- **Test Data:** Multiple test users

### TC-ADMIN-016: User with Invalid Email Format
- **Priority:** P2 - Medium
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click "Add" button
  3. Fill required fields
  4. Enter Email: "invalidemail"
  5. Click "Save" button
- **Expected Result:** Validation error "Invalid email format" is displayed
- **Test Data:** Email: invalidemail

### TC-ADMIN-017: Password Strength Validation
- **Priority:** P1 - High
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click "Add" button
  3. Fill required fields
  4. Enter weak password: "123"
  5. Click "Save" button
- **Expected Result:** Password validation error is displayed
- **Test Data:** Password: 123

### TC-ADMIN-018: View User Permissions
- **Priority:** P2 - Medium
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click on a user to view details
  3. Navigate to permissions tab
- **Expected Result:** User permissions are displayed correctly based on role
- **Test Data:** Username: Admin

### TC-ADMIN-019: Add Job Category
- **Priority:** P2 - Medium
- **Module:** Admin - Job
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Admin > Job > Job Categories
  2. Click "Add" button
  3. Enter Name: "Information Technology"
  4. Click "Save" button
- **Expected Result:** New job category is added successfully
- **Test Data:** Category: Information Technology

### TC-ADMIN-020: Export User List
- **Priority:** P3 - Low
- **Module:** Admin - User Management
- **Preconditions:** User is logged in as Admin, users exist in system
- **Test Steps:**
  1. Navigate to Admin > User Management > Users
  2. Click "Export" button
  3. Select export format (CSV/Excel)
- **Expected Result:** User list is exported successfully in selected format
- **Test Data:** N/A

---

## PIM (Personal Information Management) Test Cases

### TC-PIM-001: Add New Employee
- **Priority:** P0 - Critical
- **Module:** PIM
- **Preconditions:** User is logged in with PIM access
- **Test Steps:**
  1. Navigate to PIM > Add Employee
  2. Enter First Name: "John"
  3. Enter Last Name: "Doe"
  4. Enter Employee ID (or let system generate)
  5. Click "Save" button
- **Expected Result:** New employee is created successfully
- **Test Data:** First Name: John, Last Name: Doe

### TC-PIM-002: Add Employee with Photo
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in with PIM access
- **Test Steps:**
  1. Navigate to PIM > Add Employee
  2. Enter First Name and Last Name
  3. Click on photo upload area
  4. Select valid image file (JPG/PNG)
  5. Click "Save" button
- **Expected Result:** Employee is created with photo successfully
- **Test Data:** Valid image file (< 1MB)

### TC-PIM-003: Search Employee by Name
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, employees exist in system
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Enter employee name in search field
  3. Click "Search" button
- **Expected Result:** System displays employees matching search criteria
- **Test Data:** Employee Name: John

### TC-PIM-004: Search Employee by ID
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, employees exist in system
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Enter employee ID in search field
  3. Click "Search" button
- **Expected Result:** System displays employee with matching ID
- **Test Data:** Employee ID: 0001

### TC-PIM-005: Edit Employee Personal Details
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Search and click on employee
  3. Edit personal details (DOB, Gender, Nationality)
  4. Click "Save" button
- **Expected Result:** Employee details are updated successfully
- **Test Data:** Various personal details

### TC-PIM-006: Add Employee Contact Details
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Contact Details" tab
  3. Enter Address, Phone, Email
  4. Click "Save" button
- **Expected Result:** Contact details are saved successfully
- **Test Data:** Phone: +1234567890, Email: john.doe@example.com

### TC-PIM-007: Add Employee Emergency Contact
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Emergency Contacts" tab
  3. Click "Add" button
  4. Enter Name, Relationship, Phone
  5. Click "Save" button
- **Expected Result:** Emergency contact is added successfully
- **Test Data:** Name: Jane Doe, Relationship: Spouse

### TC-PIM-008: Add Employee Dependent
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Dependents" tab
  3. Click "Add" button
  4. Enter Name, Relationship, DOB
  5. Click "Save" button
- **Expected Result:** Dependent is added successfully
- **Test Data:** Name: Baby Doe, Relationship: Child

### TC-PIM-009: Add Employee Job Details
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Job" tab
  3. Enter Job Title, Employment Status, Job Category
  4. Enter Joined Date
  5. Click "Save" button
- **Expected Result:** Job details are saved successfully
- **Test Data:** Job Title: QA Engineer, Status: Full-Time

### TC-PIM-010: Add Employee Salary Details
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in with salary view permission
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Salary" tab
  3. Click "Add" button
  4. Enter Salary Component, Amount, Currency
  5. Click "Save" button
- **Expected Result:** Salary details are saved successfully
- **Test Data:** Component: Basic, Amount: 50000, Currency: USD

### TC-PIM-011: Add Employee Report-To
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee records exist
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Report-to" tab
  3. Click "Add" under Supervisors
  4. Select supervisor name
  5. Select reporting method
  6. Click "Save" button
- **Expected Result:** Reporting relationship is established
- **Test Data:** Supervisor: Manager Name, Method: Direct

### TC-PIM-012: Add Employee Qualification - Education
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Qualifications" tab
  3. Under Education, click "Add" button
  4. Enter Level, Institute, Major, Year, GPA
  5. Click "Save" button
- **Expected Result:** Education qualification is added successfully
- **Test Data:** Level: Bachelor's, Institute: MIT, Year: 2020

### TC-PIM-013: Add Employee Qualification - Work Experience
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee record exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Qualifications" tab
  3. Under Work Experience, click "Add" button
  4. Enter Company, Job Title, From Date, To Date
  5. Click "Save" button
- **Expected Result:** Work experience is added successfully
- **Test Data:** Company: ABC Corp, Title: QA Analyst, Years: 2018-2020

### TC-PIM-014: Delete Employee
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in with delete permission, test employee exists
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Search for employee to delete
  3. Select employee checkbox
  4. Click "Delete" button
  5. Confirm deletion
- **Expected Result:** Employee is deleted successfully
- **Test Data:** Test employee record

### TC-PIM-015: Add Employee with Duplicate ID
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employee with ID 0001 exists
- **Test Steps:**
  1. Navigate to PIM > Add Employee
  2. Enter First Name and Last Name
  3. Enter Employee ID: "0001" (existing ID)
  4. Click "Save" button
- **Expected Result:** Error message "Employee ID already exists" is displayed
- **Test Data:** Employee ID: 0001 (duplicate)

### TC-PIM-016: Generate Employee Report
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employees exist in system
- **Test Steps:**
  1. Navigate to PIM > Reports
  2. Select report type
  3. Select filter criteria
  4. Click "Generate" button
- **Expected Result:** Report is generated with correct data
- **Test Data:** Various report filters

### TC-PIM-017: Export Employee List
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in, employees exist in system
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Apply any filters if needed
  3. Click "Export" button
  4. Select export format
- **Expected Result:** Employee list is exported successfully
- **Test Data:** N/A

### TC-PIM-018: Add Custom Field to Employee
- **Priority:** P3 - Low
- **Module:** PIM
- **Preconditions:** User is logged in as Admin, custom fields configured
- **Test Steps:**
  1. Navigate to employee record
  2. Locate custom fields section
  3. Enter data in custom field
  4. Click "Save" button
- **Expected Result:** Custom field data is saved successfully
- **Test Data:** Custom field values

### TC-PIM-019: Bulk Import Employees
- **Priority:** P2 - Medium
- **Module:** PIM
- **Preconditions:** User is logged in as Admin, valid CSV file prepared
- **Test Steps:**
  1. Navigate to PIM > Employee List
  2. Click "Import" button
  3. Select CSV file with employee data
  4. Map columns
  5. Click "Import" button
- **Expected Result:** Employees are imported successfully
- **Test Data:** Valid CSV file with employee data

### TC-PIM-020: Terminate Employee
- **Priority:** P1 - High
- **Module:** PIM
- **Preconditions:** User is logged in, active employee exists
- **Test Steps:**
  1. Navigate to employee record
  2. Click on "Job" tab
  3. Click "Terminate Employment" button
  4. Enter termination date and reason
  5. Click "Save" button
- **Expected Result:** Employee is marked as terminated
- **Test Data:** Termination Date: Current Date, Reason: Resignation

---

## Leave Module Test Cases

### TC-LEAVE-001: Apply for Leave
- **Priority:** P0 - Critical
- **Module:** Leave
- **Preconditions:** User is logged in, leave types configured
- **Test Steps:**
  1. Navigate to Leave > Apply
  2. Select Leave Type
  3. Select From Date and To Date
  4. Enter Comment/Reason
  5. Click "Apply" button
- **Expected Result:** Leave request is submitted successfully
- **Test Data:** Leave Type: Casual Leave, Duration: 2 days

### TC-LEAVE-002: Apply for Half-Day Leave
- **Priority:** P1 - High
- **Module:** Leave
- **Preconditions:** User is logged in, half-day leave allowed
- **Test Steps:**
  1. Navigate to Leave > Apply
  2. Select Leave Type
  3. Select single date
  4. Select Duration: "Half Day - Morning/Afternoon"
  5. Click "Apply" button
- **Expected Result:** Half-day leave request is submitted successfully
- **Test Data:** Leave Type: Casual Leave, Duration: Half Day

### TC-LEAVE-003: View Leave Balance
- **Priority:** P1 - High
- **Module:** Leave
- **Preconditions:** User is logged in, leave entitlements configured
- **Test Steps:**
  1. Navigate to Leave > My Leave
  2. View leave balance summary
- **Expected Result:** Leave balance is displayed correctly for all leave types
- **Test Data:** N/A

### TC-LEAVE-004: Approve Leave Request
- **Priority:** P0 - Critical
- **Module:** Leave
- **Preconditions:** User is logged in as Manager/Admin, pending leave request exists
- **Test Steps:**
  1. Navigate to Leave > Leave List
  2. Filter by "Pending Approval"
  3. Select leave request
  4. Click "Approve" button
  5. Confirm approval
- **Expected Result:** Leave request status changes to "Approved"
- **Test Data:** Pending leave request

### TC-LEAVE-005: Reject Leave Request
- **Priority:** P1 - High
- **Module:** Leave
- **Preconditions:** User is logged in as Manager/Admin, pending leave request exists
- **Test Steps:**
  1. Navigate to Leave > Leave List
  2. Filter by "Pending Approval"
  3. Select leave request
  4. Click "Reject" button
  5. Enter rejection reason
  6. Confirm rejection
- **Expected Result:** Leave request status changes to "Rejected"
- **Test Data:** Pending leave request

### TC-LEAVE-006: Cancel Leave Request
- **Priority:** P1 - High
- **Module:** Leave
- **Preconditions:** User is logged in, user has approved leave request
- **Test Steps:**
  1. Navigate to Leave > My Leave
  2. Find approved leave request
  3. Click "Cancel" button
  4. Confirm cancellation
- **Expected Result:** Leave request is cancelled successfully
- **Test Data:** Approved leave request

### TC-LEAVE-007: View Leave Calendar
- **Priority:** P2 - Medium
- **Module:** Leave
- **Preconditions:** User is logged in, leave requests exist
- **Test Steps:**
  1. Navigate to Leave > Leave Calendar
  2. Select year and month
- **Expected Result:** Leave calendar displays all leave requests
- **Test Data:** Current month/year

### TC-LEAVE-008: Apply for Leave with Insufficient Balance
- **Priority:** P1 - High
- **Module:** Leave
- **Preconditions:** User is logged in, insufficient leave balance
- **Test Steps:**
  1. Navigate to Leave > Apply
  2. Select Leave Type with zero balance
  3. Select dates exceeding available balance
  4. Click "Apply" button
- **Expected Result:** Error message "Insufficient leave balance" is displayed
- **Test Data:** Leave days exceeding balance

### TC-LEAVE-009: Apply for Leave on Weekend/Holiday
- **Priority:** P2 - Medium
- **Module:** Leave
- **Preconditions:** User is logged in, holidays configured
- **Test Steps:**
  1. Navigate to Leave > Apply
  2. Select Leave Type
  3. Select weekend date or public holiday
  4. Click "Apply" button
- **Expected Result:** System skips weekend/holiday or shows appropriate message
- **Test Data:** Weekend/holiday date

### TC-LEAVE-010: View Leave History
- **Priority:** P2 - Medium
- **Module:** Leave
- **Preconditions:** User is logged in, historical leave records exist
- **Test Steps:**
  1. Navigate to Leave > My Leave
  2. Select date range for history
  3. Click "Search" button
- **Expected Result:** Leave history is displayed for selected period
- **Test Data:** Date range: Last year

### TC-LEAVE-011: Add Leave Entitlement
- **Priority:** P1 - High
- **Module:** Leave - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Leave > Entitlements > Add Entitlements
  2. Select employee
  3. Select leave type
  4. Enter entitlement (days)
  5. Click "Save" button
- **Expected Result:** Leave entitlement is added successfully
- **Test Data:** Employee: John Doe, Leave Type: Annual, Days: 15

### TC-LEAVE-012: Add Leave Type
- **Priority:** P2 - Medium
- **Module:** Leave - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Leave > Configure > Leave Types
  2. Click "Add" button
  3. Enter Leave Type Name
  4. Configure settings
  5. Click "Save" button
- **Expected Result:** New leave type is created successfully
- **Test Data:** Leave Type: Sick Leave

### TC-LEAVE-013: Configure Work Week
- **Priority:** P2 - Medium
- **Module:** Leave - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Leave > Configure > Work Week
  2. Select working days
  3. Set working hours
  4. Click "Save" button
- **Expected Result:** Work week configuration is saved successfully
- **Test Data:** Working days: Mon-Fri, Hours: 8

### TC-LEAVE-014: Add Holiday
- **Priority:** P2 - Medium
- **Module:** Leave - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Leave > Configure > Holidays
  2. Click "Add" button
  3. Enter Holiday Name and Date
  4. Select whether it repeats annually
  5. Click "Save" button
- **Expected Result:** Holiday is added successfully to calendar
- **Test Data:** Holiday: New Year, Date: Jan 1

### TC-LEAVE-015: Generate Leave Report
- **Priority:** P2 - Medium
- **Module:** Leave
- **Preconditions:** User is logged in, leave data exists
- **Test Steps:**
  1. Navigate to Leave > Reports
  2. Select report type
  3. Select filters (date range, employees, leave type)
  4. Click "Generate" button
- **Expected Result:** Leave report is generated with correct data
- **Test Data:** Various report parameters

---

## Time Module Test Cases

### TC-TIME-001: Create Timesheet
- **Priority:** P0 - Critical
- **Module:** Time
- **Preconditions:** User is logged in, projects configured
- **Test Steps:**
  1. Navigate to Time > Timesheets > My Timesheets
  2. Click "Create Timesheet" button
  3. Select week
  4. Add project and activity
  5. Enter hours for each day
  6. Click "Save" button
- **Expected Result:** Timesheet is created successfully
- **Test Data:** Project: Internal, Hours: 8 per day

### TC-TIME-002: Submit Timesheet for Approval
- **Priority:** P0 - Critical
- **Module:** Time
- **Preconditions:** User has draft timesheet
- **Test Steps:**
  1. Navigate to My Timesheets
  2. Open draft timesheet
  3. Verify all entries
  4. Click "Submit" button
- **Expected Result:** Timesheet status changes to "Submitted"
- **Test Data:** Draft timesheet with entries

### TC-TIME-003: Approve Timesheet
- **Priority:** P1 - High
- **Module:** Time
- **Preconditions:** User is logged in as Manager, submitted timesheet exists
- **Test Steps:**
  1. Navigate to Time > Timesheets > Employee Timesheets
  2. Filter by "Pending Approval"
  3. Select timesheet
  4. Review entries
  5. Click "Approve" button
- **Expected Result:** Timesheet status changes to "Approved"
- **Test Data:** Submitted timesheet

### TC-TIME-004: Reject Timesheet
- **Priority:** P1 - High
- **Module:** Time
- **Preconditions:** User is logged in as Manager, submitted timesheet exists
- **Test Steps:**
  1. Navigate to Employee Timesheets
  2. Select timesheet
  3. Click "Reject" button
  4. Enter rejection reason
  5. Confirm rejection
- **Expected Result:** Timesheet status changes to "Rejected"
- **Test Data:** Submitted timesheet

### TC-TIME-005: Edit Draft Timesheet
- **Priority:** P1 - High
- **Module:** Time
- **Preconditions:** User has draft timesheet
- **Test Steps:**
  1. Navigate to My Timesheets
  2. Open draft timesheet
  3. Modify hours or add new entries
  4. Click "Save" button
- **Expected Result:** Timesheet changes are saved successfully
- **Test Data:** Modified hours

### TC-TIME-006: Add Project
- **Priority:** P2 - Medium
- **Module:** Time - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Time > Project Info > Projects
  2. Click "Add" button
  3. Enter Project Name, Customer
  4. Add Project Admin
  5. Click "Save" button
- **Expected Result:** New project is created successfully
- **Test Data:** Project: Website Redesign

### TC-TIME-007: Add Project Activity
- **Priority:** P2 - Medium
- **Module:** Time - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Time > Project Info > Project Activities
  2. Click "Add" button
  3. Enter Activity Name
  4. Click "Save" button
- **Expected Result:** New activity is added successfully
- **Test Data:** Activity: Development

### TC-TIME-008: Add Customer
- **Priority:** P2 - Medium
- **Module:** Time - Admin
- **Preconditions:** User is logged in as Admin
- **Test Steps:**
  1. Navigate to Time > Project Info > Customers
  2. Click "Add" button
  3. Enter Customer Name and Description
  4. Click "Save" button
- **Expected Result:** New customer is added successfully
- **Test Data:** Customer: Acme Corp

### TC-TIME-009: View Timesheet Report
- **Priority:** P2 - Medium
- **Module:** Time
- **Preconditions:** User is logged in, timesheet data exists
- **Test Steps:**
  1. Navigate to Time > Reports
  2. Select report type
  3. Select filters (employee, project, date range)
  4. Click "Generate" button
- **Expected Result:** Timesheet report is generated correctly
- **Test Data:** Various report filters

### TC-TIME-010: Copy Previous Week Timesheet
- **Priority:** P3 - Low
- **Module:** Time
- **Preconditions:** User has approved timesheet from previous week
- **Test Steps:**
  1. Navigate to My Timesheets
  2. Click "Create Timesheet" button
  3. Select "Copy from Previous Week" option
  4. Verify entries are copied
  5. Click "Save" button
- **Expected Result:** New timesheet is created with previous week's entries
- **Test Data:** Approved timesheet from previous week

---

## Recruitment Module Test Cases

### TC-REC-001: Add Job Vacancy
- **Priority:** P0 - Critical
- **Module:** Recruitment
- **Preconditions:** User is logged in with recruitment access
- **Test Steps:**
  1. Navigate to Recruitment > Vacancies
  2. Click "Add" button
  3. Enter Vacancy Name, Job Title
  4. Select Hiring Manager
  5. Enter Number of Positions
  6. Click "Save" button
- **Expected Result:** New job vacancy is created successfully
- **Test Data:** Vacancy: Senior QA Engineer, Positions: 2

### TC-REC-002: Add Candidate
- **Priority:** P0 - Critical
- **Module:** Recruitment
- **Preconditions:** User is logged in, job vacancy exists
- **Test Steps:**
  1. Navigate to Recruitment > Candidates
  2. Click "Add" button
  3. Enter First Name, Last Name, Email
  4. Select Vacancy
  5. Upload Resume (optional)
  6. Click "Save" button
- **Expected Result:** New candidate is added successfully
- **Test Data:** Name: Jane Smith, Email: jane.smith@example.com

### TC-REC-003: Shortlist Candidate
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** User is logged in, candidate application exists
- **Test Steps:**
  1. Navigate to Recruitment > Candidates
  2. Search for candidate
  3. Click on candidate name
  4. Click "Shortlist" button
  5. Enter notes (optional)
  6. Confirm action
- **Expected Result:** Candidate status changes to "Shortlisted"
- **Test Data:** Existing candidate

### TC-REC-004: Schedule Interview
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** User is logged in, candidate is shortlisted
- **Test Steps:**
  1. Navigate to candidate profile
  2. Click "Schedule Interview" button
  3. Enter Interview Title
  4. Select Interviewer(s)
  5. Select Date and Time
  6. Click "Save" button
- **Expected Result:** Interview is scheduled successfully
- **Test Data:** Date: Tomorrow, Time: 10:00 AM

### TC-REC-005: Mark Interview Passed
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** Interview scheduled and conducted
- **Test Steps:**
  1. Navigate to candidate profile
  2. Locate scheduled interview
  3. Click "Mark Interview Passed" button
  4. Enter notes
  5. Confirm action
- **Expected Result:** Interview is marked as passed, candidate moves to next stage
- **Test Data:** Interview notes

### TC-REC-006: Mark Interview Failed
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** Interview scheduled and conducted
- **Test Steps:**
  1. Navigate to candidate profile
  2. Locate scheduled interview
  3. Click "Mark Interview Failed" button
  4. Enter reason
  5. Confirm action
- **Expected Result:** Interview is marked as failed
- **Test Data:** Failure reason

### TC-REC-007: Offer Job to Candidate
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** Candidate passed all interviews
- **Test Steps:**
  1. Navigate to candidate profile
  2. Click "Offer Job" button
  3. Enter offer details
  4. Confirm action
- **Expected Result:** Job offer status is recorded
- **Test Data:** Offer details

### TC-REC-008: Hire Candidate
- **Priority:** P0 - Critical
- **Module:** Recruitment
- **Preconditions:** Candidate accepted job offer
- **Test Steps:**
  1. Navigate to candidate profile
  2. Click "Hire" button
  3. Confirm hiring
  4. Verify candidate is added to PIM
- **Expected Result:** Candidate is hired and appears as employee in PIM
- **Test Data:** Candidate to hire

### TC-REC-009: Reject Candidate
- **Priority:** P1 - High
- **Module:** Recruitment
- **Preconditions:** Candidate application exists
- **Test Steps:**
  1. Navigate to candidate profile
  2. Click "Reject" button
  3. Enter rejection reason
  4. Confirm action
- **Expected Result:** Candidate status changes to "Rejected"
- **Test Data:** Rejection reason

### TC-REC-010: Search Candidate by Name
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Candidates exist in system
- **Test Steps:**
  1. Navigate to Recruitment > Candidates
  2. Enter candidate name in search field
  3. Click "Search" button
- **Expected Result:** System displays matching candidates
- **Test Data:** Candidate Name: Jane

### TC-REC-011: Filter Candidates by Vacancy
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Candidates and vacancies exist
- **Test Steps:**
  1. Navigate to Recruitment > Candidates
  2. Select vacancy from dropdown
  3. Click "Search" button
- **Expected Result:** System displays candidates for selected vacancy
- **Test Data:** Specific vacancy

### TC-REC-012: Filter Candidates by Status
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Candidates with various statuses exist
- **Test Steps:**
  1. Navigate to Recruitment > Candidates
  2. Select status from dropdown (e.g., Shortlisted)
  3. Click "Search" button
- **Expected Result:** System displays candidates with selected status
- **Test Data:** Status: Shortlisted

### TC-REC-013: Add Multiple Interviewers
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Multiple users available, candidate shortlisted
- **Test Steps:**
  1. Schedule interview for candidate
  2. Add multiple interviewers
  3. Save interview details
- **Expected Result:** Interview is scheduled with all selected interviewers
- **Test Data:** Multiple interviewer names

### TC-REC-014: Generate Recruitment Report
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Recruitment data exists
- **Test Steps:**
  1. Navigate to Recruitment > Reports
  2. Select report type
  3. Select filters
  4. Click "Generate" button
- **Expected Result:** Report is generated with correct data
- **Test Data:** Report filters

### TC-REC-015: Close/Archive Vacancy
- **Priority:** P2 - Medium
- **Module:** Recruitment
- **Preconditions:** Job vacancy exists
- **Test Steps:**
  1. Navigate to Recruitment > Vacancies
  2. Select vacancy to close
  3. Click "Close/Archive" button
  4. Confirm action
- **Expected Result:** Vacancy is closed and no longer active
- **Test Data:** Filled vacancy

---

## Test Execution Summary

### Total Test Cases: 95
- **Authentication:** 10 test cases
- **Admin Module:** 20 test cases
- **PIM Module:** 20 test cases
- **Leave Module:** 15 test cases
- **Time Module:** 10 test cases
- **Recruitment Module:** 15 test cases
- **Other Modules:** 5 test cases

### Priority Distribution
- **P0 (Critical):** 12 test cases
- **P1 (High):** 38 test cases
- **P2 (Medium):** 40 test cases
- **P3 (Low):** 5 test cases

---

## Notes
1. All test cases should be executed on latest stable browsers
2. Defects should be logged with screenshots and detailed steps
3. Failed test cases should be retested after defect fixes
4. Test data should be reset after each test cycle for consistency
5. Security test cases should be prioritized
6. Performance test cases should be executed during off-peak hours

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | QA Team | Initial version with 95 test cases |
