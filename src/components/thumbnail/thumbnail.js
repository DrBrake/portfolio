import React from 'react';
import styles from './thumbnail.scss';

export default class Thumbnail extends React.Component {
    render() {

        const { image, style, onClick } = this.props;

        return (
            <div className={styles.container + ' ' + (style ? style.split(',').map(s => styles[s]).join(' ') : '') + ' ' + (image ? '' : styles.noImage)} onClick={() => onClick()}>
                <img src={image} />
            </div>
        )
    }
}