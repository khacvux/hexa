import * as TYPES from '../constants/follows'

const initState = {
    followRequests: [],
    followers: [],
    followings: [],
}

export default followsReducer = ( state = initState, action) => {
    switch(action.type){
        
        // GET LIST FOLLOWER
        case TYPES.GET_LIST_FOLLOWER:
            return {
                ...state,
            }
        case TYPES.GET_LIST_FOLLOWER_SUCCESS:
            return {
                ...state,
                followers: [action.payload]
            }

        //GET LIST FOLLOWING
        case TYPES.GET_LIST_FOLLOWING:
            return {
                ...state
            }

        case TYPES.GET_LIST_FOLLOWING_SUCCESS:
            return {
                ...state,
                followings: [action.payload]
            }
        
        // GET LIST FOLLOW REQUESTS
        case TYPES.GET_LIST_FOLLOW_REQUEST:
            return {
                ...state,
            }

        case TYPES.GET_LIST_FOLLOW_REQUEST_SUCCESS:
            return {
                ...state,
                followRequests: [action.payload]
            }


        //GET LIST FAILURE
        case TYPES.GET__FAILURE: 
            console.log('GET lIST FAIL', action.error)
            return {
                ...state
            }
        
            
    }
}