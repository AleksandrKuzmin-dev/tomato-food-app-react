import { configureStore } from "@reduxjs/toolkit";
import foodCatalog from '../store/slices/foodCatalog.slice';
import cartItems from "./slices/cartItems.slice";

export const store = configureStore({
    reducer: {
        foodCatalog,
        cartItems
    }
})
