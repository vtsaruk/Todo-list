import { all } from 'redux-saga/effects';
import getTodoList from './getTodoList';
import createTodoList from './createTodoList';
import changeTodoList from './changeTodoList';
import deleteTodoList from './deleteTodoList';
import createTask from './createTask';
import changeTask from './changeTask';
import deleteTask from './deleteTask';

export default function* rootSaga() {
    yield all([
        getTodoList(),
        changeTodoList(),
        createTodoList(),
        deleteTodoList(),
        changeTask(),
        deleteTask(),
        createTask()
    ]);
}
