# Performance & Accessibility Testing Guide

Guide for conducting performance and accessibility testing on the OrangeHRM Demo application.

---

## Table of Contents

1. [Performance Testing](#performance-testing)
2. [Accessibility Testing](#accessibility-testing)
3. [Tools and Setup](#tools-and-setup)
4. [Test Scenarios](#test-scenarios)
5. [Reporting](#reporting)

---

## Performance Testing

### Performance Metrics to Track

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3s | First Contentful Paint (FCP) |
| Time to Interactive | < 5s | Time to Interactive (TTI) |
| Largest Contentful Paint | < 2.5s | LCP |
| Cumulative Layout Shift | < 0.1 | CLS |
| First Input Delay | < 100ms | FID |
| API Response Time | < 1s | Average response time |
| Database Query Time | < 500ms | Average query time |

### Performance Testing Types

#### 1. Load Testing
**Purpose:** Test system under expected load

**Test Scenarios:**
- 10 concurrent users (typical load)
- 50 concurrent users (peak load)
- 100 concurrent users (stress test)

**Key Actions to Test:**
- User login
- Employee search
- Leave application
- Report generation
- Dashboard loading

#### 2. Stress Testing
**Purpose:** Find breaking point

**Approach:**
- Gradually increase load
- Monitor resource usage
- Identify bottlenecks
- Document failure points

#### 3. Spike Testing
**Purpose:** Test sudden load increases

**Scenarios:**
- 100 users login simultaneously
- Mass leave applications
- Bulk report generation

#### 4. Endurance Testing
**Purpose:** Test sustained load over time

**Duration:** 2-4 hours minimum
**Load:** 30-50 concurrent users
**Monitor:** Memory leaks, performance degradation

### Performance Testing with Playwright

#### Basic Performance Measurement

```javascript
import { test, expect } from '@playwright/test';

test('Measure page load performance', async ({ page }) => {
  const startTime = Date.now();
  
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  const loadTime = Date.now() - startTime;
  console.log(`Page load time: ${loadTime}ms`);
  
  // Assert load time is acceptable
  expect(loadTime).toBeLessThan(3000);
});
```

#### Using Performance API

```javascript
test('Detailed performance metrics', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  const performanceMetrics = await page.evaluate(() => {
    const perfData = window.performance.getEntriesByType('navigation')[0];
    return {
      dns: perfData.domainLookupEnd - perfData.domainLookupStart,
      tcp: perfData.connectEnd - perfData.connectStart,
      request: perfData.responseStart - perfData.requestStart,
      response: perfData.responseEnd - perfData.responseStart,
      domProcessing: perfData.domComplete - perfData.domLoading,
      totalTime: perfData.loadEventEnd - perfData.fetchStart
    };
  });
  
  console.log('Performance Metrics:', performanceMetrics);
  
  // Assert metrics
  expect(performanceMetrics.totalTime).toBeLessThan(3000);
  expect(performanceMetrics.dns).toBeLessThan(200);
});
```

#### Network Performance

```javascript
test('Monitor network requests', async ({ page }) => {
  const requests = [];
  
  page.on('request', request => {
    requests.push({
      url: request.url(),
      method: request.method(),
      startTime: Date.now()
    });
  });
  
  page.on('response', response => {
    const request = requests.find(r => r.url === response.url());
    if (request) {
      request.endTime = Date.now();
      request.duration = request.endTime - request.startTime;
      request.status = response.status();
      request.size = response.headers()['content-length'];
    }
  });
  
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.waitForLoadState('networkidle');
  
  // Analyze slow requests
  const slowRequests = requests.filter(r => r.duration > 1000);
  console.log('Slow requests:', slowRequests);
  
  expect(slowRequests.length).toBe(0);
});
```

### Using Lighthouse for Performance Audit

```javascript
import { test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test('Lighthouse performance audit', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  await playAudit({
    page,
    thresholds: {
      performance: 50,
      accessibility: 90,
      'best-practices': 50,
      seo: 50
    },
    port: 9222
  });
});
```

### Performance Testing Checklist

- [ ] Measure page load times for all major pages
- [ ] Test API response times
- [ ] Monitor resource usage (CPU, memory)
- [ ] Check image optimization
- [ ] Verify caching mechanisms
- [ ] Test with slow network conditions
- [ ] Measure time to interactive
- [ ] Check JavaScript bundle size
- [ ] Test database query performance
- [ ] Monitor third-party script impact

---

## Accessibility Testing

### Accessibility Standards

**Target:** WCAG 2.1 Level AA compliance

**Key Principles (POUR):**
1. **Perceivable** - Information must be presentable to users
2. **Operable** - UI components must be operable
3. **Understandable** - Information and UI must be understandable
4. **Robust** - Content must be robust enough for assistive technologies

### Accessibility Testing Areas

#### 1. Keyboard Navigation
**Test Cases:**
- [ ] All interactive elements accessible via Tab key
- [ ] Logical tab order
- [ ] Focus indicators visible
- [ ] No keyboard traps
- [ ] Skip links available
- [ ] Dropdown menus keyboard accessible
- [ ] Modal dialogs keyboard accessible

#### 2. Screen Reader Support
**Test Cases:**
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] ARIA labels used where appropriate
- [ ] Heading hierarchy is logical
- [ ] Link text is descriptive
- [ ] Error messages announced
- [ ] Dynamic content changes announced

#### 3. Color and Contrast
**Test Cases:**
- [ ] Text contrast ratio >= 4.5:1 (normal text)
- [ ] Text contrast ratio >= 3:1 (large text)
- [ ] Information not conveyed by color alone
- [ ] Color blind friendly palette

#### 4. Visual Design
**Test Cases:**
- [ ] Text resizable up to 200%
- [ ] No horizontal scrolling at 320px width
- [ ] Touch targets at least 44x44 pixels
- [ ] Consistent navigation
- [ ] Clear focus indicators

#### 5. Forms and Inputs
**Test Cases:**
- [ ] All form fields have labels
- [ ] Error messages clear and helpful
- [ ] Required fields indicated
- [ ] Input format instructions provided
- [ ] Success messages accessible

### Accessibility Testing with Playwright

#### Axe-core Integration

```javascript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Automated accessibility scan', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Accessibility scan - specific component', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include('#login-form')
    .analyze();
  
  console.log('Violations:', accessibilityScanResults.violations);
  expect(accessibilityScanResults.violations.length).toBeLessThan(3);
});
```

#### Keyboard Navigation Testing

```javascript
test('Keyboard navigation test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  // Test Tab navigation
  await page.keyboard.press('Tab');
  let focused = await page.evaluate(() => document.activeElement.tagName);
  expect(['INPUT', 'BUTTON', 'A']).toContain(focused);
  
  // Test Enter key on button
  await page.keyboard.press('Enter');
  
  // Test Escape key (if applicable)
  await page.keyboard.press('Escape');
});

test('Focus trap in modal', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  // Open modal
  await page.click('[data-testid="open-modal"]');
  
  // Tab through modal elements
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => {
      const element = document.activeElement;
      return element.closest('[role="dialog"]') !== null;
    });
    
    expect(focusedElement).toBeTruthy();
  }
});
```

#### Color Contrast Testing

```javascript
test('Color contrast check', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  
  const contrastIssues = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const issues = [];
    
    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Simple contrast check (use proper library in production)
      // This is a placeholder for demonstration
      if (color && backgroundColor) {
        // Calculate contrast ratio (simplified)
        // Real implementation should use proper algorithm
      }
    });
    
    return issues;
  });
  
  console.log('Contrast issues:', contrastIssues);
});
```

### Manual Accessibility Testing

#### Screen Reader Testing

**Tools:**
- **Windows:** NVDA (free), JAWS
- **macOS:** VoiceOver (built-in)
- **Linux:** Orca

**Test Process:**
1. Enable screen reader
2. Navigate through page using only screen reader
3. Verify all content is announced
4. Check form field labels
5. Test error messages
6. Verify modal announcements

#### Keyboard-Only Navigation

**Test Process:**
1. Disconnect mouse
2. Navigate using only keyboard
3. Tab through all interactive elements
4. Activate buttons/links with Enter/Space
5. Close modals with Escape
6. Navigate dropdowns with arrow keys

#### Zoom Testing

**Test Levels:**
- 125% zoom
- 150% zoom
- 200% zoom

**Verify:**
- Content remains readable
- No horizontal scrolling
- Layout doesn't break
- All features still functional

### Accessibility Testing Checklist

- [ ] Run automated scan with axe-core
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify ARIA attributes
- [ ] Test form accessibility
- [ ] Check heading hierarchy
- [ ] Test at 200% zoom
- [ ] Verify alt text on images
- [ ] Test focus indicators
- [ ] Check error message accessibility
- [ ] Verify responsive design
- [ ] Test with browser extensions (WAVE, Lighthouse)

---

## Tools and Setup

### Performance Testing Tools

1. **Playwright** - Built-in performance tracking
2. **Lighthouse** - Comprehensive audits
3. **WebPageTest** - Detailed performance analysis
4. **Chrome DevTools** - Performance profiling
5. **Artillery** - Load testing
6. **k6** - Load testing
7. **JMeter** - Load and performance testing

### Accessibility Testing Tools

1. **axe DevTools** - Browser extension
2. **WAVE** - Web accessibility evaluation
3. **Lighthouse** - Accessibility audit
4. **NVDA** - Screen reader (Windows)
5. **VoiceOver** - Screen reader (macOS)
6. **Color Contrast Analyzer** - Contrast checking
7. **axe-core/playwright** - Automated testing

### Installation

```bash
# Performance testing
npm install --save-dev playwright-lighthouse

# Accessibility testing
npm install --save-dev @axe-core/playwright

# Load testing
npm install --save-dev artillery k6
```

---

## Test Scenarios

### Performance Test Scenarios

1. **Login Performance**
   - Measure time from click to dashboard
   - Target: < 2 seconds

2. **Search Performance**
   - Search for employee by name
   - Target: < 1 second

3. **Report Generation**
   - Generate employee report
   - Target: < 5 seconds for 100 records

4. **Dashboard Load**
   - Load dashboard with all widgets
   - Target: < 3 seconds

5. **Form Submission**
   - Submit leave application
   - Target: < 2 seconds

### Accessibility Test Scenarios

1. **Login Form Accessibility**
   - Keyboard navigation
   - Screen reader compatibility
   - Label associations

2. **Navigation Menu Accessibility**
   - Keyboard access
   - ARIA attributes
   - Focus management

3. **Data Table Accessibility**
   - Header associations
   - Keyboard navigation
   - Screen reader compatibility

4. **Form Validation Accessibility**
   - Error message announcement
   - Focus management
   - Clear instructions

5. **Modal Dialog Accessibility**
   - Focus trap
   - Keyboard dismissal
   - ARIA roles

---

## Reporting

### Performance Report Template

```markdown
# Performance Test Report

## Summary
- Test Date: [Date]
- Application: OrangeHRM Demo
- Test Duration: [Duration]

## Metrics
| Page | Load Time | TTI | LCP | CLS | Score |
|------|-----------|-----|-----|-----|-------|
| Login | 2.1s | 2.5s | 1.8s | 0.05 | 85 |
| Dashboard | 2.8s | 3.2s | 2.1s | 0.08 | 78 |

## Issues Found
1. Dashboard charts slow to load
2. API response time > 1s
3. Large JavaScript bundle size

## Recommendations
1. Implement lazy loading
2. Optimize database queries
3. Code splitting for JS
```

### Accessibility Report Template

```markdown
# Accessibility Test Report

## Summary
- Test Date: [Date]
- WCAG Level: AA
- Tools Used: axe-core, NVDA, manual testing

## Results
- Automated Scan: 12 issues found
- Manual Testing: 3 issues found
- Total Issues: 15

## Issues by Severity
- Critical: 0
- Serious: 3
- Moderate: 8
- Minor: 4

## Key Issues
1. Missing alt text on images
2. Low contrast ratio on secondary buttons
3. Form labels not associated

## Compliance Status
- Level A: 95% compliant
- Level AA: 80% compliant
```

---

**Last Updated:** February 2026  
**Version:** 1.0
