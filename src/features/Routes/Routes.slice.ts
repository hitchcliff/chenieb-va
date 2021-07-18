import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouteTypes } from './types';

const initialState: RouteTypes = {
  currentRoute: '',
};

export const routesSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setCurrentRoute: (state, { payload }: PayloadAction<RouteTypes>) => {
      state.currentRoute = payload.currentRoute;
    },
  },
});

export const { setCurrentRoute } = routesSlice.actions;
