import React from 'react';

import styles from './developer.scss';

import Tools from '../../components/tools/tools.js';

import { IMAGES } from '../../images.js';

export default class Developer extends React.Component {

    render() {

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <div className={'workTitleContainer'}>
                        <div className={'workTitle'}>
                            One shot #01: Developer recruitment
                        </div>
                        <div>
                            This one was inspired by the Swiss style and the JSON data format.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <img className={styles.bigImage} src={IMAGES.DeveloperPage} />
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['sketch', 'photoshop']}/>
                    </div>
                </div>
            </div>
        )
    }
}