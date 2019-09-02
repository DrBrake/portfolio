import React from 'react';
import { Switch, Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import styles from './App.scss';

import ScrollToTop from './hoc/scrollToTop.js';

require('../favicon.ico');

import { Views } from './views';

import { ROUTES } from './constans.js';
import { IMAGES } from './images';

const history = createBrowserHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div id='router'>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path={ROUTES.WORKS} component={Views.works}/>
                            <Route exact path={ROUTES.WIN95} component={Views.win95Mobile}/>
                            <Route exact path={ROUTES.INHALE} component={Views.inhale}/>
                            <Route exact path={ROUTES.HIQ} component={Views.hiq} />
                            <Route exact path={ROUTES.ONE_SHOTS} component={Views.oneShots} />
                            <Route exact path={ROUTES.TIMETRAVEL} component={Views.timetravel} />
                            <Route exact path={ROUTES.MUSEUM} component={Views.museum} />
                        </Switch>
                    </ScrollToTop>
                    <div className={styles.imageContainer}>
                        <a href="https://www.linkedin.com/in/henri-hosio-871993151/" target="blank">
                            <img src={IMAGES.LinkedIn} />
                        </a>
                    </div>
                </div>
            </Router>
        )
    }
}