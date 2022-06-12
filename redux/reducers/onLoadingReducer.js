import * as TYPES from '../constants/onLoading'

const initState = {
    authLoading: false,
    followStatusLoading: false,
    findUserLoading: false,
    buttonLoading:  false,
    getListPostLoading: false,

    getMyListPostedSongLoading: false,
    getListPostedSongLoading: false,
    getListSongPostLoading: false,
    getPlaylistLoading: false
}

export default onLoadingReducer = ( state = initState, action ) => {
    switch(action.type){
        case TYPES.ON_LOADING_AUTH:
            return{
                ...state,
                authLoading: action.payload,
            }
        case TYPES.ON_LOADING_SET_FOLLOW_STATUS:
            return{
                ...state,
                followStatusLoading: action.payload,
            }
        case TYPES.ON_LOADING_FIND_USER:
            return {
                ...state,
                findUserLoading: action.payload,
            }
        case TYPES.ON_LOADING_GET_LIST_POST:
            return {
                ...state,
                getListPostLoading: action.payload,
            }
        case TYPES.BUTTON_LOADING:
            return {
                ...state,
                buttonLoading: action.payload
            }
        case TYPES.ON_LOADING_GET_MY_LIST_POSTED_SONG:
            return {
                ...state,
                getMyListPostedSongLoading: action.payload
            }
        
        case TYPES.ON_LOADING_GET_LIST_POSTED_SONG:
            return {
                ...state,
                getListPostedSongLoading: action.payload
            }
        
        case TYPES.ON_LOADING_GET_LIST_SONG_POST:
            return {
                ...state,
                getListSongPostLoading: action.payload
            }

        case TYPES.ON_LOADING_GET_PLAYLIST:
            return {
                ...state,
                getPlaylistLoading: action.payload
            }
        
        default:
            return state;
    }
}