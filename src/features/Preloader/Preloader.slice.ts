import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
};

export const preloaderSlice = createSlice({
  name: 'preloader',
  initialState,
  reducers: {
    addIsLoaded: (state, { payload }) => {
      state.isLoaded = payload;
    },
  },
});

export const { addIsLoaded } = preloaderSlice.actions;
