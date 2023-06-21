import '../css/style.css'
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import {Level1} from './level1.js';
import {Startscreen} from './startscreen.js';
import {GameOver} from './gameover.js';

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = false
        this.showDebug(true)
        Physics.gravity = new Vector(0, 500)
    }

    startGame() {
        this.addScene('start', new Startscreen())
        this.addScene('gamescene', new Level1());
        this.addScene('gameover', new GameOver());

        this.goToScene('start')
    }
}

new Game()
