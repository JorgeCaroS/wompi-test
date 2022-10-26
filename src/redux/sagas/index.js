import { put } from "redux-saga/effects";

function* rootSaga() {
  yield put({ type: "PRODUCT_SELECTED" });
}

export default rootSaga;
