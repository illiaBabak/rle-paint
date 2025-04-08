describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should paint", () => {
    cy.get("[data-testid='input']").type("10101010101010101010101010101010");
    cy.get("[data-testid='button']").click();
    cy.get("[data-testid='alert']").should("exist");
    cy.get("[data-testid='alert']").should("have.class", "success");
  });

  it("Should handle input", () => {
    cy.get("[data-testid='input']").type("123");
    cy.get("[data-testid='button']").click();
    cy.get("[data-testid='alert']").should("exist");
    cy.get("[data-testid='alert']").should("have.class", "error");
  });
});
