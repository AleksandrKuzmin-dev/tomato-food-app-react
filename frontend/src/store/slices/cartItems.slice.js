import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if (!state[id]) {
                state[id] = 1;
            } else {
                state[id]++;
            }

        },
        reduceFromCart: (state, action) => {
            const id = action.payload;
            state[id] > 0 ? state[id]-- : (state[id] = 0);
        },
    },
});

export const { addToCart, reduceFromCart } = cartItemsSlice.actions;
export const selectCartItems = (state) => state.cartItems;
export default cartItemsSlice.reducer;
