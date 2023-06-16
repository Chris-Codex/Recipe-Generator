import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allRecipes: [],
    loading: false,
    error: null
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,

    reducers: {
        setAllRecipes: (state, action) => {
            state.allRecipes = action.payload
        }
    },


})

export default recipeSlice.reducer
export const { setAllRecipes } = recipeSlice.actions

//selectors

export const selectAllRecipes = (state) => state.recipes.allRecipes