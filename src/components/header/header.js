import React from 'react';
import styles from './header.scss';

import { ROUTES } from '../../constans.js';
import { IMAGES } from '../../images.js';

import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <div className={styles.headerContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.logo} onClick={() => history.push(ROUTES.WORKS)}><img src={IMAGES.Logo}/></div>
                        <div className={styles.subtitle}>
                            <span>UI</span>
                            <span>Graphic design</span>
                            <span>UX</span>
                        </div>
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    <button className={styles.menuTitle} onClick={() => history.push('/')}>Home</button>
                    <button className={styles.menuTitle + ' ' + styles.right} onClick={() => history.push('/about')}>About</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);