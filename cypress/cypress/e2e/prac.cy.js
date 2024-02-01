/// <reference types ="cypress"/>

describe('All login test', () =>{

    it.only("simi", () => {
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

})