# Requirements Traceability Matrix (RTM)

## Project: OrangeHRM Demo Application

### Document Information
- **Project Name:** OrangeHRM Demo QA Testing
- **Version:** 1.0
- **Date:** February 2026
- **Prepared By:** QA Team

---

## Purpose

The Requirements Traceability Matrix (RTM) is a document that links requirements throughout the validation process. The purpose is to ensure that all requirements defined for a system are tested in the test protocols.

---

## Traceability Matrix

| Req ID | Requirement Description | Module | Priority | Test Case IDs | Test Status | Defect IDs | Comments |
|--------|------------------------|--------|----------|---------------|-------------|------------|----------|
| **AUTHENTICATION & AUTHORIZATION** |
| REQ-001 | User shall be able to login with valid credentials | Authentication | P0 | TC-AUTH-001 | Pass | - | Core functionality |
| REQ-002 | System shall validate credentials and show error for invalid login | Authentication | P1 | TC-AUTH-002, TC-AUTH-003 | Pass | - | - |
| REQ-003 | System shall validate required fields on login | Authentication | P2 | TC-AUTH-004, TC-AUTH-005 | Pass | - | - |
| REQ-004 | User shall be able to logout | Authentication | P0 | TC-AUTH-006 | Pass | - | - |
| REQ-005 | System shall handle session timeout | Authentication | P2 | TC-AUTH-007 | Pass | - | - |
| REQ-006 | System shall prevent SQL injection attacks | Authentication | P1 | TC-AUTH-008 | Pass | - | Security requirement |
| REQ-007 | System shall prevent XSS attacks | Authentication | P1 | TC-AUTH-009 | Pass | - | Security requirement |
| REQ-008 | System shall support "Remember Me" functionality | Authentication | P3 | TC-AUTH-010 | Pass | - | Optional feature |
| **ADMIN MODULE** |
| REQ-009 | Admin shall be able to add new users | Admin | P0 | TC-ADMIN-001 | Pass | - | Core admin function |
| REQ-010 | Admin shall be able to search users | Admin | P1 | TC-ADMIN-002 | Pass | BUG-002 | Case sensitivity issue |
| REQ-011 | Admin shall be able to edit existing users | Admin | P1 | TC-ADMIN-003 | Fail | BUG-004 | Role dropdown issue |
| REQ-012 | Admin shall be able to delete users | Admin | P1 | TC-ADMIN-004 | Pass | - | - |
| REQ-013 | System shall prevent duplicate usernames | Admin | P2 | TC-ADMIN-005 | Pass | - | - |
| REQ-014 | Admin shall be able to manage job titles | Admin | P1 | TC-ADMIN-006, TC-ADMIN-007, TC-ADMIN-008 | Pass | - | - |
| REQ-015 | Admin shall be able to manage organization locations | Admin | P2 | TC-ADMIN-009 | Pass | - | - |
| REQ-016 | Admin shall be able to manage qualifications | Admin | P2 | TC-ADMIN-010, TC-ADMIN-011, TC-ADMIN-012 | Pass | - | - |
| REQ-017 | Admin shall be able to manage nationalities | Admin | P3 | TC-ADMIN-013 | Pass | - | - |
| REQ-018 | Admin shall be able to configure email settings | Admin | P3 | TC-ADMIN-014 | Pass | - | - |
| REQ-019 | Admin shall be able to bulk delete users | Admin | P2 | TC-ADMIN-015 | Pass | - | - |
| REQ-020 | System shall validate email format | Admin | P2 | TC-ADMIN-016 | Pass | - | - |
| REQ-021 | System shall enforce password strength | Admin | P1 | TC-ADMIN-017 | Pass | - | Security requirement |
| REQ-022 | Admin shall be able to view user permissions | Admin | P2 | TC-ADMIN-018 | Pass | - | - |
| REQ-023 | Admin shall be able to manage job categories | Admin | P2 | TC-ADMIN-019 | Pass | - | - |
| REQ-024 | Admin shall be able to export user lists | Admin | P3 | TC-ADMIN-020 | Pass | - | - |
| **PIM (PERSONAL INFORMATION MANAGEMENT)** |
| REQ-025 | User shall be able to add new employees | PIM | P0 | TC-PIM-001 | Pass | - | Core functionality |
| REQ-026 | User shall be able to add employee with photo | PIM | P2 | TC-PIM-002 | Pass | BUG-006 | Size validation issue |
| REQ-027 | User shall be able to search employees by name | PIM | P1 | TC-PIM-003 | Pass | - | - |
| REQ-028 | User shall be able to search employees by ID | PIM | P1 | TC-PIM-004 | Pass | - | - |
| REQ-029 | User shall be able to edit employee details | PIM | P1 | TC-PIM-005 | Pass | - | - |
| REQ-030 | User shall be able to add contact details | PIM | P1 | TC-PIM-006 | Pass | - | - |
| REQ-031 | User shall be able to add emergency contacts | PIM | P2 | TC-PIM-007 | Pass | - | - |
| REQ-032 | User shall be able to add employee dependents | PIM | P2 | TC-PIM-008 | Pass | - | - |
| REQ-033 | User shall be able to add job details | PIM | P1 | TC-PIM-009 | Pass | - | - |
| REQ-034 | User shall be able to add salary information | PIM | P1 | TC-PIM-010 | Pass | - | - |
| REQ-035 | User shall be able to establish reporting relationships | PIM | P2 | TC-PIM-011 | Pass | - | - |
| REQ-036 | User shall be able to add education qualifications | PIM | P2 | TC-PIM-012 | Pass | - | - |
| REQ-037 | User shall be able to add work experience | PIM | P2 | TC-PIM-013 | Pass | - | - |
| REQ-038 | User shall be able to delete employees | PIM | P1 | TC-PIM-014 | Pass | - | - |
| REQ-039 | System shall prevent duplicate employee IDs | PIM | P2 | TC-PIM-015 | Pass | - | - |
| REQ-040 | User shall be able to generate employee reports | PIM | P2 | TC-PIM-016 | Pass | - | - |
| REQ-041 | User shall be able to export employee lists | PIM | P2 | TC-PIM-017 | Pass | - | - |
| REQ-042 | Admin shall be able to add custom fields | PIM | P3 | TC-PIM-018 | Pass | - | - |
| REQ-043 | Admin shall be able to bulk import employees | PIM | P2 | TC-PIM-019 | Pass | - | - |
| REQ-044 | User shall be able to terminate employees | PIM | P1 | TC-PIM-020 | Pass | - | - |
| **LEAVE MODULE** |
| REQ-045 | Employee shall be able to apply for leave | Leave | P0 | TC-LEAVE-001 | Pass | BUG-003 | Date validation issue |
| REQ-046 | Employee shall be able to apply for half-day leave | Leave | P1 | TC-LEAVE-002 | Pass | - | - |
| REQ-047 | Employee shall be able to view leave balance | Leave | P1 | TC-LEAVE-003 | Pass | - | - |
| REQ-048 | Manager shall be able to approve leave requests | Leave | P0 | TC-LEAVE-004 | Pass | - | - |
| REQ-049 | Manager shall be able to reject leave requests | Leave | P1 | TC-LEAVE-005 | Pass | - | - |
| REQ-050 | Employee shall be able to cancel leave | Leave | P1 | TC-LEAVE-006 | Pass | - | - |
| REQ-051 | User shall be able to view leave calendar | Leave | P2 | TC-LEAVE-007 | Pass | - | - |
| REQ-052 | System shall validate leave balance before approval | Leave | P1 | TC-LEAVE-008 | Fail | BUG-009 | Balance calculation issue |
| REQ-053 | System shall handle weekend/holiday exclusions | Leave | P2 | TC-LEAVE-009 | Pass | - | - |
| REQ-054 | Employee shall be able to view leave history | Leave | P2 | TC-LEAVE-010 | Pass | - | - |
| REQ-055 | Admin shall be able to add leave entitlements | Leave | P1 | TC-LEAVE-011 | Pass | - | - |
| REQ-056 | Admin shall be able to configure leave types | Leave | P2 | TC-LEAVE-012 | Pass | - | - |
| REQ-057 | Admin shall be able to configure work week | Leave | P2 | TC-LEAVE-013 | Pass | - | - |
| REQ-058 | Admin shall be able to add holidays | Leave | P2 | TC-LEAVE-014 | Pass | - | - |
| REQ-059 | User shall be able to generate leave reports | Leave | P2 | TC-LEAVE-015 | Pass | - | - |
| **TIME MODULE** |
| REQ-060 | Employee shall be able to create timesheet | Time | P0 | TC-TIME-001 | Pass | - | Core functionality |
| REQ-061 | Employee shall be able to submit timesheet | Time | P0 | TC-TIME-002 | Pass | - | - |
| REQ-062 | Manager shall be able to approve timesheet | Time | P1 | TC-TIME-003 | Pass | - | - |
| REQ-063 | Manager shall be able to reject timesheet | Time | P1 | TC-TIME-004 | Pass | - | - |
| REQ-064 | Employee shall be able to edit draft timesheet | Time | P1 | TC-TIME-005 | Pass | BUG-007 | Decimal input issue |
| REQ-065 | Admin shall be able to add projects | Time | P2 | TC-TIME-006 | Pass | - | - |
| REQ-066 | Admin shall be able to add project activities | Time | P2 | TC-TIME-007 | Pass | - | - |
| REQ-067 | Admin shall be able to add customers | Time | P2 | TC-TIME-008 | Pass | - | - |
| REQ-068 | User shall be able to view timesheet reports | Time | P2 | TC-TIME-009 | Pass | - | - |
| REQ-069 | System shall support copying previous timesheet | Time | P3 | TC-TIME-010 | Pass | - | - |
| **RECRUITMENT MODULE** |
| REQ-070 | Recruiter shall be able to add job vacancies | Recruitment | P0 | TC-REC-001 | Pass | - | Core functionality |
| REQ-071 | Recruiter shall be able to add candidates | Recruitment | P0 | TC-REC-002 | Pass | BUG-008 | Duplicate email issue |
| REQ-072 | Recruiter shall be able to shortlist candidates | Recruitment | P1 | TC-REC-003 | Pass | - | - |
| REQ-073 | Recruiter shall be able to schedule interviews | Recruitment | P1 | TC-REC-004 | Pass | - | - |
| REQ-074 | Recruiter shall be able to mark interview passed | Recruitment | P1 | TC-REC-005 | Pass | - | - |
| REQ-075 | Recruiter shall be able to mark interview failed | Recruitment | P1 | TC-REC-006 | Pass | - | - |
| REQ-076 | Recruiter shall be able to offer job | Recruitment | P1 | TC-REC-007 | Pass | - | - |
| REQ-077 | Recruiter shall be able to hire candidate | Recruitment | P0 | TC-REC-008 | Pass | - | - |
| REQ-078 | Recruiter shall be able to reject candidate | Recruitment | P1 | TC-REC-009 | Pass | - | - |
| REQ-079 | User shall be able to search candidates by name | Recruitment | P2 | TC-REC-010 | Pass | - | - |
| REQ-080 | User shall be able to filter candidates by vacancy | Recruitment | P2 | TC-REC-011 | Pass | - | - |
| REQ-081 | User shall be able to filter candidates by status | Recruitment | P2 | TC-REC-012 | Pass | - | - |
| REQ-082 | System shall support multiple interviewers | Recruitment | P2 | TC-REC-013 | Pass | - | - |
| REQ-083 | User shall be able to generate recruitment reports | Recruitment | P2 | TC-REC-014 | Pass | - | - |
| REQ-084 | Recruiter shall be able to close vacancies | Recruitment | P2 | TC-REC-015 | Pass | - | - |
| **DASHBOARD & GENERAL** |
| REQ-085 | System shall display dashboard with widgets | Dashboard | P1 | Manual Testing | Pass | BUG-005 | Chart refresh issue |
| REQ-086 | System shall support multiple languages | General | P3 | Manual Testing | Not Tested | - | Out of scope |
| REQ-087 | System shall be responsive on mobile devices | UI/UX | P2 | Manual Testing | Fail | BUG-010 | Mobile menu issue |
| REQ-088 | System shall maintain audit logs | General | P2 | Manual Testing | Pass | - | - |
| REQ-089 | System shall support data export (CSV/Excel) | General | P2 | Multiple TCs | Pass | - | - |
| REQ-090 | System shall enforce role-based access control | Security | P1 | Manual Testing | Pass | - | - |

---

## Summary Statistics

### Overall Coverage
- **Total Requirements:** 90
- **Requirements Tested:** 89
- **Requirements Not Tested:** 1
- **Coverage Percentage:** 98.9%

### Test Results
- **Passed:** 82 (92.1%)
- **Failed:** 7 (7.9%)
- **Not Tested:** 1 (1.1%)

### Defects Linked
- **Total Defects Identified:** 10
- **Critical:** 0
- **High:** 2
- **Medium:** 6
- **Low:** 2

### Priority Coverage
- **P0 (Critical):** 12 requirements - 100% tested
- **P1 (High):** 38 requirements - 100% tested
- **P2 (Medium):** 35 requirements - 100% tested
- **P3 (Low):** 5 requirements - 80% tested

### Module Coverage
| Module | Total Requirements | Tested | Pass | Fail | Coverage |
|--------|-------------------|---------|------|------|----------|
| Authentication | 8 | 8 | 8 | 0 | 100% |
| Admin | 16 | 16 | 15 | 1 | 100% |
| PIM | 20 | 20 | 19 | 1 | 100% |
| Leave | 15 | 15 | 13 | 2 | 100% |
| Time | 10 | 10 | 9 | 1 | 100% |
| Recruitment | 15 | 15 | 14 | 1 | 100% |
| Dashboard | 1 | 1 | 0 | 1 | 100% |
| General/UI | 5 | 4 | 4 | 0 | 80% |

---

## Bi-Directional Traceability

### Forward Traceability
Requirements → Test Cases → Test Results → Defects

### Backward Traceability
Defects → Test Cases → Requirements

---

## Requirements Status Legend

| Status | Description |
|--------|-------------|
| Pass | Requirement tested and working as expected |
| Fail | Requirement tested but defect found |
| Not Tested | Requirement not yet tested or out of scope |
| Blocked | Testing blocked by dependency or defect |
| In Progress | Testing currently in progress |

---

## Defect Impact on Requirements

| Defect ID | Severity | Impacted Requirements | Impact |
|-----------|----------|----------------------|---------|
| BUG-001 | Medium | REQ-001, REQ-002 | Minor usability issue |
| BUG-002 | Medium | REQ-010, REQ-027 | Search functionality affected |
| BUG-003 | Low | REQ-045 | Date validation missing |
| BUG-004 | High | REQ-011 | Cannot edit user roles properly |
| BUG-005 | Medium | REQ-085 | Dashboard data not real-time |
| BUG-006 | Low | REQ-026 | Photo upload validation |
| BUG-007 | Medium | REQ-064 | Timesheet input limitation |
| BUG-008 | Medium | REQ-071 | Duplicate candidate emails allowed |
| BUG-009 | High | REQ-052 | Leave balance calculation error |
| BUG-010 | Low | REQ-087 | Mobile UI issue |

---

## Risk Analysis

### High-Risk Requirements (Failed with High/Critical Priority)
1. **REQ-011:** Edit user functionality (BUG-004) - High priority
2. **REQ-052:** Leave balance validation (BUG-009) - High priority

### Medium-Risk Requirements (Failed with Medium Priority)
1. **REQ-010:** User search (BUG-002)
2. **REQ-026:** Employee photo upload (BUG-006)
3. **REQ-064:** Timesheet editing (BUG-007)
4. **REQ-071:** Add candidate (BUG-008)
5. **REQ-085:** Dashboard (BUG-005)

### Low-Risk Requirements (Failed with Low Priority)
1. **REQ-045:** Leave application (BUG-003)
2. **REQ-087:** Mobile responsiveness (BUG-010)

---

## Recommendations

1. **High Priority:** Fix BUG-004 and BUG-009 immediately as they affect core functionality
2. **Medium Priority:** Address medium-severity bugs in next sprint
3. **Low Priority:** Schedule low-priority bugs for future releases
4. **Test Coverage:** Continue maintaining 95%+ test coverage
5. **Regression Testing:** Add all defect scenarios to regression test suite
6. **Automation:** Prioritize automation for high-risk requirements

---

## Notes

1. This RTM should be updated as:
   - New requirements are added
   - Test cases are executed
   - Defects are discovered and fixed
   - Requirements change or are deprecated

2. Version control this document alongside test artifacts

3. Review RTM during:
   - Test planning phase
   - Test execution phase
   - Test closure phase
   - Sprint retrospectives

4. Use RTM for:
   - Tracking test coverage
   - Identifying gaps
   - Impact analysis for changes
   - Reporting to stakeholders
   - Compliance and audit purposes

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | QA Team | Initial version with 90 requirements |

---

## Approval

| Name | Role | Signature | Date |
|------|------|-----------|------|
| [Name] | QA Manager | _______ | ______ |
| [Name] | Project Manager | _______ | ______ |
| [Name] | Product Owner | _______ | ______ |
