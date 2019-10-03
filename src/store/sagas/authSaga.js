import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../../services/api";
import { Types } from "../ducks/authSauce";

export function* loginSaga(payload) {
  try {
    const response = yield call(Api.login, payload.userForm);
    yield put({ type: Types.LOGIN_SUCCESS, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    yield put({ type: Types.LOGIN_FAILURE, payload: error });
    localStorage.removeItem("token");
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.LOGIN_REQUEST, loginSaga);
}
