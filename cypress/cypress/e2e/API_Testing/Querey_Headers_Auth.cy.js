/// <reference types = "cypress"/>
describe("HTTPS", ()=> {

    it("querey",() => {
        
        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((Response)=> {
            expect(Response.status).to.eq(200)
            expect(Response.body.data[0].email).to.eq("michael.lawson@reqres.in")
            cy.log(Response.body.data[0].email);
            expect(Response.body).to.have.property("support")
            expect(Response.body.support.url).to.eq("https://reqres.in/#support-heading")
    })
})
})