import React from 'react';
import styles from './header.scss';

import { ROUTES } from '../../constans.js';

import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div className={styles.headerContainer}>
                <div className={styles.logo} onClick={() => history.push(ROUTES.WORKS)}></div>
                <div className={styles.subtitle}>
                    <span>UI</span>
                    <span>Graphic design</span>
                    <span>UX</span>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.menuTitle} onClick={() => history.push('/')}>Works</div>
                    <div className={styles.menuTitle} onClick={() => history.push('/about')}>About</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);