describe("Flipkart", () => {


    it("Furniture", () => {

        cy.visit("https://www.flipkart.com/")
        cy.get('._1XjE3T ._27h2j1').eq(2).trigger('mouseover')
        cy.get('._16rZTH [class="_1BJVlg"]').eq(1).trigger('mouseover')
        cy.contains('Dining Sets').click()
        cy.get('._2YxCDZ').eq(0).select('10000')
        cy.get('._2YxCDZ').eq(1).select('30000')
        cy.get('[title="No Cost EMI"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
        cy.get(':nth-child(5) > ._213eRC > ._2gmUFU').click()
        cy.get('[title="8 Seater"] > ._1Y4Vhm > ._2iDkf8 > ._30VH1S').check({force:true})


        //-----working to print the values--------//
        cy.get('div[class="_1YokD2 _3Mn1Gg"]').then(($details) => {
            const details = $details.text()
            cy.log(details)

            cy.get('._8VNy32 > ._25b18c > ._30jeq3').each(($el, index, $list) => {
                const priceString = $el.text()
                const price = parseFloat(priceString.replace(/[₹,]/g, '') )       
                if( price> 20000){
                    cy.log('Final list:' +price)              
    }      
            }) 
        })
    })
})