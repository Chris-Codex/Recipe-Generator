import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchAllRecipes = createAsyncThunk('allRecipes', async () => {
    try {
        const response = await axios.geet("www.themealdb.com/api/json/v1/1/categories.php")

        return response.data
    } catch (error) {
        console.log("All Recipes Error", error)
        return error.message
    }
})

