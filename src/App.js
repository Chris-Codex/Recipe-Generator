import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./features/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RecipeDetails from "./pages/RecipeDetails";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
