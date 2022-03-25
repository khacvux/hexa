import { all } from "@redux-saga/core/effects";

import authSaga from "./authSaga";
import followsSaga from "./followsSaga";
import searchSaga from "./searchSaga";



export default function* rootSaga (){
    yield all([
        ...authSaga,
        ...followsSaga,
        ...searchSaga
    ])
}