import { createSlice } from '@reduxjs/toolkit';
import { food_list } from '../../assets/assets';

const initialState = [];

const foodCatalogSlice = createSlice({
    name: 'foodCatalog',
    initialState,
    reducers: {
        setFoodCatalog: () => food_list
    }
});

export const selectFoodCatalog = (state) => state.foodCatalog;
export const { setFoodCatalog } = foodCatalogSlice.actions;
export default foodCatalogSlice.reducer;
