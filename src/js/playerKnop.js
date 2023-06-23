import '../css/style.css';
import {Actor, CollisionType, Engine, Input, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';

export class PlayerKnop extends Actor {

    constructor(posX, posY, sprite) {
        super({
            width: 180,
            height: Resources.CerenKnop.height
        });
        this.scale = new Vector(0.8, 0.8);
        this.pos = new Vector(posX, posY);
        this.graphics.use(sprite.toSprite());
        this.anchor.setTo(0.35, 0.5);
    }
}