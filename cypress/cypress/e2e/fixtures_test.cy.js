/// <reference types = "cypress"/>
describe('fixtures', function ()  {

 before( function () {

 cy.visit('https://www.amazon.in/')
     
 cy.fixture('test_1').then(function(data)
 {

this.data=data

 })
 })
    it('fixtures', function ()  {
        
        cy.get('#twotabsearchtextbox').type(this.data.name)
    })
})