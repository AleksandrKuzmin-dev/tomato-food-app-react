import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemId = action.payload;
            if (!state[itemId]) {
                state[itemId] = 1;
            } else {
                state[itemId]++;
            }
        },
        reduceFromCart: (state, action) => {
            const itemId = action.payload;
            state[itemId] > 1 ? state[itemId]-- : delete state[itemId];
        },
    },
});

export const { addToCart, reduceFromCart } = cartItemsSlice.actions;
export const selectCartItems = (state) => state.cartItems;
export default cartItemsSlice.reducer;
