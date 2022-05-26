import * as TYPES from '../constants/search'
import * as ACTION from '../actions/searchsAction'

import { call, delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import { findUserByNameAPI, getProfileUserByIDAPI } from '../../apis/findUserAPIs'
import { buttonLoading, onLoadingFindUser } from '../actions/onLoading'
import { acceptRequestFollowAPI, postRequestFollowAPI, refuseRequestFollowAPI } from '../../apis/followAPIs'


function* findUserByName(data) {
    try {
        if(data.payload){
            yield put(onLoadingFindUser(true))
            yield delay(1000)
            console.log('FIND USER BY NAME running...')
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
            userId: data.payload.userId,
            token: data.payload.token,
        })
        if(res){
            console.log('GET PROFILE USER BY ID SUCCESS')
            yield put(ACTION.getProfileUserByIDSuccess(res.data))
        } 
    } catch (error) {
        yield put(ACTION.getProfileUserByIDFailure(error))
    }
}

function* postRequestFollow(data){
    try {
        console.log('POST REQUEST FOLLOW running...')
        yield put(buttonLoading(true))
        const res = yield call(postRequestFollowAPI, {
            userIdRecipient: data.payload.userIdRecipient,
            token: data.payload.token
        })
        if(res.status = 'ok'){
            console.log('POST REQUEST FOLLOW SUCCESS')
            yield put(ACTION.postRequestFollowSuccess())
        }
    } catch (error) {
        yield put(ACTION.postRequestFollowFailure(error))
    }
    yield put(buttonLoading(false))
}


function* acceptRequestFollow(data) {
    try {
        console.log('ACCEPT REQUEST FOLLOW RUNNING...')
        const res = yield call(acceptRequestFollowAPI, {
            followId: data.payload.followId,
            token: data.payload.token
        })
        if(res.status == 'ok'){
            console.log('ACCEPT REQUEST SUCCESS.')
            yield put(ACTION.acceptRequestFollowSuccess())
        }
    } catch (error) {
        console.log(error)
        yield put(ACTION.acceptRequestFollowFailure(error))
    }
}

function* refuseRequestFollow(data) {
    try {
        console.log('REFUSE REQUEST FOLLOW RUNNING...')
        const res = yield call(refuseRequestFollowAPI, {
            followId: data.payload.userId,
            token: data.payload.token
        })
        if(res.status == 'ok'){
            console.log('REFUSE REQUEST SUCCESS.')
            yield put(ACTION.refuseRequsestFollowSuccess({userId: data.payload.userId}))
        }
    } catch (error) {
        yield put(ACTION.refuseRequsestFollowFailure())
    }
}


export default searchSaga = [
    takeLatest(TYPES.FIND_USER, findUserByName),
    takeLatest(TYPES.GET_PROFILE_USER_BY_ID, getProfileUserById),
    takeLatest(TYPES.POST_REQUEST_FOLLOW, postRequestFollow),
    takeLeading(TYPES.ACCEPT_REQUEST_FOLLOW, acceptRequestFollow),
    takeLeading(TYPES.REFUSE_REQUEST_FOLLOW, refuseRequestFollow),
]