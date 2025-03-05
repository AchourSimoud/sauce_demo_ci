const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // a ajouter
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});