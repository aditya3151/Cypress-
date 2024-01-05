describe('rechage', ()=> {


it('recharge', () => {

cy.visit('https://paytm.com/')
cy.wait(200)
cy.get('[style="background:#00baf2"] > .pjKQH > ._2r0fh > ._3noxt > :nth-child(1) > img').click()
cy.get('._3QlS > ._3_cL').type('9963619522').wait(200)
cy.get('._1dGv > ._3_cL > input').type('179').wait(100)
//cy.get('._1rYk > ._11kC').click({force:true})

cy.get('_1rYk').then(($el) => {
   // if ($el) {
    //   $el.click({force:true})
   // } else {
  //     console.error('Element not found')
  //  }
   })
})



})