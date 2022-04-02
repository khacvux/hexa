import * as TYPES from '../constants/posts'
import * as ACTION from '../actions/postsAction'
import { call, delay, put, takeLatest, takeLeading } from 'redux-saga/effects'
import { deletePostByIdAPI, 
        findPostsByIdAPI, 
        getListPostsAPI, 
        uploadPostsAPI 
    } from '../../apis/postsAPIs'
import { onLoadingGetListPost } from '../actions/onLoading'




function* addPost(data) {
    try {
        console.log('ADD POST running...')
        
        yield put(ACTION.onAddingPosts(true))
        const res = yield call(uploadPostsAPI, {
            token: data.payload.token, 
            formData: data.payload.formData
        })
        yield put(ACTION.onAddingPosts(false))
        if(res.data.status == 'ok'){
            console.log(res)
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
}

function* getListPostUser(data) {
    try {
        console.log('GET LIST POST USER RUNNING....')
        yield put(onLoadingGetListPost(true))
        const res  = yield call(getListPostsAPI, {
            token: data.payload.token,
            userId: data.payload.userId,
        })
        if(res.status == 'ok') {
            yield put(ACTION.getListPostUserSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
    yield put(onLoadingGetListPost(false))
}

function* findPostsById(data) {
    try {
        console.log('GET LIST POST USER RUNNING....')
        const res = yield call(findPostsByIdAPI, {
            token: data.payload.token,
            postsId: data.payload.postsId,
        })
        if(res.status == 'ok') {
            yield put(ACTION.findPostsByIdSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
}

function* deletePostById(data) {
    try {
        console.log('DELETE POST BY ID RUNNING....')
        const res = yield call(deletePostByIdAPI, {
            token: data.payload.token,
            postsId: data.payload.postsId,
        })
        if(res.status == 'ok') {
            yield put(ACTION.deletePostSuccess(data.payload.postsId))
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
}





export default postsSaga = [
    takeLatest(TYPES.ADD_POST, addPost),
    takeLatest(TYPES.GET_LIST_POST_USER, getListPostUser),
    takeLatest(TYPES.FIND_POST_BY_ID, findPostsById),
    takeLeading(TYPES.DELETE_POST, deletePostById),
]