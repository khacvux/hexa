import * as TYPES from '../constants/auth'

const initState = {
    token: '',
    userId: null,
    firstName: '',
    lastName: '',
    avatar: null,
    background: null,
    email: '',
    name: '',
    phone: '',
    followStatus: false,
    userSender: null,
    userRecipient: null,
    songList: null,
    listSongInfoList: null,
    numberOfPosts: 0,
    numberOfFollower: 0,
    numberOfFollowing: 0,
    message: '',
    unauth: false,

}

export default authReducer = (state = initState, action) => {
    switch (action.type) {

        // SIGN IN ACTION
        case TYPES.SIGN_IN:
            return {
                ...state,
            }
        case TYPES.SIGN_IN_SUCCESS:
            // console.log('LOGIN SUCCESS: TOKEN -',action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                avatar: action.payload.avatar,
                background: action.payload.background,
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phone,
                followStatus: action.payload.followStatus,
                userSender: action.payload.userSender,
                userRecipient: action.payload.userRecipient,
                songList: action.payload.songList,
                listSongInfoList: action.payload.listSongInfoList,
                numberOfPosts: action.payload.numberOfPosts,
                numberOfFollower: action.payload.numberOfFollower,
                numberOfFollowing: action.payload.numberOfFollowing,
                message: '',
            }
        case TYPES.SIGN_IN_FAILURE:
            console.log(action.error)
            return {
                ...state,
                message: 'Wrong account or password!!'
            }



        // SIGN UP ACTION
        case TYPES.SIGN_UP:
            return {
                ...state
            }
        case TYPES.SIGN_UP_SUCCESS:
            // console.log('SIGNUP SUCCESS: TOKEN -',action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                avatar: action.payload.avatar,
                background: action.payload.background,
                email: action.payload.email,
                name: action.payload.name,
                phone: action.payload.phone,
                followStatus: action.payload.followStatus,
                userSender: action.payload.userSender,
                userRecipient: action.payload.userRecipient,
                songList: action.payload.songList,
                listSongInfoList: action.payload.listSongInfoList,
                numberOfPosts: action.payload.numberOfPosts,
                numberOfFollower: action.payload.numberOfFollower,
                numberOfFollowing: action.payload.numberOfFollowing,
            }
        case TYPES.SIGN_UP_FAILURE:
            console.log(action.error)
            return {
                ...state
            }


        //SIGN OUT
        case TYPES.SIGN_OUT:
            return {
                ...state,
                token: '',
            }


        //SET PRIVATE ACCOUNT
        case TYPES.SET_FOLLOW_STATUS:
            return {
                ...state,
            }
        case TYPES.SET_FOLLOW_STATUS_SUCCESS:
            return {
                ...state,
                followStatus: !state.followStatus
            }
        case TYPES.SET_FOLLOW_STATUS_FAILURE:
            // console.log('SET_FOLLOW_STATUS_FAILURE:',action.error)
            return {
                ...state,
            }



        case TYPES.EDIT_PROFILE:
            return {
                ...state,
            }
        case TYPES.EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        case TYPES.EDIT_PROFILE_FAILURE:
            console.log(action.error)
            return {
                ...state,
            }

        case TYPES.UPDATE_AVATAR:
            return {
                ...state
            }

        case TYPES.UPDATE_AVATAR_SUCCESS:
            return {
                ...state
            }

        case TYPES.UPDATE_AVATAR_FAILURE:
            console.log(action.error)
            return {
                ...state
            }


        case TYPES.DELETE_AVATAR:
            return {
                ...state
            }

        case TYPES.DELETE_AVATAR_SUCCESS:
            return {
                ...state
            }

        case TYPES.DELETE_AVATAR_FAILURE:
            console.log(action.error)
            return {
                ...state
            }


        case TYPES.UNAUTHORIZED:
            return {
                ...state,
                unauth: action.payload
            }

        case TYPES.POST_PLUS_1:
            return {
                ...state,
                numberOfPosts: (state.numberOfPosts) + 1
            }

        case TYPES.POST_MINUS_1:
            return {
                ...state,
                numberOfPosts: (state.numberOfPosts) - 1
            }

        case TYPES.FOLLOWING_PLUS_1:
            return {
                ...state,
                numberOfFollowing: state.numberOfFollowing + 1
            }

        case TYPES.FOLLOWING_MINUS_1:
            return {
                ...state,
                numberOfFollowing: state.numberOfFollowing - 1
            }



        //DEFAULT
        default:
            return state;
    }
}