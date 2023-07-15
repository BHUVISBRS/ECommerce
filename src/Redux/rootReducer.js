import { combineReducers } from "redux";
import usersReducer from "./reducer";
import CartReducer from "./CartReducer";
import menReducer from "./menReducer";
import MenCartReducer from "./MenCartReducer";

const rootReducer = combineReducers({
  data: usersReducer,
  cart: CartReducer,
  men: menReducer,
  mencart: MenCartReducer,
});
export default rootReducer;
