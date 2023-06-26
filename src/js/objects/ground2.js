import {Actor, CollisionType, Vector} from 'excalibur';
import {Resources} from '../resources.js';

export class Ground2 extends Actor {
    constructor(posX, posY, scale) {
        super({
            width: Resources.Ground2.width,
            height: Resources.Ground2.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(scale, scale);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground2.toSprite());
        this.body.collisionType = CollisionType.Fixed;
        this.body.useGravity = false;
    }
}