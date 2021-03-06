import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from './layouts/Header';
import Dashboard from './leads/Dashboard'
import { Provider } from "react-redux";
import store from "../store";

import Alerts from './layouts/Alerts'

import { Provider as AlertProvider, positions, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_RIGHT,
    transition: transitions.SCALE,
}

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));


