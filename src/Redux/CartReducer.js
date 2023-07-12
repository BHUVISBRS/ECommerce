import * as types from "./actionTypes";

const initaialState = {
  carts: [],
  loading: false,
  error: null,
  response: "",
};

// ############ CART_ADDTO_CART_START#########################//
const CartReducer = (state = initaialState, action) => {
  switch (action.type) {
    case types.CART_ADDTO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case types.CART_ADDTO_CART_SUCCESS:
      return {
        ...state,
        carts: [...action.payload],
        loading: false,
      };

    case types.CART_ADDTO_CART_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    // ############ DELETE_USER_START#########################//

    case types.DELETE_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_USER_SUCCESS:
      console.log("delete the user", action.payload);
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
        response: action.payload,
        loading: false,
      };

    case types.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default CartReducer;
