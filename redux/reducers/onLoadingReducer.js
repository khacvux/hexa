import * as TYPES from '../constants/onLoading'

const initState = {
    authLoading: false,
    followStatusLoading: false,
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
        default:
            return state;
    }
}