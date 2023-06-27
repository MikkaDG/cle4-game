import { Actor, CollisionType, Vector } from 'excalibur';
import { Resources } from '../resources.js';

export class Heart extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Heart.width,
            height: Resources.Heart.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(1.5, 1.5);
        this.graphics.use(Resources.Heart.toSprite());
    }
}
