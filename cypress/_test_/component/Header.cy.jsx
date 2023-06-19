import { mount } from "cypress/react18";
import { Provider } from "react-redux";
import { store } from "../../../src/features/store";
import { SearchProvider } from "../../../src/context/Context";
import Header from "../../../src/components/Header";

describe("Header.cy.jsx", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <Header />
        </SearchProvider>
      </Provider>
    );
  });

  it("should render text and video correctly", () => {
    //Check if the header element is visible and exist
    cy.get("header").should("be.visible").should("be.visible").and("exist");
    //Check if the video element is visble
    cy.get("video").should("be.visible");
    //Check if the overlay element exist
    cy.get("[data-cy='overlay']").should("exist");
    //Check if the css exist
    cy.get(".absolute.inset-0").should("exist");
    //Check if paragraph element is visble, contains text and exit
    cy.get("p")
      .should("be.visible")
      .and("contain.text", "Endless Possibilities, Delicious Results")
      .and("exist");
    //Check if the article element contains text
    cy.get("article").and(
      "contain.text",
      "Endless Possibilities, Delicious Results"
    );
  });
});
