import { combineReducers } from "redux";


import authReducer from "./authReducer";
import onLoadingReducer from "./onLoadingReducer";
import followsReducer from "./followsReducer";
import searchReducer from "./searchReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
    authReducer,
    onLoadingReducer,
    followsReducer,
    searchReducer,
    postsReducer,
})