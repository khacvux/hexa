import * as TYPES from '../constants/auth'
import * as ACTION from '../actions/authAction'
import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { signInAPI, signUpAPI } from '../../apis/accountAPIs'

function* signIn(data) {
    try{
        const res = yield call(signInAPI, data.payload)
        if(res.status == 'ok'){
            yield put(ACTION.signInSuccess(res.data))
        }

    } catch (error) {
        yield put(ACTION.signInFailure(error))
    }
}

function* signUp(data) {
    const firstName = data.payload.firstName;
    const lastName = data.payload.lastName;
    const email = data.payload.email;
    const phone = data.payload.numberPhone;
    const password = data.payload.crPassword;

    try {
        const res = yield call(signUpAPI, {firstName, lastName, email, phone, password})
        if(res){
            console.log(res)
            yield put(ACTION.signUpSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.signUpFailure(error))
    }
}



export default authSaga = [
    takeLatest(TYPES.SIGN_IN, signIn),
    takeLatest(TYPES.SIGN_UP, signUp)
]