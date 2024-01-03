/// <reference types ="cypress"/>

describe('Date picker', () =>{

   // beforeEach( () =>{

        
    
    //})

it('Paytm', ()=> {
    cy.visit('https://tickets.paytm.com/flights/')
    
    //To select from
    cy.get('#srcCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type('Hyderabad')
    cy.get('[role="dialog"]').contains('Hyderabad').click()

    //To select to
    cy.get('#destCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type('Delhi')
    cy.get('[role="dialog"]').contains('Delhi').click()

    //To select depature 
    cy.get('#departureDate').click()
})
})