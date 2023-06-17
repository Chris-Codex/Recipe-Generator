import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FetchRecipeFilter,
  fetchAllCategories,
  fetchAllIngredients,
  fetchAllRecipes,
} from "../services/api";
import { AiOutlineSearch } from "react-icons/ai";
import {
  selectAllCategories,
  selectAllIngredients,
  setAllRecipes,
} from "../features/recipeSlice/ingredientSlice";
import Pagination from "./Pagination";
import SearchForms from "./SearchForms";
import { SearchContext } from "../context/Context";

const Categories = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const {
    ingredient,
    setIngredient,
    handleIngredientForm,
    quantity,
    setQuantity,
    handleQuantity,
    cookingTime,
    setCookingTime,
    handleCokingTime,
    numberOfIngredients,
    setNumberOfIngredients,
    handleNumberOfIngredients,
    mealType,
    setMealType,
    handleMealType,
  } = useContext(SearchContext);
  const [listCategories, setListCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipe, setRecipe] = useState([]);

  //This useEffect Hook fetches list of recipes from the API and updates the hook and also dispatch to redux
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        await axios
          .get("https://www.themealdb.com/api/json/v1/1/categories.php")
          .then((res) => {
            setListCategories(res.data.categories);
            setActiveCategory(res.data.categories[0].strCategory);
          });
      } catch (error) {
        console.log("CATEGORY ERROR", error);
      }
    };

    fetchAllCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/filter.php?i=${activeCategory}`
        );
        console.log("RECIPE", response);
        setRecipe(response.data.meals);
        dispatch(setAllRecipes(response.data.meals));
      } catch (error) {
        console.log("RECIPES ERROR:", error.message);
      }
    };

    activeCategory && fetchRecipes();
  }, [activeCategory]);

  //Define the pagination settings for displaying the list ingredients
  const listRecipesPerPage = 12;
  const nPagesVisited = pageNumber * listRecipesPerPage;

  //Calculates the number of pages to be displayed
  const pageCount = recipe ? Math.ceil(recipe.length / listRecipesPerPage) : 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //This logic helps render list of ingredients based on pagi9nation
  const displayCategories =
    recipe &&
    recipe
      .slice(nPagesVisited, nPagesVisited + listRecipesPerPage)
      .map((list) => {
        const { idMeal, strMeal, strMealThumb } = list;

        return (
          <aside
            className="w-[100%] relative md:w-[30%] flex-auto h-[200px] rounded-[20px] group"
            key={idMeal}
          >
            <img
              src={strMealThumb}
              alt="yam"
              className="w-full h-[200px] object-cover rounded-[20px] md:w-full md:h-[200px] md:object-cover md:rounded-[20px]"
            />
            <div className="absolute top-0 bottom-0 inset-0 bg-[#5f68687c] opacity-50 rounded-[15px] shadow-lg group-hover:opacity-100"></div>
            <div className="absolute top-0 bottom-0 w-full flex-col justify-center items-center opacity-100 ">
              <div className="absolute top-0 bottom-0 flex justify-center w-8/12 h-[40px] items-center bg-[#18b648] rounded-br-[30px]">
                <p className="text-[#fff] text-[15px] font-bold ">{strMeal}</p>
              </div>

              <div className="absolute top-20 bottom-0 w-full flex items-center justify-center h-[40px] opacity-0 group-hover:opacity-100">
                <div className="flex justify-center items-center w-8/12 h-[40px] bg-[#18b648]  cursor-pointer rounded-sm">
                  <Link to={`/recipeDetail/${idMeal}`}>
                    <p className="text-[#fff] font-bold">View More</p>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        );
      });

  return (
    <main>
      <Navbar />
      <Header />

      <div className="flex justify-between max-w-[1340px] px-10 mt-[50px] mx-auto items-center">
        <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
          <div className="w-[340px]">
            <h1 className="text-[40px]">Recipes</h1>
          </div>
          <div className="mt-3 w-[810px] flex-auto items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
            <div className="flex flex-wrap w-full gap-6">
              {listCategories.map((list) => (
                <div
                  className={`max-sm:w-4/12  w-2/12 h-[40px] flex items-center justify-center border border-[#18b648] rounded-lg ${
                    activeCategory === list.strCategory && "bg-[#18b648]"
                  }`}
                  onClick={() => setActiveCategory(list.strCategory)}
                >
                  <p
                    className={`text-[#4a4a4a] ${
                      activeCategory === list.strCategory && "text-[#f8f8f8]"
                    }`}
                  >
                    {list.strCategory}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="flex justify-between max-w-[1340px] h-full px-10 mx-auto mt-[40px] items-center">
        <div className="flex flex-wrap flex-shrink w-full h-full gap-10">
          <div className="relative w-full bg-black md:w-[300px] md:bg-[#4551] md:h-[400px]">
            <p className="px-3 pt-6 text-[#605e5e]">Search By:</p>
            <div className="mx-10 mt-4">
              <div
                className="w-full h-[40px] bg-[#18b648] flex justify-center items-center rounded-md "
                onClick={handleIngredientForm}
              >
                <p className="text-[#fff] tetx-[16px]">Ingredients</p>
              </div>

              <div
                className={`w-full h-[40px] bg-[#18b648] mt-4 flex justify-center items-center rounded-md ${
                  ingredient ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={handleQuantity}
              >
                <p className="text-[#fff] tetx-[16px]">Quantity</p>
              </div>

              <div
                className="w-full h-[40px] bg-[#18b648] mt-4 flex justify-center items-center rounded-md"
                onClick={handleCokingTime}
              >
                <p className="text-[#fff] tetx-[16px]">
                  Available Cooking Time
                </p>
              </div>
              <div
                className="w-full h-[40px] bg-[#18b648] mt-4 flex justify-center items-center rounded-md"
                onClick={handleNumberOfIngredients}
              >
                <p className="text-[#fff] tetx-[16px]">Number of Ingredients</p>
              </div>
              <div
                className="w-full h-[40px] bg-[#18b648] mt-4 flex justify-center items-center rounded-md"
                onClick={handleMealType}
              >
                <p className="text-[#fff] tetx-[16px]">Meal Type</p>
              </div>
            </div>
          </div>

          <div className="max-sm:w-[810px] max-sm:flex max-sm:flex-col max-sm:flex-auto max-sm:gap-6 md:w-[810px] md:flex md:flex-wrap flex-auto  md:gap-6 md:h-full pb-20">
            {displayCategories}
          </div>
        </div>
      </section>

      <Pagination pageCount={pageCount} changePage={changePage} />
    </main>
  );
};

export default Categories;
