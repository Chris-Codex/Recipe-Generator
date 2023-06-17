import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "./recipeSlice/ingredientSlice";
import thunk from "redux-thunk";



export const store = configureStore({
    reducer: {
        ingredients: ingredientReducer
    },
    middleware: [thunk],
})