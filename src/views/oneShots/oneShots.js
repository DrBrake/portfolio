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
                            Title
                        </div>
                        <div>
                            Text
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Subtitle</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={ONE_SHOT_IMAGES.Metropolis} onClick={() => this.pickLightBoxImage(0)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Subtitle 1: </span>Text 1</p>
                            <p><span>Subtitle 2: </span>Text 2</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Subtitle</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={ONE_SHOT_IMAGES.Developer} onClick={() => this.pickLightBoxImage(1)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p><span>Subtitle 1: </span>Text 1</p>
                            <p><span>Subtitle 2: </span>Text 2</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}