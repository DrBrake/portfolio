import React from 'react';
import styles from './gallery.scss';

import { getUniqueKey } from '../../utilities.js';

export default class Gallery extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.imageContainer} key={getUniqueKey()}>
                {children}
            </div>
        )
    }
}