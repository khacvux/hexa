import * as TYPES from '../constants/songs'

const initialState = {
    playerBar: false,
    tabBarHeight: false,
    playSong: false,
    listCategorySong: [],
    listSongByCategory: [],
    listOfSearchResults: [],
    listComments: [],
    arraySongs: [],
    onAddingSong: false,
    onAddingSongSuccess: false,
    onAddingSongFail: false,
}


export default songsReducer = (state = initialState, action) => {
    switch(action.type) {
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
                arraySongs: action.payload
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
            return {
                ...state
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
            return {
                ...state
            }

        case TYPES.FIND_PLAYLIST_BY_ID:
            return {
                ...state
            }
        case TYPES.FIND_PLAYLIST_BY_ID_SUCCESS: 
            return {
                ...state
            }

        case TYPES.FIND_PLAYLIST_BY_USERID:
            return {
                ...state
            }
        case TYPES.FIND_PLAYLIST_BY_USERID_SUCCESS:
            return {
                ...state
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


        default: 
            return state;
    }
}