import '../css/style.css';
import {Actor, Animation, CollisionType, Input, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Player} from './player.js';

export class Pigeon extends Actor {
    actor;
    ray;
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
        this.vel.x = -100;


    }


//

//     onPostUpdate(engine, delta) {
//         const leftRay = new Ray(this.pos, new Vector(-1, 0));
//         const rightRay = new Ray(this.pos.add(new Vector(this.width, 0)), new Vector(1, 0));
//
//         // Controleer of de linkerstraal een botsing heeft met de rand
//         const leftCollision = engine.currentScene.physics.rayCast(leftRay, this.width, CollisionType.Fixed);
//         // Controleer of de rechterstraal een botsing heeft met de rand
//         const rightCollision = engine.currentScene.physics.rayCast(rightRay, this.width, CollisionType.Fixed);
//
//         if (leftCollision) {
//             this.vel.x = 100; // Keer de bewegingsrichting om naar rechts
//             this.graphics.use('walkright');
//         } else if (rightCollision) {
//             this.vel.x = -100; // Keer de bewegingsrichting om naar links
//             this.graphics.use('walkleft');
//         }
//     };
}