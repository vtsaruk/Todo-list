import { takeEvery, put } from 'redux-saga/effects';
import { createTodoList, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* createTodoWorker(state) {
    const { payload } = state;

    try {
        const { data } = yield axios.post('/api/todo-lists/', { ...payload });
        if (data) {
            yield put(getTodoLists());
        }
    } catch (error) {
        console.error(error);
    }
}
export default function* createTodotWatcher() {
    yield takeEvery(createTodoList, createTodoWorker);
}
