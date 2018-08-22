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
                        showThumbnails={true}
                        backdropClosesModal={true}/>
                    <div className={'workTitleContainer'}>
                        <div className={'workTitle'}>
                            Babymetal official site concept
                        </div>
                        <div>
                            This idea had two origins: my love of Babymetal and my hate for how their current website looks.
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
                        <div className={'paragraphContainer'}>
                            <p>I don't remember when the pink came in, but it was pretty early. It doesn't fully match the official color scheme of the band (black, white and red), but I felt strongly enough that it worked with their aesthetic and what they are about, to keep it in.</p>
                            <p>The one thing I'm still not perfectly happy with is the tablet design, where the image is cut off by the social links. What I do like, however, is how the menu lines up with the "horns" of the logo on desktop and tablet. I struggled for a bit trying to have it line up with the grid as well. Until I realized that I didn't actually have to do that. The newsbox was the latest addition. Before that there was kind of no point in ever returning to the frontpage.</p>
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
                        <div className={'paragraphContainer'}>
                            <p>With the bio page we start using the official colors. Clicking on individual band member or their names takes you to a profile page (below). I still don't know if the images look clickable enough. At some point I had a box shadow around the entire element, but it just made it look like one big button, instead of three individual ones. The text is the history of the band so far.</p>
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
                        <div className={'paragraphContainer'}>
                            <p>I decided to keep using the same background color for the band member pages, since they are technically sub pages to the main bio page. The small images on the bottom would be pulled straight out of Instagram and would also link there. The text is the bio for the selected member.</p>
                            <p>I just realized the image doesn't line up with the text on desktop. Burn it all down!</p>
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
                        <div className={'paragraphContainer'}>
                            <p>The album page has a two big buttons that toggle between the track list of the selected album. The most difficulty with this page was naming it. Discography is too long. I had "Discog." for a while but it looked silly. For concept purposes Albums works just fine. I suppose you could call it Releases if you wanted to also include singles and DVDs.</p>
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
                        <div className={'paragraphContainer'}>
                            <p>With the tour page I wanted to do a little more than just list where the band was playing. So I added an indication of tour dates that were already in the past (dark background) and dates that were sold out (grey button). Everything else gets a green button. The pins take you to Google maps for the venue.</p>
                            <p>There's definitely a little bit of cheating going on with this one: what happens if that tablet screen gets any smaller? I also didn't really think about scrolling at the time, but if you put a gun to my head, I would say that only the tour table scrolls. Everything else is static.</p>
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