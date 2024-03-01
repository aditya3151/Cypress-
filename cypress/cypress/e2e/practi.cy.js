describe("Flipkart", () => {

    let title = null;
    let price = null
    it("Furniture", () => {

        cy.visit("https://www.flipkart.com/")
        cy.get('[aria-label="Home & Furniture"]').trigger('mouseover')
        cy.contains('Living Room Furniture').trigger('mouseover')
        cy.contains('Dining Sets').click()
       // cy.get('._1YAKP4 > ._2YxCDZ').select('10000')
       // cy.get('._3uDYxP > ._2YxCDZ').select('30000')
        cy.contains('Seating Capacity').click()
        cy.contains('8 Seater').click()
        cy.get('[title="No Cost EMI"]').click()
        //-----working to print the values--------//
        cy.get('div[class="_1YokD2 _3Mn1Gg"]').then(($details) => {
            const details = $details.text()
            cy.log(details)
            cy.get('._8VNy32 > ._25b18c > ._30jeq3').each(($el, index, $list) => {
                const priceString = $el.text()
                const price = parseFloat(priceString.replace(/[₹,]/g, '') )       
                if( price> 20000){
                    cy.log('Final list:' +price)              
    }      
            }) 
        })
    })

    it.only("locators", ()=> {
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
})