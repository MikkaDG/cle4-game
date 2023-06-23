import '../css/style.css';
import {Actor, Animation, CollisionType, Input, range, Ray, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
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

//     onPostUpdate(engine, delta) {
//         // Definieer de raycasting-lengte en -hoek
//         const raycastLength = 100; // Lengte van de raycast-stralen
//         const raycastAngle = Math.PI / 4; // Hoek van de raycast-stralen (45 graden in dit voorbeeld)
//
// // Voeg de volgende code toe in de update-loop van de duif
//         const raycastStartLeft = this.pos.add(new Vector(-this.width / 2, 0)); // Startpunt van de linkse raycast
//         const raycastStartRight = this.pos.add(new Vector(this.width / 2, 0)); // Startpunt van de rechtse raycast
//
//         const raycastDirectionLeft = new Vector(0, 1).rotate(raycastAngle); // Richting van de linkse raycast
//         const raycastDirectionRight = new Vector(0, 1).rotate(-raycastAngle); // Richting van de rechtse raycast
//
//         const raycastEndLeft = raycastStartLeft.add(raycastDirectionLeft.scale(raycastLength)); // Eindpunt van de linkse raycast
//         const raycastEndRight = raycastStartRight.add(raycastDirectionRight.scale(raycastLength)); // Eindpunt van de rechtse raycast
//
// // Voer de raycast uit voor de linkse straal
//         const leftRaycast = this.scene.rayCast(raycastStartLeft, raycastDirectionLeft, raycastLength, (actor) => actor instanceof Ground);
//
// // Voer de raycast uit voor de rechtse straal
//         const rightRaycast = this.scene.rayCast(raycastStartRight, raycastDirectionRight, raycastLength, (actor) => actor instanceof Ground);
//
// // Controleer of beide stralen een botsing hebben met de grondacteur
//         const isOnGround = leftRaycast && rightRaycast;
//
// // Voer acties uit op basis van de grondstatus
//         if (isOnGround) {
//             // De duif loopt nog op de grond
//         } else {
//             // De duif is niet meer op de grond
//         }
//     }
}