import { combineReducers } from "redux";
import usersReducer from "./reducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  data: usersReducer,
  cart: CartReducer,
});
export default rootReducer;
