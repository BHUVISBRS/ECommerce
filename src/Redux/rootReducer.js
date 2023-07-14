import { combineReducers } from "redux";
import usersReducer from "./reducer";
import CartReducer from "./CartReducer";
import menReducer from "./menReducer";

const rootReducer = combineReducers({
  data: usersReducer,
  cart: CartReducer,
  men: menReducer,
});
export default rootReducer;
