import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allRecipes: [],
    singleDetail: {},
    loading: false,
    error: null
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,

    reducers: {
        setAllRecipes: (state, action) => {
            state.allRecipes = action.payload
        },

        setRecipeDetail: (state, action) => {
            const { id } = action.payload
            console.log(id)
            const recipe = state?.allRecipes.find((items) => items.idCategory === id)
            console.log(recipe)
        }
    },


})

export default recipeSlice.reducer
export const { setAllRecipes, setRecipeDetail } = recipeSlice.actions

//selectors

export const selectAllRecipes = (state) => state.recipes.allRecipes
export const selectRecipeSingleDetail = (state) => state.recipes.singleDetail