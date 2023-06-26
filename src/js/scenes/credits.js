import '../../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Background1} from '../backgrounds/background1.js';
import {Suhail} from '../actors/suhail.js';
import {Ceren} from '../actors/ceren.js';
import {Mike} from '../actors/mike.js';
import {Mick} from '../actors/mick.js';
import {PlayerKnop} from '../actors/playerKnop.js';
import {Resources, Sounds} from '../resources.js';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';
import {Background2} from '../backgrounds/background2.js';

export class Credits extends Scene {

    onInitialize(engine) {
        const game = engine;

        const background = new Background2();
        this.add(background);

        const creditTitle = new Label({
            text: 'Credits',
            pos: new Vector(500, 700),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(creditTitle);

        const creditText = new Label({
            text: 'This game was made by: \n\n\n\n' +
                'Ceren - Designer\n\n\n\n' +
                'Mick - Programmer\n\n\n\n' +
                'Mike - Programmer\n\n\n\n' +
                'Suhail - Designer\n\n\n\n\n\n\n\n\n\n\n' +
                'Special thanks to: \n\n\n\n' +
                'Jack - Coach\n\n\n\n' +
                'Sam - Emotional Support\n\n\n\n' +
                'Sabit - Emotional Support\n\n\n\n' +
                'Jerrel - Emotional Support\n\n\n\n' +
                'Abu - Emotional Support\n\n\n\n' +
                'And you - For playing our game!',
            pos: new Vector(400, 800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(creditText);

        this.creditTitle = creditTitle;
        this.creditText = creditText;

    }

    onPreUpdate(_engine, _delta) {
        this.creditTitle.vel.y = -50;

        this.creditText.vel.y = -50;

    }

    onActivate() {
        Sounds.victoryMusic.loop = true;
        Sounds.victoryMusic.play(0.6);
    }

    onDeactivate() {
        Sounds.victoryMusic.stop();
    }
}
