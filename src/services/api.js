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

export const fetchFilteredRecipes = async (selectedIngredient, quantity, availableCookingTime, numberOfIngredient, mealType) => {
    try {
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}&q=${quantity}&a=${availableCookingTime}&n=${numberOfIngredient}&m=${mealType}`)

        return response.data.meals
    } catch (error) {
        console.log("RECIPES ERROR:", error.message)
    }
}

