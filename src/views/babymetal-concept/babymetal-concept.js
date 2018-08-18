import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { BABYMETAL_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class BabymetalConcept extends React.Component {

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

        let babymetalImages = [];
        for (let i in BABYMETAL_IMAGES) {
            babymetalImages.push({ src: BABYMETAL_IMAGES[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={babymetalImages}
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
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={BABYMETAL_IMAGES.FrontPageDesktop_Babymetal} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={BABYMETAL_IMAGES.FrontPageTablet_Babymetal} onClick={() => this.pickLightBoxImage(1)}/>
                            ]}
                            tinyImages={[
                                <Thumbnail style='tiny' key={getUniqueKey()} image={BABYMETAL_IMAGES.FrontPageMobile_Babymetal} onClick={() => this.pickLightBoxImage(2)}/>,
                                <Thumbnail style='tiny' key={getUniqueKey()} image={BABYMETAL_IMAGES.FrontPageMobileMenuOpen_Babymetal} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                        />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Biography</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={BABYMETAL_IMAGES.BioDesktop_Babymetal} onClick={() => this.pickLightBoxImage(4)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={BABYMETAL_IMAGES.BioTablet_Babymetal} onClick={() => this.pickLightBoxImage(5)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={BABYMETAL_IMAGES.BioMobile_Babymetal} onClick={() => this.pickLightBoxImage(6)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Band member bio</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={BABYMETAL_IMAGES.BandMemberDesktop_Babymetal} onClick={() => this.pickLightBoxImage(7)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={BABYMETAL_IMAGES.BandMemberTablet_Babymetal} onClick={() => this.pickLightBoxImage(8)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={BABYMETAL_IMAGES.BandMemberMobile_Babymetal} onClick={() => this.pickLightBoxImage(9)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Albums</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={BABYMETAL_IMAGES.DiscogDesktop_Babymetal} onClick={() => this.pickLightBoxImage(10)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={BABYMETAL_IMAGES.DiscogTablet_Babymetal} onClick={() => this.pickLightBoxImage(11)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={BABYMETAL_IMAGES.DiscogMobile_Babymetal} onClick={() => this.pickLightBoxImage(12)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Tour</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={BABYMETAL_IMAGES.TourDesktop_Babymetal} onClick={() => this.pickLightBoxImage(13)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={BABYMETAL_IMAGES.TourTablet_Babymetal} onClick={() => this.pickLightBoxImage(14)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={BABYMETAL_IMAGES.TourMobile_Babymetal} onClick={() => this.pickLightBoxImage(15)}/>
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
            </div>
        )
    }
}