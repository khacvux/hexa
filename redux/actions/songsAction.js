import * as TYPES from '../constants/songs'


export const showPlayerBar = payload => {
    return {
        type: TYPES.SHOW_PLAYER_BAR,
        payload,
    }
}

export const hidePlayerBar = payload => {
    return {
        type: TYPES.HIDE_PLAYER_BAR,
        payload
    }
}


export const playSong = () => {
    return {
        type: TYPES.PLAY_SONG,
        payload: 'playing'
    }
}

export const pauseSong = () => {
    return {
        type: TYPES.PAUSE_SONG,
        payload: 'pause'
    }
}

export const resumeSong = () => {
    return {
        type: TYPES.RESUME_SONG,
        payload: 'resume'
    }
}

export const nextSong = () => {
    return {
        type: TYPES.NEXT_SONG
    }
}

export const prevSong = () => {
    return {
        type: TYPES.PREV_SONG
    }
}

export const isLoopSong = payload => {
    return {
        type: TYPES.LOOP_SONG,
        payload
    }
}

export const setIndexSongPlaying = payload => {
    return {
        type: TYPES.SET_INDEX_SONG_PLAYING,
        payload
    }
}

export const setArraySongs = payload => {
    return {
        type: TYPES.CHANGE_ARRAY_SONGS,
        payload
    }
}

export const addSongToArray = payload => {
    return {
        type: TYPES.ADD_SONG_TO_ARRAY,
        payload
    }
}

export const removeSongToArray = payload => {
    return {
        type: TYPES.REMOVE_SONG_TO_ARRAY,
        payload
    }
}

export const getListCategorySong = payload => {
    return {
        type: TYPES.GET_LIST_CATEGORY_SONG,
        payload
    }
}

export const getListCategorySongSuccess = payload => {
    return {
        type: TYPES.GET_LIST_CATEGORY_SONG_SUCCESS,
        payload
    }
}

export const getListSongByCategory = payload => {
    return {
        type: TYPES.GET_LIST_SONG_BY_CATEGORY,
        payload
    }
}

export const getListSongByCategorySuccess = payload => {
    return {
        type: TYPES.GET_LIST_SONG_BY_CATEGORY_SUCCESS,
        payload
    }
}


export const findSongById = payload => {
    return {
        type: TYPES.FIND_SONG_BY_ID,
        payload
    }
}

export const findSongByIdSuccess = payload => {
    return {
        type: TYPES.FIND_SONG_BY_ID_SUCCESS,
        payload
    }
}

export const likeSong = payload => {
    return {
        type: TYPES.LIKE_SONG,
        payload
    }
}

export const likeSongSuccess = payload => {
    return {
        type: TYPES.LIKE_SONG_SUCCESS,
        payload
    }
}

export const commentSong = payload => {
    return {
        type: TYPES.COMMENT_SONG,
        payload
    }
}

export const commentSongSuccess = payload => {
    return {
        type: TYPES.COMMENT_SONG_SUCCESS,
        payload
    }
}

export const addSong = payload => {
    return {
        type: TYPES.ADD_SONG,
        payload
    }
}

export const onAddingSong = payload => {
    return {
        type: TYPES.ON_ADDING_SONG,
        payload
    }
}

export const addSongSuccess = payload => {
    return {
        type: TYPES.ADD_SONG_SUCCESS,
        payload
    }
}

export const addSongFailure = payload => {
    return {
        type: TYPES.ADD_SONG_FAILURE,
        payload
    }
}


export const addPlaylist = payload => {
    return {
        type: TYPES.ADD_PLAYLIST,
        payload
    }
}

export const addPlaylistSuccess = payload => {
    return {
        type: TYPES.ADD_PLAYLIST_SUCCESS,
        payload
    }
}

export const deletePlaylist = payload => {
    return {
        type: TYPES.DELETE_PLAYLIST,
        payload
    }
} 

export const deletePlaylistSuccess = payload => {
    return {
        type: TYPES.DELETE_PLAYLIST_SUCCESS,
        payload
    }
}

export const addSongToPlaylist = payload => {
    return {
        type: TYPES.ADD_SONG_TO_PLAYLIST,
        payload
    }
}

export const addSongToPlaylistSuccess = payload => {
    return {
        type: TYPES.ADD_SONG_TO_PLAYLIST_SUCCESS,
        payload
    }
}

export const deleteSongFromPlaylist = payload => {
    return {
        type: TYPES.DELETE_SONG_FROM_PLAYLIST,
        payload
    }
}

export const deleteSongFromPlaylistSuccess = payload => {
    return {
        type: TYPES.DELETE_SONG_FROM_PLAYLIST_SUCCESS,
        payload
    }
}

export const getPlaylistById = payload => {
    return {
        type: TYPES.GET_PLAYLIST_BY_LID,
        payload
    }
}

export const getPlaylistByIdSuccess = payload => {
    return {
        type: TYPES.GET_PLAYLIST_BY_LID_SUCCESS,
        payload
    }
}

export const getLibraryOfUserByUID = payload => {
    return {
        type: TYPES.GET_LIBRARY_OF_USER_BY_UID,
        payload
    }
}

export const getLibraryOfUserByUIDSuccess = payload => {
    return {
        type: TYPES.GET_LIBRARY_OF_USER_BY_UID_SUCCESS,
        payload
    }
}

export const getMyListPostedSong = payload => {
    return {
        type: TYPES.GET_MY_LIST_POSTED_SONGS,
        payload
    }
}

export const getMyListPostedSongSuccess = payload => {
    return {
        type: TYPES.GET_MY_LIST_POSTED_SONGS_SUCCESS,
        payload
    }
}

export const getListPostedSongsOfUser = payload => {
    return {
        type: TYPES.GET_LIST_POSTED_SONGS_OF_USER,
        payload
    }
}

export const getListPostedSongsOfUserSuccess = payload => {
    return {
        type: TYPES.GET_LIST_POSTED_SONGS_OF_USER_SUCCESS,
        payload
    }
}

export const actionFailure = error => {
    return {
        type: TYPES.ACTION_FAILURE,
        error
    }
}

export const setTabBarHeight = payload => {
    return {
        type: TYPES.SET_TAB_BAR_HEIGHT,
        payload
    }
}