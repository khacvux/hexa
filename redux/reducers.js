import { SET_USER_LOGIN } from "./actions";

const initialState =  {
    user: false,
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_LOGIN: 
            return {...state, user: action.payload}
        default: 
            return state;
    }
}

export default userReducer