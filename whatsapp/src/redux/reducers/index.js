import {combineReducers} from "redux";
import  changeUserReducer  from "./changeUserReducer";
import  userListReducer  from "./userListReducer";
import messageListReducer from "./messageListReducer";

const rootReducer = combineReducers({
    changeUserReducer,
    userListReducer,
    messageListReducer
})

export default rootReducer;