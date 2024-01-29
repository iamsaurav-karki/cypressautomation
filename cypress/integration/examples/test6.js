/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import "cypress-iframe";
describe("working with iframe", () => {
  it("testing iframe", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
ss;
