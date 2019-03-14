import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import TodoList from './components/containers/todoList';
//import PostScreen from './components/routes/PostScreen';

export const routes = (
    <Switch>
        <Route path="/todos/" component={TodoList} />
        <Route path="/" component={TodoList} />
    </Switch>
);
