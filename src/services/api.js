import axios from "axios";
import useRecipeFormQuery from "../CustomHooks/useRecipeFormQuery";
import { useEffect } from "react";



export const fetchAllRecipes = async () => {
    try {
        const response = await axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
        return response.data.categories
    } catch (error) {
        throw new Error("Faileed to fetch recipes");
    }
};

// export const FetchRecipeFilter = async () => {
//     const {
//         ingredients,
//         quantity,
//         cookingTime,
//         numberOfIngredients,
//         mealType,
//     } = useRecipeFormQuery();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredients}&q=${quantity}&c=${cookingTime}&n=${numberOfIngredients}&m=${mealType}`)

//                 return response.data.meal
//             } catch (error) {
//                 throw new Error("Failed to fetch recipes")
//             }
//         }

//         fetchData()
//     }, [ingredients, quantity, cookingTime, numberOfIngredients, mealType])
// }