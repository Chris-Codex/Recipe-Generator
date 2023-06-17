import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategories, fetchAllIngredients } from "../../services/api";


const initialState = {
    listIngredients: {},
    listRecipes: {},
    singleDetail: {},
    loading: false,
    error: null
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,

    reducers: {
        setAllIngredients: (state) => {
            return { ...state }
        },

        setAllRecipes: (state, action) => {
            state.listRecipes = action.payload
        },
    },




})

export default recipeSlice.reducer
export const { setAllIngredients, setAllRecipes, setRecipeDetail } = recipeSlice.actions

//selectors

export const selectAllIngredients = (state) => state.ingredients.listIngredients
export const selectAllRecipes = (state) => state.ingredients.listRecipes
export const selectRecipeSingleDetail = (state) => state.ingredients.singleDetail