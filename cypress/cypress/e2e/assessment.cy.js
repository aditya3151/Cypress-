describe("Flipkart", () => {


    it("Furniture", () => {

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