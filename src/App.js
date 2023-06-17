import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./features/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/Context";
import RecipeDetail from "./components/CategoryDetail";



function App() {
  return (
    <Provider store={store}>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipeDetail/:id" element={<RecipeDetail />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </Provider>
  );
}

export default App;
