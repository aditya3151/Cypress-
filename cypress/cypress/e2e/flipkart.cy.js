/// <reference types ="cypress"/>

describe('All login test', () =>{

    beforeEach( () =>{
        cy.visit('https://www.flipkart.com/')
    
    })



    it("Mobiles" , ()=> {

        cy.get('._1ch8e_').contains('Mobiles').click()
        cy.scrollTo('center')
        cy.scrollTo('_1bEAQy _2iN8uD _312yBx')
        cy.get('_1bEAQy _2iN8uD _312yBx')
        cy.get('#container [class="_1AtVbE col-12-12"]').contains('Apple Smartphones')//.find('._1xCO19')
       
      

      //cy.get('a[href="/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DAPPLE&param=167811&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkFwcGxlIFNtYXJ0cGhvbmVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&wid=37.productCard.PMU_V2_27"]')
    })

    it.only("login", () => {
 
        cy.get('._1TOQfO > span').click()
        cy.get('[type="text"]').eq(1).type('1234')


    })
})