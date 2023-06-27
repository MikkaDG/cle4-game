    import '../../css/style.css';
import {Actor, Animation, CollisionType, Input, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';
import {Player} from './player.js';

export class Pigeon extends Actor {
    actor;

    constructor(posX, posY, walkDistance) {
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
        this.walkDistance = walkDistance;
    }

    onInitialize(engine) {
        this.actions.clearActions();
        const originalY = this.pos.y;
        this.actions.repeatForever((context)=>{
          context.moveTo(this.pos.x - this.walkDistance, this.pos.y, 100).delay(0).moveTo(this.pos.x, this.pos.y, 100).delay(0)
        })
    }

    onPreUpdate(_engine, _delta) {
        // this.on('collisionstart', (event) => this.onCollisionGround(event));

        if (this.vel.x > 0) {
            this.graphics.use('walkright');
        } else {
            this.graphics.use('walkleft');
        }
    }
}