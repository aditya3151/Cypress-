describe('Amazon', () => {




    it('menu', function(){

cy.visit('https://www.amazon.in/')

      cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content').contains("Mobiles, Computers").click({ force: true })
     // cy.get('.hmenu-item').contains('All Mobile Phones').click({ force: true })






    })
})