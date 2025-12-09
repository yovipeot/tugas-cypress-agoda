// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Ignore ResizeObserver loop completed errors thrown by some apps
// so they don't fail Cypress tests. This listens for uncaught
// exceptions and returns false for that specific message.
Cypress.on('uncaught:exception', (err) => {
	// Some browsers/apps throw: "ResizeObserver loop completed with undelivered notifications"
	if (err && err.message && err.message.includes('ResizeObserver loop completed')) {
		return false
	}

	// Let other errors fail the test
	return true
})