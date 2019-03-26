import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './scss/style.scss';
import { todoContext } from '../../layouts/TodoList/context';
import InputChange from '../InputChange';

const Task = ({ task }) => {
    const { changeTask, deleteTask } = useContext(todoContext);

    return (
        <div className="task">
            <input
                checked={task.status}
                type="checkbox"
                onChange={() => {
                    changeTask({
                        text: task.body,
                        id: task.id,
                        status: !task.status
                    });
                }}
            />
            <InputChange changeFun={changeTask} id={task.id} value={task.body} />
            <button className="btn-delete" onClick={() => deleteTask({ id: task.id })}>
                delete
            </button>
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
