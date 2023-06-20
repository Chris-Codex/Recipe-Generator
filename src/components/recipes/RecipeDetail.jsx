import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRcipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState({});

  //retrieves the list of ingredients from redux and finds the id that matches with the associated ingredient id and renders it
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        setRcipe(response.data.meals[0]);

        Object.keys(response.data.meals[0]).forEach((key) => {
          if (
            key.includes("strIngredient") &&
            response.data.meals[0][key] !== ""
          ) {
            setIngredient((prevState) => {
              if (!Array.isArray(prevState) || prevState.length === 0)
                return [response.data.meals[0][key]];
              else return [...prevState, response.data.meals[0][key]];
            });
          }

          if (
            key.includes("strMeasure") &&
            response.data.meals[0][key] !== ""
          ) {
            setMeasure((prevState) => {
              if (!Array.isArray(prevState) || prevState.length === 0)
                return [response.data.meals[0][key]];
              else return [...prevState, response.data.meals[0][key]];
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return (
    <div>
      <Navbar />
      <section className="w-full h-auto mt-[-40px]">
        <div className="flex flex-row justify-between max-w-[1340px] p-10 mx-auto items-center">
          <div className="max-sm:flex-col flex flex-wrap w-[100%] gap-2">
            <div className="max-sm:w-[100%] flex-auto h-[500px] bg-[#ebeede4e] w-[45%] rounded-lg flex justify-center items-center">
              <div className="flex justify-center items-center " data-cy="ing">
                <img
                  src={recipe.strMealThumb}
                  alt="recipe"
                  className="max-sm:w-[350px] max-sm:h-[350px] w-[500px] h-[400px]"
                />
              </div>
              <div className="absolute w-[37%] h-full mr-[4px] top-90 bottom-[260px]">
                <h1 className="text-[40px]">Ingredients:</h1>
                {ingredient.slice(0, 9).map((list, index) => {
                  return (
                    <div className="absolute top-50 bottom-0 " key={list}>
                      <p>{list}</p>
                      <span data-cy="measure">{measure[index]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="max-sm:w-[100%] max-sm:px-3 max-sm:py-3 px-8 py-8 flex-auto w-[45%]">
              <h1 className="text-[40px]">{recipe.strMeal}</h1>
              <div className="">
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
