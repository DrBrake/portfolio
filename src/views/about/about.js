import React from 'react';
import styles from './about.scss';

import Thumbnail from '../../components/thumbnail/thumbnail.js';

export default class About extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <div className={styles.aboutContainer}>
                        <Thumbnail style='photo'/>
                        <div className={styles.textContainer}>
                            <div><span className={styles.title}>Name: </span>Henri Hosio</div>
                            <div><span className={styles.title}>Email: </span>henri.hosio@gmail.com</div>
                            <div><span className={styles.title}>Occupation: </span>Front-end developer</div>
                            <div><span className={styles.title}>Purpose: </span>Learning design for funzies so I can do dumb/fun stuff</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}