import {Actor, CollisionType, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Ground extends Actor {
    constructor(posX, posY, scale) {
        super({
            width: Resources.Ground.width,
            height: Resources.Ground.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(scale, scale);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground.toSprite());
        this.body.collisionType = CollisionType.Fixed;
        this.body.useGravity = false;
    }
}