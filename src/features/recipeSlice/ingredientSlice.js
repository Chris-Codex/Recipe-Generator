import { createSlice } from "@reduxjs/toolkit";
import { fetchAllIngredients } from "../../services/api";


const initialState = {
    listIngredients: {},
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

        setRecipeDetail: (state, action) => {
            const { id } = action.payload
            const recipe = state?.listIngredients.find((items) => items.idIngredient === id)
            console.log(recipe)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllIngredients.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchAllIngredients.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.listIngredients = action.payload
            })
            .addCase(fetchAllIngredients.rejected, (state) => {
                state.loading = true
                state.error = null
            })
    }


})

export default recipeSlice.reducer
export const { setAllIngredients, setRecipeDetail } = recipeSlice.actions

//selectors

export const selectAllIngredients = (state) => state.ingredients.listIngredients
export const selectRecipeSingleDetail = (state) => state.ingredients.singleDetail