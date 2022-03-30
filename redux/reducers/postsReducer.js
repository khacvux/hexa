import * as TYPES from '../constants/posts'

const initState = {
    posts: [],
    post: {},
    listPostUser: [],
    onAddingPosts: false,
    onAddingSuccess: false,
    onAddingFail: false,
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

        case TYPES.ADD_POST: 
            return {
                ...state,
            }
            
        case TYPES.ON_ADDING_POSTS: 
            return {
                ...state,
                onAddingPosts: action.payload,
            }
        
        case TYPES.ADD_POST_SUCCESS:
            return {
                ...state,
                onAddingSuccess: action.payload,
            }

        case TYPES.ADD_POST_FAILURE: 
            return {
                ...state,
                onAddingFail: action.payload
            }


        case TYPES.GET_LIST_POST_USER: 
            return {
                ...state,
            }
        case TYPES.GET_LIST_POST_USER_SUCCESS: 
            return {
                ...state,
                listPostUser: action.payload,
            }



        case TYPES.FIND_POST_BY_ID:
            return {
                ...state,
            }

        case TYPES.FIND_POST_BY_ID_SUCCESS:
            return {
                ...state,
                post: action.payload,
            }

            

        case TYPES.POST_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}