import '../css/style.css'
import {Actor, CollisionType, Engine, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super({
            width: Resources.Suhail.width,
            height: Resources.Suhail.height
        })
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(300, 500)
        this.body.collisionType = CollisionType.Active;
    }

    onInitialize(engine) {
        this.game = engine

        // this.on('collisionstart', (event) => this.onCollisionStart(event));
        // this.on('exitviewport', (event) => this.die(event));

// Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'KeyA') {
                this.vel.x = -300; // verplaats de speler met een snelheid van -600 pixels per seconde naar links
            } else if (evt.key === 'ArrowRight' || evt.key === 'KeyD') {
                this.vel.x = 300; // verplaats de speler met een snelheid van 300 pixels per seconde naar rechts
            }
        });

// Stop de beweging van de speler wanneer de linker- of rechterpijltoets wordt losgelaten
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'KeyA' || evt.key === 'KeyD') {
                this.vel.x = 0; // stop de beweging van de speler
            }
        });
    }
}