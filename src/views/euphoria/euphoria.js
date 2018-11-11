import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { EUPHORIA_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Euphoria extends React.Component {

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

        let euphoriaImages = [];
        for (let i in EUPHORIA_IMAGES) {
            euphoriaImages.push({ src: EUPHORIA_IMAGES[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={euphoriaImages}
                        isOpen={this.state.lightBoxOpen}
                        onClose={() => this.setState({ lightBoxOpen: false })}
                        showImageCount={false}
                        currentImage={this.state.activeImage}
                        onClickNext={() => this.setState({ activeImage: this.state.activeImage + 1 })}
                        onClickPrev={() => this.setState({ activeImage: this.state.activeImage - 1 })}
                        onClickThumbnail={(index) => this.setState({ activeImage: index })}
                        showThumbnails={true}
                        backdropClosesModal={true}/>
                    <div className={'workTitleContainer'}>
                        <div className={'workTitle'}>
                            Euphoria - Club & Bar site concept
                        </div>
                        <div>
                            This concept was inspired by the <a href='https://www.youtube.com/watch?v=NRI_8PUXx2A'>opening sequence to Cowboy Bebop</a>, Bauhaus and Pop art. I ended up doing this desktop first and did not initially know if I'd even make mobile versions.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Frontpage</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.FrontpageDesktop_Euphoria} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.FrontpageTablet_Euphoria} onClick={() => this.pickLightBoxImage(1)}/>
                            ]}
                            tinyImages={[
                                <Thumbnail style='tiny' key={getUniqueKey()} image={EUPHORIA_IMAGES.FrontpageMobile_Euphoria} onClick={() => this.pickLightBoxImage(2)}/>,
                                <Thumbnail style='tiny' key={getUniqueKey()} image={EUPHORIA_IMAGES.FrontpageMobileMenu_Euphoria} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                        />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Club</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.ClubDesktop_Euphoria} onClick={() => this.pickLightBoxImage(4)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.ClubTablet_Euphoria} onClick={() => this.pickLightBoxImage(5)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.ClubMobile_Euphoria} onClick={() => this.pickLightBoxImage(6)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Bar</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.BarDesktop_Euphoria} onClick={() => this.pickLightBoxImage(7)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.BarTablet_Euphoria} onClick={() => this.pickLightBoxImage(8)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.BarMobile_Euphoria} onClick={() => this.pickLightBoxImage(9)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Residents</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.ResidentsDesktop_Euphoria} onClick={() => this.pickLightBoxImage(10)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.ResidentsTablet_Euphoria} onClick={() => this.pickLightBoxImage(11)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.ResidentsMobile_Euphoria} onClick={() => this.pickLightBoxImage(12)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Parties</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.PartiesDesktop_Euphoria} onClick={() => this.pickLightBoxImage(13)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.PartiesTablet_Euphoria} onClick={() => this.pickLightBoxImage(14)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.PartiesMobile_Euphoria} onClick={() => this.pickLightBoxImage(15)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Lounge</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.LoungeDesktop_Euphoria} onClick={() => this.pickLightBoxImage(16)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.LoungeTablet_Euphoria} onClick={() => this.pickLightBoxImage(17)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.LoungeMobile_Euphoria} onClick={() => this.pickLightBoxImage(18)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Venue</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={EUPHORIA_IMAGES.VenueDesktop_Euphoria} onClick={() => this.pickLightBoxImage(19)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={EUPHORIA_IMAGES.VenueTablet_Euphoria} onClick={() => this.pickLightBoxImage(20)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={EUPHORIA_IMAGES.VenueMobile_Euphoria} onClick={() => this.pickLightBoxImage(21)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p></p>
                        </div>
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['sketch', 'inkscape', 'photoshop']}/>
                    </div>
                </div>
            </div>
        )
    }
}