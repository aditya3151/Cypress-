

describe('All login test', () =>{



    it('dynamic dropdown',()=>{

  cy.visit('https://www.google.com/')
  cy.get('#APjFqb').type('cypress')
  cy.get('.sbct').contains('cypress testing').click()
  cy.get('#res [class="LC20lb MBeuO DKV0Md"]').contains('Cypress').click()



    })
})