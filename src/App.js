import React from 'react';
import { Switch, Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import ScrollToTop from './hoc/scrollToTop.js';

require('../favicon.ico');

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
                    <ScrollToTop>
                        <Switch>
                            <Route exact path={ROUTES.WORKS} component={Views.works}/>
                            <Route exact path={ROUTES.ABOUT} component={Views.about}/>
                            <Route exact path={ROUTES.BABYMETAL} component={Views.babymetalConcept}/>
                            <Route exact path={ROUTES.WIN95} component={Views.win95Mobile}/>
                            <Route exact path={ROUTES.BLOGCEPTION} component={Views.blogception}/>
                            <Route exact path={ROUTES.ILLUMINATI} component={Views.illuminati}/>
                            <Route exact path={ROUTES.DEVELOPER} component={Views.developer}/>
                            <Route exact path={ROUTES.EUPHORIA} component={Views.euphoria}/>
                            <Route exact path={ROUTES.DEX} component={Views.dex}/>
                            <Route exact path={ROUTES.INHALE} component={Views.inhale}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        )
    }
}