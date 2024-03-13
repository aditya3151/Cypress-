/// <reference types ="cypress"/>
describe('HTTP req', () => {


    const res = null
    const site = "http://localhost:3000/students/"

    it("Get", () => {
        cy.request('GET', 'http://localhost:3000/students')
            .its('status').should('equal', 200)
    })

    it("Pull", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/students/',
            body: {
                name: "tom",
                location: "india",
                phone: "23231",
                courses: [
                    "Java",
                    "Selenium"
                ]
            }
        })
            .its('status').should('equal', 201)

    })

    it("put", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/students/c44f",
            body: {
                name: "SA",
                location: "for put",
                phone: "for put",
                courses: [
                    "for put"
                ]
            }
        }).then((Response)=> {
                 res = Response.body.id
                cy.log(res)
            })
    })

    it("Del", () => {
        cy.request({
            method: "DELETE",
            url: site + res 
        }).its('status').should('equal', 200)
    })
})