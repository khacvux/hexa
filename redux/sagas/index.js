import { spawn } from "@redux-saga/core/effects";

import accountSaga from "./accountSaga";
import contactSagas from "./users-saga";

export default function* rootSaga (){
    yield spawn(contactSagas, accountSaga)
}