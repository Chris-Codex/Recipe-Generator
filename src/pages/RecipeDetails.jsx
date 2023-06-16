import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllRecipes } from "../features/recipeSlice/recipeSlice";
import Navbar from "../components/Navbar";

const RecipeDetails = () => {
  const { id } = useParams();
  const fetchRecipes = useSelector(selectAllRecipes);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const response = () => {
      try {
        const getRecipeDetails = fetchRecipes.find(
          (item) => item.idCategory === id
        );
        setRecipe(getRecipeDetails);
      } catch (error) {
        throw new Error("Failed to fetch recipe");
      }
    };

    response();
  }, [id, fetchRecipes]);

  return (
    <div>
      <Navbar />
      <section className="w-full h-auto mt-[-40px]">
        <div className="flex flex-row justify-between max-w-[1340px] p-10 mx-auto items-center">
          <div className="max-sm:flex-col flex flex-wrap w-[100%] gap-2">
            <div className="max-sm:w-[100%] flex-auto h-[500px] bg-[#ebeede4e] w-[45%] rounded-lg flex justify-center items-center">
              <div className="flex justify-center items-center ">
                <img
                  src={recipe.strCategoryThumb}
                  alt="recipe"
                  className="w-40px h-[300px]"
                />
              </div>
            </div>
            <div className="max-sm:w-[100%] max-sm:px-3 max-sm:py-3 px-8 py-14 flex-auto w-[45%]">
              <h1 className="text-[40px]">{recipe.strCategory}</h1>
              <div className="">
                <p>{recipe.strCategoryDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetails;
