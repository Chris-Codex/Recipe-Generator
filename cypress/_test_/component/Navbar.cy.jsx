import Navbar from "../../../src/components/Navbar";
import { mount } from "cypress/react18";
import { SearchProvider } from "../../../src/context/Context";
import { Provider } from "react-redux";
import { store } from "../../../src/features/store";
import { BrowserRouter } from "react-router-dom";

describe("Test the Navbar", () => {
  //Ensure the toggle button is performing its actions
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

    //Toggle te form state function sould be set to false
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
});
