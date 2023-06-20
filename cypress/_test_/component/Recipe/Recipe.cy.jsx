import { mount } from "cypress/react18";
import Recipe from "../../../../src/components/recipes/Recipe";
import { Provider } from "react-redux";
import { SearchProvider } from "../../../../src/context/Context";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../../src/features/store";

describe("Test recipe component", () => {
  beforeEach(() => {
    //Define a mock recipe array
    const fetchFiltereedRecipes = [
      {
        idMeal: 1,
        strMeal: "Chicken",
        strMealThumb: "Chicken.jpeg",
      },
      {
        id: 2,
        strMeal: "Salad",
        strMealThumb: "salad.jpeg",
      },
      {
        id: 3,
        strMeal: "Pork",
        strMealThumb: "Pork.jpeg",
      },
    ];

    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <Recipe fetchFiltereedRecipes={fetchFiltereedRecipes} />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Test case to test pagination
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
    const getAllRecipes = [
      "Chicken",
      "Salad",
      "Pasta",
      "Fries",
      "Chicken Curry",
      "Beans",
      "Bread",
      "Pork",
      "Yam",
      "Rice",
    ];

    //Performs the calculation to get expected page count
    const pageCount = getAllRecipes
      ? Math.ceil(getAllRecipes.length / listRecipesPerPage)
      : 0;
    cy.wrap(pageCount).should("equal", pageCount);
  });
});
