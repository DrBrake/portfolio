import React from 'react';
import Lightbox from 'react-images';

import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';
import TopNav from '../../components/topNav/topNav.js';

import { ONE_SHOT_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class OneShots extends React.Component {

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
        for (let i in ONE_SHOT_IMAGES) {
            dexImages.push({ src: ONE_SHOT_IMAGES[i] })
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
                            One shots
                        </div>
                        <div>
                            Ideas that are not good enough for their own page. Shame on you!
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Comic book site</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={ONE_SHOT_IMAGES.Metropolis} onClick={() => this.pickLightBoxImage(0)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>I guess I just thought that the way comic book panels are laid out is pretty similar to how things are layed out on the web? Some obvious Roy Lichtenstein inspirations with this one as well. I liked putting the image titles/descriptions on top, instead of on the bottom like you usually would with web design. Makes them resemble more of a comic book panel. And to finish it off, an old paper overlay on the whole thing.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Developer recruitment</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={ONE_SHOT_IMAGES.Developer} onClick={() => this.pickLightBoxImage(1)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>I've always liked the idea of mixing graphic design and UI design. So this is Swiss style, but on the web! The body text is done in JSON format, to make developers feel special. Around this time I was really into the idea of having parts of text be just off screen. The logo is stolen from Robocop.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}