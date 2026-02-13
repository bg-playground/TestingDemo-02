const { devices } = require('@playwright/test');

module.exports = {  
  testDir: 'tests',  
  timeout: 90000,  
  expect: {  
    timeout: 5000,  
  },  
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [  
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list']
  ],  
  
  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like await page.goto('/') */
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
    
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Video on failure */
    video: 'retain-on-failure',
    
    /* Maximum time each action can take */
    actionTimeout: 30000,
    
    /* Maximum time each navigation can take */
    navigationTimeout: 60000,
  },  
  
  projects: [  
    {  
      name: 'chromium',  
      use: { ...devices['Desktop Chrome'] },  
    },  
    {  
      name: 'firefox',  
      use: { ...devices['Desktop Firefox'] },  
    },  
    {  
      name: 'webkit',  
      use: { ...devices['Desktop Safari'] },  
    },  
    {  
      name: 'Mobile Chrome',  
      use: { ...devices['Pixel 5'] },  
    },
    // Only run Mobile Safari locally, not in CI
    ...(!process.env.CI ? [{
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }] : []),  
  ],
};