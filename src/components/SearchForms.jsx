import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SearchContext } from "../context/Context";
import { MdArrowDropDown } from "react-icons/md";
import { fetchFilteredRecipes, fetchRecipeList } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectLoading,
  setLoading,
  setRecipeCategory,
} from "../features/recipeSlice/ingredientSlice";
import { motion } from "framer-motion";

const SearchForms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    toggleSearchForm,
    handleSearchToggle,
    toggleDropdown,
    setToggleDropdown,
    handleFormDropdownToggle,
  } = useContext(SearchContext);
  const [recipeList, setRecipelist] = useState([]);
  const [error, setError] = useState(false);

  // Refactor context state destructuring
  const {
    selectedIngredient,
    setSelectIngredient,
    quantity,
    setQuantity,
    availableCookingTime,
    setAvailableCookingTime,
    numberOfIngredient,
    setNumberOfIngredient,
    mealType,
    setMealType,
  } = useContext(SearchContext);

  //The useEffect hook makes an API call to fetch list of ingredients and sets it to local state
  useEffect(() => {
    fetchRecipeList()
      .then((ingredient) => {
        setRecipelist(ingredient);
        dispatch(setRecipeCategory(ingredient[0].strIngredient));
      })
      .catch((error) => console.log("RECIPE LIST ERROR:", error));
  }, []);

  //This function handles recipe search and dispatch the payload to redux
  const handleSearch = () => {
    dispatch(setLoading(true));
    try {
      if (
        !selectedIngredient ||
        !quantity ||
        !availableCookingTime ||
        !numberOfIngredient ||
        !mealType
      ) {
        setError(true);
      } else {
        fetchFilteredRecipes(
          selectedIngredient,
          quantity,
          availableCookingTime,
          numberOfIngredient,
          mealType
        );

        dispatch(
          fetchFilteredRecipes(
            selectedIngredient,
            quantity,
            availableCookingTime,
            numberOfIngredient,
            mealType
          )
        );
        setSelectIngredient("");
        setQuantity("");
        setAvailableCookingTime("");
        setNumberOfIngredient("");
        setMealType("");
        dispatch(setLoading(false));

        navigate("/recipe");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {toggleSearchForm && (
        <div className="max-sm:fixed max-sm:inset-0 max-sm:z-50  fixed inset-0 z-50 top-0 h-screen bottom-0 -right-[-129px] w-full flex justify-between max-w-[1340px] px-[248px]  mx-auto items-center">
          <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
            <motion.div
              animate={{ x: 30, scale: 1 }}
              transition={{ delay: 0 }}
              className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-10/12 max-sm:object-cover max-sm:top-[22%] max-sm:-left-[-8.9px] absolute top-[190px] w-[75.6%] -left-[-210px] flex justify-center"
            >
              <div className="max-sm:w-full max-sm:object-cover max-sm w-6/12 h-[570px] mt-14 bg-[#000000ea]  rounded-tr-[30px] rounded-br-[30px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-[50%] w-[40%] h-[50px] flex items-center justify-center bg-[#18b648] rounded-br-[20px]">
                    <p className="text-[#fff]">Search for your Recipes</p>
                  </div>
                  <div className="px-6 pt-4" onClick={handleSearchToggle}>
                    <AiOutlineClose size={30} color="#fff" />
                  </div>
                </div>

                {/*This div handles rendering of the search form*/}
                <div className="p-10 mt-[-17px]">
                  {/*Dropdown List*/}
                  <div className="flex flex-row justify-between items-center w-[99%] px-4 h-[45px] bg-[#fff]">
                    <p>
                      {selectedIngredient
                        ? selectedIngredient
                        : "Choose Ingredient"}
                    </p>
                    <MdArrowDropDown
                      size={40}
                      color="#18b648"
                      onClick={handleFormDropdownToggle}
                      data-cy="toggleList"
                    />
                  </div>

                  {/*This div renders list of recipes on the form dropdown */}
                  {toggleDropdown && (
                    <div className="absolute top-[190px] bottom-0 z-50 w-[41.6%] mt-3  h-[284px] bg-[#fff] overflow-y-auto">
                      {recipeList.map((list) => {
                        return (
                          <div
                            key={list.idIngredient}
                            className="border-b border-b-[#8a898982]  p-4"
                            onClick={(e) => {
                              setSelectIngredient(list.strIngredient);
                              setToggleDropdown(false);
                            }}
                          >
                            <p>{list.strIngredient}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/*This div renders my various input fields on the form*/}
                  <div>
                    <input
                      type="text"
                      className={`${
                        error && quantity.length <= 0 ? "mt-4" : ""
                      } outline-none w-[99%] px-2 mt-6 h-[45px] bg-[#fff]`}
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    {error && quantity.length <= 0 ? (
                      <label className="text-[#fb4c4c] text-[13px]">
                        Quantity is required
                      </label>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-6 h-[45px] bg-[#fff]"
                      placeholder="Enter Available cooking time"
                      value={availableCookingTime}
                      onChange={(e) => setAvailableCookingTime(e.target.value)}
                    />
                    {error && availableCookingTime <= 0 ? (
                      <label className="text-[#ff4d4d] text-[13px]">
                        Cooking time is required
                      </label>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-6 h-[45px] bg-[#fff]"
                      placeholder="Enter Number of ingredients"
                      value={numberOfIngredient}
                      onChange={(e) => setNumberOfIngredient(e.target.value)}
                    />
                    {error && numberOfIngredient <= 0 ? (
                      <label className="text-[#ff4d4d] text-[13px]">
                        Number of ingredients are required
                      </label>
                    ) : (
                      ""
                    )}
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-6 h-[45px] bg-[#fff]"
                      placeholder="Enter meal type"
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value)}
                    />
                    {error && mealType <= 0 ? (
                      <label className="text-[#ff4d4d] text-[13px]">
                        Meal type is required
                      </label>
                    ) : (
                      ""
                    )}
                    <div className=" flex items-center justify-center w-[99%] mt-6">
                      <button
                        onClick={handleSearch}
                        className="bg-[#18b648] flex items-center justify-center text-[#fff] h-[40px] w-[29%]"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForms;
