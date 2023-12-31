import '../css/style.css'
import {Actor, Color, Engine, Events, Font, FontUnit, Input, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import {Startscreen} from './scenes/startscreen.js';
import {GameOver} from './scenes/gameover.js';
import {Level1} from './scenes/level1.js';
import {Level1complete} from './scenes/level1complete.js';
import {Level2} from './scenes/level2.js';
import {Level2complete} from './scenes/level2complete.js';
import {Level3} from './scenes/level3.js';
import {Bossfight} from './scenes/bossfight.js';
import {Prebossfight} from './scenes/prebossfight.js';
import {Bossgameover} from './scenes/bossgameover.js';
import {Victoryscreen} from './scenes/victory.js';
import {Credits} from './scenes/credits.js';

export class Game extends Engine {

    constructor() {
        super({ width: 1200, height: 800 })
        this.start(ResourceLoader).then(() => this.startGame())
        ResourceLoader.suppressPlayButton = false
        this.showDebug(false)
        Physics.gravity = new Vector(0, 500)
        // Physics.useRealisticPhysics();
    }

    startGame() {
        localStorage.setItem('scores', '[]');
        this.addScene('start', new Startscreen())
        this.addScene('gamescene1', new Level1());
        this.addScene('1', new Level1complete());
        this.addScene('gamescene2', new Level2());
        this.addScene('2', new Level2complete());
        this.addScene('gamescene3', new Level3());
        this.addScene('3', new Prebossfight());
        this.addScene('bossfight', new Bossfight());
        this.addScene('gameover', new GameOver());
        this.addScene('bossgameover', new Bossgameover());
        this.addScene('victory', new Victoryscreen());
        this.addScene('credits', new Credits());

        // this.goToScene('start');
        const savedScene = localStorage.getItem('level');

        if (savedScene){
            this.goToScene(savedScene);
        }
        else {
            this.goToScene('start');
        }
    }
}

new Game()
