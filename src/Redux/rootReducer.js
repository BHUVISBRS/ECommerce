import { combineReducers } from "redux";
import { CartReducer, usersReducer } from "./reducer";



const rootReducer = combineReducers({
    data: usersReducer,
    cart:CartReducer,

});
export default rootReducer;