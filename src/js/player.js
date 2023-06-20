import '../css/style.css';
import {Actor, CollisionType, Engine, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';

export class Player extends Actor {

    constructor() {
        super({
            width: 300,
            height: 300
        });
        this.scale = new Vector(0.6, 0.6);
        this.pos = new Vector(300, 500);
        this.body.collisionType = CollisionType.Active;
    }

    onPreUpdate(engine, delta) {
        this.game = engine;

        // this.on('collisionstart', (event) => this.onCollisionStart(event));
        // this.on('exitviewport', (event) => this.die(event));

        // Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'KeyA') {
                this.vel.x = -300; // verplaats de speler met een snelheid van -300 pixels per seconde naar links
            }
            if (evt.key === 'ArrowRight' || evt.key === 'KeyD') {
                this.vel.x = 300; // verplaats de speler met een snelheid van 300 pixels per seconde naar rechts
            }
            if (evt.key === 'ShiftLeft' || evt.key === 'ShiftRight') {
                this.vel.x *= 2; // Verdubbel de snelheid van de speler wanneer Shift wordt ingedrukt
            }
        });

        // Stop de beweging van de speler wanneer de linker- of rechterpijltoets of Shift wordt losgelaten
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'KeyA' || evt.key === 'KeyD' || evt.key === 'ShiftLeft' || evt.key === 'ShiftRight') {
                this.vel.x = 0; // stop de beweging van de speler
            }
        });
    }
}