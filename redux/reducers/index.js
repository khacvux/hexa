import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import authReducer from "./authReducer";

export default combineReducers({
    contactReducer,
    authReducer,
})