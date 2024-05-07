import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

const homeNavActiveSlice = createSlice({
    name: 'homeNavActive',
    initialState,
    reducers: {
        setHomeNavActive: (state, action) => action.payload,
    },
});

export const { setHomeNavActive } = homeNavActiveSlice.actions;
export const selectHomeNavActive = (state) => state.homeNavActive;
export default homeNavActiveSlice.reducer;

