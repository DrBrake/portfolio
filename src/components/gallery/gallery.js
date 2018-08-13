import React from 'react';
import styles from './gallery.scss';

export default class Gallery extends React.Component {
    render() {

        const { primaryImage, secondaryImage, tertiaryImages, style } = this.props;

        return (
            <div className={styles.container + ' ' + (style ? styles[style] : '')}>
                <div className={styles.primaryImageContainer}>{primaryImage}</div>
                <div className={styles.imageContainer}>
                    <div className={styles.secondaryImageContainer}>{secondaryImage}</div>
                    <div className={styles.tertiaryImageContainer}>
                        {tertiaryImages.map((item, index) => (
                            item
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}