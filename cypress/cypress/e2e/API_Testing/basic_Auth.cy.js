/// <reference types = "cypress"/>
describe("Auth_Types", () =>{

    //let res=null
    const name = "postman"
    const pass = "password"
    it("Basic_Auth",() => {
    
        cy.request({

            method: "GET",
            url: "https://postman-echo.com/basic-auth",     
            auth: {
                username : "postman",
                password : "password"
            } 
        }).then((Response) => {

            res=Response.body
            cy.log(res)


        })
    })

    it.only("Digest_Auth", () => {

        cy.request({
            method: "GET",
            url: "https://postman-echo.com/digest-auth",
            auth: {
                name,
                pass,
                digest : true,
                failOnStatusCode: false
            }
        })
    })

    
})