import { toast } from "react-hot-toast";
import * as types from "./actionTypes";

//LOAD USER//
export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersErorr = (error) => ({
  type: types.LOAD_USERS_ERORR,
  payload: error,
});

//Deleteuser

export const DeleteUserStart = (userid) => ({
  type: types.DELETE_USER_START,
  payload: userid,
});

export const DeleteUserSuccess = (payload) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: payload,
});

export const DeleteUserErorr = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});
//*****showUserResClean*******//

export const showUserResClean = (error) => ({
  type: types.SHOW_USER_RES_CLEAN,
  payload: error,
});

//*****CartUserResClean*******//
export const CartUserResClean = (error) => ({
  type: types.CARD_USER_RES_CLEAN,
  payload: error,
});

//GetCartSTART//
export const GetCartSTART = () => ({
  type: types.CART_ADDTO_CART_START,
});

export const GetCartSuccess = (users) => ({
  type: types.CART_ADDTO_CART_SUCCESS,
  payload: users,
});

export const GetCartErorr = (error) => ({
  type: types.CART_ADDTO_CART_ERROR,
  payload: error,
});

//AddTOCart

export const AddTOCartStart = (user) => {
  console.warn("action is called", user);
  return {
    type: types.ADDTO_CART_START,
    payload: user,
  };
};

export const AddTOCartSuccess = (payload) => ({
  type: types.ADDTO_CART_SUCCESS,
  payload: payload,
});

export const AddTOCartError = (error) => ({
  type: types.ADDTO_CART_ERROR,
  payload: error,
});
//LOAD USER2//
export const loadUsersStart2 = () => ({
  type: types.LOAD_USERS_START2,
});

export const loadUsersSuccess2 = (users) => ({
  type: types.LOAD_USERS_SUCCESS2,
  payload: users,
});

export const loadUsersErorr2 = (error) => ({
  type: types.LOAD_USERS_ERORR2,
  payload: error,
});

//Mens Cart

export const MensCartStart = (user) => {
  console.warn("action is called", user);
  return {
    type: types.MEN_CART_START,
    payload: user,
  };
};

export const MensCartSuccess = (payload) => ({
  type: types.MEN_CART_SUCCESS,
  payload: payload,
});

export const MensCartError = (error) => ({
  type: types.MEN_CART_ERROR,
  payload: error,
});
