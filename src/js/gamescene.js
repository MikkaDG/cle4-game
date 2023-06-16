import '../css/style.css';
import {Actor, Color, Engine, Label, Physics, Scene, TextAlign, Vector, Input, Font, FontUnit} from 'excalibur';
import {Background} from './background.js';

export class Gamescene extends Scene {

        onInitialize(engine) {
            const game = engine;

            const background = new Background({});
            this.add(background);
        }
}