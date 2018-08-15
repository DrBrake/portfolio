import React from 'react';
import styles from './gallery.scss';

import { getUniqueKey } from '../../utilities.js';

export default class Gallery extends React.Component {
    render() {

        const { images, style } = this.props;

        return (
            <div className={styles.imageContainer + ' ' + (style ? styles[style] : '')}>
                {images.map((item, index) => {
                    if (index === 0) return <div className={styles.primaryImageContainer} key={getUniqueKey()}>{item}</div>
                    else return item
                })}
            </div>
        )
    }
}