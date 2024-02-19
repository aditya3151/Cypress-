/// <reference types= "cypress" />

describe("Auth",() => {

let authToken=null
    beforeEach("creating Auth token", ()=> {

        cy.request({

              method : "POST",
              url    : "https://dummyjson.com/auth/login",
              headers:{
                'Content-Type' : 'application/json'
              },
              body   :
              {
                    username: "kminchelle",
                    password: "0lelplR"
              }
        }).then((Response)=> {
            expect(Response.status).to.eq(200)
            authToken=Response.body.token;
            cy.log(authToken)
            cy.log(Response)
        })
    })

    it("Get",() => {
        cy.request({
            method : "GET",
            url    : "https://dummyjson.com/auth/me",
            headers:{
              'Content-Type' : 'application/json',
              'Authorization': 'Bearer '+authToken
            }
      }) .then((Response) => {
          expect(Response.status).to.eq(200)
          
      })

    })
})