/// <reference types ="cypress"/>

describe('date picker', () => {

    it('date', () => {
        cy.visit("https://www.apsrtconline.in/oprs-web/guest/home.do?h=1")
        cy.get('#fromPlaceName').type('hyderabad{downarrow}')
        cy.get('#txtJourneyDate').click()
        cy.wait(200)
        cy.get('.ui-datepicker-calendar').eq(1)
        .find('.ui-state-default').contains(5).click()
    })
})