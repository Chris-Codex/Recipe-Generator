import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SearchContext } from "../context/Context";
import { MdArrowDropDown } from "react-icons/md";
import { fetchFilteredRecipes, fetchRecipeList } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRecipeCategory } from "../features/recipeSlice/ingredientSlice";

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
    try {
      if (
        !selectedIngredient ||
        !quantity ||
        !availableCookingTime ||
        !numberOfIngredient ||
        !mealType
      )
        return;
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

      navigate("/recipe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {toggleSearchForm && (
        <div className="absolute top-0 -right-[-122px] bg-[#752424] z-10 w-full flex justify-between max-w-[1340px] px-[248px]  mx-auto items-center">
          <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
            <div className="absolute top-20 w-[75.6%] pr-[5px] flex justify-end z-50">
              <div className="w-6/12 h-[450px] mt-14 bg-[#000000c9]  rounded-tr-[30px] rounded-br-[30px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="w-[40%] h-[50px] flex items-center justify-center bg-[#18b648] rounded-br-[20px]">
                    <p className="text-[#fff]">Search for your Recipes</p>
                  </div>
                  <div className="px-6 pt-4" onClick={handleSearchToggle}>
                    <AiOutlineClose size={30} color="#fff" />
                  </div>
                </div>

                {/*This div handles rendering of the search form*/}
                <div className="p-10 mt-[-5px]">
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
                    />
                  </div>

                  {/*This div renders list of recipes on the form dropdown */}
                  {toggleDropdown && (
                    <div className="absolute top-[190px] bottom-0 z-50 w-[41.6%] mt-3  h-[250px] bg-[#fff] overflow-y-auto">
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
                      className="outline-none w-[99%] px-2 mt-4 h-[45px] bg-[#fff]"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-4 h-[45px] bg-[#fff]"
                      placeholder="Enter Available cooking time"
                      value={availableCookingTime}
                      onChange={(e) => setAvailableCookingTime(e.target.value)}
                    />
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-4 h-[45px] bg-[#fff]"
                      placeholder="Enter Number of ingredients"
                      value={numberOfIngredient}
                      onChange={(e) => setNumberOfIngredient(e.target.value)}
                    />
                    <input
                      type="text"
                      className="outline-none w-[99%] px-2 mt-4 h-[45px] bg-[#fff]"
                      placeholder="Enter meal type"
                      value={mealType}
                      onChange={(e) => setMealType(e.target.value)}
                    />
                    <div className=" flex items-center justify-center w-[99%] mt-4">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForms;
