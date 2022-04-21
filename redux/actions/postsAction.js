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

export const showLoadingGetPost = () => {
    return {
        type: TYPES.SHOW_LOADING_GET_POST,
        payload: true
    }
}

export const hideLoadingGetPost = () => {
    return {
        type: TYPES.HIDE_LOADING_GET_POST,
        payload: false
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

export const reactPost = payload => {
    return {
        type: TYPES.REACT_POST,
        payload
    }
}

export const reactPostSuccess = payload => {
    return {
        type: TYPES.REACT_POST_SUCCESS,
        payload
    }
}

export const commentPost = payload => {
    return {
        type: TYPES.COMMENT_POST,
        payload
    }
}

export const commentPostSuccess = payload => {
    return {
        type: TYPES.COMMENT_POST_SUCCESS,
        payload
    }
}

export const getListCommentOfPost = payload => {
    return {
        type: TYPES.GET_LIST_COMMENT_POST,
        payload
    }
}

export const getListCommentOfPostSuccess = payload => {
    return {
        type: TYPES.GET_LIST_COMMENT_POST_SUCCESS,
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

export const deletePost = payload => {
    return {
        type: TYPES.DELETE_POST,
        payload
    }
}

export const deletePostSuccess = payload => {
    return {
        type: TYPES.DELETE_POST_SUCCESS,
        payload
    }
}

export const deleteComment = payload => {
    return {
        type: TYPES.DELETE_COMMENT_POST,
        payload
    }
}

export const deleteCommentSuccess = payload => {
    return {
        type: TYPES.DELETE_COMMENT_POST_SUCCESS,
        payload
    }
}


export const consoleError = (error) => {
    return {
        type: TYPES.POST_ERROR,
        error,
    }
}

