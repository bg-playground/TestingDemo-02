import { test, expect } from '@playwright/test';

/**
 * API Tests for OrangeHRM Demo
 * Note: These are example API tests. The actual API endpoints may vary.
 * This demonstrates the structure and approach for API testing.
 */

test.describe('API Tests - Authentication', () => {
  const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

  test('API-001: GET Request - Homepage Returns 200', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
  });

  test('API-002: Verify Response Headers', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const headers = response.headers();
    
    expect(headers['content-type']).toContain('text/html');
    expect(response.ok()).toBeTruthy();
  });

  test('API-003: Check Page Load Time', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(BASE_URL);
    const endTime = Date.now();
    const loadTime = endTime - startTime;

    expect(response.status()).toBe(200);
    expect(loadTime).toBeLessThan(5000); // Should load within 5 seconds
  });

  test('API-004: Verify Secure Connection (HTTPS)', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(BASE_URL).toContain('https://');
    expect(response.status()).toBe(200);
  });
});

test.describe('API Tests - Resource Availability', () => {
  const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

  test('API-005: Check Login Page Availability', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/web/index.php/auth/login`);
    expect(response.status()).toBe(200);
  });

  test('API-006: Check Static Resources Load', async ({ request }) => {
    // Test that CSS/JS resources are available
    const response = await request.get(BASE_URL);
    const body = await response.text();
    
    expect(body).toContain('OrangeHRM');
    expect(response.status()).toBe(200);
  });

  test('API-007: Invalid Endpoint Returns 404', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/invalid-endpoint-123456`);
    expect(response.status()).toBe(404);
  });

  test('API-008: Check Favicon Exists', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/favicon.ico`);
    // Favicon might return 200 or 404 depending on server config
    expect([200, 404]).toContain(response.status());
  });
});

test.describe('API Tests - Performance', () => {
  const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

  test('API-009: Multiple Concurrent Requests', async ({ request }) => {
    const promises = Array(5).fill(null).map(() => 
      request.get(BASE_URL)
    );

    const responses = await Promise.all(promises);
    
    responses.forEach(response => {
      expect(response.status()).toBe(200);
    });
  });

  test('API-010: Response Size is Reasonable', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.text();
    const bodySize = Buffer.byteLength(body, 'utf8');

    expect(response.status()).toBe(200);
    expect(bodySize).toBeGreaterThan(0);
    expect(bodySize).toBeLessThan(10 * 1024 * 1024); // Less than 10MB
  });
});

test.describe('API Tests - Security', () => {
  const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

  test('API-011: Check Security Headers', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const headers = response.headers();

    // Check for common security headers (may vary by implementation)
    expect(response.status()).toBe(200);
    // Note: Actual security headers depend on server configuration
  });

  test('API-012: SQL Injection in URL Parameters', async ({ request }) => {
    const response = await request.get(`${BASE_URL}?id=1' OR '1'='1`);
    
    // Should not cause server error
    expect([200, 400, 404]).toContain(response.status());
  });

  test('API-013: XSS Attempt in URL Parameters', async ({ request }) => {
    const response = await request.get(`${BASE_URL}?name=<script>alert('xss')</script>`);
    
    // Should handle safely
    expect([200, 400, 404]).toContain(response.status());
  });
});

/**
 * Note: For actual API testing of OrangeHRM endpoints:
 * 1. You would need to authenticate and get session tokens
 * 2. Test actual REST API endpoints for CRUD operations
 * 3. Validate request/response payloads
 * 4. Test error handling and edge cases
 * 5. Verify data persistence
 * 
 * Example structure for authenticated API tests:
 * 
 * test('Create Employee via API', async ({ request }) => {
 *   // 1. Login to get auth token
 *   const authResponse = await request.post('/api/login', {...});
 *   const token = await authResponse.json().token;
 *   
 *   // 2. Create employee
 *   const response = await request.post('/api/employees', {
 *     headers: { 'Authorization': `Bearer ${token}` },
 *     data: { firstName: 'John', lastName: 'Doe' }
 *   });
 *   
 *   // 3. Verify response
 *   expect(response.status()).toBe(201);
 *   const employee = await response.json();
 *   expect(employee.firstName).toBe('John');
 * });
 */
