import '../../css/style.css';
import {Actor, Animation, Input, range, SpriteSheet, Vector} from 'excalibur';
import {Resources, ResourceLoader} from '../resources.js';

export class Fireworks extends Actor {
    game;

    constructor(posX, posY) {
        super();
        const spritesheet = SpriteSheet.fromImageSource({
            image: Resources.Fireworks,
            grid: {rows: 5, columns: 6, spriteWidth: 256, spriteHeight: 256}
        });
        const explosion = Animation.fromSpriteSheet(spritesheet, range(0, 29), 80);

        this.pos = new Vector(posX, posY);

        this.graphics.add('explosion', explosion);
        // this.graphics.add('pickup', pickup);
        // this.graphics.add('pickupLeft', pickupLeft);


        this.graphics.use(explosion);
    }

    onInitialize(engine) {
        this.game = engine;
    }
}