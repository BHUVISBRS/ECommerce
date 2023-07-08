import { combineReducers } from "redux";
import { CartReducer, usersReducer } from "./reducer";



const rootReducer = combineReducers({
    data: usersReducer,
    cartdata:CartReducer,
});
export default rootReducer;