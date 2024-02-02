/// <reference types ="cypress"/>

describe('All login test', () =>{

    it("simi", () => {
        //cy.server()
        cy.intercept('POST',' https://1.rome.api.flipkart.com/api/1/fdp').as('loadproducts')
        cy.visit('https://www.flipkart.com/')
        cy.get('._1ch8e_').contains('Mobiles').click()
        cy.wait('@loadproducts').its('status').should('eq',200)
       //cy.get('#container [class="_1AtVbE col-12-12').contains('Apple SmartPhones').find('div.Nyt1vx').scrollIntoView().find('._1xCO19') 
       cy.get('#container ._1AtVbE',{timeout:50000}).should('be.visible')
           
      

    })

    //https://2.rome.api.flipkart.com/api/1/fdp
    //https://1.rome.api.flipkart.com/api/4/page/fetch  /1.rome.api.flipkart.com/api/1/fdp


    it.only('new snippet from chatgpt', () => {
        cy.visit('https://www.flipkart.com/')
        // Wait for a specific element to appear on the page
cy.get('.my-element').should('be.visible');
// Wait for an element with specific text to appear on the page
cy.contains('button', 'Submit').should('be.visible');
// Wait for an element to have a certain attribute or value
cy.get('[data-testid="loading-spinner"]').should('not.exist');
// Wait for an element to have a certain class
cy.get('.my-element').should('have.class', 'loaded');
// Wait for an XHR request to complete
cy.intercept('GET', '/api/data').as('getData');
cy.wait('@getData');
// Wait for an element to have specific content
cy.get('.my-element').should('have.text', 'Expected Text');
// Wait for an element to meet a custom condition
cy.get('.my-element').should(($el) => {
  // Custom condition
  expect($el).to.have.lengthOf.at.least(1);
});
// Wait for a certain amount of time
cy.wait(5000); // Wait for 5 seconds
    })
})