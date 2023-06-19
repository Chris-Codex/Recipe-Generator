import { Provider } from "react-redux";
import Footer from "../../../src/components/Footer";
import { SearchProvider } from "../../../src/context/Context";
import { mount } from "cypress/react18";
import { store } from "../../../src/features/store";

describe("Test Footer", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <Footer />
        </SearchProvider>
      </Provider>
    );
  });

  // Asserts that the footer component is visible and rendered correctly
  it("should test to ensure everything is working", () => {
    cy.get("[data-cy='container']").should("be.visible");
    cy.contains("Recipe Generator").should("be.visible");
    cy.contains("2023 R-Generator. Payroc Assessment").should("be.visible");
    cy.get("[data-cy='icon']").should("be.visible");
  });
});
