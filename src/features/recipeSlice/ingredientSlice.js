import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredRecipes } from "../../services/api";


const initialState = {
    category: {},
    listRecipes: [],
    recipeCategory: "",
    singleDetail: {},
    loading: false,
    error: null
}

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,

    reducers: {
        setRecipeCategory: (state, action) => {
            state.recipeCategory = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredRecipes.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase
            (fetchFilteredRecipes.fulfilled, (state, action) => {
                return { ...state, loading: false, error: null, listRecipes: action.payload }
            })
            .addCase(fetchFilteredRecipes.rejected, (state) => {
                state.loading = true
                state.error = null
            })
    }

})

export default recipeSlice.reducer
export const { setCategory, setRecipeCategory, setAllRecipes, setRecipeDetail, setLoading } = recipeSlice.actions

//selectors

export const selectAllRecipes = (state) => state.ingredients.listRecipes
export const selectRecipeCategory = (state) => state.ingredients.recipeCategory
export const selectRecipeSingleDetail = (state) => state.ingredients.singleDetail
export const selectLoading = (state) => state.ingredients.loading
