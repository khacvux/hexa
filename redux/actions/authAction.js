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


export const signUp = (data) => {
    return {
        type: TYPES.SIGN_UP,
        payload: data,
    }
}


export const signUpSuccess = (res) => {
    return {
        type: TYPES.SIGN_UP_SUCCESS,
        payload: res
    }
}

export const signUpFailure = (error) => {
    return {
        type: TYPES.SIGN_UP_FAILURE,
        payload: {},
        error: error,
    }
}

export const setFollowStatus = ({token, userId}) => {
    console.log("in action: ", userId)
    return { 
        type: TYPES.SET_FOLLOW_STATUS,
        payload: {token, userId}
    }
}

export const setFollowStatusSuccess = () => {
    return { 
        type: TYPES.SET_FOLLOW_STATUS_SUCCESS,
    }
}

export const setFollowStatusFailure = (error) => {
    return { 
        type: TYPES.SET_FOLLOW_STATUS_FAILURE,
        error,
    }
}



export const signOut = () => {
    return {
        type: TYPES.SIGN_OUT,
        payload: {},
    }
}