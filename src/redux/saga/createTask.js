import { takeEvery, put } from 'redux-saga/effects';
import { createTask, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* createTaskWorker(action) {
    const { todoListsId, body } = action.payload;
    try {
        yield axios.post('/api/tasks', {
            body,
            todoListsId
        });
        yield put(getTodoLists());
    } catch (error) {
        console.error(error);
    }
}
export default function* createTaskWatcher() {
    yield takeEvery(createTask, createTaskWorker);
}
