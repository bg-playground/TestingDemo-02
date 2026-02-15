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
  
  /* Retry on CI only - reduced to 1 */
  retries: process.env.CI ? 1 : 0,
  
  /* Increase workers on CI for faster execution */
  workers: process.env.CI ? 2 : undefined,
  
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
    // Only run firefox and webkit locally, not in CI (too slow)
    ...(!process.env.CI ? [{  
      name: 'firefox',  
      use: { ...devices['Desktop Firefox'] },  
    },  
    {  
      name: 'webkit',  
      use: { ...devices['Desktop Safari'] },  
    }] : []),
    // Mobile testing disabled in CI - too resource intensive and flaky
    // Enable locally for mobile-specific testing
    ...(!process.env.CI ? [{  
      name: 'Mobile Chrome',  
      use: { ...devices['Pixel 5'] },  
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }] : []),  
  ],
};
