import * as TYPES from '../constants/auth'
import * as ACTION from '../actions/authAction'
import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { signInAPI } from '../../apis/accountAPIs'

function* signIn(data) {
    // const { username, password } = data.payload;
    // console.log(data.payload)
    try{
        const res = yield call(signInAPI, data.payload)
        // console.log(res)
        if(res.status == 'ok'){
            yield put(ACTION.signInSuccess(res.data))
        }

    } catch (error) {
        yield put(ACTION.signInFailure(error))
    }
}





export default authSaga = [
    takeLatest(TYPES.SIGN_IN, signIn),
]