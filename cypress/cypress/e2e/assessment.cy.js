describe("Flipkart", () => {



    it("Furniture", () => {


        cy.visit("https://www.flipkart.com/")
        cy.get('._1XjE3T ._27h2j1').eq(2).click({force:true})//.invoke('show')
        cy.get('._16rZTH [class="_1BJVlg"]').eq(1).click({force:true})//.find('span').invoke('show')
        cy.get('._1l5b6d [alt="Dining Sets"]').eq(1).click()
        cy.get('._2YxCDZ').eq(0).select('10000')
        cy.get('._2YxCDZ').eq(1).select('30000')
      //  cy.get(':nth-child(5) > ._213eRC > ._2gmUFU').click()
       // cy.get('._3FPh42').check(['4 Seater','8 Seater']) 
       // cy.get('[title="2 Seater"] > ._1Y4Vhm > ._2iDkf8 > ._30VH1S').check({force:true})
        cy.get('[title="No Cost EMI"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()

        cy.get(':nth-child(5) > ._213eRC > ._2gmUFU').click()
        cy.get('[title="8 Seater"] > ._1Y4Vhm > ._2iDkf8 > ._30VH1S').check({force:true})

        cy.get('._8VNy32 > ._25b18c > ._30jeq3').each(($el, index, $list) => {
            //cy.log($el.text())
            const priceString = $el.text()
            const price = parseFloat(priceString.replace(/[₹,]/g, '') )       
            if( price> 20000){
                cy.log('Final list:' +price)  
                cy.get('.s1Q9rs')    
        }
        })
    })
})