/// <reference types ="cypress"/>

describe('Amazon',  () =>{

    beforeEach( () => {

        cy.fixture('data').then(function (data) {
            this.data = data

        })
        cy.request('GET', 'https://www.amazon.in/').then((response) => {
            // Use the response data as needed
          });

    })

    it('Phone Data using fixtures', function () {

        cy.visit('https://www.amazon.in/')
        cy.get('[role="button"]').contains("All").click()
        cy.get('#hmenu-content').find('li').eq(15).click({ force: true })//.contains(this.data.catageroy).click({ force: true })
        cy.get('.hmenu-item').contains(this.data.mobiles).click({ force: true })

       // cy.get('.hm-icon-label').click()
        //cy.get('[class="hmenu-item"]',{timeout: 200}).contains(this.data.catageroy).click()
       // cy.get('[class="hmenu-item hmenu-title "]')
       // cy.get('[class="hmenu-item"]').contains(this.data.mobiles).click({force:true})

        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').contains(this.data.brand).click()

        // waiting for the results to load and an assertion
        cy.get('.s-result-item', { timeout: 60000 }).should('have.length.greaterThan', 0)

        // get product name and price
        //cy.get('.s-result-item .a-link-normal')
        cy.get('.s-result-item [data-cy="title-recipe"]').each(($product) => {
            cy.wrap($product).invoke('text').then((text) => {
                cy.log('Product Name: ' + text)
            })
        })
        //For product price
        cy.get('.s-result-item .a-price .a-price-whole').each(($price) => {
            cy.wrap($price).invoke('text').then((text) => {
            cy.log('Product Price: $' + text)
            })
        })
        //For product delivery time    
        cy.get('.s-result-item [data-cy="delivery-recipe"]').each(($Delivery) => {
            cy.wrap($Delivery).invoke('text').then((text) => {
                cy.log('Product Delivery:$' + text)
            })
        })
    })


    it('dynamic dropdown', function () {

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type(this.data.search)
        cy.get('[role="button"]').contains(this.data.product).click()
        cy.title().should('include', this.data.product)
        cy.get('.s-search-results .a-link-normal')
        cy.get('[target="_blank"]').contains(this.data.product_name).click()
        //cy.get('.s-result-item [data-cy="title-recipe"]').each(($product) => {         
        //cy.wrap($product).invoke('text').then((text) => {           
        // cy.log('Product Name: ' + text)
        // })[class="hmenu-item"]

    })

    it.only('child window ', function () {
        cy.visit('https://www.amazon.in/')
        //cy.get('[class="hmenu-item hmenu-title "]').contains('Shop by Category')
       // cy.get('[data-ref-tag="nav_em_1_1_1_14"]',{timeout:100}).contains(this.data.catageroy).click({force:true})
       cy.get('[role="button"]').contains("All").click()
        cy.get('#hmenu-content').find('li').eq(15).click({ force: true })//.contains(this.data.catageroy).click({ force: true })
        cy.get('.hmenu-item').contains(this.data.mobiles).click({ force: true })
        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').contains(this.data.brand).click()
        cy.get('.s-result-item [data-cy="title-recipe"]').contains(this.data.product_mobile).invoke('removeAttr', 'target').click()
       // cy.get('#title').should('have.text', this.data.mobile_title)
        cy.get('Input[type="button"]').click({ force: true }).wait(200)
        cy.get('#attach-close_sideSheet-link').wait(4000).click()
        cy.get('#nav-cart').wait(200).click()
        cy.get('.a-truncate-cut').should('contain', this.data.cart)


    })
})