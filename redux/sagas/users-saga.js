import { call, put, takeEvery } from '@redux-saga/core/effects'
import * as TYPES from '../constants'
import {
    getAllPhotos,
    getAllUsers,
    getDetailsofUser,
    getPhotoofUser
} from '../../apis/contactAPIs'

function* getUsers() {
    try{
        const user = yield call(getAllUsers)
        yield put({
            type: TYPES.SEND_REQUEST_GET_ALL_USER_SUCCESS, 
            payload: user
        })
    } catch (err){
        yield put({
            type: TYPES.SEND_REQUEST_GET_ALL_USER_FAILURE, 
            payload: err
        })
        console.log(err)
    }
}

export default function* contactSagas() {
    yield takeEvery(TYPES.SEND_REQUEST_GET_ALL_USER, getUsers);
}