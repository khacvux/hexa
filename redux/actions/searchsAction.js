import * as TYPES from '../constants/search'

export const findUserByName = (data) => {
    return {
        type: TYPES.FIND_USER,
        payload: data
    }
}

export const findUserByNameSuccess = (data) => {
    return {
        type: TYPES.FIND_USER_SUCCESS,
        payload: data
    }
}

export const findUserByNameFailure = (error) => {
    return {
        type: TYPES.FIND_USER_FAILURE,
        error
    }
}


export const addHistorySearch = (data) => {
    return {
        type: TYPES.ADD_HISTORY_SEARCH,
        payload: data
    }
}

export const deleteHistorySearch = (data) => {
    return {
        type: TYPES.DELETE_HISTORY_SEARCH,
        payload: data
    }
}


export const getProfileUserByID = (data) => {
    return {
        type: TYPES.GET_PROFILE_USER_BY_ID,
        payload: data
    }
}

export const getProfileUserByIDSuccess = (data) => {
    return {
        type: TYPES.GET_PROFILE_USER_BY_ID_SUCCESS,
        payload: data
    }
}

export const getProfileUserByIDFailure = (error) => {
    return {
        type: TYPES.GET_PROFILE_USER_BY_ID_FAILURE,
        error
    }
}

export const postRequestFollow = payload => {
    return {
        type: TYPES.POST_REQUEST_FOLLOW,
        payload
    }
}

export const postRequestFollowSuccess = payload => {
    return {
        type: TYPES.POST_REQUEST_FOLLOW_SUCCESS,
        payload
    }
}

export const postRequestFollowFailure = payload => {
    return {
        type: TYPES.POST_REQUEST_FOLLOW_FAILURE,
        payload
    }
}

export const confirmRequestFollow = payload => {
    return {
        type: TYPES.CONFIRM_REQUEST_FOLLOW,
        payload
    }
}

export const confirmRequestFollowSuccess = payload => {
    return {
        type: TYPES.CONFIRM_REQUEST_FOLLOW_SUCCESS,
        payload
    }
}

export const confirmRequestFollowFailure = payload => {
    return {
        type: TYPES.CONFIRM_REQUEST_FOLLOW_FAILURE,
        payload
    }
}

