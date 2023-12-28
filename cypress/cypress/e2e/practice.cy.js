describe('Orange HRM', () =>{
    let isAuthenticated = false;

    beforeEach( () =>{
        //////////////
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    })
        it('Login',() =>{ 
    
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
            //To hide sub menu
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
            // To show sub menu
            cy.wait(2000)
            cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        })
            
            
            it.only('New user',() =>{
            
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
            cy.get(':nth-child(1) > .oxd-main-menu-item').click()
            cy.wait(2000)
            cy.get('.orangehrm-header-container > .oxd-button').click()

            ///To Add a user
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
            cy.get('[role="listbox"]').contains("Admin").should('have.text','Admin').click()
            cy.get('.oxd-autocomplete-text-input > input').type('test')
            cy.get('[role="listbox"]').wait(1000).contains("Orange Test").click()
            //cy.contains('Invalid').should('not.be.visible')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
            cy.get('[role="listbox"]').contains("Enabled").click()
            cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin21').wait(1000)
            //cy.get('.oxd-input-group > .oxd-text').should('be.visible')
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Qwerty@123")
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Qwerty@123")
            cy.get('.oxd-button--secondary').click()
            cy.get('#oxd-toaster_1').should('be.visible')
    
        })

        })