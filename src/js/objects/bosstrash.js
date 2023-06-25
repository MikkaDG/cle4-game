import {Actor, CollisionType, Physics, Vector} from 'excalibur';
import {Resources} from '../resources.js';
import {Player} from '../actors/player.js';

export class Bosstrash extends Actor {
    game
    constructor(posX, posY) {
        super({
            width: Resources.Banana.width,
            height: Resources.Banana.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.6, 0.6);
        this.trashSprites = [
            Resources.Banana.toSprite(),
            Resources.Can.toSprite(),
            Resources.Paper.toSprite(),
            Resources.Bag.toSprite()
        ];
    }

    onInitialize(engine) {
        this.game = engine;
        const randomIndex = Math.floor(Math.random() * this.trashSprites.length);
        const randomSprite = this.trashSprites[randomIndex];
        this.graphics.use(randomSprite);
        this.body.collisionType = CollisionType.Passive;
        this.body.useGravity = true;
        const randomVel = Math.floor(100 + Math.random() * 500);
        console.log(randomVel);
        this.vel = new Vector(-randomVel * 2, randomVel);

        this.on('collisionstart', (event) => this.onCollisionStart(event));
    }

    onPostUpdate(engine, delta) {
        setTimeout(() => {
            this.trashfall();
        }, 500);

    }

    trashfall() {
        this.vel = this.vel.add(new Vector(0, 10));
    }

    onCollisionStart(event) {
        if (event.other instanceof Player) {
            this.kill();
            this.game.currentScene.hitPlayer();
        }
    }
}
