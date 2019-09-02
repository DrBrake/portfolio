import React from 'react';
import styles from './header.scss';

import { IMAGES } from '../../images.js';

import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.headerContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.logo}><img src={IMAGES.Logo} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);