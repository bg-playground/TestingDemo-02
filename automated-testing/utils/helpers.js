/**
 * Test Helper Utilities
 * 
 * Common utility functions for automated tests.
 * These helpers reduce code duplication and improve test maintainability.
 */

import { expect } from '@playwright/test';

/**
 * Wait for element with custom timeout and error message
 */
export async function waitForElement(page, selector, options = {}) {
  const {
    timeout = 15000,
    state = 'visible',
    errorMessage = `Element ${selector} not found`
  } = options;

  try {
    await page.waitForSelector(selector, { timeout, state });
  } catch (error) {
    throw new Error(`${errorMessage}: ${error.message}`);
  }
}

/**
 * Wait for navigation with timeout
 */
export async function waitForNavigation(page, urlPattern, timeout = 30000) {
  await page.waitForURL(urlPattern, { timeout });
}

/**
 * Retry function with exponential backoff
 */
export async function retry(fn, options = {}) {
  const {
    maxAttempts = 3,
    delay = 1000,
    backoff = 2
  } = options;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(backoff, attempt - 1)));
    }
  }
}

/**
 * Take screenshot with custom naming
 */
export async function takeScreenshot(page, name, options = {}) {
  const {
    fullPage = true,
    path = `screenshots/${name}-${Date.now()}.png`
  } = options;

  await page.screenshot({ fullPage, path });
  console.log(`Screenshot saved: ${path}`);
  return path;
}

/**
 * Clear and fill input field
 */
export async function clearAndFill(locator, value) {
  await locator.clear();
  await locator.fill(value);
}

/**
 * Select dropdown option by text
 */
export async function selectDropdownByText(page, selector, text) {
  await page.locator(selector).click();
  await page.getByText(text, { exact: true }).click();
}

/**
 * Check if element is visible
 */
export async function isVisible(page, selector) {
  try {
    return await page.locator(selector).isVisible();
  } catch {
    return false;
  }
}

/**
 * Get text content safely
 */
export async function getTextContent(locator) {
  try {
    return await locator.textContent() || '';
  } catch {
    return '';
  }
}

/**
 * Wait for API response
 */
export async function waitForAPIResponse(page, urlPattern, callback) {
  const responsePromise = page.waitForResponse(
    response => response.url().includes(urlPattern) && response.status() === 200
  );
  
  await callback();
  
  const response = await responsePromise;
  return response.json();
}

/**
 * Login helper
 */
export async function login(page, username, password) {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL(/.*dashboard/);
}

/**
 * Logout helper
 */
export async function logout(page) {
  await page.locator('.oxd-userdropdown').click();
  await page.getByText('Logout').click();
  await page.waitForURL(/.*login/);
}

/**
 * Generate random string
 */
export function randomString(length = 10, prefix = '') {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = prefix;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate random number in range
 */
export function randomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format date to YYYY-MM-DD
 */
export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Add days to date
 */
export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Wait for multiple elements
 */
export async function waitForElements(page, selectors, timeout = 15000) {
  const promises = selectors.map(selector => 
    page.waitForSelector(selector, { timeout })
  );
  await Promise.all(promises);
}

/**
 * Scroll to element
 */
export async function scrollToElement(locator) {
  await locator.scrollIntoViewIfNeeded();
}

/**
 * Check if checkbox is checked
 */
export async function isChecked(locator) {
  return await locator.isChecked();
}

/**
 * Toggle checkbox
 */
export async function toggleCheckbox(locator, shouldCheck) {
  const isCurrentlyChecked = await isChecked(locator);
  if (shouldCheck !== isCurrentlyChecked) {
    await locator.click();
  }
}

/**
 * Get attribute value
 */
export async function getAttribute(locator, attributeName) {
  return await locator.getAttribute(attributeName);
}

/**
 * Verify URL contains text
 */
export async function verifyURLContains(page, text) {
  const url = page.url();
  expect(url).toContain(text);
}

/**
 * Verify element text
 */
export async function verifyElementText(locator, expectedText) {
  const text = await getTextContent(locator);
  expect(text).toContain(expectedText);
}

/**
 * Verify element visibility
 */
export async function verifyElementVisible(locator) {
  await expect(locator).toBeVisible();
}

/**
 * Verify element hidden
 */
export async function verifyElementHidden(locator) {
  await expect(locator).toBeHidden();
}

/**
 * Wait for loading spinner to disappear
 */
export async function waitForLoadingComplete(page, spinnerSelector = '.oxd-loading-spinner') {
  try {
    await page.waitForSelector(spinnerSelector, { state: 'hidden', timeout: 10000 });
  } catch {
    // Spinner might not appear for fast operations
  }
}

/**
 * Handle alert/dialog
 */
export async function handleDialog(page, accept = true, promptText = '') {
  page.once('dialog', async dialog => {
    if (promptText) {
      await dialog.accept(promptText);
    } else if (accept) {
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });
}

/**
 * Get table data
 */
export async function getTableData(page, tableSelector) {
  const rows = await page.locator(`${tableSelector} tbody tr`).all();
  const data = [];
  
  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    data.push(cells);
  }
  
  return data;
}

/**
 * Search and verify results
 */
export async function searchAndVerify(page, searchTerm, searchSelector, resultsSelector) {
  await page.locator(searchSelector).fill(searchTerm);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector(resultsSelector);
}

/**
 * Custom assertion: toContainSubstring
 */
export function assertContainsSubstring(actual, expected) {
  expect(actual.toLowerCase()).toContain(expected.toLowerCase());
}

/**
 * Custom assertion: toBeBetween
 */
export function assertBetween(actual, min, max) {
  expect(actual).toBeGreaterThanOrEqual(min);
  expect(actual).toBeLessThanOrEqual(max);
}
