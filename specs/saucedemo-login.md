# Test Plan: SauceDemo Login

**Target:** https://www.saucedemo.com
**Seed:** tests/seed.spec.ts
**Date:** 2026-09-16

## Overview
The SauceDemo login page is a simple credential form that supports both successful authentication and client-side validation errors. This plan covers the standard user success path along with the required validation states for locked-out, empty username, empty password, and invalid credentials.

## Preconditions
- The application is available at the target URL and the login page is displayed.
- No prior SauceDemo session is active in the browser.
- The password for all valid and invalid login attempts is secret_sauce.
- Each scenario starts from a clean login page state before submitting credentials.

## Scenarios

### Scenario 1.1 — Standard user login succeeds
- **Priority:** P0
- **Tags:** @smoke @regression
- **Preconditions:** Browser is on the login page with no active session.
- **Steps:**
  1. Enter standard_user into the Username field and secret_sauce into the Password field — expected: both inputs reflect the typed values.
  2. Click the Login button — expected: the app navigates away from the login form without showing an error banner.
- **Assertions:**
  - The browser URL changes to the inventory page.
  - The inventory page loads and displays the Products header or product cards.
- **Edge cases considered:**
  - Session persistence from a previous test run should be cleared before execution.
  - The login button text should remain enabled after valid input entry.

### Scenario 1.2 — Locked-out user shows locked error
- **Priority:** P0
- **Tags:** @regression @critical
- **Preconditions:** Browser is on the login page with no active session.
- **Steps:**
  1. Enter locked_out_user into the Username field and secret_sauce into the Password field — expected: both fields contain the typed values.
  2. Click the Login button — expected: an error alert appears in the login form and the page remains on the login screen.
- **Assertions:**
  - The error message is visible and reads: "Epic sadface: Sorry, this user has been locked out."
  - The user is not redirected to the inventory page.
- **Edge cases considered:**
  - Error dismissal is available, but the primary assertion is the locked-out message itself.
  - No successful session should be established after a locked user attempt.

### Scenario 1.3 — Empty username submission shows validation error
- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** Browser is on the login page with no active session.
- **Steps:**
  1. Leave the Username field blank and enter secret_sauce into the Password field — expected: the password field shows the value while the username remains empty.
  2. Click the Login button — expected: a validation error banner appears above the form.
- **Assertions:**
  - The error message is visible and reads: "Epic sadface: Username is required"
  - The user remains on the login page and cannot proceed to the inventory screen.
- **Edge cases considered:**
  - Username field may be focused after a failed submit; only the validation text is essential.
  - Empty whitespace-only usernames are not in scope for this scenario unless explicitly added later.

### Scenario 1.4 — Empty password submission shows validation error
- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** Browser is on the login page with no active session.
- **Steps:**
  1. Enter standard_user into the Username field and leave the Password field blank — expected: the username is present while the password remains empty.
  2. Click the Login button — expected: a validation error banner appears in the login form.
- **Assertions:**
  - The error message is visible and reads: "Epic sadface: Password is required"
  - The user is not redirected and remains on the login page.
- **Edge cases considered:**
  - Password field should not be auto-filled from a previous run.
  - A failed attempt should not create an authenticated session.

### Scenario 1.5 — Invalid credentials show mismatch error
- **Priority:** P0
- **Tags:** @regression
- **Preconditions:** Browser is on the login page with no active session.
- **Steps:**
  1. Enter invalid_user into the Username field and secret_sauce into the Password field — expected: both field values appear correctly.
  2. Click the Login button — expected: the app renders an error message instead of navigating to the inventory page.
- **Assertions:**
  - The error text is visible and reads: "Epic sadface: Username and password do not match any user in this service"
  - The browser remains on the login page.
- **Edge cases considered:**
  - This is distinct from a locked-out user and should not show a lockout message.
  - A bad username with a valid password should fail consistently without redirecting.

## Not covered (and why)
- Additional SauceDemo users such as problem_user, error_user, and visual_user are excluded because the task is limited to the login flow requested here.
- Checkout, cart, and inventory interactions are intentionally omitted because they are beyond the authentication and validation scope for this plan.
- Logout and session persistence are not included since they are separate user flows and are not needed to validate the requested login scenarios.
