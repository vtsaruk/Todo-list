import { takeEvery, put } from 'redux-saga/effects';
import { deleteTodoList, getTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* deleteTodoListWorker(action) {
    const { id } = action.payload;
    try {
        yield axios.delete('/api/todo-lists/' + id);
        yield put(getTodoLists());
    } catch (error) {
        console.error(error);
    }
}
export default function* deleteTodoListWatcher() {
    yield takeEvery(deleteTodoList, deleteTodoListWorker);
}
