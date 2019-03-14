import { takeEvery, put } from 'redux-saga/effects';
import { deleteTask, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* getTodoListWorker(action) {
    const { id } = action.payload;
    try {
        yield axios.delete('/api/tasks/' + id);
        yield put(getTodoLists());
    } catch (error) {
        console.error(error);
    }
}
export default function* deletePostWatcher() {
    yield takeEvery(deleteTask, getTodoListWorker);
}
