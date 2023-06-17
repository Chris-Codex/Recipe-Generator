import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchAllIngredients = createAsyncThunk('listIngredients/fetchAllIngredients', async () => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")

        return response.data.meals
    } catch (error) {
        console.log("All Recipes Error", error)
        return error.message
    }
})

