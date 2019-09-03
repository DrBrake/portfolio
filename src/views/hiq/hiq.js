import React from 'react';
import Lightbox from 'react-images';

import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';
import TopNav from '../../components/topNav/topNav.js';

import { HIQ_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class HIQ extends React.Component {

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
        for (let i in HIQ_IMAGES) {
            dexImages.push({ src: HIQ_IMAGES[i] })
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
                            HiQ logos & such
                        </div>
                        <div>
                            Every now and again I've volunteered and/or been asked to create logos and whatnot for HiQ Finland. These are those.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>DEX hoodie</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.DexPink} onClick={() => this.pickLightBoxImage(0)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>This one is a design for our development team hoodie. It was inspired by me liking glitch effects more than is appropriate. I got the idea for the ASCII from <a href='https://archive.org/details/malware_CRASH.COM'>this actual MS-DOS virus.</a></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Office patches / stickers</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.IlluminatiPatch} onClick={() => this.pickLightBoxImage(1)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.Tehtaankatu} onClick={() => this.pickLightBoxImage(2)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>I can't recall if this idea had any other inspiration than me liking the idea of secret societies and occult nonesense. I kind of equate developers and designers as the keepers of secret knowledge here. The biggest difference between us and occultists is that we don't have cool robes. But what if we did?!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Team logo for Norway</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.TrueVikings} onClick={() => this.pickLightBoxImage(3)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>Shirt and flag design for our team for a company trip to Norway. It's a variation on the above Illuminati logo. I originally pitched it with something that was closer to the above, but the team wanted something more Norway-themed. Hence the horns. I also had colored versions of this (including code highlight), but the team voted for the black and white. Those bastards.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Company shirt for Norway</div>
                        <Gallery >
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.TrollPoster} onClick={() => this.pickLightBoxImage(4)}/>
                            <Thumbnail style='large,center' key={getUniqueKey()} image={HIQ_IMAGES.Troll} onClick={() => this.pickLightBoxImage(5)}/>
                        </Gallery>
                        <div className={'paragraphContainer'}>
                            <p>I also got to design the company t-shirt for the Norway trip. The original was more WW2 propaganda poster inspired, but since that didn't really make for a good shirt, I redesigned it to be more like a sports team logo.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}