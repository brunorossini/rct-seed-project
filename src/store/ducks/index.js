import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authSauce";

const rootReducer = history =>
  combineReducers({
    authState: authReducer,
    router: connectRouter(history)
  });

export default rootReducer;
