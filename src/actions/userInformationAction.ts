import { Action, Dispatch } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { AppState } from '../store/store';

interface UserInfo {
  name: string;
}

const actionCreator = actionCreatorFactory();

export const changeUserName = actionCreator<UserInfo>('CHANGE_USER_NAME');

export const changeUserNameAsync = (name: string) => {
  console.log('changeUserNameAsync name: ' + name);
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    try {
      const result: UserInfo = {
        name: name,
      };
      dispatch(changeUserName(result));
    } catch {
      //
    }
  };
};
