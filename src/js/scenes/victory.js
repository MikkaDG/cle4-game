import '../../css/style.css';
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
import {Resources, Sounds} from '../resources.js';
import {Player} from '../actors/player.js';
import {Suhail} from '../actors/suhail.js';
import {Ceren} from '../actors/ceren.js';
import {Mick} from '../actors/mick.js';
import {Mike} from '../actors/mike.js';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';
import {PlayerKnop} from '../actors/playerKnop.js';
import {BossCeren} from '../actors/bossCeren.js';
import {Fireworks} from '../objects/fireworks.js';

export class Victoryscreen extends Scene {
    game;

    onInitialize(engine) {
        this.game = engine;

        const background = new SelectScreenBackground(Resources.Background3);
        this.add(background);

        const startText = new Label({
            text: 'Victory!',
            pos: new Vector(380, 200),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 100,
                unit: FontUnit.Px
            })
        });
        this.add(startText);


        const cerenButton = new PlayerKnop(225, 600, Resources.CerenKnop, 0.8, 0.8);
        this.add(cerenButton);

        const mickButton = new PlayerKnop(475, 600, Resources.MickKnop, 0.8, 0.8);
        this.add(mickButton);

        const mikeButton = new PlayerKnop(725, 600, Resources.MikeKnop, 0.8, 0.8);
        this.add(mikeButton);

        const suhailButton = new PlayerKnop(975, 600, Resources.SuhailKnop, 0.92, 0.8);
        this.add(suhailButton);

        const fireworks = new Fireworks(200, 200);
        this.add(fireworks);

        const fireworks2 = new Fireworks(1000, 200);
        this.add(fireworks2);

        const fireworks3 = new Fireworks(600, 300);
        this.add(fireworks3);

        const creditText = new Label({
            text: 'Click anywhere to see the credits!',
            pos: new Vector(330, 400),
            textAlign: TextAlign.Center,
            color: Color.Black,
            width: 1500,
            height: 800,
            anchor: new Vector(0.3, 0.5),
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(creditText);

        creditText.on('pointerup', () => {
            this.game.goToScene('credits');
        });

        // const fireworks4 = new Fireworks(1000, 500);
        // this.add(fireworks4);


        // const instructions = new Label({
        //     text: 'Collect trash and avoid the pigeons.' +
        //         '\nMove  ᐊ ᐅ' +
        //         '\nJump    ⎵',
        //     pos: new Vector(400, 600),
        //     textAlign: TextAlign.Center,
        //     color: Color.Black,
        //     font: new Font({
        //         family: 'impact',
        //         size: 24,
        //         unit: FontUnit.Px
        //     })
        // });
        // this.add(instructions);

    }

    onActivate() {
        Sounds.Victory.loop = true;
        Sounds.Victory.play(0.5).then(r => console.log(r));
    }

    onDeactivate() {
        Sounds.Victory.stop();
    }
}
