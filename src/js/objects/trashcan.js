import { Actor, CollisionType, Vector } from 'excalibur';
import { Resources } from '../resources.js';

export class Trashcan extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Trashcan.width,
            height: Resources.Trashcan.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(0.6, 0.6);
        this.graphics.use(Resources.Trashcan.toSprite());
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive;
        this.body.useGravity = true;
    }
}
