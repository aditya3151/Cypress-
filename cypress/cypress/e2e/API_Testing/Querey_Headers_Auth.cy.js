/// <reference types = "cypress"/>
describe("HTTPS", ()=> {


const queryparam = { page: 2}

    it("querey",() => {
        
        cy.request(
            {
            method : "GET",
            url    : "https://reqres.in/api/users/",
            qs     : queryparam
        }
        )
        .then((Response)=> {
            expect(Response.status).to.eq(200)
            expect(Response.body.data[0].email).to.eq("michael.lawson@reqres.in")
            expect(Response.body).to.have.property("support")
            expect(Response.body.support.url).to.eq("https://reqres.in/#support-heading")
            expect(Response.body.data).has.length(6)
            expect(Response.body.data[1]).to.has.property("first_name","Lindsay")
            cy.log(Response.body.data[1].first_name)
            cy.log(Response.body.data)

    })

})
})