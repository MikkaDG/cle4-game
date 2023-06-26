import '../css/style.css'
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import {Startscreen} from './startscreen.js';
import {GameOver} from './gameover.js';
import {Level1} from './level1.js';
import {Level1complete} from './level1complete.js';
import {Level2} from './level2.js';
import {Level2complete} from './level2complete.js';
import {Level3} from './level3.js';
import {Bossfight} from './bossfight.js';

export class Game extends Engine {

        constructor() {
            super({ width: 1200, height: 800 })
            this.start(ResourceLoader).then(() => this.startGame())
            ResourceLoader.suppressPlayButton = true
            this.showDebug(true)
            Physics.gravity = new Vector(0, 500)
            // Physics.useRealisticPhysics();
        }

    startGame() {
        localStorage.setItem('scores', '[]');
        this.addScene('start', new Startscreen())
        this.addScene('gamescene1', new Level1());
        this.addScene('level1complete', new Level1complete());
        this.addScene('gamescene2', new Level2());
        this.addScene('level2complete', new Level2complete());
        this.addScene('gamescene3', new Level3());
        this.addScene('bossfight', new Bossfight());
        this.addScene('gameover', new GameOver());

        this.goToScene('start')
    }
}

new Game()
