import * as types from "./actionTypes";

const initaialState = {
  carts: [],
  loading: false,
  error: null,
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

    default:
      return state;
  }
};

export default CartReducer;
