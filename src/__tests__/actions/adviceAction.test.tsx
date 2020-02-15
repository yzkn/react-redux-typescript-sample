import { AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk';
import { fetchAdviceAsync } from '../../actions/adviceAction';
import { AppState } from '../../store/store';

jest.mock('axios');
import axios from 'axios';
(axios.get as any).mockResolvedValue({ data: { slip: { advice: 'mocked' } } });

describe('AdviceAction', () => {
  it('非同期処理', async () => {
    type DispatchExts = ThunkDispatch<AppState, void, AnyAction>;
    const mockStore = configureStore<AppState, DispatchExts>([thunk]);
    const store = mockStore();
    await store.dispatch(fetchAdviceAsync());
    expect(store.getActions()[0]).toEqual({
      payload: {
        message: 'mocked',
      },
      type: 'FETCH_ADVICE',
    });
  });
});
