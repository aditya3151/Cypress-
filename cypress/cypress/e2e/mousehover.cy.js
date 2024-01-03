/// <reference types ="cypress"/>

describe('MouseHover', () =>{

 
 it('Mouse', () =>{

 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 //cy.get('.mouse-hover-content').invoke('show')
 cy.contains('Top').click({force:true})
 cy.url().should('include','top')
 cy.url().should('eql','https://rahulshettyacademy.com/AutomationPractice/#top')

 })
})