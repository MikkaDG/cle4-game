import '../../css/style.css';
import {Actor, CollisionType, Engine, Input, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';

export class PlayerKnop extends Actor {

    constructor(posX, posY, sprite, scaleX, scaleY) {
        super({
            width: 180,
            height: Resources.CerenKnop.height
        });
        this.scale = new Vector(scaleX, scaleY);
        this.pos = new Vector(posX, posY);
        this.graphics.use(sprite.toSprite());
        this.anchor.setTo(0.35, 0.5);
    }
}