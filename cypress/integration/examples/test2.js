/// <reference types="cypress"/>
describe("tests", () => {
  it("testui", () => {
    //checkbox
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("input#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("input#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option3"]);

    // dropdown
    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2");
    //or we can use cy.get("select")

    //dynamic dropdown --> means it searches item on providing search inputs
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");

    // another concept visible and invisible elements
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.get("[value='radio1']").check().should("be.checked");
    // cy.get("[value='radio1']").uncheck().should("not.be.checked");
  });
});
