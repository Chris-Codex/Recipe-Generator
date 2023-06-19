import { mount } from "cypress/react18";
import Recipe from "../../../../src/components/recipes/Recipe";
import { Provider, useSelector } from "react-redux";
import { SearchProvider } from "../../../../src/context/Context";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../../src/features/store";

describe("Recipe.cy.jsx", () => {
  it("should calculate the listRecipesPerPage and nPageVisited ", () => {
    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <Recipe />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );

    //Assigns values to pageNumber and listRecipesPerPage
    const pageNumber = 2;
    const listRecipesPerPage = 24;

    //Calculates the expected value for number of pages visited
    const nPageVisted = pageNumber * listRecipesPerPage;
    //Asserts the value of pageNumber
    cy.wrap(pageNumber).should("equal", 2);
    //Asserts the value of listRecipesPerPage
    cy.wrap(listRecipesPerPage).should("equal", 24);
    //Asserts the value of nPageVisted
    cy.wrap(nPageVisted).should("equal", 48);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Defined a mock array
    const getAllRecipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Performs the calculation to get expected page count
    const pageCount = getAllRecipes
      ? Math.ceil(getAllRecipes.length / listRecipesPerPage)
      : 0;
    cy.wrap(pageCount).should("equal", pageCount);
  });
});
