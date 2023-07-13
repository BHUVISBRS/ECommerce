import * as types from "./actionTypes";

const initaialState = {
  carts: [],
  loading: false,
  error: null,
  response: "",
  deleteLoading: false,
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
        deleteLoading: true,
      };

    case types.DELETE_USER_SUCCESS:
      console.log("delete the user", action.payload);
      return {
        ...state,
        /* carts: state.carts.filter((item) => item.id !== action.payload), */
        response: action.payload,
        deleteLoading: false,
      };

    case types.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        deleteLoading: false,
      };

    // ############ SHOW_USER_RES_CLEAN#########################//
    case types.CARD_USER_RES_CLEAN:
      console.log("show user res clean reducer");
      return {
        ...state,
        carts: [],
        error: null,
        response: null,
      };

    default:
      return state;
  }
};

export default CartReducer;
