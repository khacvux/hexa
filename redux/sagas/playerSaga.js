import * as TYPES from '../constants/songs'
import * as ACTION from '../actions/songsAction'
import { put, takeLeading, takeEvery, takeLatest, call, delay } from '@redux-saga/core/effects'
import { getListGenreAPI,
    getListSongByCategoryIdAPI, 
    uploadSongAPI 
} from '../../apis/songAPIs'



function* getGenre(data) {
    try {
        console.log('GET GENRE RUNNING...')
        const res = yield call(getListGenreAPI, {
            token: data.payload.token
        })
        if(res.status == 'ok') {
            yield put(ACTION.getListCategorySongSuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.actionFailure(error))
    }
}

function* addSong(data) {
    try {
        console.log('UP LOAD SONG RUNNING..')

        yield put(ACTION.onAddingSong(true))
        const res = yield call(uploadSongAPI, {
            token: data.payload.token,
            formData: data.payload.formData,
        })
        yield put(ACTION.onAddingSong(false))
        if(res.status == 'ok'){
            console.log('success')
            yield put(ACTION.addSongSuccess(true))
            yield delay(5000)
            yield put(ACTION.addSongSuccess(false))
        }
    } catch (error) {
        yield put(ACTION.addSongFailure(true))
        yield delay(5000)
        yield put(ACTION.addSongFailure(false))
    }
}

function* getListSongByGenreId(data) {
    try {
        console.log('GET LIST SONG BY CATEGORY ID RUNNING....')

        const res = yield call(getListSongByCategoryIdAPI, {
            token: data.payload.token,
            categoryId: data.payload.genreId,
        })
        if(res.status == 'ok'){
            yield put(ACTION.getListSongByCategorySuccess(res.data))
        }
    } catch (error) {
        yield put(ACTION.actionFailure(error))
    }
}

export default playerSaga = [
    takeLeading(TYPES.GET_LIST_CATEGORY_SONG, getGenre),
    takeEvery(TYPES.ADD_SONG, addSong),
    takeLatest(TYPES.GET_LIST_SONG_BY_CATEGORY, getListSongByGenreId),
]