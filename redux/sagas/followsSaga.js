import { call, put, takeLeading } from 'redux-saga/effects'
import { getFollowRequestsAPI, getListFollowerAPI, getListFollowingAPI } from '../../apis/followAPIs'
import * as TYPES from '../constants/follows'
import * as ACTION from '../actions/followsAction'



function* getListFollower(data) {
    try {
        console.log('GET LIST FOLLOWER running...')
        const res = yield call(getListFollowerAPI,{
            token: data.payload.token
        })
        if(res){
            yield put(ACTION.getListFollowerSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.getFail(error))
    }
}

function* getFollowRequests(data) {
    try {
        console.log('GET FOLLOW REQUESTS running...')
        const res = yield call(getFollowRequestsAPI, {
            token: data.payload.token
        })
        if(res.status == 'ok') {
            yield put(ACTION.getListFollowRequestSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.getFail(error))
    }
}

function* getListFollowing(data) {
    try {
        console.log('GET LIST FOLLOWING running...')
        const res = yield call(getListFollowingAPI, {
            token: data.payload.token
        })
        if(res.status == 'ok') {
            yield put(ACTION.getListFollowingSuccess(res.data))
        }
        
    } catch (error) {
        yield put(ACTION.getFail(error))
    }
}

export default followsSaga = [
    takeLeading(TYPES.GET_LIST_FOLLOWER, getListFollower),
    takeLeading(TYPES.GET_LIST_FOLLOW_REQUEST, getFollowRequests),
    takeLeading(TYPES.GET_LIST_FOLLOWING, getListFollowing)
]