// main.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
context("Counter main", () => {
    // приложение должно открыться по адресу: http://localhost:3000
    it("Should open app on localhost:3000", () => {
      cy.visit("http://localhost:3000");
    });
  });