import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import history from './history';
import Admin from "./pages/admin/admin";
import Employee from "./pages/employee/employee";




export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Admin" component={Admin} />
                    <Route path="/Employee" component={Employee} />
                </Switch>
            </Router>
        )
    }
}