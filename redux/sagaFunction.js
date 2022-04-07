import {call, takeEvery, put, all} from 'redux-saga/effects';
import axios from 'axios';
import { DELETE, FETCH, GET, POST, PUT } from './types';
const URL = 'http://localhost:4000/users';
function * getUsers(){
    const result = yield call(axios.get,URL);
    yield put({
        type:GET,
        payload:result.data
    })
}

function * addUsers(action){
    yield call(axios.post, URL, action.payload)
    yield put({
        type : FETCH
    })
}

function * updateUsers(action){
    const {payload} = action;
    yield call(axios.put,`${URL}/${payload.id}`,payload.data);
    yield put({
        type : FETCH
    })
}

function * deleteUser(action){
    const {payload} = action;
    yield call(axios.delete,`${URL}/${payload}`);
    yield put({
        type : FETCH
    })
}

function * watcher (){
    yield takeEvery(POST, addUsers);
    yield takeEvery(FETCH, getUsers);
    yield takeEvery(DELETE, deleteUser);
    yield takeEvery(PUT, updateUsers);
}

export default function * sagaFunction () {
    yield all([
        watcher(),
    ])
}