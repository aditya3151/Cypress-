/// <reference types = "cypress"/> 
describe("Put_post",() => {
 
 
    
    it("create user", ()=>{

        cy.request({
            method: "GET",
            url:"https://jsonplaceholder.typicode.com/users"
        }).then((Response)=> {

            expect(Response.status).to.be.eq(200)
            cy.log(Response)
        })


    })
})