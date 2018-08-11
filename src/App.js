import React from 'react';
import { Switch, Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/header/header.js';

import { Views } from './views';

import { ROUTES } from './constans.js';

const history = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div id='router'>
                    <Header />
                    <Switch>
                        <Route exact path={ROUTES.WORKS} component={Views.works}/>
                        <Route exact path={ROUTES.ABOUT} component={Views.about}/>
                        <Route exact path={ROUTES.BABYMETAL} component={Views.babymetalConcept}/>
                        <Route exact path={ROUTES.WIN95} component={Views.win95Mobile}/>
                        <Route exact path={ROUTES.BLOGCEPTION} component={Views.blogception}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}