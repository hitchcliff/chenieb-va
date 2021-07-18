import { Dispatch } from 'redux';
import { addIsLoaded } from '../../features/Preloader/Preloader.slice';
import Store from '../../Store';

export default class HappyFormService {
  dispatch: Dispatch;

  constructor() {
    this.dispatch = Store.dispatch;
  }

  async addIsLoaded(val: boolean) {
    // dispatch happy form details to redux state
    Store.dispatch(addIsLoaded(val));
  }
}
