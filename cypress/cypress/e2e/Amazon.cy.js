/// <reference types ="cypress"/>

describe('All login test', () =>{

    beforeEach( () =>{
        cy.visit('https://www.amazon.in/')
    
    })

    it('Phone Data',() =>{ 

        cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content').wait(500).contains("Mobiles, Computers").click()
        ///cy.get('.hmenu-visible > :nth-child(15) > .hmenu-item > .nav-sprite').click()
        //cy.contains('All Mobile Phones').wait(500).click()
        cy.get('.hmenu-item').wait(500).contains("All Mobile Phones").click()
        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').wait(500).contains("Apple").click()

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
        cy.get('.s-result-item [data-cy="delivery-recipe"]').each(($Delivery) =>{

            cy.wrap($Delivery).invoke('text').then((text) => {
            cy.log('Product Delivery:$' + text)
            })
        })
    })


    it.only('search bar',() => {

        cy.get('#twotabsearchtextbox').type('apple mac')
        cy.get('[role="button"]').contains("apple macbook pro").click()
        cy.title().should('include','apple macbook pro')
        cy.get('.s-search-results .a-link-normal')
        cy.get('[target="_blank"]').contains("Apple MacBook Air Laptop M1 chip").click()
        cy.get('.s-result-item [data-cy="title-recipe"]').each(($product) => {         
            cy.wrap($product).invoke('text').then((text) => {           
                cy.log('Product Name: ' + text)
            })
        })
   

    })


    it.skip('Product opening', () => {

        cy.get('#nav-hamburger-menu').click()
        cy.get('#hmenu-content').wait(500).contains("Mobiles, Computers").click()
        ///cy.get('.hmenu-visible > :nth-child(15) > .hmenu-item > .nav-sprite').click()
        //cy.contains('All Mobile Phones').wait(500).click()
        cy.get('.hmenu-item').wait(500).contains("All Mobile Phones").click()
        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()
        cy.get('#brandsRefinements').wait(500).contains("Apple").click()
        cy.get('.s-result-item [data-cy="title-recipe"]').contains("Apple iPhone 15 (128 GB) - Black").invoke('removeAttr','target').click()
        cy.get('#title').should("have.text" , "         Apple iPhone 15 (128 GB) - Black              ")
        cy.get('[type="button"]').contains("Add to Cart").click()


    })


})