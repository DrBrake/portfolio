import React from 'react';
import styles from './card.scss';

export default class Card extends React.Component {
    render() {

        const { image, text, date, title, onClick, imageStyle } = this.props;

        return (
            <div className={styles.container} onClick={() => onClick()}>
                <img className={styles[imageStyle]} src={image}/>
                <div className={styles.titleContainer}>
                    {title}
                </div>
            </div>
        )
    }
}