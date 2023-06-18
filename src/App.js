import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./features/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/Context";
import RecipeDetail from "./components/categories/CategoryDetail";
import Recipe from "./components/recipes/Recipe";
import CategoryDetail from "./components/categories/CategoryDetail";


function App() {
  return (
    <Provider store={store}>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category_recipe_detail/:id" element={<CategoryDetail />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </Provider>
  );
}

export default App;
