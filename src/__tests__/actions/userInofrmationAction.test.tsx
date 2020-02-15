import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk';
import { changeUserNameAsync } from '../../actions/userInformationAction';
import { AppState } from '../../store/store';

describe('UserInformationActionのテスト', () => {
  it('changeUserNameAsync', () => {
    type DispatchExts = ThunkDispatch<AppState, void, AnyAction>;
    const mockStore = configureStore<AppState, DispatchExts>([thunk]);
    const store = mockStore();
    store.dispatch(changeUserNameAsync('aaaa'));
    expect(store.getActions()[0]).toEqual({
      type: 'CHANGE_USER_NAME',
    });
  });
});
