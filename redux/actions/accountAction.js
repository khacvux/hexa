import * as TYPES from '../constants/account'


export const signIn = (value) => {
    return {
        type: TYPES.SIGN_IN,
        payload: { value },
    }
}

export const signInSuccess = (data) => {
    return {
        type: TYPES.SIGN_IN_SUCCESS,
        payload: { data },
    }
}

export const signInFailure = (error) => {
    return {
        type: TYPES.SIGN_IN_FAILURE,
        payload: { },
        error: error,
    }
}


export const signUp = (value) => {
    return {
        type: TYPES.SIGN_UP,
        payload: { value },
    }
}


export const signUpSuccess = (data) => {
    return {
        type: TYPES.SIGN_UP_SUCCESS,
        payload: { data },
    }
}

export const signUpFailure = (error) => {
    return {
        type: TYPES.SIGN_UP_FAILURE,
        payload: { },
        error: error,
    }
}
