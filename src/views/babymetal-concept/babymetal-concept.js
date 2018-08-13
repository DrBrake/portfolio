import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class BabymetalConcept extends React.Component {

    constructor() {
        super();

        this.state = {
            lightBoxOpen: false,
            activeImage: 0
		};
    }

    render() {

        const stuff = [
            { src: IMAGES.Sketch },
            { src: IMAGES.Photoshop }
        ]

        return (
            <div className={'viewContainer'}>
                <Lightbox 
                    images={stuff}
                    isOpen={this.state.lightBoxOpen}
                    onClose={() => this.setState({ lightBoxOpen: false })}
                    showImageCount={false}
                    currentImage={this.state.activeImage}
                    onClickNext={() => this.setState({ activeImage: this.state.activeImage + 1 })}
                    onClickPrev={() => this.setState({ activeImage: this.state.activeImage - 1 })}
                    onClickThumbnail={(index) => this.setState({ activeImage: index })}
                    showThumbnails={true}/>
                <div className={'workTitleContainer'}>
                    <div className={'workTitle'}>
                        Babymetal official site concept
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros massa. Vivamus sagittis, libero in ultrices auctor, leo nibh sodales nisl, ut aliquam massa est ac ex. Pellentesque quis augue lorem. Sed eget lorem urna. Ut eu finibus massa. Pellentesque sollicitudin, est nec placerat dictum, felis turpis maximus velit, quis mattis metus enim non nibh. Fusce in enim et ligula dapibus maximus. Morbi eu sem et nibh dictum aliquet.
                    </div>
                </div>
                <div className={'workPageContainer'}>
                    <div className={'workSubtitle'}>Frontpage</div>
                    <Gallery 
                        primaryImage={<Thumbnail key={getUniqueKey()} onClick={() => this.setState({ lightBoxOpen: true, activeImage: 0 })}/>}
                        secondaryImage={<Thumbnail style='medium' key={getUniqueKey()} onClick={() => null}/>}
                        tertiaryImages={[
                            <Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>,
                            <Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>
                        ]}
                    />
                    <div>
                        Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                    </div>
                </div>
                <div className={'workPageContainer'}>
                    <div className={'workSubtitle'}>Another page</div>
                    <Gallery 
                        primaryImage={<Thumbnail key={getUniqueKey()} onClick={() => null}/>}
                        secondaryImage={<Thumbnail style='medium' key={getUniqueKey()} onClick={() => null}/>}
                        tertiaryImages={[
                            <Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>
                        ]}
                        />
                    <div>
                        Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                    </div>
                </div>
                <div className={'toolsContainer'}>
                    <Tools toolsArray={['sketch', 'illustrator', 'photoshop']}/>
                </div>
            </div>
        )
    }
}