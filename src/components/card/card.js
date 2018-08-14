import React from 'react';
import styles from './card.scss';

export default class Card extends React.Component {
    render() {

        const { image, text, date, title, onClick, imageStyle } = this.props;

        return (
            <div className={styles.container} onClick={() => onClick()}>
                <div className={styles.imageContainer}>
                    <img className={styles[imageStyle]} src={image}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.date}>{date}</div>
                    </div>
                    <div className={styles.text}>{text}</div>
                </div>
            </div>
        )
    }
}