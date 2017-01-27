import React, { Component } from 'react';
import {
    Route,
    Router,
    browserHistory
} from 'react-router';

import Home from './pages/home';
import Detail from './pages/detail';

class DSJRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="detail" component={Detail}/>
                <Route/>
            </Router>
        );
    }
}

export default DSJRouter;