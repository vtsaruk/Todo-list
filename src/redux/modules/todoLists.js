import { createAction, handleActions } from 'redux-actions';

export const getTodoLists = createAction('todoLists/get');
export const setTodoLists = createAction('todoLists/set');
export const createTodoList = createAction('todoList/create');
export const changeTodoList = createAction('todoList/change');
export const deleteTodoList = createAction('todoList/delete');

export const changeTask = createAction('task/change');
export const createTask = createAction('task/create');
export const deleteTask = createAction('task/delete');

const defaultState = {
    todoLists: []
};

export default handleActions(
    {
        [setTodoLists]: (state, { payload }) => ({
            ...state,
            todoLists: payload
        })
    },

    defaultState
);
