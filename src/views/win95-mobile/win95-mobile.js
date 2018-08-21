import React from 'react';
import Lightbox from 'react-images';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { WIN95_IMAGES } from '../../images.js';

import { getUniqueKey } from '../../utilities.js';

export default class Win95Mobile extends React.Component {

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

        let win95Images = [];
        for (let i in WIN95_IMAGES) {
            win95Images.push({ src: WIN95_IMAGES[i] })
        }

        return (
            <div className={'container'}>
                <div className={'viewContainer'}>
                    <Lightbox 
                        images={win95Images}
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
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros massa. Vivamus sagittis, libero in ultrices auctor, leo nibh sodales nisl, ut aliquam massa est ac ex. Pellentesque quis augue lorem. Sed eget lorem urna. Ut eu finibus massa. Pellentesque sollicitudin, est nec placerat dictum, felis turpis maximus velit, quis mattis metus enim non nibh. Fusce in enim et ligula dapibus maximus. Morbi eu sem et nibh dictum aliquet.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>Main screen / Phone</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={WIN95_IMAGES.MainScreen_Win95} onClick={() => this.pickLightBoxImage(0)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={WIN95_IMAGES.MainScreenMenuOpen_Win95} onClick={() => this.pickLightBoxImage(1)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={WIN95_IMAGES.Phone_Win95} onClick={() => this.pickLightBoxImage(2)}/>
                            ]}
                        />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>The internet / Dos prompt / BSOD</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large,topMinus60' key={getUniqueKey()} image={WIN95_IMAGES.Internet_Win95} onClick={() => this.pickLightBoxImage(3)}/>}
                            images={[
                                <Thumbnail style='small' key={getUniqueKey()} image={WIN95_IMAGES.DosPrompt_Win95} onClick={() => this.pickLightBoxImage(4)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={WIN95_IMAGES.BlueScreenOfDeath_Win95} onClick={() => this.pickLightBoxImage(5)}/>
                            ]}
                            />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>And other stuff...</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={WIN95_IMAGES.Solitaire_Win95} onClick={() => this.pickLightBoxImage(6)}/>}
                            style='onlyImage'
                        />
                        <div>
                            Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
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