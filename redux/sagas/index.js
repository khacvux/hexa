import { all } from "@redux-saga/core/effects";

import authSaga from "./authSaga";
import contactSagas from "./users-saga";

export default function* rootSaga (){
    yield all([
        ...contactSagas,
        ...authSaga,
    
    ])
}