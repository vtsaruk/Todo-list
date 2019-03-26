import { takeEvery, put } from 'redux-saga/effects';
import { changeTodoList, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* changeTodoListWorker(action) {
    const { text, id } = action.payload;

    try {
        yield axios.put('/api/todo-lists/' + id, {
            title: text
        });
        yield put(getTodoLists());
    } catch (error) {
        console.error(error);
    }
}
export default function* changeTodoListWatcher() {
    yield takeEvery(changeTodoList, changeTodoListWorker);
}
