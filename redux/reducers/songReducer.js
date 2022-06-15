import * as TYPES from '../constants/songs'

const initialState = {
    playerBar: false,
    tabBarHeight: false,
    playSong: false,
    listCategorySong: [],
    listSongByCategory: [],
    listLibrary: [],
    listSongByLibrary: [],
    listOfSearchResults: [],
    listComments: [],

    arraySongs: [],
    songPlaying: {},
    songSound: '',
    indexSongPlaying: 0,
    statusPlayer: 'pause',
    loopSong: false,

    myListPostedSongs: [],
    listPostedSongsOfUser: [],
    onAddingSong: false,
    onAddingSongSuccess: false,
    onAddingSongFail: false,
}


export default songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.PLAYER_BAR:
            return {
                ...state
            }
        case TYPES.SHOW_PLAYER_BAR:
            return {
                ...state,
                playerBar: true,
            }
        case TYPES.HIDE_PLAYER_BAR:
            return {
                ...state,
                playerBar: false
            }

        case TYPES.ARRAY_SONGS:
            return {
                ...state,
            }

        case TYPES.CHANGE_ARRAY_SONGS:
            return {
                ...state,
                arraySongs: action.payload,
                indexSongPlaying: 0,
                songPlaying: action.payload[0],
            }

        case TYPES.PLAY_SONG:
            return {
                ...state,
                statusPlayer: action.payload
            }

        case TYPES.PAUSE_SONG:
            return {
                ...state,
                statusPlayer: action.payload
            }

        case TYPES.RESUME_SONG:
            return {
                ...state,
                statusPlayer: action.payload
            }

        case TYPES.NEXT_SONG:
            if (state.arraySongs.length > state.indexSongPlaying + 1) {
                return {
                    ...state,
                    songPlaying: state.arraySongs[state.indexSongPlaying + 1],
                    indexSongPlaying: state.indexSongPlaying + 1,
                }
            } else {
                return state
            }

        case TYPES.PREV_SONG:
            if (state.indexSongPlaying > 0) {
                return {
                    ...state,
                    songPlaying: state.arraySongs[state.indexSongPlaying - 1],
                    indexSongPlaying: state.indexSongPlaying - 1,
                }
            } else {
                return state
            }

        case TYPES.LOOP_SONG:
            return {
                ...state,
                loopSong: action.payload
            }

        // case TYPES.ADD_SONG_TO_ARRAY:
        //     return {
        //         ...state,

        //     }


        case TYPES.GET_LIST_CATEGORY_SONG:
            return {
                ...state
            }
        case TYPES.GET_LIST_CATEGORY_SONG_SUCCESS:
            return {
                ...state,
                listCategorySong: action.payload
            }

        case TYPES.GET_LIST_SONG_BY_CATEGORY:
            return {
                ...state
            }
        case TYPES.GET_LIST_SONG_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                listSongByCategory: action.payload
            }

        case TYPES.FIND_SONG_BY_ID:
            return {
                ...state
            }
        case TYPES.FIND_SONG_BY_ID_SUCCESS:
            return {
                ...state,
                listOfSearchResults: action.payload
            }

        case TYPES.LIKE_SONG:
            return {
                ...state
            }
        case TYPES.LIKE_SONG_SUCCESS:
            return {
                ...state,
            }

        case TYPES.COMMENT_SONG:
            return {
                ...state
            }
        case TYPES.COMMENT_SONG_SUCCESS:
            return {
                ...state,
                listComments: [...state.listComments, action.payload]
            }

        case TYPES.ADD_SONG:
            return {
                ...state
            }
        case TYPES.ON_ADDING_SONG:
            return {
                ...state,
                onAddingSong: action.payload
            }
        case TYPES.ADD_SONG_SUCCESS:
            return {
                ...state,
                onAddingSongSuccess: action.payload
            }
        case TYPES.ADD_SONG_FAILURE:
            return {
                ...state,
                onAddingSongFail: action.payload
            }

        case TYPES.ADD_PLAYLIST:
            return {
                ...state
            }
        case TYPES.ADD_PLAYLIST_SUCCESS:
            return {
                ...state
            }

        case TYPES.DELETE_PLAYLIST:
            return {
                ...state
            }
        case TYPES.DELETE_PLAYLIST_SUCCESS:
            const newListLibrary = [...state.listLibrary]
            newListLibrary.splice(newListLibrary.findIndex((item) => {
                return item.listSongId == action.payload.libId
            }))
            return {
                ...state,
                listLibrary: newListLibrary
            }

        case TYPES.ADD_SONG_TO_PLAYLIST:
            return {
                ...state
            }
        case TYPES.ADD_SONG_TO_PLAYLIST_SUCCESS:
            return {
                ...state
            }

        case TYPES.DELETE_SONG_FROM_PLAYLIST:
            return {
                ...state
            }
        case TYPES.DELETE_SONG_FROM_PLAYLIST_SUCCESS:
            const newListSongByLibrary = state.listSongByLibrary
            newListSongByLibrary.listSongItemList.splice(newListSongByLibrary.listSongItemList.findIndex((item) => {
                return item.listSongItemId == action.payload.id
            }))
            return {
                ...state,
                listSongByLibrary: newListSongByLibrary,
            }

        case TYPES.GET_PLAYLIST_BY_LID:
            return {
                ...state
            }
        case TYPES.GET_PLAYLIST_BY_LID_SUCCESS:
            return {
                ...state,
                listSongByLibrary: action.payload
            }

        case TYPES.GET_LIBRARY_OF_USER_BY_UID:
            return {
                ...state
            }
        case TYPES.GET_LIBRARY_OF_USER_BY_UID_SUCCESS:
            return {
                ...state,
                listLibrary: action.payload
            }

        case TYPES.GET_MY_LIST_POSTED_SONGS:
            return {
                ...state
            }

        case TYPES.GET_MY_LIST_POSTED_SONGS_SUCCESS:
            return {
                ...state,
                myListPostedSongs: action.payload
            }

        case TYPES.GET_LIST_POSTED_SONGS_OF_USER:
            return {
                ...state,
            }

        case TYPES.GET_LIST_POSTED_SONGS_OF_USER_SUCCESS:
            return {
                ...state,
                listPostedSongsOfUser: action.payload
            }

        case TYPES.ACTION_FAILURE:
            console.log(action.error)
            return {
                ...state,
            }

        case TYPES.SET_TAB_BAR_HEIGHT:
            return {
                ...state,
                tabBarHeight: action.payload
            }

        case TYPES.AUTO_NEXT_SONG:
            return state


        default:
            return state;
    }
}