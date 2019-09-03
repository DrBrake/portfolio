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
                            Museums are cool. Let's make an app.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Home</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumHome} onClick={() => this.pickLightBoxImage(0)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Fun little experiment right at top: just let the words break as they will. I honestly have no idea if this kind of thing works. If people notice it and read it or just scroll past. But I do love to try things out!</p>
                            <p>I also don't think you need text explaining the menu options on the bottom. They should be clear enough.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Map / Room</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumMap} onClick={() => this.pickLightBoxImage(1)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumMapRoom} onClick={() => this.pickLightBoxImage(2)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>It's a map! Clicking on room names takes you to a room view with a list of paintings. Clicking on those take you to painting details.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Collection / Exhibition</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumCollection} onClick={() => this.pickLightBoxImage(3)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumExhibition} onClick={() => this.pickLightBoxImage(4)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>The split page would be the first thing that comes up when you click the picture frame icon in the bottom bar. From there (maybe through a nice little animation) you go to a more detailed view of either option.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Painting detail / audio guide player</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingDetail} onClick={() => this.pickLightBoxImage(5)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioGuide} onClick={() => this.pickLightBoxImage(6)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Painting detail: </span>Basic info on the painting and a little bit of history. The audio guide element would only appear if you already had a guide for this painting. In retrospect the wording on the buying element could be a bit clearer.</p>
                            <p><span>Audio guide player: </span>Fairly standard audio player stuff. The text would be a transcript of the guide and would scroll in sync with the audio. The image could also zoom in on details of the painting as the guide talks about them.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Audio guide buying options</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingBuyingOptions} onClick={() => this.pickLightBoxImage(7)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>From the buying options element above. All of the audio guides this paiting is a part of. Clicking one goes to a detailed view.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Audio tour map / room</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioTour} onClick={() => this.pickLightBoxImage(8)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingAudioTourDetail} onClick={() => this.pickLightBoxImage(9)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Audio guide map showing you your path throught the rooms. Clicking on a room name once a again takes you to a room view.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Profile</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingProfile} onClick={() => this.pickLightBoxImage(10)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Profile view with previous purchaes that you can playback. The previous visit button could show you a path that you walked the last time you were here. I can't decide if that's creepy or cool. In bigger museums it could help you see something new every time.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>AR</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={MUSEUM.MuseumPaitingBehindThePainting} onClick={() => this.pickLightBoxImage(11)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>I felt like I needed to do something with AR. I looked at what other museum apps had done in the past and honestly, most of the AR implementations were kind of gimmicky. Like: "Hey, check it out. The guy in the painting is taking a selfie. Cool, right?". I wanted something that could actually be useful. Then I remembered this project where they use IR photography to see the sketches behind paintings. I thought it might be compelling to marry that to AR. Small cheat: there's no menu item to get to this mode from the actual design.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}