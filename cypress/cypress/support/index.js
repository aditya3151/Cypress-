Cypress.on('uncaught:exception', (err) => {
    // adding the log group to make it easier to debug
    Cypress.log({
       name: 'uncaught:exception',
       message: err.message,
       consoleProps: () => {
         return {
           'Uncaught Error': err,
         };
       },
    });
    // throw the error to fail the test
    throw err;
   });
   import 'cypress-axe'; ///for axe-accesibility