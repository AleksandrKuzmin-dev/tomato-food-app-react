import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;

            if(!state[id]) {
                state[id] = 1;
            } else {
                state[id]++;
            }
        }
    }
})

export const { addToCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;