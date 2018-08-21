import React from 'react';
import styles from './gallery.scss';

import { getUniqueKey } from '../../utilities.js';

export default class Gallery extends React.Component {
    
    getSecondaryImages() {
        const { images } = this.props;
        if (images)
            return images.map((item, index) => ( item ))
            
    }

    getTinyImages() {
        const { tinyImages } = this.props;
        if (tinyImages)
            return tinyImages.map((item, index) => ( item ))
    }

    render() {
        const { primaryImage, images, tinyImages, style } = this.props;
        return (
            <div>
                <div className={styles.imageContainer + ' ' + (style ? style.split(',').map(s => styles[s]).join(' ') : '')}>
                    {primaryImage
                    ? <div className={styles.primaryImageContainer} key={getUniqueKey()}>{primaryImage}</div>
                    : null}
                    {images || tinyImages
                    ?
                        <div className={styles.secondaryImageContainer}>
                            {this.getSecondaryImages()}
                            {tinyImages
                            ?
                                <div className={styles.tinyImageContainer}>
                                    {this.getTinyImages()}
                                </div>
                            : null}
                        </div>
                    : null}
                </div>
            </div>
        )
    }
}