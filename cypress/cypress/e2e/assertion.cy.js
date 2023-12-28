

it( 'assertion pass',() =>{

cy.visit('https://example.cypress.io/')
cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
cy.get('#query-btn')
   .should('contain','Button')
   .and('be.visible')
   .and('be.enabled')
   .and('be.disabled')

    
})