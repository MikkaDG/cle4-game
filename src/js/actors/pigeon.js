    import '../../css/style.css';
import {Actor, Animation, CollisionType, Input, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';
import {Player} from './player.js';

export class Pigeon extends Actor {
    actor;

    constructor(posX, posY) {
        super({
            width: 40,
            height: 40,
        });

        const pigeonSheet = SpriteSheet.fromImageSource({
            image: Resources.Pigeon,
            grid: {rows: 1, columns: 48, spriteWidth: 40, spriteHeight: 40}
        });
        this.scale = new Vector(1.5, 1.5);
        this.body.collisionType = CollisionType.Active;
        const walkLeft = Animation.fromSpriteSheet(pigeonSheet, range(0, 23), 80);
        const walkRight = Animation.fromSpriteSheet(pigeonSheet, range(24, 47), 80);

        this.pos = new Vector(posX, posY);

        this.graphics.add('walkleft', walkLeft);
        this.graphics.add('walkright', walkRight);

        this.graphics.use(walkLeft);
        this.vel.x = 0;
    }

    onInitialize(engine) {
        this.actions.clearActions();
        this.actions.repeatForever((context)=>{
          context.moveTo(this.pos.x - 144, this.pos.y - 0, 100).delay(0).moveTo(this.pos.x + 0, this.pos.y + 0, 100).delay(0)
        })
    }
}