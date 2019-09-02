import React from 'react';
import Lightbox from 'react-images';

import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';
import TopNav from '../../components/topNav/topNav.js';

import { MUSEUM } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Museum extends React.Component {

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

        let museumImages = [];
        for (let i in MUSEUM) {
            museumImages.push({ src: MUSEUM[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={museumImages}
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
                            Museum app
                        </div>
                        <div>
                            Text...
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Home</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumHome} onClick={() => this.pickLightBoxImage(0)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Map / Room</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumMap} onClick={() => this.pickLightBoxImage(1)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumMapRoom} onClick={() => this.pickLightBoxImage(2)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Map: </span>Text...</p>
                            <p><span>Room: </span>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Collection / Exhibition</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumCollection} onClick={() => this.pickLightBoxImage(3)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumExhibition} onClick={() => this.pickLightBoxImage(4)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Split page: </span>Text...</p>
                            <p><span>Exhibition detail: </span>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Painting detail / audio guide player</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingDetail} onClick={() => this.pickLightBoxImage(5)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioGuide} onClick={() => this.pickLightBoxImage(6)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Painting detail: </span>Text...</p>
                            <p><span>Audio guide player: </span>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Audio guide buying options</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingBuyingOptions} onClick={() => this.pickLightBoxImage(7)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Audio tour map / room</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioTour} onClick={() => this.pickLightBoxImage(8)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioTourDetail} onClick={() => this.pickLightBoxImage(9)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Map: </span>Text...</p>
                            <p><span>Room: </span>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Profile</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingProfile} onClick={() => this.pickLightBoxImage(10)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Text...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>AR</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingBehindThePainting} onClick={() => this.pickLightBoxImage(11)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Text...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}