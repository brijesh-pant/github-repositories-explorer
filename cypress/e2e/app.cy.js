/// <reference types="cypress" />

const usernameInputElement = "#username-input";
const usernameInputHelperTextElement = "#username-input-helper-text";
const noResultsFoundElement = "[data-testid='no-results-found']";
const searchButtonElement = "[data-testid='search-button']";
const userListElement = "[data-testid='user-list']";
const userListItemElement = "[data-testid='user-list-item']";
const repoListElement = "[data-testid='repo-list']";

describe("github repositories explorer app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visit application", () => {
    cy.contains(/check out the docs/i).should("exist");
    cy.get(noResultsFoundElement).should("exist");

    cy.get(searchButtonElement).should("be.disabled");
    cy.get(usernameInputElement, { name: /username/i }).type("dan");
    cy.get(searchButtonElement).should("not.be.disabled");
    cy.get(searchButtonElement).click();
    cy.get(usernameInputHelperTextElement)
      .contains("Showing results for dan…")
      .should("exist");

    cy.get(noResultsFoundElement).should("not.exist");
    cy.get(userListElement).should("exist");
    cy.get(userListItemElement).first().should("have.class", "Mui-selected");
    cy.get(repoListElement).should("exist");

    cy.get(usernameInputElement, { name: /username/i }).clear();
    cy.get(searchButtonElement).should("be.disabled");
  });
});
