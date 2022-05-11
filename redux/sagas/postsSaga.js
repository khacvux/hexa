import * as TYPES from '../constants/posts'
import * as ACTION from '../actions/postsAction'
import { call, delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
import { deletePostByIdAPI, 
        findPostsByIdAPI, 
        getListPostsAPI, 
        uploadPostsAPI,
        commentPostAPI,
        getCommentsOfPostAPI,
        deleteCommmentAPI,
        getPostsAPI,
        reactPostAPI
    } from '../../apis/postsAPIs'
import { onLoadingGetListPost } from '../actions/onLoading'
import { unauthorized } from '../actions/authAction'




function* addPost(data) {
    try {
        console.log('ADD POST running...')
        
        yield put(ACTION.onAddingPosts(true))
        const res = yield call(uploadPostsAPI, {
            token: data.payload.token, 
            formData: data.payload.formData
        })
        yield put(ACTION.onAddingPosts(false))
        if(res.status == 'ok'){
            yield put(ACTION.addPostSuccess(true))
            yield delay(2000)
            yield put(ACTION.addPostSuccess(false))
        }
    } catch (error) {
        yield put(ACTION.addPostFail(true))
        yield delay(5000)
        yield put(ACTION.addPostFail(false))
    }
}

function* getPost(data) {
    try {
        yield put(ACTION.showLoadingGetPost())
        console.log('GET POST RUNNING....')
        const res = yield call(getPostsAPI, {
            token: data.payload.token,
            userId: data.payload.userId,
        })

        if(res.status == 200){
            yield put(ACTION.getPostSuccess(res.data.data))
        }else if (res == 403){
            yield put(unauthorized(true))
        }
        
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
    yield put(ACTION.hideLoadingGetPost())
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
            // console.log(res.data,'API')
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

function* reactPost(data) {
    try {
        console.log('REACTING...')
        const res = yield call(reactPostAPI, {
            token: data.payload.token,
            userId: data.payload.userId,
            tusId: data.payload.tusId,
        })
        if(res.status == 'ok'){
            console.log('REACT SUCCESS.')
            yield put(ACTION.reactPostSuccess())
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
}

function* commentPost(data) {
    try {
        console.log('COMMENT POST RUNNING..')
        const res = yield call(commentPostAPI, {
            token: data.payload.token,
            data: {
                comment: data.payload.comment,
                tusId: data.payload.postId
            },
        })
        if(res.status == 'ok'){
        console.log('COMMENT POST SUCCESS..')
            yield put(ACTION.commentPostSuccess({
                comment: data.payload.comment,
                image: data.payload.avatar,
                dateCreate: 'Just now',
                name: data.payload.name,
                userId: data.payload.userId,
                postsId: data.payload.postId,
                postsCommentId: Math.random()
            }))
        }
    } catch (error) {
        console.log('COMMENT POST error..')
        yield put(ACTION.consoleError(error))
    }
}
function* getListCommentOfPost (data) {
    try {
        console.log('GET LIST COMMENT OF POST RUNNING...')
        const res = yield call(getCommentsOfPostAPI, {
            token: data.payload.token,
            postsId: data.payload.postsId
        })
        if(res.status == 'ok'){
            console.log('GET LIST COMMENT OF POST SUCCESS...')
            yield put(ACTION.getListCommentOfPostSuccess(res.data))
        }
    } catch (error) {
          yield put(ACTION.consoleError(error))
    }
}

function* deleteComment(data) {
    try {
        console.log('DELETE COMMENT RUNNING....')
        const res = yield call(deleteCommmentAPI, {
            token: data.payload.token,
            commentId: data.payload.commentId
        })
        if(res.status == 'ok'){
            console.log('DELETE COMMENT SUCCESS')
            yield put(ACTION.deleteCommentSuccess(data.payload.commentId))
        }
    } catch (error) {
        yield put(ACTION.consoleError(error))
    }
}

export default postsSaga = [
    takeEvery(TYPES.REACT_POST, reactPost),
    takeLeading(TYPES.GET_POST, getPost),
    takeLatest(TYPES.ADD_POST, addPost),
    takeLatest(TYPES.GET_LIST_POST_USER, getListPostUser),
    takeLatest(TYPES.FIND_POST_BY_ID, findPostsById),
    takeLeading(TYPES.DELETE_POST, deletePostById),
    takeEvery(TYPES.COMMENT_POST, commentPost),
    takeLatest(TYPES.GET_LIST_COMMENT_POST, getListCommentOfPost),
    takeLeading(TYPES.DELETE_COMMENT_POST, deleteComment),
]