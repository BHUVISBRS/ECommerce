import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersErorr,
  createUserSuccess,
  createUserErorr,
  DeleteUserSuccess,
  DeleteUserErorr,
  updateUserSuccess,
  updateUserErorr,
  showUserSuccess,
  showUserErorr,
  AddTOCartSuccess,
  AddTOCartError,
  loadUsersSuccess2,
  loadUsersErorr2,
  GetCartSuccess,
  GetCartErorr,
} from "./action";
import * as types from "./actionTypes";
import {
  AddTOCartAPI,
  AddTOCartAPIShow,
  CreateUserAPI,
  DeleteUserAPI,
  ShowUserAPI,
  UpdateUserAPI,
  loadUsersAPI,
  loadUsersAPI2,
} from "./api";
import axios from "axios";
import { toast } from "react-hot-toast";

//===== LOAD USERS =====//

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersAPI);
    /*  const response = yield axios.get("https://fakestoreapi.com/products"); */
    console.log(response);
    if (response.statusText === "") {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersErorr(error.response.data));
  }
}

//===== LOAD USERS2 =====//

function* onLoadUsers2() {
  yield takeEvery(types.LOAD_USERS_START2, onLoadUsersStartAsync2);
}

function* onLoadUsersStartAsync2() {
  try {
    const response = yield call(loadUsersAPI2);
    /*  const response = yield axios.get("https://fakestoreapi.com/products"); */
    console.log(response);
    if (response.statusText === "") {
      yield put(loadUsersSuccess2(response.data));
    }
  } catch (error) {
    yield put(loadUsersErorr2(error.response.data));
  }
}

//======================================== ShowUser ===============================================//

function* onShowUser() {
  yield takeEvery(types.SHOW_USER_START, onShowUserStartAsync);
}
function* onShowUserStartAsync({ payload }) {
  try {
    console.log("show start");
    const response = yield call(ShowUserAPI, payload);
    console.log("show end");
    console.log(response);
    if (response.statusText === "") {
      yield put(showUserSuccess(response.data));
    }
  } catch (error) {
    yield put(showUserErorr(error.response.data));
  }
}

//======================================== DeleteUser ===============================================//

function* onDeleteUser() {
  yield takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync);
}

function* onDeleteUserStartAsync(userid) {
  try {
    const response = yield call(DeleteUserAPI, userid);
    console.log("delete sucess", response);
    if (response?.statusText === "OK") {
      yield put(DeleteUserSuccess(response.statusText));
      console.log("status", response?.statusText);
    }
  } catch (error) {
    yield put(DeleteUserErorr(error.response.data));
  }
}
//===== CART_ADDTO_CART_START =====//

function* CardADDData() {
  yield takeEvery(types.CART_ADDTO_CART_START, cardtoAddDataSync);
}

function* cardtoAddDataSync() {
  try {
    const response = yield call(AddTOCartAPI);
    /*  const response = yield axios.get("https://fakestoreapi.com/products"); */
    console.log(response);
    if (response.statusText === "OK") {
      yield put(GetCartSuccess(response.data));
    }
  } catch (error) {
    yield put(GetCartErorr(error.response.data));
  }
}

//======================================== AddToCART ===============================================//

function* AddToCART() {
  yield takeLatest(types.ADDTO_CART_START, AddToCARTStartSync);
}

function* AddToCARTStartSync({ payload }) {
  try {
    const response = yield call(AddTOCartAPIShow, payload);
    console.log(response);
    if (response.statusText === "Created") {
      yield put(AddTOCartSuccess(response.statusText));
      console.log("success", response.statusText);
    }
  } catch (error) {
    console.log("error occured");
    yield put(AddTOCartError(error.response.cart));
  }
}

const userSagas = [
  fork(onLoadUsers),

  fork(onDeleteUser),

  fork(onShowUser),
  fork(AddToCART),
  fork(onLoadUsers2),
  fork(CardADDData),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
