import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllRecipes } from "../features/recipeSlice/recipeSlice";
import { Link } from "react-router-dom";
import { fetchAllRecipes } from "../services/api";
import useRecipeFormQuery from "../CustomHooks/useRecipeFormQuery";

const Home = () => {
  const dispatch = useDispatch();
  const {
    recipes,
    setRecipes,
    ingredients,
    setIngredients,
    quantity,
    setQuantity,
    cookingTime,
    setCookingTime,
    numberOfIngredients,
    setNumberOfIngredients,
    mealType,
    setMealType,
    searchResult,
    setSearchResult,
  } = useRecipeFormQuery();

  //This useEffect Hook fetches recipes from the API and updates the hook and also dispatch to redux
  useEffect(() => {
    try {
      fetchAllRecipes().then((res) => {
        setRecipes(res);
        dispatch(setAllRecipes(res));
      });
    } catch (error) {
      throw new Error("Faileed to fetch recipes");
    }
  }, [dispatch]);

  return (
    <main>
      <Navbar />
      <Header />

      <div className="flex justify-between max-w-[1340px] px-10 mt-[50px] mx-auto items-center">
        <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
          <div className="w-[340px]">
            <h1 className="text-[40px]">Recipes</h1>
          </div>
          <div className="mt-3 w-[810px] flex-auto flex items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
            <input
              className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] rounded-lg outline-none md:w-[66%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:rounded-lg md:outline-none"
              placeholder="Search for recipes"
            />
          </div>
        </div>
      </div>

      <section className="flex justify-between max-w-[1340px] h-full px-10 mx-auto mt-[40px] items-center">
        <div className="flex flex-wrap flex-shrink w-full h-full gap-10">
          <div className="relative w-full bg-black md:w-[300px] md:bg-black md:h-[400px]">
            LIST
          </div>
          <div className="max-sm:w-[810px] max-sm:flex max-sm:flex-col max-sm:flex-auto max-sm:gap-6 md:w-[810px] md:flex md:flex-wrap flex-auto  md:gap-6 md:h-full pb-20">
            {recipes.map((items) => {
              const { idCategory, strCategory, strCategoryThumb } = items;

              return (
                <aside
                  className="w-[100%] relative md:w-[30%] flex-auto h-[200px] rounded-[20px] group"
                  key={idCategory}
                >
                  <img
                    src={strCategoryThumb}
                    alt="yam"
                    className="w-full h-[200px] object-cover rounded-[20px] md:w-full md:h-[200px] md:object-cover md:rounded-[20px]"
                  />
                  <div className="absolute top-0 bottom-0 inset-0 bg-[#00000071] opacity-50 group-hover:opacity-100 rounded-[20px]"></div>
                  <div className="absolute top-0 bottom-0 w-full flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                    <div className="flex justify-center items-center h-full">
                      <p className="text-[#fff] text-[20px] font-bold ">
                        {strCategory}
                      </p>
                    </div>
                    <div className="absolute top-[120px] bottom-0 w-full flex items-center justify-center h-[40px]">
                      <div className="flex justify-center items-center w-7/12 h-[40px] bg-[#c06d6d] cursor-pointer rounded-md">
                        <Link to={`/recipe/${idCategory}`}>
                          <p className="text-[#fff] font-bold">View More</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
