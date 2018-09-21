import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { ILLUMINATI_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Illuminati extends React.Component {

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

        let illuminatiImages = [];
        for (let i in ILLUMINATI_IMAGES) {
            illuminatiImages.push({ src: ILLUMINATI_IMAGES[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={illuminatiImages}
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
                            Windows 95 mobile
                        </div>
                        <div className={'paragraphContainer'}>
                            <p>This was literally the first idea I had when I decided to start learning UI design. I think it began with the notion that I could use the Start menu as a sort of a burger menu. The tile layout was inspired by the Windows Phone UI.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Main screen / Phone</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.FrontpageDesktop_Illuminati} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.FrontpageTablet_Illuminati} onClick={() => this.pickLightBoxImage(1)}/>
                            ]}
                            tinyImages={[
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.FrontpageMobile_Illuminati} onClick={() => this.pickLightBoxImage(2)}/>,
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.FrontpageMobileMenu_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                        />
                        <div className={'paragraphContainer'}>
                            <p><span>Main screen</span> - Easy access to all your favorite Windows applications straight from the customizable main screen. Does anyone actually know what the hell Briefcase is? Yeah, me neither.</p>
                            <p><span>Phone</span> - Call all your friends and tell them stuff about your day. It's a phone.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>The Internet / Dos prompt / BSOD</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus60' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsTablet_Illuminati} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsMobile_Illuminati} onClick={() => this.pickLightBoxImage(5)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p><span>The Internet</span> - Responsive web design? Not for another 15 years, friend. In the meantime you can just get used to scrolling. A whole lotta scrolling.</p>
                            <p><span>Dos prompt</span> - This one's for all you powers users out there who think that all these modern, grey user interfaces are too glamorous. Comes with all your favorite dos commands. Like dir. And the other one.</p>
                            <p><span>BSOD</span> - Oh, what the hell!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>And other stuff...</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsTablet_Illuminati} onClick={() => this.pickLightBoxImage(1)}/>
                            ]}
                            tinyImages={[
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsMobile_Illuminati} onClick={() => this.pickLightBoxImage(2)}/>,
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsMobileSelected_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>
                            ]}
                        />
                        <div className={'paragraphContainer'}>
                            <p>Honestly, I kinda ran out of ideas of what else to do with this design. I ended up creating a couple views that were essentially just Windows 95, but narrow. Those were not all that interesting, so I decided not to include them. I was also thinking about making some kind of text message view, but couldn't find an interesting Windows 95 angle to it.</p>
                            <p>That being said, I was pretty happy with how this one turned out. Not too shabby for a first stab at UI design.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>The Internet / Dos prompt / BSOD</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus60' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionDesktop_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionTablet_Illuminati} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionMobile_Illuminati} onClick={() => this.pickLightBoxImage(5)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p><span>The Internet</span> - Responsive web design? Not for another 15 years, friend. In the meantime you can just get used to scrolling. A whole lotta scrolling.</p>
                            <p><span>Dos prompt</span> - This one's for all you powers users out there who think that all these modern, grey user interfaces are too glamorous. Comes with all your favorite dos commands. Like dir. And the other one.</p>
                            <p><span>BSOD</span> - Oh, what the hell!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>The Internet / Dos prompt / BSOD</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus60' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsTablet_Illuminati} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsMobile_Illuminati} onClick={() => this.pickLightBoxImage(5)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p><span>The Internet</span> - Responsive web design? Not for another 15 years, friend. In the meantime you can just get used to scrolling. A whole lotta scrolling.</p>
                            <p><span>Dos prompt</span> - This one's for all you powers users out there who think that all these modern, grey user interfaces are too glamorous. Comes with all your favorite dos commands. Like dir. And the other one.</p>
                            <p><span>BSOD</span> - Oh, what the hell!</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>The Internet / Dos prompt / BSOD</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus60' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopDesktop_Illuminati} onClick={() => this.pickLightBoxImage(3)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopTablet_Illuminati} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopMobile_Illuminati} onClick={() => this.pickLightBoxImage(5)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p><span>The Internet</span> - Responsive web design? Not for another 15 years, friend. In the meantime you can just get used to scrolling. A whole lotta scrolling.</p>
                            <p><span>Dos prompt</span> - This one's for all you powers users out there who think that all these modern, grey user interfaces are too glamorous. Comes with all your favorite dos commands. Like dir. And the other one.</p>
                            <p><span>BSOD</span> - Oh, what the hell!</p>
                        </div>
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['sketch', 'illustrator', 'mspaint']}/>
                    </div>
                </div>
            </div>
        )
    }
}