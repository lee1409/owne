import {
  takeEvery,
} from 'redux-saga/effects';

import {
  SIGNUP,
} from '../actions/user-action';

function* signup(action) {
  yield console.log(action);
}

export default function* userSaga() {
  yield takeEvery(SIGNUP, signup);
}
