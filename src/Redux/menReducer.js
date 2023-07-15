import * as types from "./actionTypes";

// ############ MEN_CART_START#########################//

const meninitialState = {
  menusers: [],
  loading: false,
  error: null,
  response: "",
  deleteLoading: false,
};
const menReducer = (state = meninitialState, action) => {
  switch (action.type) {
    // ############ LOAD_USERS_START2#########################//

    case types.LOAD_USERS_START2:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS2:
      return {
        ...state,
        menusers: [...action.payload],

        loading: false,
      };
    case types.LOAD_USERS_ERORR2:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    // ############ ADDTO_CART_START#########################//

    case types.MEN_CART_START:
      return {
        ...state,
        deleteLoading: true,
      };
    case types.MEN_CART_SUCCESS:
      console.log(action.payload, "reducer");
      return {
        ...state,
        deleteLoading: false,
        response: action.payload,
      };

    case types.MEN_CART_ERROR:
      return {
        ...state,
        deleteLoading: false,
        error: [action.payload],
      };

    default:
      return state;
  }
};
export default menReducer;
