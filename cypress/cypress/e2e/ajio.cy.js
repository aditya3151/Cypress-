/// <reference types = "Cypress"/>
describe("Ajio", () => {

    it("ajio_locators", ()=> {

        cy.visit("https://www.ajio.com/")
        cy.get('[title="HOME AND KITCHEN"]').trigger('mouseover')
        cy.contains('Serveware & Drinkware').click()
        //cy.get('body').trigger('keydown', { keyCode: 27})
        cy.get('[aria-label="price"]').click()
        cy.get('[value="Rs.2001-2500"]').click({force:true})
        cy.get('[role="row"]').each( $info => {
             
            const price =parseFloat($info.find('[class="price  "]').text().replace(/[₹,]/g, ''))
            
           const item = $info.find('[class="nameCls"]').text()

       
            if(price > 2000) {
                cy.log( 'product name :'+item + "\n\n" + 'product price:'+price)
               
            }
        })
        
    })
})