describe("Put_post", () => {


    const site = "https://reqres.in/api/users"

    let mail = null
    let data = null


    it("Post", () => {

        cy.request({
            method: "POST",
            url: site, 
            body: {
                "name": Math.random().toString(36).substring(2),
                "email": Math.random().toString(36).substring(2) + "@gmial.com"
            }
        }).then((Response) => {
            mail = Response.body.email
            expect(Response.status).to.be.eq(201)
            expect(Response.statusText).to.eq('Created')
            expect(Response.body.email).to.eq(mail)
            let id = Response.body.id
            cy.log(id)
            data = Response.body
            cy.log(data)
        })
    })

    it("PUT", () => {

        cy.request({

            method: "PUT",
            url: site + "/2",
            body: {
                "name": Math.random().toString(36).substring(2),
                "email": Math.random().toString(36).substring(2) + "@gmial.com"
            }
        }).then((Response) => {
            expect(Response.status).to.eq(200)
            let data1 = Response.body
           expect(data1).to.not.eq(data)
            cy.log(data1)
        })
    })

  
})