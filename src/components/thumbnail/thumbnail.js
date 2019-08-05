import React from 'react';
import styles from './thumbnail.scss';

export default class Thumbnail extends React.Component {
    render() {
        const { image, onClick, fullWidth } = this.props;
        return (
            <div className={styles.container} onClick={() => onClick ? onClick() : null}>
                <img src={image} style={fullWidth ? { width: '100%' } : null} />
            </div>
        )
    }
}