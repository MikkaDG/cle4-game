import '../css/style.css';
import {Actor, CollisionType, Engine, Input, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';

export class Player extends Actor {

    constructor() {
        super({
            width: 300,
            height: 300
        });
        this.scale = new Vector(0.6, 0.6);
        this.pos = new Vector(300, 500);
        this.body.collisionType = CollisionType.Active;
    }
}