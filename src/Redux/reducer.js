import * as types from "./actionTypes";

const initaialState = {
  users: [],
  loading: false,
  error: null,
  response: "",
  deleteLoading: false,
};
const usersReducer = (state = initaialState, action) => {
  switch (action.type) {
    // ############ LOAD_USERS_START#########################//

    case types.LOAD_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload],

        loading: false,
      };
    case types.LOAD_USERS_ERORR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ############ LOAD_USERS_START2#########################//

    case types.LOAD_USERS_START2:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS2:
      return {
        ...state,
        users: [...action.payload],

        loading: false,
      };
    case types.LOAD_USERS_ERORR2:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ############ ADDTO_CART_START#########################//

    case types.ADDTO_CART_START:
      return {
        ...state,
        deleteLoading: true,
      };
    case types.ADDTO_CART_SUCCESS:
      console.log(action.payload, "reducer");
      return {
        ...state,
        deleteLoading: false,
        response: action.payload,
      };

    case types.ADDTO_CART_ERROR:
      return {
        ...state,
        deleteLoading: false,
        error: [action.payload],
      };

    // ############ SHOW_USER_START#########################//
    case types.SHOW_USER_START:
      console.log("show user start reducer");
      return {
        ...state,
        Loading: true,
      };

    case types.SHOW_USER_SUCCESS:
      console.log("show user success reducer");
      return {
        ...state,
        users: action.payload,
        Loading: false,
      };

    case types.SHOW_USER_ERROR:
      console.log("show user error reducer");
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // ############ SHOW_USER_RES_CLEAN#########################//
    case types.SHOW_USER_RES_CLEAN:
      console.log("show user res clean reducer");
      return {
        ...state,
        users: [],
        error: null,
        response: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
