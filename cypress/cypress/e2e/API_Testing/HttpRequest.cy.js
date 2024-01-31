/// <reference types ="cypress"/>
describe('HTTP req', () => {




    it("Get", ()=> {

        cy.request('GET','http://localhost:3000/students/1')
        .its('status').should('equal','200')
    })
})