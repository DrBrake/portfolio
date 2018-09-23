import React from 'react';
import Lightbox from 'react-images';

import styles from './illuminati.scss';

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

    componentDidMount() {
        let element =  document.getElementById('router');
        if (element)
            element.classList.add('illuminatiBG');
    }

    componentWillUnmount() {
        let element =  document.getElementById('router');
        if (element)
            element.classList.remove('illuminatiBG');
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
                            DON'T BELIEVE THEIR LIES
                        </div>
                        <div className={'paragraphContainer'}>
                            <p>Nothing in this world operates as you think it does. Your government no longer serves you. It serves banks, that no longer loan money, but create debt from thin air. Which is enforced by police, who no longer work for you, but whom you are taught to obey in school. Which is no longer an insitution of learning, but an indoctrination center. Designed to make you passively accept a culture, which is no longer created by individuals, but by the very system that is dependent on your obedience.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>fo££oW t3h MONEY$$$$$$</div>
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
                        <div className={styles.exposed}>
                            <div className={styles.propaganda}>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                                <div className={styles.control}>
                                    <p>Money is a hoax</p>
                                    <p>Debt is slavery</p>
                                    <p>Media is manipulation</p>
                                    <p>Religion is control</p>
                                    <p>The system is a lie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>THEY ARE WATCHING</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(4)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsTablet_Illuminati} onClick={() => this.pickLightBoxImage(5)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.NewsMobile_Illuminati} onClick={() => this.pickLightBoxImage(6)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p><span>Evidence of their lies</span></p>
                            <img src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                            <img className={styles.secrets} src={'../resources/truth.jpg'}></img>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>THE NEW WORLD ORDER</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(7)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsTablet_Illuminati} onClick={() => this.pickLightBoxImage(8)}/>
                            ]}
                            tinyImages={[
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsMobile_Illuminati} onClick={() => this.pickLightBoxImage(9)}/>,
                                <Thumbnail style='tiny' key={getUniqueKey()} image={ILLUMINATI_IMAGES.EventsMobileSelected_Illuminati} onClick={() => this.pickLightBoxImage(10)}/>
                            ]}
                        />
                        <div className={styles.criminals}>
                            <div>
                                <p>The world is run from the shadows by sixteen powerful organizations.</p>
                                <p>The Illuminati, Freemasons, Majestic 12, The Committee of 300, Rosicrucians, The Bilderberg Group, The Priory of Sion, GE, News-Corp, Disney, Viacom, Timer Warner, CBS, Opus Dei, Hermetic Order of The Golden Dawn and Ordo Templis Orientis.</p>
                            </div>
                            <div>
                                <p>The world is run from the shadows by sixteen powerful organizations.</p>
                                <p>The Illuminati, Freemasons, Majestic 12, The Committee of 300, Rosicrucians, The Bilderberg Group, The Priory of Sion, GE, News-Corp, Disney, Viacom, Timer Warner, CBS, Opus Dei, Hermetic Order of The Golden Dawn and Ordo Templis Orientis.</p>
                            </div>
                            <div>
                                <p>The world is run from the shadows by sixteen powerful organizations.</p>
                                <p>The Illuminati, Freemasons, Majestic 12, The Committee of 300, Rosicrucians, The Bilderberg Group, The Priory of Sion, GE, News-Corp, Disney, Viacom, Timer Warner, CBS, Opus Dei, Hermetic Order of The Golden Dawn and Ordo Templis Orientis.</p>
                            </div>
                            <div>
                                <p>The world is run from the shadows by sixteen powerful organizations.</p>
                                <p>The Illuminati, Freemasons, Majestic 12, The Committee of 300, Rosicrucians, The Bilderberg Group, The Priory of Sion, GE, News-Corp, Disney, Viacom, Timer Warner, CBS, Opus Dei, Hermetic Order of The Golden Dawn and Ordo Templis Orientis.</p>
                            </div>
                            <div>
                                <p>The world is run from the shadows by sixteen powerful organizations.</p>
                                <p>The Illuminati, Freemasons, Majestic 12, The Committee of 300, Rosicrucians, The Bilderberg Group, The Priory of Sion, GE, News-Corp, Disney, Viacom, Timer Warner, CBS, Opus Dei, Hermetic Order of The Golden Dawn and Ordo Templis Orientis.</p>
                            </div>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>WAKE UP!!!!!</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionDesktop_Illuminati} onClick={() => this.pickLightBoxImage(11)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionTablet_Illuminati} onClick={() => this.pickLightBoxImage(12)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.OurMissionMobile_Illuminati} onClick={() => this.pickLightBoxImage(13)}/>
                            ]}
                            />
                        <div className={styles.brainwashing}>
                            <div className={styles.corruption}>WHAT IF I TOLD YOU</div>
                            <p>Television is the monster in your home, and it's called a program for a reason. Your television is nothing more than an electronic mind altering device. It has been designed to psychologically change the ways you view reality. Google this number: <span className={styles.censorship}>US6506148 B2.</span></p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>DON'T TRUST ANYONE</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsDesktop_Illuminati} onClick={() => this.pickLightBoxImage(14)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsTablet_Illuminati} onClick={() => this.pickLightBoxImage(15)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ContactUsMobile_Illuminati} onClick={() => this.pickLightBoxImage(16)}/>
                            ]}
                            />
                        <div className={styles.allseingeye}>
                            <p className={styles.deception}>We now live in a nation where doctors destroy health, lawyers destroy justice, universities destroy knowledge, governments destroy freedom, the press destroys information, and our banks destroy the economy.</p>
                            <p>Imagine if you will an entire country so ignorant that the people wilfully give billions of dollars in order to elect rich criminals to rule over their lives and steal their money, but believe they are free.</p>
                            <p className={styles.manipulation}>They were filling your head with useless sports stats, celebrity gossip and flavor of the week fashion to distract you from the corruption and theft that actually impacts your life everyday.</p>
                        </div>
                    </div>
                    <div className={'workPageContainer'}>
                        <div className={'workSubtitle'}>WHO CONTROLS THE BANKS???</div>
                        <Gallery 
                            primaryImage={<Thumbnail style='large' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopDesktop_Illuminati} onClick={() => this.pickLightBoxImage(17)}/>}
                            images={[
                                <Thumbnail style='medium' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopTablet_Illuminati} onClick={() => this.pickLightBoxImage(18)}/>,
                                <Thumbnail style='small' key={getUniqueKey()} image={ILLUMINATI_IMAGES.ShopMobile_Illuminati} onClick={() => this.pickLightBoxImage(19)}/>
                            ]}
                            />
                        <div className={'paragraphContainer'}>
                            <p>The Federal Reserve is NOT a part of the <span className={styles.censorship}>Federal Government</span>. It's a corporation made up of a group of private bankers who's members are not disclosed to our government or the people. The US government has NO say over it's policies, <span className={styles.censorship}>nor do they have any auditing rights - it's books are NOT open for inspection.</span> It determines the value of our money, <span className={styles.censorship}>and charges us interest for letting us use their money - all of which is unconstitutional</span>.</p>
                            <p>It also steals true wealth (our labor) from us by driving inflation. <span className={styles.censorship}>It prints more money with no gold or silver backing</span> - which effectively dilutes the value of what you have in your pocket or saved in a bank.</p>
                        </div>
                    </div>
                    <div className={styles.hiddenTruth}>
                        38.897663, -77.036542
                        38.902504, -77.050109
                        38.909649, -77.043442
                        38.909664, -77.029634
                        38.902668, -77.023015
                    </div>
                    <div className={'toolsContainer'}>
                        <Tools toolsArray={['you', 'you', 'you']}/>
                    </div>
                </div>
            </div>
        )
    }
}