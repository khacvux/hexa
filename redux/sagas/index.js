import { all } from "@redux-saga/core/effects";

import authSaga from "./authSaga";
import followsSaga from "./followsSaga";

export default function* rootSaga (){
    yield all([
        ...authSaga,
        ...followsSaga,
    ])
}