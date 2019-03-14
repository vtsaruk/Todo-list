import React, { Component } from 'react';
import './App.css';
import history from './history';
import { routes } from './browser-routes';
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Router history={history}>{routes}</Router>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
