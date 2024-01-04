/// <reference types ="cypress"/>

describe('Date picker', () =>{

it('Paytm', ()=> {
    cy.visit('https://tickets.paytm.com/flights/')
    
    //To select from
    cy.get('#srcCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type('Hyderabad')
    cy.get('[role="dialog"]').contains('Hyderabad').click()

    //To select to
    cy.get('#destCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type('Delhi')
    cy.get('[role="dialog"]').contains('Delhi').click()

    //To select depature 
    cy.get('#departureDate').click()
      //cy.get('table.calendar').eq(1)
      cy.get('table.calendar tbody:nth-child(2)').eq(0)
      .find('.calendar__day').contains('10').click()
      
       //for logging the dates
       //.find('tr td .calendar__day')
       //  .find('[class="calendar__day"]')
      //  .each((el) => {
       // const date = el.text()
      // cy.log(date)
      /////////


    
       })
})
