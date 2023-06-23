import '../../css/style.css';
import {Animation, DegreeOfFreedom, Input, range, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';
import {Player} from './player.js';
import {Startscreen} from '../scenes/startscreen.js';
import {Trash} from '../objects/trash.js';
import {Fground} from '../objects/fground.js';
import {FgroundH} from '../objects/fgroundhorizontal.js';
import {FgroundV} from '../objects/fgroundvertical.js';
import {FgroundS} from '../objects/fgroundsquare.js';
import {Ground} from '../objects/ground.js';
import {Ground2} from '../objects/ground2.js';

export class BossMike extends Player {
    game;
    trash;
    canJump = true;

    constructor(posX, posY) {
        super();
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Mike,
            grid: {rows: 1, columns: 8, spriteWidth: 302, spriteHeight: 300}
        });
        const idle = runSheet.sprites[0]; // geen animatie
        // const idleLeft = runSheet.sprites[5]; // geen animatie
        // const runLeft = Animation.fromSpriteSheet(runSheet, range(3, 5), 80);
        const runRight = Animation.fromSpriteSheet(runSheet, range(0, 2), 80);
        const pickup = runSheet.sprites[6]; // pick up trash
        // const pickupLeft = runSheet.sprites[7]; // pick up trash

        this.pos = new Vector(posX, posY);

        this.graphics.add('idle', idle);
        // this.graphics.add('idleLeft', idleLeft);
        // this.graphics.add('runleft', runLeft);
        this.graphics.add('runright', runRight);
        this.graphics.add('pickup', pickup);
        // this.graphics.add('pickupLeft', pickupLeft);


        this.graphics.use(idle);

        //
        // this.body.friction = 1;
        // this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

    onInitialize(engine) {
        this.game = engine;

        // this.on('collisionstart', (event) => this.onCollisionStart(event));
        // this.on('collisionend', (event) => this.onCollisionEnd(event));
    }

    die() {
        this.game.currentScene.gameOver();
        this.kill();
    }

    onPreUpdate(engine, delta) {
        this.on('collisionstart', (event) => this.onCollisionGround(event));

        if (this.pos.y >= 1000) {
            this.die();
        }

        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.graphics.use('runright');
            this.vel.x = -200;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.graphics.use('runright');
            this.vel.x = 200;
            this.anchor.setTo(0.35, 0.5);
        }
        if (engine.input.keyboard.isHeld(Input.Keys.ShiftLeft) || engine.input.keyboard.isHeld(Input.Keys.ShiftRight)) {
            this.vel.x *= 2.2;
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.A) || engine.input.keyboard.wasReleased(Input.Keys.Left)) {
            this.vel.x = 0;
            this.graphics.use('idle');
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.D) || engine.input.keyboard.wasReleased(Input.Keys.Right)) {
            this.vel.x = 0;
            this.graphics.use('idle');
            this.anchor.setTo(0.35, 0.5);
        }

        if (engine.input.keyboard.isHeld(Input.Keys.X) || engine.input.keyboard.isHeld(Input.Keys.E)) {
            this.graphics.use('pickup');
        }

        if (engine.input.keyboard.isHeld(Input.Keys.D) && engine.input.keyboard.isHeld(Input.Keys.X) || engine.input.keyboard.isHeld(Input.Keys.Right) && engine.input.keyboard.isHeld(Input.Keys.X)
            || engine.input.keyboard.isHeld(Input.Keys.D) && engine.input.keyboard.isHeld(Input.Keys.E) || engine.input.keyboard.isHeld(Input.Keys.Right) && engine.input.keyboard.isHeld(Input.Keys.E)) {
            this.graphics.use('pickup');
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.X) || engine.input.keyboard.wasReleased(Input.Keys.E)) {
            this.graphics.use('idle');
        }

        if (this.vel.y !== 0 && this.canJump === true) {
            setTimeout(() => {
                this.canJump = false;
            }, 100);
        }

        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.canJump === true) {
            this.jump();
            //na 0.3 sec valt ceren weer
            setTimeout(() => {
                this.fall();
            }, 500);
        }

        if (this.pos.y <= -300) {
            this.fall();
        }
    }

    jump() {
        console.log('jump');
        this.vel = this.vel.add(new Vector(0, -550));
        this.canJump = false;
    }

    fall() {
        this.vel = this.vel.add(new Vector(0, 120));
    }

    onCollisionGround(event) {
        if (event.other instanceof Ground || event.other instanceof Fground || event.other instanceof FgroundH
            || event.other instanceof FgroundS || event.other instanceof FgroundV || event.other instanceof Ground2) {
            this.canJump = true;
        }
    }
}