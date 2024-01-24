/// <reference types ="cypress"/>
describe('Amazon', () => {
    beforeEach(function () {

        cy.fixture('data').then(function (data) {
            this.data = data

        })
    })

    it('child window ',  function () {


        cy.visit('https://www.amazon.in/')
        

        cy.get('[role="button"]').contains("All").click()
        cy.get('#hmenu-content').find('li').eq(15).click({ force: true })//.contains(this.data.catageroy).click({ force: true })
        cy.get('.hmenu-item').contains(this.data.mobiles).click({ force: true })


    
     // cy.get('a.hmenu-itemi.nav-sprite.hmenu-arrow-next').each(($product) =>{

       // cy.wrap($product).invoke('text').then((text) => {
        //    if(text === 6, function () {

          //      cy.log('category:', +text)
         //   })
          //  ({  
          //      cy.log('not working:', +text)
          //  })
      //  })
        
      //})cy.get('[role="button"]').contains("All").click()
        //cy.get('#hmenu-customer-profile-right').click()
        //cy.get('#ap_email').type(this.data.num)
        //cy.get('.a-button-inner > #continue').click()
        //cy.get('#ap_password').type(this.data.pass)
       // cy.get('#signInSubmit').click()

    })



   
})

//