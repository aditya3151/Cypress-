/// <reference types ="cypress"/>

describe('All login test', () =>{

    beforeEach( () =>{
        cy.visit('https://www.flipkart.com/')
    
    })



    it("Mobiles" , ()=> {

        cy.get('._1ch8e_').contains('Mobiles').click()
       // cy.get('_1bEAQy _2iN8uD _312yBx')
       //cy.scrollTo('bottom',{timeout:5000})

       cy.document().then((doc) => {
        // Check if the document is fully loaded
        if (doc.readyState === 'complete') {
            // Perform actions that depend on the document state
            //cy.get('#container [class="_1AtVbE col-12-12"]').contains('Apple Smartphones').scrollIntoView()//.find('._1xCO19')
            cy.wait(10000)
            cy.get('a[href="/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DAPPLE&param=167811&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkFwcGxlIFNtYXJ0cGhvbmVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&wid=37.productCard.PMU_V2_27"]')
        }
    });
        
       
      

    
      
    })

    it("login", () => {
 
        cy.intercept(
            {
              method: 'GET', // Route all GET requests
              url: '/users/*', // that have a URL that matches '/users/*'
            },
            [] // and force the response to be: []
          ).as('getUsers')
        cy.get('._1TOQfO > span').click()
        cy.get('[type="text"]').eq(1).type('1234')


    })

    it('test' , () => {

        cy.intercept(
            {
              method: 'GET', // Route all GET requests
              url: '/users/*', // that have a URL that matches '/users/*'
            },
            [] // and force the response to be: []
          ).as('getUsers') // and assign an alias
    })
})