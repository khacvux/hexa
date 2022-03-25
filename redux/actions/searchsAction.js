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

// export const getListHistoryResearch = (data)  => {
//     return {
//         type: TYPES.GET_LIST_HISTORY_SEARCH,
//         payload: data
//     }
// }
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

