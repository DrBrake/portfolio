import React from 'react';
import styles from './tools.scss';

import { IMAGES } from '../../images.js';
import { getUniqueKey } from '../../utilities.js';

export default class Tools extends React.Component {
    render() {

        const { toolsArray } = this.props;

        return (
            <div className={styles.container}>
                <div>Tools</div>
                {toolsArray.map((item, index) =>
                    <div key={getUniqueKey()}>
                        {item === 'sketch'
                        ? <a href='https://www.sketchapp.com/' target='_blank'><img src={IMAGES.Sketch} alt='Sketch link' title='Sketch'/></a>
                        : null}
                        {item === 'photoshop'
                        ? <a href='https://www.photoshop.com/' target='_blank'><img src={IMAGES.Photoshop} alt='Photoshop link' title='Photoshop'/></a>
                        : null}
                        {item === 'illustrator'
                        ? <a href='https://www.adobe.com/fi/products/illustrator.html' target='_blank'><img src={IMAGES.Illustrator} alt='Illustrator link' title='Illustrator'/></a>
                        : null}
                        {item === 'mspaint'
                        ? <img src={IMAGES.MSPaint} alt='MSPaint icon' title='MSPaint'/>
                        : null}
                        {item === 'you'
                        ? <img src={IMAGES.You} alt="You icon" title="You"></img>
                        : null}
                        {item === 'inkscape'
                        ? <a href='https://inkscape.org/' target='_blank'><img src={IMAGES.Inkscape} alt='Inkscape' title='Inkscape'></img></a>
                        : null}
                    </div>
                )}
            </div>
        )
    }
}