import promiseMiddleware from "redux-promise-middleware";
import { createStore, applyMiddleware, combineReducers } from "redux";

import reducer from "./ducks/reducer";
import wizardReducer from "./ducks/wizardReducer";

export default createStore(
  combineReducers({ reducer, wizardReducer }),
  applyMiddleware(promiseMiddleware())
);
