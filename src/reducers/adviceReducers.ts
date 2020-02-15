import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { fetchAdvice } from '../actions/adviceAction';

export interface AdviceState {
  message: string;
}

const initialState: AdviceState = {
  message: '',
};

export const adviceReducer = reducerWithInitialState(initialState).case(
  fetchAdvice,
  (state, payload) => {
    return {
      ...state,
      message: payload.message,
    };
  }
);
