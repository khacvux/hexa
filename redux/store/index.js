import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default Store;