describe('template spec', () => {
  
  it('new employe', () =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
    //To hide sub menu
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
    // To show sub menu
    cy.wait(2000)
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click()

    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').should('contain','Add').click()

    //to fill the form

    ////
    



    cy.get('.oxd-file-div > .oxd-icon-button').attachFile('image.jpg')
    cy.wait(2000)
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('demo')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('test')
    cy.get('.oxd-button--secondary')
    cy.wait(1000)
    cy.get(':nth-child(8) > .oxd-main-menu-item')


    

})
})