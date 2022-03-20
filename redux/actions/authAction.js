import * as TYPES from '../constants/auth'


export const signIn = (data) => {
    return {
        type: TYPES.SIGN_IN,
        payload: data,
    }
}

export const signInSuccess = (res) => {
    return {
        type: TYPES.SIGN_IN_SUCCESS,
        payload: res,
    }
}

export const signInFailure = (error) => {
    return {
        type: TYPES.SIGN_IN_FAILURE,
        payload: {},
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
