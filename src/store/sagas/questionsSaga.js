import {
  put,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../utils/axios';

import {
  setQuestionsArray,
  getQuestionsArray,
} from '../actions';

function* getAllQuestions() {
  try {
    const { data } = yield call(api.get, `/2.2/questions?page=1&pagesize=20&fromdate=1559606400&todate=1559692800&order=asc&sort=week&site=stackoverflow`);
    console.log('DATA>', data);
    yield put(setQuestionsArray(data));
  } catch (error) {
      console.log(error);
  }
}

export default function* questionsSaga() {
  yield all([
    takeLatest(getQuestionsArray, getAllQuestions),
  ]);
}