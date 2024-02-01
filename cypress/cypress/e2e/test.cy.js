/// <reference types="cypress" />

describe("API links on a public website", () => {
    it("should extract the API links", () => {
      cy.request("https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_a10a1150-354b-4321-8fdf-4aad2cad5343_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J").then((response) => {
        const apiLinks = [];
        const html = response.body;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const elements = doc.querySelectorAll("script, link[rel='stylesheet']");
        for (const element of elements) {
          if (element.src) {
            apiLinks.push(element.src);
            
          }
        }
        expect(apiLinks).to.have.length.greaterThan(0);
        cy.visit('https://www.flipkart.com/')
            cy.get('._1ch8e_').contains('Mobiles').click()
            cy.scrollTo('center')
            cy.scrollTo('500')
            cy.get('#container ._1AtVbE',{timeout:50000}).eq(14).wait(500)
      });
    });
  });