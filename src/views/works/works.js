import React from 'react';

import Card from '../../components/card/card.js';

import { ROUTES } from '../../constans.js';

export default class Works extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div className={'viewContainerGrid'}>
                <Card 
                    title={'Blogception'}
                    text={'Designing a design blog design. Zero Inception references beyond this point.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.BLOGCEPTION)}/>
                <Card 
                    title={'Babymetal official site concept'}
                    text={'A little redesign for the greatest band of all time.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.BABYMETAL)}/>
                <Card 
                    title={'Windows 95 mobile'}
                    text={'The best operating system, with you wherever you go.'}
                    date={'06.08.2018'}
                    onClick={() => history.push(ROUTES.WIN95)}/>
            </div>
        )
    }
}