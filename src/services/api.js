import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


//This function handles fetching the recipe list from the API, to be used in (SearchForms)
export const fetchRecipeList = async () => {
    try {
        const response = await axios
            .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")

        return response.data.meals
    } catch (error) {
        console.log("RECIPE LIST ERROR:", error.message);
    }
};

//This function helps fetch and fileter recipes based on the parameteers passed through the form
export const fetchFilteredRecipes = createAsyncThunk('listRecipes/fetchFilteredRecipes', async (selectedIngredient, quantity, availableCookingTime, numberOfIngredient, mealType) => {
    try {
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php`,
            {
                params: {
                    i: selectedIngredient,
                    q: quantity,
                    a: availableCookingTime,
                    n: numberOfIngredient,
                    m: mealType
                }
            })
        return response.data.meals
    } catch (error) {
        console.log("RECIPES ERROR:", error.message)
    }
})

// This function handles fetching list of recipe category from the API, to be used in (Category Component)
export const fetchAllCategories = async () => {
    try {
        const response = await axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")

        return response.data
    } catch (error) {
        console.log("CATEGORY ERROR", error);
    }
};

export const fetchRecipes = async (activeCategory) => {
    try {
        const response = await axios.get(
            `https://themealdb.com/api/json/v1/1/filter.php?i=${activeCategory}`
        );


        return response.data
    } catch (error) {
        console.log("RECIPES ERROR:", error.message);
    }
};








