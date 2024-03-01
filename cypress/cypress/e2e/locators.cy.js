describe('locators_prac', () => {


    const x=null
    it("do_test", () => {
        cy.visit('https://www.cypress.io/')
        cy.get('#dropdownDocs').trigger('mouseover')
        cy.get('a[href*="https://docs.cypress.io/api/commands/and"]').invoke('removeAttr','target').click()
        cy.get('a[href*="/api/commands/and"]').click()
        cy.get(':nth-child(6) > .codeBlockContent_biex > .prism-code > .codeBlockLines_e6Vv').then(($ele, index, $list) => {
            const data =$ele.text().replaceAll(/[.]/g, '<<>>')
            
            cy.log('timepass'+data)
            
        })
        
    })
})