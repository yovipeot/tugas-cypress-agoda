const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.agoda.com', // Fixed: removed /auth/login
  },
});