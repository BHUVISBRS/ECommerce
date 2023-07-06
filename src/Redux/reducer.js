import * as types from "./actionTypes"

const initaialState = {
    users: [],
    loading: false,
    error: null,
    response: "",


}
const usersReducer = (state = initaialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USER_START:
        case types.UPDATE_USER_START:
        case types.DELETE_USER_START:
        case types.SHOW_USER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                response: action.payload,
                loading: false,
            };
        case types.CREATE_USER_SUCCESS:

            return {
                ...state,
                loading: false,
                response: action.payload
            };

        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
                loading: false,
            }
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.data],
            };
        case types.LOAD_USERS_ERORR:
        case types.CREATE_USER_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
        case types.SHOW_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,

            };

        case types.SHOW_USER_SUCCESS:
            console.log('show user success reducer');
            return {
                ...state,
                users: [action.payload],
                isLoading: false,
            }

        case types.SHOW_USER_RES_CLEAN:
            console.log('show user res clean reducer');
            return {
                ...state,
                users: [],
                error: null
            }
        default:
            return state;

    }
}



export default usersReducer;