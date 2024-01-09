/// <reference types ="cypress"/>

describe('Amazon', function () {

    beforeEach(function () {

        cy.fixture('data').then(function (data) {
            this.data = data

        })

    })

    it('Phone Data using fixtures', function () {

        cy.visit('https://www.amazon.in/')
        cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content').wait(500).contains(this.data.catageroy).click()
        ///cy.get('.hmenu-visible > :nth-child(15) > .hmenu-item > .nav-sprite').click()
        //cy.contains('All Mobile Phones').wait(500).click()
        cy.get('.hmenu-item').contains(this.data.mobiles).click({ force: true })
        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').wait(500).contains(this.data.brand).click()

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
        // })

    })

    it('child window ', function () {
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content').wait(200).contains(this.data.catageroy).click()
        ///cy.get('.hmenu-visible > :nth-child(15) > .hmenu-item > .nav-sprite').click()
        //cy.contains('All Mobile Phones').wait(500).click()
        cy.get('.hmenu-item').contains(this.data.mobiles).click({ force: true })
        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').wait(500).contains(this.data.brand).click()
        cy.get('.s-result-item [data-cy="title-recipe"]').contains(this.data.product_mobile).invoke('removeAttr', 'target')
            .click()
        cy.get('#title').should("have.text", this.data.mobile_title)
        cy.get('Input[type="button"]').click({ force: true }).wait(500)
        cy.get('#attach-close_sideSheet-link').wait(4000).click()
        cy.get('#nav-cart').wait(200).click()
        cy.get('.a-truncate-cut').should('contain', this.data.cart)


    })
})