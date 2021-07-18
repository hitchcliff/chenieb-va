import Store from '../../Store';

// gets the `hello world` string from redux state
export const isLoaded = Store.getState().Preloader.isLoaded;
