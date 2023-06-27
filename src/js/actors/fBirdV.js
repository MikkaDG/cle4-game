import '../../css/style.css';
import {Actor, Animation, CollisionType, Input, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';
import {Player} from './player.js';

export class FBirdV extends Actor {
    actor;

    constructor(posX, posY, flyDistance) {
        super({
            width: 40,
            height: 40,
        });

        const fBirdSheet = SpriteSheet.fromImageSource({
            image: Resources.Flyingbird,
            grid: {rows: 1, columns: 8, spriteWidth: 40, spriteHeight: 40}
        });
        this.scale = new Vector(1.5, 1.5);
        this.body.collisionType = CollisionType.Active;
        const fly = Animation.fromSpriteSheet(fBirdSheet, range(0, 7), 80);

        this.pos = new Vector(posX, posY);

        this.graphics.add('fly', fly);

        this.graphics.use(fly);
        this.flyDistance = flyDistance;
    }

    onInitialize(engine) {
        this.actions.clearActions();
        this.actions.repeatForever((context)=>{
            context.moveTo(this.pos.x, this.pos.y - this.flyDistance, 150).delay(0).moveTo(this.pos.x, this.pos.y, 100).delay(0)
        })
    }

}