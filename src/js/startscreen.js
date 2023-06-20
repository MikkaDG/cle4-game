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
import {Resources} from './resources.js';
import {Player} from './player.js';
import {Suhail} from './suhail.js';
import {Ceren} from './ceren.js';
import {Mick} from './mick.js';
import {Mike} from './mike.js';
import {SelectScreenBackground} from './select.screen.background.js';
import {PlayerKnop} from './playerKnop.js';

export class Startscreen extends Scene {

    onInitialize(engine) {
        const game = engine;

        const background = new SelectScreenBackground({});
        this.add(background);

        const startText = new Label({
            text: 'Choose your character!',
            pos: new Vector(400, 200),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(startText);

        const cerenText = new Label({
            text: 'Ceren',
            pos: new Vector(160, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(cerenText);

        const cerenButton = new PlayerKnop(225, 400, Resources.CerenKnop);
        this.add(cerenButton);

        cerenButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Ceren(300, 600));
        });

        const mickText = new Label({
            text: 'Mick',
            pos: new Vector(415, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mickText);

        const mickButton = new PlayerKnop(475, 400, Resources.MickKnop);
        this.add(mickButton);

        mickButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Mick(300, 600));
        });

        const mikeText = new Label({
            text: 'Mike',
            pos: new Vector(665, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mikeText);

        const mikeButton = new PlayerKnop(725, 400, Resources.MikeKnop);
        this.add(mikeButton);

        mikeButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Mike(300, 600));
        });

        const suhailText = new Label({
            text: 'Suhail',
            pos: new Vector(905, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(suhailText);

        const suhailButton = new PlayerKnop(975, 400, Resources.SuhailKnop);
        this.add(suhailButton);

        suhailButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Suhail(300, 620));
        });


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
}
