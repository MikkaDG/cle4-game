import { Actor, CollisionType, Vector } from 'excalibur';
import { Resources } from '../resources.js';

export class Heart extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Heart.width,
            height: Resources.Heart.height,
        });
        this.pos = new Vector(posX, posY);
        // this.scale = new Vector(0.6, 0.6);
        this.graphics.use(Resources.Heart.toSprite());
    }
}
