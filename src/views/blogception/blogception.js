import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { BLOGCEPTION_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Blogception extends React.Component {

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

        let blogceptionImages = [];
        for (let i in BLOGCEPTION_IMAGES) {
            blogceptionImages.push({ src: BLOGCEPTION_IMAGES[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={blogceptionImages}
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
                            Blogception
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros massa. Vivamus sagittis, libero in ultrices auctor, leo nibh sodales nisl, ut aliquam massa est ac ex. Pellentesque quis augue lorem. Sed eget lorem urna. Ut eu finibus massa. Pellentesque sollicitudin, est nec placerat dictum, felis turpis maximus velit, quis mattis metus enim non nibh. Fusce in enim et ligula dapibus maximus. Morbi eu sem et nibh dictum aliquet.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Frontpage</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' image={BLOGCEPTION_IMAGES.WorksTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='medium' image={BLOGCEPTION_IMAGES.WorksMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(1)}/>
                            ]}
                        />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Detail view</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' image={BLOGCEPTION_IMAGES.WorkDetailTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(2)}/>}
                            images={[
                                <Thumbnail style='medium' image={BLOGCEPTION_IMAGES.WorkDetailMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Image popup</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' image={BLOGCEPTION_IMAGES.PopupTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(2)}/>}
                            images={[
                                <Thumbnail style='medium' image={BLOGCEPTION_IMAGES.PopupMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>About</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' image={BLOGCEPTION_IMAGES.AboutTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(2)}/>}
                            images={[
                                <Thumbnail style='medium' image={BLOGCEPTION_IMAGES.AboutMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['sketch']}/>
                    </div>
                </div>
            </div>
        )
    }
}