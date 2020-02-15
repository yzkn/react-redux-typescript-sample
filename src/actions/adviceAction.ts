import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';
import { AppState } from '../store/store';

interface AdviceInfo {
  message: string;
}

const actionCreator = actionCreatorFactory();

export const fetchAdvice = actionCreator<AdviceInfo>('FETCH_ADVICE');

export const fetchAdviceAsync = () => {
  return async (dispatch: Dispatch<Action>, getState: () => AppState) => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const result: AdviceInfo = {
        message: response.data.slip.advice,
      };
      dispatch(fetchAdvice(result));
    } catch {
      //
    }
  };
};
