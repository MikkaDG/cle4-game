import '../css/style.css'
import {Animation, Input, range, SpriteSheet, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';
import {Startscreen} from './startscreen.js';
import {Trash} from './trash.js';

export class Mike extends Player {
    game;

    constructor(posX, posY) {
        super()
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Mike,
            grid: { rows: 1, columns: 8, spriteWidth: 300, spriteHeight: 300 }
        })
        const idle = runSheet.sprites[0] // geen animatie
        const idleLeft = runSheet.sprites[5] // geen animatie
        const runLeft = Animation.fromSpriteSheet(runSheet, range(3, 5), 80)
        const runRight = Animation.fromSpriteSheet(runSheet, range(0, 2), 80)
        const pickup = runSheet.sprites[6] // pick up trash
        const pickupLeft = runSheet.sprites[7] // pick up trash

        this.pos = new Vector(posX, posY)

        this.graphics.add("idle", idle)
        this.graphics.add("idleLeft", idleLeft)
        this.graphics.add("runleft", runLeft)
        this.graphics.add("runright", runRight)
        this.graphics.add("pickup", pickup)
        this.graphics.add("pickupLeft", pickupLeft)


        this.graphics.use(idle)
    }

    onInitialize(engine) {
        this.game = engine;
        this.on('collisionstart', (event) => this.onCollisionStart(event));
    }

    die(event) {
        this.game.currentScene.gameOver();
        this.kill();
    }

    onPreUpdate(engine, delta) {
        if (this.pos.y >= 1000) {
            this.die();
        }

        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.graphics.use('runleft');
            this.vel.x = -300;
            this.anchor.setTo(0.65, 0.5);

        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.graphics.use('runright');
            this.vel.x = 300;
            this.anchor.setTo(0.35, 0.5);
        }
        if (engine.input.keyboard.isHeld(Input.Keys.ShiftLeft) || engine.input.keyboard.isHeld(Input.Keys.ShiftRight)) {
            this.vel.x *= 1.5;
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left)) {
            this.vel.x = 0;
            this.graphics.use('idleLeft');
            this.anchor.setTo(0.65, 0.5);
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right)) {
            this.vel.x = 0;
            this.graphics.use('idle');
            this.anchor.setTo(0.35, 0.5);
        }
        if (engine.input.keyboard.isHeld(Input.Keys.X) || engine.input.keyboard.isHeld(Input.Keys.E)) {
            this.graphics.use('pickup');
        }
        if (this.vel.x < 0 && engine.input.keyboard.isHeld(Input.Keys.X)
            || this.vel.x < 0 && engine.input.keyboard.isHeld(Input.Keys.E)) {
            this.graphics.use('pickupLeft');
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.X) || engine.input.keyboard.wasReleased(Input.Keys.E)) {
            this.graphics.use('idle');
            // this.on('collisionstart', (event) => this.onCollisionStart(event));
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.vel.y === 0) {
            console.log('jump');
            this.jump();
            //na 0.5 sec valt ceren weer
            setTimeout(() => {
                this.fall();
            }, 500);
        }
    }


    jump() {
        console.log('jump');
        this.vel = this.vel.add(new Vector(0, -550));

    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 120));
    }

    onCollisionStart(event) {
        if (event.other instanceof Trash) {
            event.other.kill();
            this.game.currentScene.pickupTrash();
        }
    }

}