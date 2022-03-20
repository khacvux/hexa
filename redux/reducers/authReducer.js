import * as TYPES from '../constants/auth'

const initState = {
    token: '',
}

export default authReducer = ( state = initState, action ) => {
    switch(action.type) {
        case TYPES.SIGN_IN: 
            return {
                ...state,
            }
        case TYPES.SIGN_IN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                token: action.payload.data
            }
        case TYPES.SIGN_IN_FAILURE:
            console.log(action.error)
            return {
                ...state
            }
        default:
            return state;
    }
}