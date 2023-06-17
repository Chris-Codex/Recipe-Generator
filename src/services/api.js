import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchAllIngredients = createAsyncThunk('listIngredients/fetchAllIngredients', async () => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")

        return response
    } catch (error) {

        return error.message
    }
})

export const fetchAllCategories = createAsyncThunk('listCategories/fetchAllCategories', async () => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")

        return response.data
    } catch (error) {

        return error.message
    }
})

