/// <reference types ="cypress"/>
describe('All login test', () =>{

    beforeEach( () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    })
        it('New user',() =>{ 
    
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
            //To hide sub menu
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
            // To show sub menu
            cy.wait(2000)
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()

            /// for leave
            ///cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
            
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.wait(2000)
            cy.get('.orangehrm-header-container > .oxd-button').click()

            ///To Add a user
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type('{downArrow}{enter}')
            .type('{downarrow},{enter}')
            cy.get('.oxd-autocomplete-text-input > input').type('orange').wait(2000).type('{downarrow},{enter}')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').type('{downarrow},{enter}')
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('demouser1{enter}')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Qwerty@123')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Qwerty@123')
            cy.get('.oxd-button--secondary').should('be.visible').click()
            })

            

            
        })

