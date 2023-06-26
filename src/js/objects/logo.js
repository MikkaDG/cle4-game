import {Actor, Sprite, Vector} from 'excalibur';
import {Resources} from '../resources.js';

export class Logo extends Actor {
    constructor(posX, posY) {
        super({
            width: Resources.Logo.width,
            height: Resources.Logo.height
        });
        this.graphics.use(Resources.Logo.toSprite());
        this.pos = new Vector(posX, posY);
    }
}