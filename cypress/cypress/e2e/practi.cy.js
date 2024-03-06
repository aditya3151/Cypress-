describe("Flipkart", () => {

    const url= 'https://docs.cypress.io/api/commands/task#:~:text=Examples%E2%80%8B-,cy.,of%20the%20scope%20of%20Cypress.'
    let syn = null;

    it("locators", ()=> {
        cy.visit("https://www.flipkart.com/")
        cy.get('[aria-label="Home & Furniture"]').trigger('mouseover')
        cy.contains('Living Room Furniture').trigger('mouseover')
        cy.contains('Dining Sets').click()
        cy.contains('Seating Capacity').click()
        cy.contains('8 Seater').click()
        //cy.get('[title="No Cost EMI"]').click()
        cy.get('[data-id]').each($info => {
            const infoprice = parseFloat($info.find('div[class="_30jeq3"]').text().replace(/[₹,]/g, ''));
            const infoname = $info.find('[title]').text();
            // Filter items with price greater than 20000
            if (infoprice > 20000) {
                console.log(infoprice); // Log the name of items with price > 20000
                cy.log(infoname,infoprice)
            }
        }) 
    })
    it.only("locators_2", () => {
        cy.visit(url)
        cy.get('body').trigger('keydown', { keyCode: 27})
        cy.get('[data-cy]')
        cy.get(':nth-child(4) > .flex').each(($sort) => {
            let sort =$sort.text()
            cy.log(sort)
        })
        cy.get(':nth-child(4) > .transition-all > .overflow-hidden > :nth-child(4) > .group').click({force:true})
        cy.get(':nth-child(5) > .codeBlockContent_biex > .prism-code > .codeBlockLines_e6Vv').each(($sort_syntax)=> {
            let sort_syntax = $sort_syntax.text()
            cy.log(sort_syntax)
        })
        cy.get(':nth-child(5) > .codeBlockContent_biex > .prism-code > .codeBlockLines_e6Vv').each(($sort_syntax1)=> {
            let sort_syntax1 = $sort_syntax1.text()
            cy.log(sort_syntax1)
        })
        cy.get(':nth-child(4) > .transition-all > .overflow-hidden > :nth-child(4) > .group').click()
        cy.get(':nth-child(5) > .codeBlockContent_biex > .prism-code > .codeBlockLines_e6Vv').each(($sort_syn) => {
            let sort_syn = $sort_syn.text()
            cy.log(sort_syn)
        })  
        cy.get('.theme-doc-markdown > :nth-child(7)').should('be.visible')
        cy.get(':nth-child(57) > a').should('be.visible').click()
        cy.get('.fixed > .border').click()
        cy.get('body').trigger('keydown', { keyCode: 27})
        cy.log('#Actionability')
        cy.get(':nth-child(10) > :nth-child(1) > a').each(($syn)=>{
             syn = $syn.text()
             console.log(syn)
            if(syn === 'Scroll the element into view.'){
                cy.log(syn)
            }
        })
        cy.go('back')
        cy.get(':nth-child(2) > .flex').click()
        cy.get('[href="/api/commands/as"]').should('be.visible').click()
         })

         
})