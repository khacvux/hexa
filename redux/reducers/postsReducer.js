import * as TYPES from '../constants/posts'

const initState = {
    posts: [],
    post: {},
    listCommentOfPost: [],
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

        case TYPES.DELETE_POST:
            return {
                ...state,
            }
        
        case TYPES.DELETE_POST_SUCCESS:
            return {
                ...state,
            }

        case TYPES.LIKE_POST: 
            return {
                ...state,
            }

        case TYPES.LIKE_POST_SUCCESS:
            return {
                ...state
            }
            
        case TYPES.COMMENT_POST:
            return {
                ...state,
            }

        case TYPES.COMMENT_POST_SUCCESS:
            return {
                ...state,
                listCommentOfPost: [...state.listCommentOfPost, action.payload]
            }

        case TYPES.GET_LIST_COMMENT_POST:
            return {
                ...state
            }

        case TYPES.GET_LIST_COMMENT_POST_SUCCESS:
            return {
                ...state,
                listCommentOfPost: action.payload
            }

        case TYPES.DELETE_COMMENT_POST:
            return {
                ...state,
            }

        case TYPES.DELETE_COMMENT_POST_SUCCESS:
            const newListCommemtOfPost = [...state.listCommentOfPost]
            newListCommemtOfPost.splice(newListCommemtOfPost.findIndex((item) => {
                return item.postsCommentId == action.payload
            }), 1)
            return {
                ...state,
                listCommentOfPost: newListCommemtOfPost
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