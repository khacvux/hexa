import * as TYPES from '../constants/auth'

const initState = {
    token: '',
    account: null,
}

export default authReducer = ( state = initState, action ) => {
    switch(action.type) {

        // SIGN IN ACTION
        case TYPES.SIGN_IN:
            return {
                ...state,
            }
        case TYPES.SIGN_IN_SUCCESS:
            console.log('LOGIN SUCCESS: TOKEN -',action.payload)
            return {
                ...state,
                token: action.payload
            }
        case TYPES.SIGN_IN_FAILURE:
            console.log(action.error)
            return {
                ...state
            }

        // SIGN UP ACTION
        case TYPES.SIGN_UP:
            return {
                ...state
            }

        case TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                // token: action,
                account: action.payload
            }
            
        case TYPES.SIGN_UP_SUCCESS:
            console.log(action.error)
            return {
                ...state
            }


        //SIGN OUT
        case TYPES.SIGN_OUT:
            return {
                ...state,
                token: '',
            }

        


        default:
            return state;
    }
}