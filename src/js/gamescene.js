import '../css/style.css';
import {Actor, Color, Engine, Label, Physics, Scene, TextAlign, Vector, Input, Font, FontUnit} from 'excalibur';
import {Background} from './background.js';
import {Player} from './player.js';

export class Gamescene extends Scene {

        player = null;

        onInitialize(engine) {
            const game = engine;

            const background = new Background({});
            this.add(background);
        }

        onPreUpdate(_engine, _delta) {
            if(this.player === null){
                // koppel de player variabele aan de Player class die in het startscherm is toegevoegd aan de scene
                this.player = this.actors.find(a => a instanceof Player);
            }

            // Camera volgt de speler horizontaal, maar vergrendelt de Y-positie
            const cameraX = this.player.pos.x + 300;
            const cameraY = this.camera.pos.y; // Behoud de huidige Y-positie van de camera

            this.camera.pos = new Vector(cameraX, cameraY);

        }
}