const { devices } = require('@playwright/test');

module.exports = {  
  testDir: 'tests',  
  timeout: 90000,  
  expect: {  
    timeout: 5000,  
  },  
  fullyParallel: true,  
  reporter: [  
    ['dot'],  
    ['json', { outputFile: 'results/test-results.json' }],  
  ],  
  webServer: {  
    command: 'npm run start',  
    port: 3000,  
    timeout: 120 * 1000,  
    reuseExistingServer: !process.env.CI,  
  },  
  projects: [  
    {  
      name: 'Desktop Chrome',  
      use: { ...devices['Desktop Chrome'] },  
    },  
    {  
      name: 'Desktop Firefox',  
      use: { ...devices['Desktop Firefox'] },  
    },  
    {  
      name: 'Desktop Safari',  
      use: { ...devices['Desktop Safari'] },  
    },  
    {  
      name: 'Mobile Chrome',  
      use: { ...devices['Google Pixel 5'] },  
    },  
    {  
      name: 'Mobile Firefox',  
      use: { ...devices['Google Pixel 5'] },  
    },  
    ...(!process.env.CI ? [{
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }] : []),  
  ],  
  timeout: 90000,  
  navigationTimeout: 60000,  
  actionTimeout: 30000,
};