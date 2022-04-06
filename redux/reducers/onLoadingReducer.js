import * as TYPES from '../constants/onLoading'

const initState = {
    authLoading: false,
    followStatusLoading: false,
    findUserLoading: false,
    buttonLoading:  false,
    getListPostLoading: false,
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
       
        
        default:
            return state;
    }
}