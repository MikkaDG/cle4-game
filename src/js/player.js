import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor(/*sprite*/) {
        super({
            width: Resources.Suhail.width,
            height: Resources.Suhail.height
        })
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(300, 500)
        // this.graphics.use(sprite)
        this.isFacingLeft = false
    }

    onInitialize(engine) {
        this.game = engine

        // this.on('collisionstart', (event) => this.onCollisionStart(event));
        // this.on('exitviewport', (event) => this.die(event));

// Beweeg de speler naar links of rechts wanneer de linker- of rechterpijltoets wordt ingedrukt
        engine.input.keyboard.on('down', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'KeyA') {
                this.vel.x = -300; // verplaats de speler met een snelheid van -600 pixels per seconde naar links
                // this.isFacingLeft = true
            } else if (evt.key === 'ArrowRight' || evt.key === 'KeyD') {
                this.vel.x = 300; // verplaats de speler met een snelheid van 300 pixels per seconde naar rechts
                // this.isFacingLeft = false
            }
        });

// Stop de beweging van de speler wanneer de linker- of rechterpijltoets wordt losgelaten
        engine.input.keyboard.on('up', (evt) => {
            if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' || evt.key === 'KeyA' || evt.key === 'KeyD') {
                this.vel.x = 0; // stop de beweging van de speler
            }
        });
    }

//     onPostUpdate(_engine, _delta) {
//         if (this.isFacingLeft) {
//             this.graphics.flipHorizontal = true; // Keer de sprite horizontaal om
//         } else {
//             this.graphics.flipHorizontal = false; // Reset de sprite naar de oorspronkelijke richting
//         }
//     }
}