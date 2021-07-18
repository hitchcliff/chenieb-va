import { Dispatch } from 'redux';
import { setCurrentRoute } from '../../features/Routes/Routes.slice';
import { RouteTypes } from '../../features/Routes/types';
import Store from '../../Store';

export default class RouteService {
  dispatch: Dispatch;

  constructor() {
    this.dispatch = Store.dispatch;
  }

  async setCurrentRoute(val: RouteTypes) {
    // dispatch happy form details to redux state
    Store.dispatch(setCurrentRoute(val));
  }
}
