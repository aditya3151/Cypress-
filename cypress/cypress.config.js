const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({

  //cypress cloud project ID
  projectId: "3483m4",
  
  e2e: {
    
    "retries": 1,
    watchForFilechange: false,
    defaultCommandTimeout: 10000,

    
    setupNodeEvents(on, config) {

      //for download
      on('task', {downloadFile})
      // implement node event listeners here
      
    },
  },
});
