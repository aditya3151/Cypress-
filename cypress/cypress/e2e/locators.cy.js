describe('locators_prac', () => {

    it("do_test", () => {
        cy.visit('https://www.w3schools.com/')
        cy.visit({
            url: 'https://www.w3schools.com/',
            method: 'GET',
        })
        cy.wait(10000)
        cy.get('div[id="subtopnav"] a[title="SciPy Tutorial"]')
    })
})