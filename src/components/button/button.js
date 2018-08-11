import React from 'react';
import styles from './button.scss';

export default class Button extends React.Component {
    render() {

        const { onClick, label } = this.props;

        return (
            <button className={styles.container} onClick={() => onClick()}>
                {label}
            </button>
        )
    }
}