import * as TYPES from '../constants/search'
import * as ACTION from '../actions/searchsAction'

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { findUserByNameAPI, getProfileUserByIDAPI } from '../../apis/findUserAPIs'
import { onLoadingFindUser } from '../actions/onLoading'


function* findUserByName(data) {
    try {
        if(data.payload){
            console.log('FIND USER BY NAME running...')
            yield put(onLoadingFindUser(true))
            const res = yield call(findUserByNameAPI, data.payload)
            if(res){
                console.log('FIND USER BY NAME SUCCESS')
                yield put(ACTION.findUserByNameSuccess(res.data))
            }
        }
        else{
            yield put(ACTION.findUserByNameSuccess([]))
        }
    } catch (error) {
        yield put(ACTION.findUserByNameFailure(error))
    }
    yield put(onLoadingFindUser(false))
}

function* getProfileUserById(data) {
    try {
        console.log('GET PROFILE USER BY ID running...')
        const res = yield call(getProfileUserByIDAPI, {
            myUserId: data.payload.myUserId,
            userId: data.payload.userId
        })
        if(res){
            console.log('GET PROFILE USER BY ID SUCCESS')
            // console.log(res.data)
            yield put(ACTION.getProfileUserByIDSuccess(res.data))
        } 
    } catch (error) {
        yield put(ACTION.getProfileUserByIDFailure(error))
    }
}

function* postRequestFollow(data){
    try {
        console.log('POST REQUEST FOLLOW running...')
        const res = yield call()
    } catch (error) {
        yield put(ACTION.postRequestFollowFailure(error))
    }
}

export default searchSaga = [
    takeLatest(TYPES.FIND_USER, findUserByName),
    takeLatest(TYPES.GET_PROFILE_USER_BY_ID, getProfileUserById),
]