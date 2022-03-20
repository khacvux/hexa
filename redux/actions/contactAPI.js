import * as TYPES from '../constants'

export const fetchContactData = (data) => {
    return{
        type: TYPES.SEND_REQUEST_GET_ALL_USER,
        payload: data,
    }
}

export function fetchDataSuccess(user){
    return{
        type: TYPES.SEND_REQUEST_GET_ALL_USER_SUCCESS,
        payload: user,
    }
}

export function fetchDataFailure(error){
    return{
        type: TYPES.SEND_REQUEST_GET_ALL_USER_FAILURE,
        payload: {},
        error: error
    }
}


