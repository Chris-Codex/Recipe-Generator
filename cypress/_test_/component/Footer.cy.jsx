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

  it("should test to ensure everything is working", () => {
    cy.get("[data-cy='container']").should("be.visible");
  });
});
