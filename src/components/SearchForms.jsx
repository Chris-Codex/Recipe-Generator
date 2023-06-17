import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContext } from "../context/Context";

const SearchForms = () => {
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

  return (
    <>
      {ingredient && (
        <div className="mt-3 w-[810px] flex-auto  flex-row items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] outline-none md:w-[61%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:outline-none"
            placeholder="Search for recipes"
          />

          <div
            className="w-[5%] h-[50px] bg-[#b3b3b338] flex justify-center items-center "
            // onClick={handleSearchSubmit}
          >
            <AiOutlineSearch size={20} color="#000" />
          </div>
        </div>
      )}

      {quantity && (
        <div className="mt-3 w-[810px] flex-auto  flex-row items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
          <input
            type="text"
            // value={ingredients}
            // onChange={(e) => setIngredients(e.target.value)}
            className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] outline-none md:w-[61%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:outline-none"
            placeholder="Search by quantity"
          />

          <div
            className="w-[5%] h-[50px] bg-[#b3b3b338] flex justify-center items-center "
            // onClick={handleSearchSubmit}
          >
            <AiOutlineSearch size={20} color="#000" />
          </div>
        </div>
      )}

      {cookingTime && (
        <div className="mt-3 w-[810px] flex-auto  flex-row items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
          <input
            type="text"
            // value={ingredients}
            // onChange={(e) => setIngredients(e.target.value)}
            className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] outline-none md:w-[61%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:outline-none"
            placeholder="Search by available cooking time"
          />

          <div
            className="w-[5%] h-[50px] bg-[#b3b3b338] flex justify-center items-center "
            // onClick={handleSearchSubmit}
          >
            <AiOutlineSearch size={20} color="#000" />
          </div>
        </div>
      )}

      {numberOfIngredients && (
        <div className="mt-3 w-[810px] flex-auto  flex-row items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
          <input
            type="text"
            // value={ingredients}
            // onChange={(e) => setIngredients(e.target.value)}
            className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] outline-none md:w-[61%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:outline-none"
            placeholder="Search by number of ingredients"
          />

          <div
            className="w-[5%] h-[50px] bg-[#b3b3b338] flex justify-center items-center "
            // onClick={handleSearchSubmit}
          >
            <AiOutlineSearch size={20} color="#000" />
          </div>
        </div>
      )}

      {mealType && (
        <div className="mt-3 w-[810px] flex-auto  flex-row items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
          <input
            type="text"
            // value={ingredients}
            // onChange={(e) => setIngredients(e.target.value)}
            className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] outline-none md:w-[61%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:outline-none"
            placeholder="Search by meal type"
          />

          <div
            className="w-[5%] h-[50px] bg-[#b3b3b338] flex justify-center items-center "
            // onClick={handleSearchSubmit}
          >
            <AiOutlineSearch size={20} color="#000" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForms;
