import * as TYPES from '../constants/onLoading'

const initState = {
    authLoading: false,
}

export default onLoadingReducer = ( state = initState, action ) => {
    switch(action.type){
        case TYPES.ON_LOADING_AUTH:
            return{
                ...state,
                authLoading: action.payload,
            }
        default:
            return state;
    }
}