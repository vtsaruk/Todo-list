import React, { useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { todoContext } from '../../layouts/TodoList/context';
import Task from '../Task';
import './scss/style.scss';

const TodoList = ({ todo }) => {
    let [isAddTask, toggleTask] = useState(false);
    let [isChangeTitle, toggleTitle] = useState(false);
    let taskRef = useRef();
    let titleRef = useRef();
    const { createTask, deleteTodoList, changeTodoList } = useContext(todoContext);

    return (
        <div className="task-list">
            <div className="task-name">
                <h5 className="title">{todo.title}</h5>
                {isChangeTitle ? (
                    <div>
                        <input type="text" ref={titleRef} />
                        <button
                            onClick={() => {
                                changeTodoList({
                                    id: todo.id,
                                    title: titleRef.current.value
                                });
                                toggleTitle(0);
                            }}>
                            save
                        </button>
                        <button onClick={() => toggleTitle(0)}>cancel</button>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            toggleTitle(1);
                            setTimeout(() => (titleRef.current.value = todo.title), 0);
                        }}>
                        change title
                    </button>
                )}

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
    todo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        tasks: PropTypes.array
    })
};

export default TodoList;
