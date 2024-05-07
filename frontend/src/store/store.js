import { configureStore } from "@reduxjs/toolkit";
import foodCatalog from '../store/slices/foodCatalog.slice';
import cartItems from "./slices/cartItems.slice";
import homeNavActive from "./slices/homeNavActive.slice";

export const store = configureStore({
    reducer: {
        foodCatalog,
        cartItems,
        homeNavActive
    }
})
