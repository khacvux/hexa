import * as TYPES from '../constants/posts'
import * as ACTION from '../actions/postsAction'
import { call, takeLatest } from 'redux-saga/effects'
import { uploadPostsAPI } from '../../apis/postsAPIs'



function* addPost(data) {
    console.log('ADD POST running...')
    const res = yield call(uploadPostsAPI, {
        token: data.payload.token, 
        formData: data.payload.formData
    })
    if(res){
        console.log(res)
    }
}










export default postsSaga = [
    takeLatest(TYPES.ADD_POST, addPost),
]