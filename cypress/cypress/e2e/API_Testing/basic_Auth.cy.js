/// <reference types = "cypress"/>
describe("Auth_Types", () =>{

    let res=null
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

    it("Digest_Auth", () => {

        cy.request({

            method: "GET",
            url: "https://postman-echo.com/digest-auth",
            auth: {

                username : "postman",
                password : "password",
                digest : "true"
            }
        })
    })
})