import Navbar from "../../../src/components/Navbar";
import { mount } from "cypress/react18";
import { SearchContext, SearchProvider } from "../../../src/context/Context";
import { Provider } from "react-redux";
import { store } from "../../../src/features/store";
import { BrowserRouter } from "react-router-dom";
import { React, useContext } from "react";

describe("Test the Navbar", () => {
  //Test case to check if the button is excuting its action by toggle the navbar
  it("should toggle the form form state", () => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );

    //This test function toggle the navbar modal where they are either set to true or false
    const initialState = false;
    cy.wrap(initialState).as("toggleHamburgerState");

    cy.get("@toggleHamburgerState").then((initialState) => {
      expect(initialState).to.be.false;
    });

    //Call the toggle function to toggle the state and should be true
    const toggleState = !initialState;
    cy.wrap(toggleState).as("toggleFormState");

    cy.get("@toggleFormState").then((toggleState) => {
      expect(toggleState).to.be.true;
    });
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //This test function toggle the search recipes form modal
  it("should toggle the recipes form", () => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );

    cy.window().then((win) => {
      //Mocks the context value with handleSearchToggle
      const handleSearchToggle = cy.stub();

      //Mocked the context value with the stubbed function
      const useContextStub = cy.stub().withArgs(SearchContext).returns({
        handleSearchToggle: handleSearchToggle,
      });

      cy.stub(win.React, "useContext").callsFake(useContextStub);

      //Expect the handleSearchToggle to be called
      expect(handleSearchToggle).to.been.called;
    });
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Test if the elements exist and are properly rendered
  it("should ensure elements are rendered correctly and also navigate th homepage when the Home link is clicked", () => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );

    //Ensure the container element is visible
    cy.get("[data-cy='container']").should("be.visible");
    //Ensure header 1 element is visible, exist and contains a text
    cy.get("h1").should("be.visible", "exist").and("contain.text", "Recipes.");
    //Ensure ul element is visible, and contains a text
    cy.get("ul").should("be.visible").and("contain.text", "Home");
    cy.get("ul").should("be.visible").and("contain.text", "Recipe");
    cy.get("ul")
      .should("be.visible")
      .and("contain.text", "Search with Parameters");
    //Ensure the search-recipes, Home amd Recipe elements are clickable
    cy.get("[data-cy='search-recipes']").click();
    cy.get("[data-cy='Home']").click();
    cy.get("[data-cy='Recipe']").click();
  });
});
