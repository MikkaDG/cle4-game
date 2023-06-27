import '../../css/style.css';
import {Actor, Animation, CollisionType, Input, Physics, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';
import {Player} from './player.js';

export class FBirdH extends Actor {
    actor;

    constructor(posX, posY, flyDistance) {
        super({
            width: 40,
            height: 40,
        });

        const fBirdSheet = SpriteSheet.fromImageSource({
            image: Resources.FBirdH,
            grid: {rows: 1, columns: 16, spriteWidth: 40, spriteHeight: 40}
        });
        this.scale = new Vector(1.5, 1.5);
        this.body.collisionType = CollisionType.Active;
        const flyLeft = Animation.fromSpriteSheet(fBirdSheet, range(0, 7), 80);
        const flyRight = Animation.fromSpriteSheet(fBirdSheet, range(8, 15), 80);

        this.pos = new Vector(posX, posY);

        this.graphics.add('flyleft', flyLeft);
        this.graphics.add('flyright', flyRight);

        this.graphics.use(flyLeft);
        this.flyDistance = flyDistance;
    }

    onInitialize(engine) {
        this.body.useGravity = false;
        this.actions.clearActions();
        this.actions.repeatForever((context)=>{
            context.moveTo(this.pos.x - this.flyDistance, this.pos.y, 150).delay(0).moveTo(this.pos.x, this.pos.y, 150).delay(0)
        })
    }

    onPreUpdate(_engine, _delta) {
        // this.on('collisionstart', (event) => this.onCollisionGround(event));

        if (this.vel.x > 0) {
            this.graphics.use('flyright');
        } else {
            this.graphics.use('flyleft');
        }
    }
}