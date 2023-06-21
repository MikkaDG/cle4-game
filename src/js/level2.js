import '../css/style.css';
import {
    Actor,
    Color,
    Engine,
    Label,
    Physics,
    Scene,
    TextAlign,
    Vector,
    Input,
    Font,
    FontUnit,
    CollisionType
} from 'excalibur';
import {Background1} from './background1.js';
import {Player} from './player.js';
import {Ground} from './ground.js';
import {Fground} from './fground.js';
import {Trash} from './trash.js';
import {Pigeon} from './pigeon.js';

export class Level2 extends Scene {

    player = null;

    onInitialize(engine) {
        this.game = engine;

        Physics.gravity = new Vector(0, 500);


        const background2 = new Background2({});
        this.add(background2);

        this.score = 0;

        // Voeg score label toe
        this.scoreLabel = new Label({
            text: `SCORE: ${this.score}`,
            pos: new Vector(650, 190),
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.scoreLabel);

        // voeg barriere toe aan start van level zodat de speler niet naar links kan
        const barrier = new Actor({
            pos: new Vector(0, 400),
            width: 5,
            height: 800,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier);

        const ground = new Ground(450, 870, 1.5);
        this.add(ground);
    }

}