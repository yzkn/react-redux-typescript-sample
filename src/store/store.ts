import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adviceReducer, AdviceState } from '../reducers/adviceReducers';
import { userInfomationReducer, UserInfoState } from '../reducers/userInformationReducer';

/**
 * アプリケーション全体のStore定義
 */
export interface AppState {
  userInfomation: UserInfoState;
  advice: AdviceState;
}

const store = createStore(
  combineReducers<AppState>({
    advice: adviceReducer,
    userInfomation: userInfomationReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
