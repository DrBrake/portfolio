import React from 'react';

import styles from './sinder.scss';

import Tools from '../../components/tools/tools.js';

import { ONE_SHOT } from '../../images.js';

export default class Sinder extends React.Component {

    render() {

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <div className={'workTitleContainer'}>
                        <div className={'workTitle'}>
                            One shot #02: Sinder - dating app for devil worshippers
                        </div>
                        <div>
                            Inspired by listening to too much metal. This is the first one where I did some of my own icon work, after getting back into learning how to draw.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <img className={styles.bgImage} src={ONE_SHOT.Sinder} />
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['sketch', 'procreate', 'photoshop']}/>
                    </div>
                </div>
            </div>
        )
    }
}