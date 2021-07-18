import Store from '../../Store';

// gets the `hello world` string from redux state
export const helloWorld = Store.getState().HelloWorld.test;
