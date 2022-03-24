import * as TYPES from '../constants/auth'
import * as ACTION from '../actions/authAction'
import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { setFollowStatusAPI, signInAPI, signUpAPI } from '../../apis/accountAPIs'
import { onLoadingAuth, onLoadingSetFollowStatus } from '../actions/onLoading';

function* signIn(data) {
    try{
        console.log('SIGN IN running...')
        yield put(onLoadingAuth(true));

        const res = yield call(signInAPI, data.payload)
        if(res.status == 'ok'){
            yield put(ACTION.signInSuccess(res.data))
        }

    } catch (error) {
        yield put(ACTION.signInFailure(error))
    }
    yield put(onLoadingAuth(false));

}

function* signUp(data) {
    const firstName = data.payload.firstName;
    const lastName = data.payload.lastName;
    const email = data.payload.email;
    const phone = data.payload.numberPhone;
    const password = data.payload.crPassword;

    try {
        console.log(' SIGN UP running...')
        const res = yield call(signUpAPI, {firstName, lastName, email, phone, password})
        if(res){
            // console.log(res)
            yield put(ACTION.signUpSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.signUpFailure(error))
    }
}


function* setFollowStatus(data) {
    console.log('SET FOLLOW STATUS running...')
    yield put(onLoadingSetFollowStatus(true))
    const { token, userId } = data.payload
    try {
        const res = yield call(setFollowStatusAPI, {userId, token})
        res && (yield put(ACTION.setFollowStatusSuccess()))
    } catch (error) {
        yield put(ACTION.setPrivateAccountFailure(error))
    }
    
    yield put(onLoadingSetFollowStatus(false))
}


export default authSaga = [
    takeLatest(TYPES.SIGN_IN, signIn),
    takeLatest(TYPES.SIGN_UP, signUp),
    takeLatest(TYPES.SET_FOLLOW_STATUS, setFollowStatus),
]