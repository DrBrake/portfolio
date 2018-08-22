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
                        showThumbnails={true}
                        backdropClosesModal={true}/>
                    <div className={'workTitleContainer'}>
                        <div className={'workTitle'}>
                            Blogception
                        </div>
                        <div className={'paragraphContainer'}>
                            <p>Might as well design the blog / portfolio thing while we're designing stuff! The idea was to have the blog be in the background as much as possible and put the spotlight on the actual design work. Hence the use of a lot of black, white and grey. I ended up not doing desktop designs for this one since they are essentially the tablet design, but with more space around the edges.</p>
                            <p>This one is weird in the sense that I did quite a bit of the designing and tweaking outside of Sketch. Once the site was actually up and running, it was much easier to just make the changes straight in the code.</p>
                            <p>I'm actually really excited about the potential of having a site that I'm fully in control of. It allows me a lot of freedom in combining code and design in fun ways.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Frontpage</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,center,topMinus200' image={BLOGCEPTION_IMAGES.WorksTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(0)}/>}
                            style='onlyImage'
                        />
                        <div className={'paragraphContainer'}>
                            <p>This is an early example of me starting to think about hierarchy more. It was pretty eye opening just going from the early layout where all of the text was exactly the same to determining what was the important stuff on the page. Make the logo and the subtitle less prominent, focus the attention on the actual work, make the links stick out a bit more. Basic stuff, but it was fun figuring it out.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Detail view</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,center,topMinus300' image={BLOGCEPTION_IMAGES.WorkDetailTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(1)}/>}
                            style='onlyImage'
                            />
                        <div className={'paragraphContainer'}>
                            <p>And this is where the struggle begins... I wanted to clearly and easily be able to distinguish between desktop, tablet and mobile views. Easy enough: three different thumbnail sizes. Then I realized that in some cases I'd want to have two mobile views instead of just one. Maybe nothing but mobile views. Desktop and tablet with no mobile. Oh, and it also needs to be responsive! After making some truly terrible looking designs I landed on the quilted image list from Material Design, which suited my purposes nicely. The thumbnails in some cases aren't exactly perfect since I'm doing the cropping in CSS. I might go back and adjustment them a bit later on, but for now: lazinessssss...</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Image popup</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,center,topMinus200' image={BLOGCEPTION_IMAGES.PopupTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(2)}/>}
                            style='onlyImage'
                            />
                        <div className={'paragraphContainer'}>
                            <p>I really like it when websites give you the ability to just look at all of the pictures on the current page in an easy way. I wanted to bring a little bit of the structure of the actual page into the popup thumbnails as well, so you'd have an easier time figuring out what goes together. Didn't actually get around to implementing this, though.</p>
                            <p>I also thought about bringing the text into this view, but decided against it. I just wanted to keep it purely about the images. Also, a lot of the images are vertically quite long. So the text would restrict how much you see of the actual image.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>About</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus200' image={BLOGCEPTION_IMAGES.AboutTablet_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(3)}/>}
                            style='onlyImage'
                            />
                        <div className={'paragraphContainer'}>
                            <p>Nothing too fancy here. Little bit of basic info. Put your face in the box. Call it a day.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Mobile</div>
                        <Gallery 
                            images={[
                                <Thumbnail style='mediun' image={BLOGCEPTION_IMAGES.WorksMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='mediun' image={BLOGCEPTION_IMAGES.WorkDetailMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(5)}/>,
                                <Thumbnail style='mediun' image={BLOGCEPTION_IMAGES.PopupMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(6)}/>,
                                <Thumbnail style='mediun' image={BLOGCEPTION_IMAGES.AboutMobile_Blog} key={getUniqueKey()} onClick={() => this.pickLightBoxImage(7)}/>
                            ]}
                            style='onlySecondary'
                            />
                        <div className={'paragraphContainer'}>
                            <p>Most of the mobile views are pretty straight forward. The struggle with the image list continues. I think I had a version of the view where it looked like the desktop image was standing on two stilts that were of different sizes. It was bad.</p>
                            <div className={'workBottomContainer'}>
                                This design was uniquely challenging since I actually had to make it into a functional thing. There's nothing quite like the moment when you think you've carefully planned everything out in Sketch and you start to actually build the site. Only to realize: Oh wait, this doesn't work at all! Back to the drawing board!
                            </div>
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