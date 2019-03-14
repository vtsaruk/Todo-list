import { takeEvery, put } from 'redux-saga/effects';
import { getTodoLists, setTodoLists } from '../modules/todoLists';
import axios from 'axios';

function* todoListsWorker() {
    try {
        const { data } = yield axios.get('/api/todo-lists');
        yield put(setTodoLists(data.success ? data.todoLists : []));
    } catch (error) {
        console.error(error);
    }
}
export default function* todoListsWatcher() {
    yield takeEvery(getTodoLists, todoListsWorker);
}
