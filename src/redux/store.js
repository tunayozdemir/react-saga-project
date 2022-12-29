import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import Sagas from "./sagas";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Sagas)

export default store
