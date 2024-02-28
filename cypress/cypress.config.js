const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');


module.exports = defineConfig({

  //cypress cloud project ID
  projectId: "3483m4",
  
  e2e: {
    
    "retries": 0,
    watchForFilechange: false,
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {    /// to configure download files
      on('task', {downloadFile})  
    },
  },
});
