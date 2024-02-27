const addElementButtonText = "Add Element";
const deleteElementButton = ".added-manually";

describe("Add/Remove elements tests", () => {
  beforeEach("Visits page", () => {
    cy.visit("/");
    cy.contains("Add/Remove Elements").click();
    cy.url().should("contain", "add_remove_elements");
  });

  it("Adds elements", () => {
    cy.get(deleteElementButton).should("not.exist");
    cy.contains(addElementButtonText).clickMultiple(10);
    cy.get(deleteElementButton).should("exist").should("have.length", 10);
  });

  it("Removes elements", () => {
    cy.contains(addElementButtonText).clickMultiple(10);
    cy.get(deleteElementButton)
      .should("exist")
      .should("have.length", 10)
      .click({ multiple: true })
      .should("not.exist");
  });
});
