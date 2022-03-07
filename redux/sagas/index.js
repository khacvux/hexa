import { spawn } from "@redux-saga/core/effects";

import contactSagas from "./users-saga";

export default function* rootSaga (){
    yield spawn(contactSagas)
}