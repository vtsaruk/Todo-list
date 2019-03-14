import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todoLists from '../modules/todoLists';

export default combineReducers({
    todoLists,
    form
});
