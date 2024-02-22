describe('File upload', () => {
    it('uploads a file', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
    
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-icon-button oxd-icon-button--solid-main employee-image-action').attachFile('demo.png');

    // Add any additional assertions or actions as needed
    })



    it('upload', ()=> {

        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        cy.get('[type="file"]').attachFile('demo.png')
        cy.get('[type="text"]').type('hello')
        cy.get('[type="submit"]').should('be.visible').click()

    })

    it('download', ()=> {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

    } )
    })