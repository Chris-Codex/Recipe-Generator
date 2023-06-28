import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import recipeReducer from "./recipeSlice/recipeSlice";



export const store = configureStore({
    reducer: {
        ingredients: recipeReducer
    },
    middleware: [...getDefaultMiddleware(), thunk],
})