import { useState } from "react";

const useRecipeFormQuery = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [numberOfIngredients, setNumberOfIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [searchResult, setSearchResult] = useState("");

  return {
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
  };
};

export default useRecipeFormQuery;
