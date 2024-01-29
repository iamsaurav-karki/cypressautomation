/// <reference types="cypress"/>
describe("tests", () => {
  it("testui", () => {
    //checkbox
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //cy.get(".inputs").type("saurav");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //link opening in new tab
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.wait(8000);
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
