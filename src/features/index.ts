import { helloSlice } from './hello/hello.slice';
import { preloaderSlice } from './Preloader/Preloader.slice';
import { routesSlice } from './Routes/Routes.slice';

export const rootReducer = {
  HelloWorld: helloSlice.reducer,
  Preloader: preloaderSlice.reducer,
  Route: routesSlice.reducer,
};
