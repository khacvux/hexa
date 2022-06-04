import * as TYPES from '../constants/search'

const initState = {
    listResult: [],
    listHistorySearch: [],
    profileUser: {},
    myProfile: {}
}


export default searchReducer = (state = initState, action ) => {
    switch(action.type) {
            
        case TYPES.FIND_USER:
            return {
                ...state
            }
        
        case TYPES.FIND_USER_SUCCESS:
            return {
                ...state,
                listResult: action.payload
            }

        case TYPES.FIND_USER_FAILURE:
            console.log('GET LIST RESULT FAIL, ', action.error)
            return {
                ...state,
                listResult: []
            }
        
        // case TYPES.GET_LIST_HISTORY_SEARCH:

        case TYPES.ADD_HISTORY_SEARCH:
            const newList = state.listHistorySearch.map((item) => {
                return item.userId === action.payload.userId
            })

            if(newList[0]) return {
                    ...state,
                }
            else return {
                    ...state,
                    listHistorySearch: [...state.listHistorySearch, action.payload]
                }
            

           

        case TYPES.DELETE_HISTORY_SEARCH:
            const newListHistorySearch = [...state.listHistorySearch]

            newListHistorySearch.splice(newListHistorySearch.findIndex((item) => {
                return item.userId == action.payload.userId
            }), 1)
            return {
                ...state,
                listHistorySearch: newListHistorySearch,
            }

        case TYPES.GET_PROFILE_USER_BY_ID: 
            return {
                ...state,
            }


        
        case TYPES.GET_PROFILE_USER_BY_ID_SUCCESS:
            return {
                ...state,
                profileUser: action.payload,
            }
        case TYPES.GET_PROFILE_USER_BY_ID_FAILURE:
            return {
                ...state,
                profileUser: null,
            }
        

        case TYPES.POST_REQUEST_FOLLOW: 
            return {
                ...state,
            }
        case TYPES.POST_REQUEST_FOLLOW_SUCCESS: 
            if(state.profileUser.follow == -1 && state.profileUser.followStatus == false){
                return {
                    ...state,
                    profileUser: {...state.profileUser, follow: 0}
                }
            } else if(state.profileUser.follow == 0 && state.profileUser.followStatus == false
                || state.profileUser.follow == 1 && state.profileUser.followStatus == false){
                return {
                    ...state,
                    profileUser: {...state.profileUser, follow: -1}
                }
            } else if(state.profileUser.follow == 1){
                return {
                    ...state,
                    profileUser: {...state.profileUser, follow: -1}
                }
            } else if(state.profileUser.follow == -1){
                return {
                    ...state,
                    profileUser: {...state.profileUser, follow: 1}
                }
            }
            else console.log('else')
        case TYPES.POST_REQUEST_FOLLOW_FAILURE:
            console.log(action.error)
            return {
                ...state
            }


        case TYPES.ACCEPT_REQUEST_FOLLOW:
            return {
                ...state
            }
        case TYPES.ACCEPT_REQUEST_FOLLOW_SUCCESS:
            return {
                ...state,
                profileUser: {...state.profileUser, follow: 1}
            }
        case TYPES.ACCEPT_REQUEST_FOLLOW_FAILURE:
            console.log(action.error)
            return {
                ...state
            }

        case TYPES.REFUSE_REQUEST_FOLLOW:
            return {
                ...state
            }
        case TYPES.REFUSE_REQUEST_FOLLOW_SUCCESS:
            return {
                ...state,
                //
            }
        case TYPES.REFUSE_REQUEST_FOLLOW_FAILURE:
            console.log(action.error)
            return {
                ...state,
            }
    


        default:
            return state
    }
}