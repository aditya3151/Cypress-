
describe('All login test', () =>{

beforeEach( () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
    it('valid credentials',() =>{ 

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-form-actions').get('.oxd-button--secondary').click()
        cy.go('back')
        cy.wait(1000)
        cy.go('forward')
        
        })
        
        it.only('Invalid username',() =>{
    
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123', { delay: 0 } )
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.get('.orangehrm-header-container > .oxd-button').click()
            cy.get('.oxd-form-actions').get('.oxd-button--secondary').click()
            cy.go('back')
            cy.wait(1000)
            cy.go('forward')
            
            })

            it('Invalid Password',() =>{
        
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin456{enter}')
                cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
                cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
                cy.get(':nth-child(1) > .oxd-main-menu-item').click()
                cy.get('.orangehrm-header-container > .oxd-button').click()
                cy.get('.oxd-form-actions').get('.oxd-button--secondary').click()
                cy.go('back')
                cy.wait(1000)
                cy.go('forward')
                
                })
    

})

