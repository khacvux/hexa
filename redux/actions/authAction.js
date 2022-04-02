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


export const editProfile = (data) => {
    return {
        type: TYPES.EDIT_PROFILE,
        payload: data,
    }
}

export const editProfileSuccess = (data) => {
    return {
        type: TYPES.EDIT_PROFILE_SUCCESS,
        payload: data,
    }
}

export const editProfileFailure = (error) => {
    return {
        type: TYPES.EDIT_PROFILE_FAILURE,
        error,
    }
}



export const updateAvatar = payload => {
    return {
        type: TYPES.UPDATE_AVATAR,
        payload
    }
}

export const updateAvatarSuccess = payload => {
    return {
        type: TYPES.UPDATE_AVATAR_SUCCESS,
        payload
    }
}

export const updateAvatarFailure = error => {
    return {
        type: TYPES.UPDATE_AVATAR_SUCCESS,
        error
    }
}



export const deleteAvatar = payload => {
    return {
        type: TYPES.DELETE_AVATAR,
        payload
    }
}

export const deleteAvatarSuccess = payload => {
    return {
        type: TYPES.DELETE_AVATAR_SUCCESS,
        payload
    }
}

export const deleteAvatarFailure = error => {
    return {
        type: TYPES.DELETE_AVATAR_SUCCESS,
        error
    }
}




export const signOut = () => {
    return {
        type: TYPES.SIGN_OUT,
        payload: {},
    }
}