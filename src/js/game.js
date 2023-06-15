import '../css/style.css'
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import {Gamescene} from './gamescene.js';

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('gamescene', new Gamescene());

        this.goToScene('gamescene');
    }
}

new Game()
