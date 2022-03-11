import * as TYPES from '../constants'

const initState = {
    user: [],
    error: {},
}

export default contactReducer = (state = initState, action) => {
    switch(action.type) {
        case TYPES.SEND_REQUEST_GET_ALL_USER:
            return {
                ...state,
            }
        case TYPES.SEND_REQUEST_GET_ALL_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }
        case TYPES.SEND_REQUEST_GET_ALL_USER_FAILURE:
            return {
                ...state,
                user: {},
                error: action.payload
            }
        default:
            return state;
    }
}