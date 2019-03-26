import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { todoContext } from '../../layouts/TodoList/context';
import Task from '../Task';
import InputChange from '../InputChange';
import './scss/style.scss';

const TodoList = ({ todo }) => {
    let [isAddTask, toggleTask] = useState(false);
    let taskRef = useRef();
    const { createTask, deleteTodoList, changeTodoList } = useContext(todoContext);

    return (
        <div className="task-list">
            <div className="task-name">
                <InputChange changeFun={changeTodoList} value={todo.title} id={todo.id} />
                <button onClick={() => deleteTodoList({ id: todo.id })}>
                    delete task list
                </button>
            </div>
            <div className="add-task">
                {isAddTask ? (
                    <div>
                        <input type="text" ref={taskRef} />
                        <button
                            onClick={() => {
                                toggleTask(0);
                                createTask({
                                    body: taskRef.current.value,
                                    todoListsId: todo.id
                                });
                            }}>
                            save task
                        </button>
                        <button onClick={() => toggleTask(0)}>cancel</button>
                    </div>
                ) : (
                    <button onClick={() => toggleTask(1)}>add task</button>
                )}
            </div>
            {todo.tasks.map(_ => (
                <Task task={_} key={_.id} />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    changeTodoList: PropTypes.func,
    createTask: PropTypes.func,
    deleteTodoList: PropTypes.func,
    todo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        tasks: PropTypes.array
    })
};

TodoList.defaultProps = {
    todo: { id: 1, title: '', tasks: [] }
};

export default TodoList;
