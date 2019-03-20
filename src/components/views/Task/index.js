import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import './scss/style.scss';
import { todoContext } from '../../layouts/TodoList/context';

const Task = ({ task }) => {
    let [isChange, toggle] = useState(false);
    let taskRef = useRef({ value: task.body });
    const { changeTask, deleteTask } = useContext(todoContext);

    return (
        <div className="task">
            <input
                checked={task.status}
                type="checkbox"
                onChange={() => {
                    changeTask({
                        body: task.body,
                        id: task.id,
                        status: !task.status
                    });
                }}
            />
            {isChange ? (
                <input type="text" ref={taskRef} />
            ) : (
                <p className="text">{task.body}</p>
            )}
            {isChange ? (
                [
                    <button
                        key="1"
                        onClick={() => {
                            changeTask({
                                body: taskRef.current.value,
                                id: task.id,
                                status: task.status
                            });
                            toggle(0);
                        }}>
                        save
                    </button>,
                    <button key="2" onClick={() => toggle(0)}>
                        cancel
                    </button>
                ]
            ) : (
                <button
                    onClick={() => {
                        toggle(1);
                        setTimeout(() => (taskRef.current.value = task.body), 0);
                    }}>
                    change
                </button>
            )}
            <button onClick={() => deleteTask({ id: task.id })}>delete</button>
        </div>
    );
};

Task.propTypes = {
    changeTask: PropTypes.func,
    deleteTask: PropTypes.func,
    task: PropTypes.shape({
        id: PropTypes.number,
        body: PropTypes.string,
        status: PropTypes.bool
    })
};

Task.defaultProps = {
    task: {}
};

export default Task;
