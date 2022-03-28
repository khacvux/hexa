import * as TYPES from '../constants/posts'



export const getPost = (data) => {
    return {
        type: TYPES.GET_POST,
        payload: data,
    }
}

export const getPostSuccess = (data) => {
    return {
        type: TYPES.GET_POST_SUCCESS,
        payload: data,
    }
}



export const addPost = (data) => {
    return {
        type: TYPES.ADD_POST,
        payload: data
    }
}

export const addPostSuccess = (data) => {
    return {
        type: TYPES.ADD_POST_SUCCESS,
        payload: data
    }
}




export const consoleError = (error) => {
    return {
        type: TYPES.POST_ERROR,
        error,
    }
}