import React from 'react';
import styles from './gallery.scss';

export default class Gallery extends React.Component {
    render() {

        const { primaryImage, secondaryImages, tertiaryImage, style } = this.props;

        return (
            <div>
                <div className={styles.container + ' ' + (style ? styles[style] : '')}>
                    <div className={styles.primaryImageContainer}>{primaryImage}</div>
                    <div className={styles.secondaryImageContainer}>
                        {secondaryImages.map((item, index) => (
                            item
                        ))}
                    </div>
                </div>
                <div className={styles.tertiaryImage}>{tertiaryImage}</div>
            </div>
        )
    }
}