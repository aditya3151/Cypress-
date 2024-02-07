/// <reference types = "cypress"/>
describe("HTTP", () => {




    it("Hard code data", ()=>{

        const requestbody ={

            tourist_name  : "TOM",
            tourist_email : "abc@gmail.com",
            tourist_place : "IN"
        }

        cy.request(
            {
                method : "POST",
                url    : "http://localhost:3000/students",
                body   :requestbody
            }
        )
         .then((Response)=> {
            expect(Response.status).to.eq(201)
            expect(Response.body.tourist_name).to.eq("TOM")
            expect(Response.body.tourist_email).to.eq("abc@gmail.com")
            expect(Response.body.tourist_place).to.eq("IN")

         })
    })

    it("Dynamic data", ()=>{

        const requestbody ={
            tourist_name  : Math.random().toString(36).substring(2),
            tourist_email : Math.random().toString(36).substring(2)+"@gmail.com",
            tourist_place : "IN"
        }
        cy.log(requestbody)
        cy.request(
            {
                method : "POST",
                url    : "http://localhost:3000/students",
                body   :requestbody
            }
        )
         .then((Response)=> {
            expect(Response.status).to.eq(201)
            expect(Response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(Response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(Response.body.tourist_place).to.eq("IN")
         })

    })
    
    it.only("using fixture", () => {

        cy.fixture('api').then((data) => {
           const requestbody = data
            cy.log(requestbody)
            cy.request(

                {
                    method : "POST",
                    url    : "http://localhost:3000/students",
                    body   :requestbody
                }
            )
             .then((Response)=> {
                expect(Response.status).to.eq(201)
                expect(Response.body.tourist_name).to.eq(requestbody.tourist_name)
                expect(Response.body.tourist_email).to.eq(requestbody.tourist_email)
                expect(Response.body.tourist_place).to.eq(requestbody.tourist_place)
             })
        })
    })
})