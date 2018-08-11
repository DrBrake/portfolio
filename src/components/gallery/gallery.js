import React from 'react';
import styles from './gallery.scss';

export default class Gallery extends React.Component {
    render() {

        const { imageArray, style, onClick } = this.props;

        return (
            <div className={styles.container + (style ? style.styles : '')}>
                {imageArray.map((item, index) => (
                    item
                ))}
            </div>
        )
    }
}