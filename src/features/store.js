import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlice/recipeSlice';



export const store = configureStore({
    reducer: {
        recipes: recipeReducer
    }
})