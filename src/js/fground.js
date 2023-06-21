import {Actor, CollisionType, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class Fground extends Actor {
    constructor(posX, posY, scale) {
        super({
            width: Resources.Fground.width,
            height: Resources.Fground.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(scale, scale);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fground.toSprite());
        this.body.collisionType = CollisionType.Fixed;
        this.body.useGravity = false;
    }
}