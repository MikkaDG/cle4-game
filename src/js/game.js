import '../css/style.css'
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import {Gamescene} from './gamescene.js';
import {Startscreen} from './startscreen.js';

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = true
    }

    startGame() {
        this.addScene('start', new Startscreen())
        this.addScene('gamescene', new Gamescene());

        this.goToScene('start')
    }
}

new Game()
