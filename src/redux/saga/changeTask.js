import { takeEvery, put } from 'redux-saga/effects';
import { changeTask, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* changeTaskWorker(action) {
    const { text, id, status } = action.payload;

    try {
        const { data } = yield axios.put('/api/tasks/' + id, {
            body: text,
            status
        });
        if (data.success) {
            yield put(getTodoLists());
        }
    } catch (error) {
        console.error(error);
    }
}
export default function* changeTaskWatcher() {
    yield takeEvery(changeTask, changeTaskWorker);
}
