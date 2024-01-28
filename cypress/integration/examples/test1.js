/// <reference types="cypress"/>
describe("My First Test suite", () => {
  it("first test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);
    //cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const veg = $el.find("h4.product-name").text();
        if (veg.includes("Cashews")) {
          //$el.contains("ADD TO CART").click();
          cy.wrap($el).find("button").click();
          cy.get(".brand").then(function (logoelement) {
            cy.log(logoelement.text());
            cy.get(".brand").should("have.text", "GREENKART");
            cy.get(".cart-icon > img").click();
            cy.get(".cart-preview > .action-block > button").click();
            cy.contains("place order").click();
          });
        }
      });
  });
});
