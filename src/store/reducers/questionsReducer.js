import { createReducer } from 'redux-act';

import { setQuestionsArray } from '../actions';

const initialState = {
  questions: [],
};

export default createReducer({
  [setQuestionsArray]: (state, data) => ({
    ...state,
    questions: data,
  }),
}, initialState);