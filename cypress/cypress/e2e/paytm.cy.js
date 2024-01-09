/// <reference types ="cypress"/>

describe('Date picker', function() {

    beforeEach( function () {
        
        cy.fixture('paytm').then(function(data){
            this.data=data

        })
    
    })

it('Paytm', function () {
   cy.visit('https://tickets.paytm.com/flights/')
    //To select from
    cy.get('#srcCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type(this.data.From)
    cy.get('[role="dialog"]').contains(this.data.From).click()

    //To select to
    cy.get('#destCode').click()
    cy.get('._3i2Wp').click()
    cy.get('[id="text-box"]').type(this.data.To)
    cy.get('[role="dialog"]').contains(this.data.To).click()

    //To select depature date
    cy.get('#departureDate').click()
      cy.get('table.calendar tbody:nth-child(2)').eq(0)
      .find('.calendar__day').contains(this.data.date).click()
      
      //To select flight
      cy.get('#flightSearch').click()
      cy.wait(500)
      cy.get('#flightsList [class="M9kpV"]').contains(this.data.flight_name)
      cy.wait(500)
      cy.get('#b779e38c4c70aabe1733e35d493ccf40 > ._1gMv6 > ._5Cbbf > ._1Ply7 > .zHp8j > ._1zafZ > :nth-child(1)').click()
      cy.get(':nth-child(2) > ._3_gN0 > ._3bvz6 > ._33sPg').invoke('removeAttr','target').click()
  

     
     
     
     
     
      //To print the flight details
      //.each(($flight,index,$list) => {
        //cy.wrap($flight).invoke('text').then((text) => {
          //if($flight.text().includes('08:45pmHYD'))
         //{
          //cy.get('._5Cbbf [class="_29g4q"]').contains("08:40PMHYD")
         // cy.get('._5Cbbf div:nth-child(6)')
        //  cy.log('Flight details: ' +text)
         //}       
       // })
      //})
       
    
    
    
       //for logging the dates
       //.find('tr td .calendar__day')
       //  .find('[class="calendar__day"]')
      //  .each((el) => {
       // const date = el.text()
      // cy.log(date)
      /////////


    
       })
})
