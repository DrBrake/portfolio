import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { DEX_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Dex extends React.Component {

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
        for (let i in DEX_IMAGES) {
            dexImages.push({ src: DEX_IMAGES[i] })
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
                        <div className={'workTitle'}>
                            DEX shirt logo
                        </div>
                        <div>
                            I took part in creating a logo design for our development teams team hoodie. The original idea came from me just liking glitch effects quite a bit.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Original / White / Pink</div>
                        <Gallery 
                            images={[
                                <Thumbnail style='large,center' key={getUniqueKey()} image={DEX_IMAGES.DexOriginal} onClick={() => this.pickLightBoxImage(0)}/>,
                                <Thumbnail style='large,center' key={getUniqueKey()} image={DEX_IMAGES.DexWhite} onClick={() => this.pickLightBoxImage(1)}/>,
                                <Thumbnail style='large,center' key={getUniqueKey()} image={DEX_IMAGES.DexPink} onClick={() => this.pickLightBoxImage(2)}/>
                            ]}
                            style='onlySecondary'
                        />
                        <div className={'paragraphContainer'}>
                            <p><span>Original: </span>For this I just followed a tutorial on text glitch effects. It's the same text on top of itself and a Wave filter added to each layer. I accidentally stumbled on the CGA style colors by messing around with a Hue/Saturation layer.</p>
                            <p><span>White: </span>The white version came from the requirement to only have a single color for the logo. I took some layers away from the original and added some random ASCII. I got the idea for the ASCII from <a href='https://archive.org/details/malware_CRASH.COM'>this actual MS-DOS virus.</a></p>
                            <p><span>Pink: </span>Since the final version could have two colors, I added the pink shadow back in from the original and made it more closely resemble the company colors. The idea for the code comment subtitle was there from the start, but I only added it to the final version. Cherry on top: little bit more glitch effects, because why not?</p>
                        </div>
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['photoshop']}/>
                    </div>
                </div>
            </div>
        )
    }
}