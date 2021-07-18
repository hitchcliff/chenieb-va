import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  test: 'hello world',
};

export const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    helloWorld: (state, { payload }: PayloadAction<string>) => {
      state.test = payload;
    },
  },
});

export const { helloWorld } = helloSlice.actions;
