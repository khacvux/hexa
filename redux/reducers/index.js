import { combineReducers } from "redux";


import authReducer from "./authReducer";
import onLoadingReducer from "./onLoadingReducer";
import followsReducer from "./followsReducer";



export default combineReducers({
    authReducer,
    onLoadingReducer,
    followsReducer,
})