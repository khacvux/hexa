import * as TYPES from '../constants/auth'

const initState = {
    token: '',
    userId: null,
    firstName: '',
    lastName: '',
    avatar: null,
    background: null,
    email: '',
    password: null,
    name: '',
    phone: '',
    followStatus: true,
    userSender: null,
    userRecipient: null,
    postsList: null,
    songList: null,
    listSongInfoList: null

}

export default authReducer = ( state = initState, action ) => {
    switch(action.type) {

        // SIGN IN ACTION
        case TYPES.SIGN_IN:
            return {
                ...state,
            }
        case TYPES.SIGN_IN_SUCCESS:
            console.log('LOGIN SUCCESS: TOKEN -',action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                avatar: action.payload.avatar,
                background: action.payload.background,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                phone: action.payload.phone,
                followStatus: action.payload.followStatus,
                userSender: action.payload.userSender,
                userRecipient: action.payload.userRecipient,
                postsList: action.payload.postsList,
                songList: action.payload.songList,
                listSongInfoList: action.payload.listSongInfoList,
            }
        case TYPES.SIGN_IN_FAILURE:
            console.log(action.error)
            return {
                ...state
            }

        // SIGN UP ACTION
        case TYPES.SIGN_UP:
            return {
                ...state
            }

        case TYPES.SIGN_UP_SUCCESS:

            console.log('SIGNUP SUCCESS: TOKEN -',action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                avatar: action.payload.avatar,
                background: action.payload.background,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                phone: action.payload.phone,
                followStatus: action.payload.followStatus,
                userSender: action.payload.userSender,
                userRecipient: action.payload.userRecipient,
                postsList: action.payload.postsList,
                songList: action.payload.songList,
                listSongInfoList: action.payload.listSongInfoList,
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

        


        default:
            return state;
    }
}