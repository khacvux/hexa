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

export const onAddingPosts = payload => {
    return {
        type: TYPES.ON_ADDING_POSTS,
        payload
    }
}

export const addPostSuccess = payload => {
    return {
        type: TYPES.ADD_POST_SUCCESS,
        payload
    }
}

export const addPostFail = payload => {
    return {
        type: TYPES.ADD_POST_FAILURE,
        payload
    }
}

export const getListPostUser = payload => {
    return {
        type: TYPES.GET_LIST_POST_USER,
        payload
    }
}

export const getListPostUserSuccess = payload => {
    return {
        type: TYPES.GET_LIST_POST_USER_SUCCESS,
        payload
    }
}

export const findPostsById = payload => {
    return {
        type: TYPES.FIND_POST_BY_ID,
        payload
    }
}

export const findPostsByIdSuccess = payload => {
    return {
        type: TYPES.FIND_POST_BY_ID_SUCCESS,
        payload
    }
}


export const consoleError = (error) => {
    return {
        type: TYPES.POST_ERROR,
        error,
    }
}