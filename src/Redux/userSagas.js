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

//===== CreateUser =====//

function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(CreateUserAPI, payload);
    console.log(response);
    if (response.statusText === "Created") {
      yield put(createUserSuccess(response));
    }
  } catch (error) {
    yield put(createUserErorr(error.response.data));
  }
}

//======================================== UpdateUser ===============================================//

function* onUpdateUser() {
  yield takeEvery(types.UPDATE_USER_START, onUpdateUserStartAsync);
}
function* onUpdateUserStartAsync({ payload }) {
  try {
    const response = yield call(UpdateUserAPI, payload.userInfo, payload.user);
    if (response.statusText === "OK") {
      yield put(updateUserSuccess(response));
    }
  } catch (error) {
    yield put(updateUserErorr(error.response.data));
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
  while (true) {
    const { payload: userid } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userid);
  }
}

function* onDeleteUserStartAsync(userid) {
  try {
    const response = yield call(DeleteUserAPI, userid);
    console.log(response);
    if (response.statusText === "OK") {
      yield put(DeleteUserSuccess(userid));
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
    if (response.statusText === " ") {
      yield put(AddTOCartSuccess(response));
      console.log(response);
    }
  } catch (error) {
    yield put(AddTOCartError(error.response.data));
  }
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onShowUser),
  fork(AddToCART),
  fork(onLoadUsers2),
  fork(CardADDData),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
