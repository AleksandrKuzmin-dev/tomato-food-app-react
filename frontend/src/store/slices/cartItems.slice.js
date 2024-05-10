import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id: itemId, item } = action.payload;
            if (!state[itemId]) {
                state[itemId] = { ...item, quantity: 1 };
            } else {
                state[itemId].quantity += 1;
            }
        },
        reduceFromCart: (state, action) => {
            const itemId = action.payload;
            state[itemId].quantity > 1 ? (state[itemId].quantity -= 1) : delete state[itemId];
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            delete state[itemId];
        },
    },
});

export const { addToCart, reduceFromCart, removeFromCart } = cartItemsSlice.actions;

export const selectCartItems = (state) => state.cartItems;
export const selectCartItemById = (itemId) => (state) => state.cartItems[itemId];
export const selectTotalAmount = createSelector([selectCartItems], (cartItems) => {
    return cartItems
        ? Object.values(cartItems).reduce((total, item) => {
              return total + item.price * item.quantity;
          }, 0)
        : 0;
});
export default cartItemsSlice.reducer;
