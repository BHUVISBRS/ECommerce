import * as types from "./actionTypes";

const initaialState = {
  users: [],
  loading: false,
  error: null,
  response: "",
  cart: [],
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

    // ############ CREATE_USER_START#########################//

    case types.CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload,
      };

    case types.CREATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ############ UPDATE_USER_START#########################//

    case types.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.data],
      };

    case types.UPDATE_USER_ERROR:
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
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };

    case types.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
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
      };

    // ############ ADDTO_CART_START#########################//

    case types.ADDTO_CART_START:
      return {
        ...state,
        Loading: false,
      };
    case types.ADDTO_CART_SUCCESS:
      return {
        ...state,
        loading: false,

        cart: [...action.payload],
      };

    case types.ADDTO_CART_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
