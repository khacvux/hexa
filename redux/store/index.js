import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";
import rootReducer from '../reducers'

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer', 'searchReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(Store)

export default Store;