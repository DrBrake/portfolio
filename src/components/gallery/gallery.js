import React from 'react';
import styles from './gallery.scss';

import { getUniqueKey } from '../../utilities.js';

export default class Gallery extends React.Component {
    
    render() {
        const { primaryImage, images, tinyImages, style } = this.props;
        return (
            <div>
                <div className={styles.imageContainer + ' ' + (style ? styles[style] : '')}>
                    <div className={styles.primaryImageContainer} key={getUniqueKey()}>{primaryImage}</div>
                    {images
                    ?
                        <div className={styles.secondaryImageContainer}>
                            {images.map((item, index) => (
                                item
                            ))}
                            {tinyImages
                            ?
                                <div className={styles.tinyImageContainer}>
                                    {tinyImages.map((item, index) => (
                                        <div key={getUniqueKey()}>{item}</div>
                                    ))}
                                </div>
                            : null}
                        </div>
                    : null}
                </div>
            </div>
        )
    }
}