import * as TYPES from '../constants/onLoading'

export const onLoadingAuth = payload => {
    return {
        type: TYPES.ON_LOADING_AUTH,
        payload
    }
} 

export const onLoadingSetFollowStatus = payload => {
    return {
        type: TYPES.ON_LOADING_SET_FOLLOW_STATUS,
        payload
    }
}

export const onLoadingFindUser = payload => {
    return {
        type: TYPES.ON_LOADING_FIND_USER,
        payload
    }
}


export const onLoadingGetListPost = payload => {
    return {
        type: TYPES.ON_LOADING_GET_LIST_POST,
        payload
    }
}

export const buttonLoading = payload => {
    return {
        type: TYPES.BUTTON_LOADING,
        payload
    }
}

export const onLoadingGetMyListPostedSong = payload => {
    return {
        type: TYPES.ON_LOADING_GET_MY_LIST_POSTED_SONG,
        payload
    }
}

export const onLoadingGetListPostedSong = payload => {
    return {
        type: TYPES.ON_LOADING_GET_LIST_POSTED_SONG,
        payload
    }
}

export const onLoadingGetListSongPost = payload => {
    return {
        type: TYPES.ON_LOADING_GET_LIST_SONG_POST,
        payload
    }
}

export const onLoadingGetPlaylist = payload => {
    return {
        type: TYPES.ON_LOADING_GET_PLAYLIST,
        payload
    }
}