import React from 'react';
import * as PIXI from 'pixi.js';
import { TiltShiftFilter, CRTFilter, GlitchFilter } from 'pixi-filters';
import TWEEN, { Tween } from '@tweenjs/tween.js';

import styles from './inhale.scss';

import { INHALE_IMAGES } from '../../images';

export default class Inhale extends React.Component {

    state = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    COLUMNS = 6;

    constructor(props) {
        super(props);

        this.app = new PIXI.Application({
            width: this.state.width,
            height: this.state.height,
            backgroundColor: 0xf500db,
            transparent: false,
            antialias: true
        });

        this.count = 0;

        this.loop = this.loop.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }


    componentDidMount() {
        this.refs.container.appendChild(this.app.view);

        this.points = [];
        for (var i = 0; i < 10; i++) {
            this.points.push(new PIXI.Point(i * this.state.width, 0));
        }

        this.columnContainer = new PIXI.Container();
        this.logoContainer = new PIXI.Container();

        const loader = new PIXI.loaders.Loader();
        loader
            .add('lotusDevil', INHALE_IMAGES.LotusDevil)
            .add('pinkRect', INHALE_IMAGES.PinkRect)
            .add('inhaleTitle', INHALE_IMAGES.InhaleTitle)
            .add('inhaleSubtitle', INHALE_IMAGES.InhaleSubtitle);
        
        loader.load((loader, resources) => {
            // Column container
            for (let i = 0; i < this.COLUMNS; i++) {
                let pinkRect = new PIXI.mesh.Rope(resources["pinkRect"].texture, this.points);
                pinkRect.x = (this.state.width / 4) * i;
                pinkRect.y = 0;
                pinkRect.width = this.getColumnWidth(i);
                pinkRect.height = this.state.height;
                this.columnContainer.addChild(pinkRect);
            }
            this.columnContainer.x = (this.state.width / 2) - (this.columnContainer.width / 3);
            this.app.stage.addChild(this.columnContainer);

            // Logo container
            this.circle = new PIXI.Graphics().beginFill(0xff9600).drawCircle(0, 0, 331);
            this.logoContainer.addChild(this.circle);

            this.lotusDevil = new PIXI.Sprite(resources["lotusDevil"].texture);
            this.lotusDevil.scale = new PIXI.Point(0.4, 0.4);
            this.lotusDevil.rotation = 0.01;
            this.lotusDevil.anchor.set(0.5);
            this.lotusDevil.x = (this.circle.width / 1.55) - this.lotusDevil.width;
            this.lotusDevil.y = this.circle.y - (this.circle.height / 60);
            this.logoContainer.addChild(this.lotusDevil);

            this.inhaleTitle = new PIXI.Sprite(resources["inhaleTitle"].texture);
            this.inhaleTitle.x = this.circle.x - (this.circle.width / 2.4);
            this.inhaleTitle.y = this.circle.y - (this.circle.height / 1.6);
            this.logoContainer.addChild(this.inhaleTitle);

            this.inhaleSubtitle = new PIXI.Sprite(resources["inhaleSubtitle"].texture);
            this.inhaleSubtitle.x = this.circle.x - (this.circle.width / 2);
            this.inhaleSubtitle.y = this.circle.y - (this.circle.height / 24);
            this.logoContainer.addChild(this.inhaleSubtitle);

            this.logoContainer.x = this.state.width / 2;
            this.logoContainer.y = this.state.height / 2;
            this.app.stage.addChild(this.logoContainer);
        });

        this.logoDownTween = new TWEEN.Tween({ y: this.state.height / 2 })
            .to({ y: (this.state.height / 2) + 40 }, 6000)
            .onUpdate((object) => {
                this.logoContainer.y = object.y;
            })
            .easing(TWEEN.Easing.Quadratic.InOut)
            .repeat(Infinity)
            .yoyo(true)
            .start();

        this.crtFilter = new CRTFilter({noise: 0.2, lineWidth: 2.5, lineContrast: 0.3, time: 0.5});
        this.app.stage.filters = [this.crtFilter];
        this.columnContainer.filters = [new TiltShiftFilter(25, 1000)];

        this.glitchTimeout();

        this.rafID = requestAnimationFrame(this.loop);
        
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        this.app.stage.removeChildren();
        this.app.renderer.clear();
        this.app.renderer.destroy(true);

        PIXI.loader.reset();

        cancelAnimationFrame(this.rafID);
        window.removeEventListener('resize', this.handleResize);
    }

    glitchTimeout() {
        setTimeout(() => {
            this.app.stage.filters = this.app.stage.filters.concat([new GlitchFilter({seed: 0.5, slices: 10, offset: 100, direction: 0, fillMode: 2})]);
            setTimeout(() => {
                this.app.stage.filters = this.app.stage.filters.splice(0, 1);
                this.glitchTimeout();
            }, 1500);

        }, Math.floor(Math.random() * (30000 - 15000)) + 15000);
    }

    getColumnWidth(i) {
        if (i % 2 === 0)
            return this.state.width / 2 + (Math.random() * (this.state.width / 10 - this.state.width / 8) + this.state.width / 8);
        else
            return this.state.width / 2 - (Math.random() * (this.state.width / 10 - this.state.width / 8) + this.state.width / 8);
    }

    handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.setState({
            width,
            height,
        });

        this.columnContainer.x = (this.state.width / 2) - (this.columnContainer.width / 3);
        this.columnContainer.width = this.state.width + 600;
        this.logoContainer.x = this.state.width / 2;

        // if (width < 768) {
        //     this.logoContainer.width = (this.state.width / 1.2);
        //     this.logoContainer.height = (this.state.width / 1.2);
        // }

        if (this.app) {
            this.app.renderer.resize(width, height);
        }
    }

    loop() {
        this.app.ticker.add(() => {
            this.count += 0.01;
            for (var i = 0; i < this.points.length; i++) {
                this.points[i].y = i * this.state.height;
                this.points[i].x = Math.sin((i * 0.5) +  this.count);
            }

            this.crtFilter.time += 0.5;
            TWEEN.update(this.app.ticker.lastTime);
        });
    }

    render() {
        return (
            <div className={styles.container} ref={'container'}></div>
        )
    }
}