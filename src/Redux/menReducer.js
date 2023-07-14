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
