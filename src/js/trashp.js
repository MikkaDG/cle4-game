import { Actor, CollisionType, Vector } from 'excalibur';
import { Resources } from './resources.js';

export class Trashp extends Actor {
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
        const randomIndex = Math.floor(Math.random() * this.trashSprites.length);
        const randomSprite = this.trashSprites[randomIndex];
        this.graphics.use(randomSprite);
        this.body.collisionType = CollisionType.Passive;
        this.body.useGravity = true;
    }
}
