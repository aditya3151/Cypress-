/// <reference types ="cypress"/>
before(function(){

    cy.fixture('example.json').as('test_data')

})

it('readand write', function(){
   cy.fixture('example.json').then((data) => {
     cy.log(data.name)
     cy.log(data.email)
      const item =(data.name).toUppercase()
   cy.log('ITEM'+item)
   })
   cy.log(this.test_data.name)
   

})
it('write file', () => {




})