import React from 'react';
import Lightbox from 'react-images';

import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';
import TopNav from '../../components/topNav/topNav.js';

import { TIMETRAVEL } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Timetravel extends React.Component {

    constructor() {
        super();

        this.state = {
            lightBoxOpen: false,
            activeImage: 0
		};
    }

    pickLightBoxImage(index) {
        this.setState({ lightBoxOpen: true, activeImage: index })
    }

    render() {

        let dexImages = [];
        for (let i in TIMETRAVEL) {
            dexImages.push({ src: TIMETRAVEL[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={dexImages}
                        isOpen={this.state.lightBoxOpen}
                        onClose={() => this.setState({ lightBoxOpen: false })}
                        showImageCount={false}
                        currentImage={this.state.activeImage}
                        onClickNext={() => this.setState({ activeImage: this.state.activeImage + 1 })}
                        onClickPrev={() => this.setState({ activeImage: this.state.activeImage - 1 })}
                        onClickThumbnail={(index) => this.setState({ activeImage: index })}
                        showThumbnails={true}
                        backdropClosesModal={true}
                        width={2400}/>
                    <div className={'workTitleContainer'}>
                        <TopNav />
                        <div className={'workTitle'}>
                            Timetravels Inc.
                        </div>
                        <div>
                            I like the retrowave aesthetic! Let's use it in a design!
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Frontpage / Calendar</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.FrontPageInitial} onClick={() => this.pickLightBoxImage(0)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.FrontPageCalendar} onClick={() => this.pickLightBoxImage(1)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Frontpage: </span>Text 1</p>
                            <p><span>Calendar: </span>Text 2</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Trip details / Popup</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.TripDetails} onClick={() => this.pickLightBoxImage(2)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Popup} onClick={() => this.pickLightBoxImage(3)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Trip details: </span>Text 1</p>
                            <p><span>Popup: </span>Little popup telling you about crime. If you love heroine, we've got good news!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Booking form / Payment</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Booking} onClick={() => this.pickLightBoxImage(4)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.PaymentInfo} onClick={() => this.pickLightBoxImage(5)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Booking form: </span>Text 1</p>
                            <p><span>Payment: </span>Text 2</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Summary / Success</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Summary} onClick={() => this.pickLightBoxImage(6)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Success} onClick={() => this.pickLightBoxImage(7)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Summary: </span>Text 1</p>
                            <p><span>Success: </span>You did a thing! Look at you!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Alternate frontpages</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Rome} onClick={() => this.pickLightBoxImage(8)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={TIMETRAVEL.Westworld} onClick={() => this.pickLightBoxImage(9)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>One of the original ideas for this concept may have been a teeensy bit over ambitious. I wanted the background color to be dynamic based on the selected destination. Obviously, this would be a problem when the background is red and the link colors are orange. But since this is just a concept, I'm gonna cheat a little bit and leave these in.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}