import * as TYPES from '../constants/posts'

const initState = {
    posts: [],

}

export default postsReducer = (state = initState, action) => {
    switch(action.type){

        case TYPES.GET_POST:
            return {
                ...state,
            }
        case TYPES.GET_POST_SUCCESS:
            return {
                ...state,
                posts: posts.concat(action.payload)
            }
        case TYPES.POST_ERROR:
            return {
                ...state,
                error: action.error,
            }
    }
}