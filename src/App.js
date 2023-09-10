import { Provider } from "react-redux";

import { store } from "./features/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/Context";
import Categories from "./pages/categories/Categories";
import CategoryDetail from './pages/categories/CategoryDetail';
import Recipe from './pages/recipes/Recipe';
import RecipeDetail from './pages/recipes/RecipeDetail';






function App() {
  return (
    <Provider store={store}>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Categories />} />
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
