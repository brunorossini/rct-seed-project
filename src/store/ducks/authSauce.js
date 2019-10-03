import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loginRequest: ["userForm"],
  loginSuccess: [],
  loginFailure: []
});

const INITIAL_STATE = {
  loading: false,
  token: localStorage.getItem("token"),
  error: null
};

const request = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  token: action.payload
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: null
});

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure
});
