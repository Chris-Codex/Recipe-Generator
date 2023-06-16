import axios from "axios";

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