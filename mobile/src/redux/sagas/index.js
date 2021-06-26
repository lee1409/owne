import { all, fork } from "redux-saga/effects";

import UserSaga from "./user-saga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}
