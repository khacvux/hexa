import * as TYPES from '../constants/posts'

const initState = {
    posts: [],
    post: {},
    listCommentOfPost: [],
    listPostUser: [],
    listPostByUID: [],
    loadingGetPosts: false,
    onAddingPosts: false,
    onAddingSuccess: false,
    onAddingFail: false,
    paginationNumber: 0,
}

export default postsReducer = (state = initState, action) => {
    switch(action.type){

        case TYPES.RESET_POSTS:
            return {
                ...state,
                posts: []
            }
        case TYPES.SET_PAGINATION_NUMBER:
            return {
                ...state,
                paginationNumber: action.payload
            }
        case TYPES.GET_POST:
            return {
                ...state,
            }
        case TYPES.GET_POST_SUCCESS:
            return {
                ...state,
                paginationNumber: state.paginationNumber + 1,
                posts: [...state.posts, ...action.payload],
            }

        case TYPES.SHOW_LOADING_GET_POST:
            return {
                ...state,
                loadingGetPosts: true
            }

        case TYPES.HIDE_LOADING_GET_POST:
            return {
                ...state,
                loadingGetPosts: false
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
            const newListPostUser = [...state.listPostUser]

            newListPostUser.splice(newListPostUser.findIndex((item) => {
                return item.postsId == action.payload.postsId
            }), 1)
            return {
                ...state,
                listPostUser: newListPostUser,
            }

        case TYPES.REACT_POST: 
            return {
                ...state,
            }

        case TYPES.REACT_POST_SUCCESS:
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

        case TYPES.GET_LIST_POST_BY_UID:
            return {
                ...state
            }

        case TYPES.GET_LIST_POST_BY_UID_SUCCESS:
            return {
                ...state,
                listPostByUID: action.payload
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