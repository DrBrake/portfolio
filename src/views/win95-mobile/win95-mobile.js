import React from 'react';

import Tools from '../../components/tools/tools.js';
import Gallery from '../../components/gallery/gallery.js';
import Thumbnail from '../../components/thumbnail/thumbnail.js';

import { getUniqueKey } from '../../utilities.js';

export default class Win95Mobile extends React.Component {
    render() {
        return (
            <div className={'viewContainer'}>
                <div className={'workTitleContainer'}>
                    <div className={'workTitle'}>
                        Windows 95 mobile
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros massa. Vivamus sagittis, libero in ultrices auctor, leo nibh sodales nisl, ut aliquam massa est ac ex. Pellentesque quis augue lorem. Sed eget lorem urna. Ut eu finibus massa. Pellentesque sollicitudin, est nec placerat dictum, felis turpis maximus velit, quis mattis metus enim non nibh. Fusce in enim et ligula dapibus maximus. Morbi eu sem et nibh dictum aliquet.
                    </div>
                </div>
                <div className={'workPageContainer'}>
                    <Gallery 
                        primaryImage={<Thumbnail key={getUniqueKey()} onClick={() => null}/>}
                        secondaryImage={<Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>}
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
                    <Gallery 
                        primaryImage={<Thumbnail key={getUniqueKey()} onClick={() => null}/>}
                        secondaryImage={<Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>}
                        tertiaryImages={[
                            <Thumbnail style='small' key={getUniqueKey()} onClick={() => null}/>
                        ]}
                        />
                    <div>
                        Aenean eget dolor viverra, pulvinar libero in, euismod odio. Nunc eget tortor id velit interdum scelerisque. Donec quis lacinia tellus, sit amet finibus orci. Cras ut libero a augue sollicitudin placerat. Etiam euismod efficitur auctor. Suspendisse id porttitor massa. Sed dictum lorem ut scelerisque ullamcorper. Ut rutrum gravida posuere. Sed fermentum ac nisl sit amet accumsan. Pellentesque dui mauris, egestas et mi eget, pharetra mollis nunc.
                    </div>
                </div>
                <div className={'toolsContainer'}>
                    <Tools toolsArray={['sketch', 'illustrator', 'mspaint']}/>
                </div>
            </div>
        )
    }
}