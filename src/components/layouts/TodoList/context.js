import React from 'react';

export const todoContext = React.createContext({
    deleteTodoList: () => {},
    changeTodoList: () => {},
    addTodoList: () => {},
    changeTask: () => {},
    deleteTask: () => {}
});
