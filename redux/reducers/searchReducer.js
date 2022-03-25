import * as TYPES from '../constants/search'

const initState = {
    listResult: [],
    listHistorySearch: [],
    profileUser: null,
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
            return {
                ...state,
                listHistorySearch: [...state.listHistorySearch, action.payload]
            }

        // case TYPES.DELETE_HISTORY_SEARCH:
        //     return {

        //     }

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


        
        default:
            return state
    }
}