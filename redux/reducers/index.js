import { combineReducers } from "redux";


import authReducer from "./authReducer";
import onLoadingReducer from "./onLoadingReducer";



export default combineReducers({
    authReducer,
    onLoadingReducer,
})