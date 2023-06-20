import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Navbar from "../Navbar";
import { GiHotMeal } from "react-icons/gi";
import YouTube from "react-youtube";
import SearchForms from "../SearchForms";
import Footer from "../Footer";
import Header from "../Header";

const CategoryDetail = () => {
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
        console.log("DETAILS", response);
        console.log("DET DT", response.data.meals[0]);
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
        throw new Error("Failed to fetch recipe");
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchForms />
      <section className="w-full h-auto ">
        <div className="flex flex-row justify-between max-w-[1340px] p-10 mx-auto items-center">
          <div className="max-sm:flex-col flex flex-wrap w-[100%] gap-2">
            <div className="max-sm:w-[100%] flex-auto h-[500px] bg-[#ebeede4e] w-[45%] rounded-lg flex justify-center items-center">
              <div className="flex justify-center items-center ">
                <img
                  src={recipe.strMealThumb}
                  alt="recipe"
                  className="max-sm:w-[350px] max-sm:h-[350px] w-[100%] h-[400px]"
                />
              </div>
            </div>

            <div className="max-sm:w-[100%] max-sm:px-3 max-sm:py-3 px-8 mt-[-13px] flex-auto w-[45%]">
              <h1 className="text-[40px]">{recipe.strMeal}</h1>
              <div className="">
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-[-40px]">
          <div className="flex flex-row justify-between max-w-[1340px] p-10 mx-auto items-center gap-4">
            <div className="max-sm:flex-col max-sm:gap-4 flex flex-wrap w-[100%] gap-6">
              <h1 className="text-[#5c5656] text-[30px]">Ingredients</h1>
              <div className="max-sm:flex-col flex flex-wrap gap-4 ">
                {/*List ingredients*/}
                {ingredient.slice(0, 9).map((list, index) => {
                  return (
                    <div
                      className="max-sm:w-full w-4/12 h-[100px] bg-[#ebeede4e] shadow-lg rounded-md flex justify-center items-center"
                      key={list}
                    >
                      <div className="flex flex-row justify-between  px-2 w-full">
                        <div className="flex flex-row space-x-2 items-center ">
                          <GiHotMeal size={30} color="#18b648" />
                          <div className="flex flex-col">
                            <p>{list}</p>
                            <span>{measure[index]}</span>
                          </div>
                        </div>
                        <div>
                          <img
                            src={recipe.strMealThumb}
                            alt="recipe"
                            className="max-sm:w-[30px] max-sm:h-[30px] w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
