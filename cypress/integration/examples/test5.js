/// <reference types="cypress"/>
describe("working with mouse hover", () => {
  it("testing mouse hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
});
