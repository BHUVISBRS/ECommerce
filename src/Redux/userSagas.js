import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUsersSuccess, loadUsersErorr, createUserSuccess, createUserErorr, DeleteUserSuccess, DeleteUserErorr, updateUserSuccess, updateUserErorr, showUserSuccess, showUserErorr } from "./action";
import * as types from "./actionTypes";
import { CreateUserAPI, DeleteUserAPI, ShowUserAPI, UpdateUserAPI, loadUsersAPI } from "./api";


//===== LOAD USERS =====//

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersAPI);
        if (response.statusText === "OK") {
            yield put(loadUsersSuccess(response.data))
        }
    }
    catch (error) {
        yield put(loadUsersErorr(error.response.data))
    }
}

//===== CreateUser =====//

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

function* onCreateUserStartAsync({ payload }) {
    try {

        const response = yield call(CreateUserAPI, payload);
        console.log(response)
        if (response.statusText === "Created") {

            yield put(createUserSuccess(response))
        }
    }
    catch (error) {
        yield put(createUserErorr(error.response.data))
    }
}

//======================================== UpdateUser ===============================================//


function* onUpdateUser() {

    yield takeEvery(types.UPDATE_USER_START, onUpdateUserStartAsync)


}
function* onUpdateUserStartAsync({ payload }) {
    try {
        const response = yield call(UpdateUserAPI, payload.userInfo, payload.user)
        if (response.statusText === "OK") {
            yield put(updateUserSuccess(response))
        }
    }

    catch (error) {
        yield put(updateUserErorr(error.response.data))
    }
}


//======================================== ShowUser ===============================================//


function* onShowUser() {

    yield takeEvery(types.SHOW_USER_START, onShowUserStartAsync)


}
function* onShowUserStartAsync({ payload }) {
    try {
        console.log('show start')
        const response = yield call(ShowUserAPI, payload)
        console.log('show end')
        console.log(response)
        if (response.statusText === 'OK') {
            yield put(showUserSuccess(response.data))
        }
    } catch (error) {
        yield put(showUserErorr(error.response.data))
    }
}




//======================================== DeleteUser ===============================================//


function* onDeleteUser() {
    while (true) {
        const { payload: userid } = yield take(types.DELETE_USER_START)
        yield call(onDeleteUserStartAsync, userid)
    }
}

function* onDeleteUserStartAsync(userid) {
    try {
        const response = yield call(DeleteUserAPI, userid);
        console.log(response)
        if (response.statusText === "OK") {
            yield put(DeleteUserSuccess(userid))
        }
    }
    catch (error) {
        yield put(DeleteUserErorr(error.response.data))
    }
}



const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser), fork(onShowUser)];

export default function* rootSaga() {
    yield all([...userSagas]);
}