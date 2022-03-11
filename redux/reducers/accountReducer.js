import * as TYPES from '../constants/account'

const initState = {
    account: [],
}

export default acccountReducer = ( state = initState, action ) => {
    switch(action.type) {
        case TYPES.SIGN_IN: 
            return {
                ...state,
            }
        case TYPES.SIGN_IN_SUCCESS:

            return {
                ...state,
                account: account,
            }
        case TYPES.SIGN_IN_FAILURE:
            console.log(action.error)
            return {
                ...state
            }
    }
}