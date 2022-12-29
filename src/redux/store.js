import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import Sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Sagas);

export default store;
