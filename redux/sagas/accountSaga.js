import * as TYPES from '../constants/account'
import * as ACTION from '../actions/accountAction'
import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { signInAPI } from '../../apis/accountAPIs'

function* signIn({payload}) {
    const { value } = payload;
    try{
        const res = yield call(signInAPI, value)
        if(res){
            put(ACTION.signInSuccess(res))
        }
    } catch (error) {
        yield put(ACTION.signInFailure(error))
    }
}





export default function* accountSaga() {
    yield takeLatest(TYPES.SIGN_IN, signIn);
}