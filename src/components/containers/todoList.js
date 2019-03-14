import { connect } from 'react-redux';
import component from '../layouts/TodoList';
import {
    getTodoLists,
    createTodoList,
    createTask,
    deleteTask,
    deleteTodoList,
    changeTask,
    changeTodoList
} from '../../redux/modules/todoLists';

const mapStoreToProps = state => ({
    todoLists: state.todoLists.todoLists
});

const mapDispatchToProps = {
    getTodoLists,
    createTodoList,
    createTask,
    deleteTask,
    deleteTodoList,
    changeTask,
    changeTodoList
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(component);
