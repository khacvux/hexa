import * as TYPES from '../constants'

const initState = {
    user: [],
    error: {},
}

export default contactReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case TYPES.SEND_REQUEST_GET_ALL_USER:
            return {
                ...state,
            }
        case TYPES.SEND_REQUEST_GET_ALL_USER_SUCCESS:
            return {
                ...state,
                user: payload,
            }
        case TYPES.SEND_REQUEST_GET_ALL_USER_FAILURE:
            return {
                ...state,
                user: {},
                error: payload
            }
        default:
            return state;
    }
}