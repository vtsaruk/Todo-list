import React, { useEffect, useRef } from 'react';
import { todoContext } from './context';
import PropTypes from 'prop-types';
import TodoList from '../../views/TaskList';
import './scss/style.scss';

const Todo = props => {
    let { todoLists, createTodoList, getTodoLists } = props;
    useEffect(() => {
        getTodoLists();
    }, []);

    let newTodoList = useRef();
    return (
        <div className="container">
            <div className="new-task-list">
                <p>Create new task list</p>
                <input type="text" ref={newTodoList} />
                <button
                    onClick={() => {
                        createTodoList({ title: newTodoList.current.value });
                        newTodoList.current.value = '';
                    }}>
                    +
                </button>
            </div>
            <div className="task-lists-box">
                {todoLists.map(_ => (
                    <todoContext.Provider value={props} key={_.id}>
                        <TodoList todo={_} />
                    </todoContext.Provider>
                ))}
            </div>
        </div>
    );
};

TodoList.propTypes = {
    todoLists: PropTypes.array,
    createTodoList: PropTypes.func,
    getTodoLists: PropTypes.func
};

TodoList.defaultProps = {
    todoLists: [],
    createTodoList: () => {},
    getTodoLists: () => {}
};

export default Todo;
