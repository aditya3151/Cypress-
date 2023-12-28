const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    
    "retries": 0,
    watchForFilechange: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {

      //for download
      on('task', {downloadFile})
      // implement node event listeners here
      
    },
  },
});
