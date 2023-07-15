import { all, fork } from "redux-saga/effects";
import categoriesSaga from "./categoriesSaga";


export function* rootSaga() {
  yield all([fork(categoriesSaga)]);
}
