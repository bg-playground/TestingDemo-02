/**
 * Test Data Fixtures for OrangeHRM Demo Testing
 * 
 * This file contains reusable test data for automated tests.
 * Use these fixtures to maintain consistency across test cases.
 */

// User credentials
export const users = {
  admin: {
    username: 'Admin',
    password: 'admin123',
    role: 'Admin'
  },
  ess: {
    username: 'ESS User',
    password: 'ess123',
    role: 'ESS'
  }
};

// Employee test data
export const employees = {
  valid: {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    employeeId: 'EMP001',
    email: 'john.doe@example.com',
    phone: '+1-234-567-8900',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  minimal: {
    firstName: 'Jane',
    lastName: 'Smith',
    employeeId: 'EMP002'
  },
  withSpecialChars: {
    firstName: "O'Brien",
    middleName: "Mary-Jane",
    lastName: "O'Connor-Smith",
    employeeId: 'EMP003'
  }
};

// Leave application test data
export const leaveRequests = {
  casualLeave: {
    leaveType: 'Casual Leave',
    duration: 2,
    reason: 'Personal reasons',
    fromDate: '2026-03-15',
    toDate: '2026-03-16'
  },
  sickLeave: {
    leaveType: 'Sick Leave',
    duration: 1,
    reason: 'Medical appointment',
    fromDate: '2026-03-20',
    toDate: '2026-03-20'
  },
  halfDay: {
    leaveType: 'Casual Leave',
    duration: 0.5,
    reason: 'Half day off',
    fromDate: '2026-03-25',
    toDate: '2026-03-25',
    durationType: 'Half Day - Morning'
  }
};

// Job titles and categories
export const jobData = {
  titles: [
    'QA Engineer',
    'Senior QA Engineer',
    'QA Manager',
    'Software Developer',
    'Senior Developer',
    'Project Manager',
    'Business Analyst',
    'HR Manager'
  ],
  categories: [
    'Information Technology',
    'Quality Assurance',
    'Human Resources',
    'Management',
    'Finance',
    'Operations'
  ]
};

// Recruitment test data
export const candidates = {
  valid: {
    firstName: 'Alice',
    middleName: 'Marie',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1-555-0100',
    vacancy: 'Senior QA Engineer',
    resumeFile: 'alice_johnson_resume.pdf',
    keywords: 'Automation, Playwright, Testing, QA',
    notes: 'Strong candidate with 5 years experience'
  },
  minimal: {
    firstName: 'Bob',
    lastName: 'Wilson',
    email: 'bob.wilson@example.com',
    vacancy: 'QA Engineer'
  }
};

// Project and timesheet data
export const projects = {
  internal: {
    name: 'Internal Testing',
    customer: 'Internal',
    description: 'Internal QA testing activities'
  },
  client: {
    name: 'Client Project Alpha',
    customer: 'Acme Corporation',
    description: 'Client project testing'
  }
};

export const timesheetData = {
  fullWeek: {
    project: 'Internal Testing',
    activity: 'Testing',
    hours: {
      monday: 8,
      tuesday: 8,
      wednesday: 8,
      thursday: 8,
      friday: 8
    }
  },
  partialWeek: {
    project: 'Client Project Alpha',
    activity: 'Development',
    hours: {
      monday: 4,
      tuesday: 6,
      wednesday: 8,
      thursday: 5,
      friday: 7
    }
  }
};

// Invalid data for negative testing
export const invalidData = {
  employees: {
    tooLongFirstName: 'A'.repeat(100),
    invalidEmail: 'not-an-email',
    invalidPhone: 'abc-def-ghij',
    specialCharsOnly: '@#$%^&*()',
    emptyFields: {
      firstName: '',
      lastName: ''
    }
  },
  credentials: {
    sqlInjection: "admin' OR '1'='1",
    xssAttempt: "<script>alert('XSS')</script>",
    emptyUsername: '',
    emptyPassword: '',
    tooLongUsername: 'a'.repeat(256),
    specialChars: '!@#$%^&*()_+'
  },
  dates: {
    pastDate: '2020-01-01',
    futureDate: '2030-12-31',
    invalidFormat: '01-15-2026',
    invalidDate: '2026-02-30'
  }
};

// API test data
export const apiEndpoints = {
  base: 'https://opensource-demo.orangehrmlive.com',
  auth: {
    login: '/web/index.php/auth/login',
    logout: '/web/index.php/auth/logout'
  },
  api: {
    employees: '/web/index.php/api/v2/pim/employees',
    users: '/web/index.php/api/v2/admin/users',
    leave: '/web/index.php/api/v2/leave/leave-requests'
  }
};

// Test configuration
export const testConfig = {
  timeouts: {
    short: 5000,
    medium: 15000,
    long: 30000
  },
  retries: {
    flaky: 2,
    stable: 0
  },
  screenshots: {
    onFailure: true,
    fullPage: true
  }
};

// Helper function to generate unique test data
export function generateUniqueEmployee(prefix = 'Test') {
  const timestamp = Date.now();
  return {
    firstName: `${prefix}First${timestamp}`,
    lastName: `${prefix}Last${timestamp}`,
    employeeId: `EMP${timestamp}`,
    email: `test${timestamp}@example.com`
  };
}

// Helper function to generate future date
export function getFutureDate(daysAhead = 7) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toISOString().split('T')[0];
}

// Helper function to generate date range
export function getDateRange(startDaysAhead = 7, durationDays = 2) {
  const fromDate = getFutureDate(startDaysAhead);
  const toDate = getFutureDate(startDaysAhead + durationDays - 1);
  return { fromDate, toDate };
}
