import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./ducks";
import authSaga from "./sagas/authSaga";
import history from "../routes/history";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(authSaga);

export default store;
