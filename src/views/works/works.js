import React from 'react';

import Card from '../../components/card/card.js';

import { ROUTES } from '../../constans.js';
import { BABYMETAL_IMAGES, WIN95_IMAGES, BLOGCEPTION_IMAGES } from '../../images.js';

export default class Works extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div className={'viewContainerGrid'}>
                <Card 
                    image={BLOGCEPTION_IMAGES.BlogceptionThumb}
                    title={'Blogception'}
                    text={'Designing a design blog design. Zero Inception references beyond this point.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.BLOGCEPTION)}/>
                <Card 
                    image={BABYMETAL_IMAGES.FrontPageTablet_Babymetal}
                    imageStyle={'babymetal'}
                    title={'Babymetal official site concept'}
                    text={'A little redesign for the greatest band of all time.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.BABYMETAL)}/>
                <Card 
                    image={WIN95_IMAGES.MainScreen_Win95}
                    title={'Windows 95 mobile'}
                    text={'The best operating system, with you wherever you go.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.WIN95)}/>
            </div>
        )
    }
}