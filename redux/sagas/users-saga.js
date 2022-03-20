import { call, put, takeEvery, all } from '@redux-saga/core/effects'
import * as TYPES from '../constants'
import {
    getAllUsers,
} from '../../apis/contactAPIs'

function* getUsers() {
    try{
        const user = yield call(getAllUsers)
        yield put({
            type: TYPES.SEND_REQUEST_GET_ALL_USER_SUCCESS, 
            payload: user
        })
    } catch (error){
        yield put({
            type: TYPES.SEND_REQUEST_GET_ALL_USER_FAILURE, 
            payload: error
        })
        console.log(error)
    }
}

// export default function* contactSagas() {
//     yield takeEvery(TYPES.SEND_REQUEST_GET_ALL_USER, getUsers);
// }
export default contactSagas = [
    takeEvery(TYPES.SEND_REQUEST_GET_ALL_USER, getUsers),
]
