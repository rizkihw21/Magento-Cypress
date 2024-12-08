const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    supportFile: "cypress/support/e2e.js", // Lokasi file support
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
