import { Provider } from "react-redux";
import { SearchProvider } from "../../../../src/context/Context";
import { store } from "../../../../src/features/store";
import RecipeDetail from "../../../../src/components/recipes/RecipeDetail";
import { mount } from "cypress/react18";
import { BrowserRouter } from "react-router-dom";

describe("Test recipe details component", () => {
  beforeEach(() => {
    const recipe = {
      idMeal: 1,
      strMeal: "Chicken",
      strMealThumb: "Chicken.jpeg",
    };

    //Asserts that the component mounts correctly
    mount(
      <Provider store={store}>
        <SearchProvider>
          <BrowserRouter>
            <RecipeDetail recipe={recipe} />
          </BrowserRouter>
        </SearchProvider>
      </Provider>
    );
  });
});
