describe('All login test', () => {


  it('Alerts', () => {

///for checking alerts and auto pop-ups
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()


    cy.on('window:alert', (str) => {

      expect(str).to.equal('Hello , share this practice page and share your knowledge')


    })

    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (str) => {


      expect(str).to.equal('Hello , Are you sure you want to confirm?')


    })
  })

  it.only('child tab', () => {
      ///from parent to child window
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr', 'target').click()
//to work on child window
    cy.origin("https://www.qaclickacademy.com/", () => {

    
      cy.get('[href="about.html"]').contains("About").click()
      cy.get(".mt-50 h2").should('contain','QAClick Academy')

      cy.go("back")
      cy.go("back")
    })
 ////To work on table content 
      cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {


      const text=$e1.text()
      if(text.includes("Sportsman")){

           cy.get('tr td:nth-child(2)').eq(index).next().next().then(function(price){

            const priceText=price.text()
            expect(priceText).to.equal('31')
           })

      }



      })
    
  })
})
