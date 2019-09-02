import React from 'react';
import styles from './works.scss'

import Header from '../../components/header/header';
import Card from '../../components/card/card.js';

import { ROUTES } from '../../constans.js';
import { IMAGES } from '../../images.js';

export default class Works extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <Header />
                <div className={styles.aboutContainer}>
                    <img src={IMAGES.Photo} className={styles.photo} />
                    <div className={styles.textContainer}>
                        Hi, I'm Henri Hosio. I like coming up with fun and dumb nonesense in design and technology.
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'viewContainerGrid'}>
                        <Card
                            image={IMAGES.TimetravelThumb}
                            title={'Timetravels Inc.'}
                            onClick={() => history.push(ROUTES.TIMETRAVEL)} />
                        <Card
                            image={IMAGES.MuseumThumb}
                            title={'Museum app'}
                            onClick={() => history.push(ROUTES.MUSEUM)} />
                        <Card
                            image={IMAGES.OneShotsThumb}
                            title={'One shots'}
                            onClick={() => history.push(ROUTES.ONE_SHOTS)} />
                        <Card
                            image={IMAGES.HiQThumb}
                            title={'HiQ logos & such'}
                            onClick={() => history.push(ROUTES.HIQ)} />
                        <Card
                            image={IMAGES.InhaleThumb}
                            title={'Inhale'}
                            onClick={() => history.push(ROUTES.INHALE)} />
                        <Card
                            image={IMAGES.Win95Thumb}
                            title={'Windows 95 mobile'}
                            onClick={() => history.push(ROUTES.WIN95)} />
                    </div>
                </div>
            </div>
        )
    }
}