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
            pos: new Vector(370, 200),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(startText);

        const cerenText = new Label({
            text: 'Ceren',
            pos: new Vector(180, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(cerenText);

        const cerenButton = new PlayerKnop(225, 400, Resources.CerenKnop);
        this.add(cerenButton);

        cerenButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Ceren(300, 600));

        });

        const cerenPerk = new Label({
            text: 'All-round',
            pos: new Vector(175, 520),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 20,
                unit: FontUnit.Px
            })
        });
        this.add(cerenPerk);

        const mickText = new Label({
            text: 'Mick',
            pos: new Vector(435, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mickText);

        const mickButton = new PlayerKnop(475, 400, Resources.MickKnop);
        this.add(mickButton);

        mickButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Mick(8000, 0));
        });

        const mickPerk = new Label({
            text: 'Jumps higher',
            pos: new Vector(410, 520),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 20,
                unit: FontUnit.Px
            })
        });
        this.add(mickPerk);

        const mikeText = new Label({
            text: 'Mike',
            pos: new Vector(685, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mikeText);

        const mikeButton = new PlayerKnop(725, 400, Resources.MikeKnop);
        this.add(mikeButton);

        mikeButton.on('pointerup', () => {
            this.clear()
            game.goToScene('bossfight');
            game.currentScene.add(new Mike(300, 600));
        });

        const mikePerk = new Label({
            text: 'Sprints faster',
            pos: new Vector(650, 520),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 20,
                unit: FontUnit.Px
            })
        });
        this.add(mikePerk);

        const suhailText = new Label({
            text: 'Suhail',
            pos: new Vector(925, 280),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(suhailText);

        const suhailButton = new PlayerKnop(975, 400, Resources.SuhailKnop);
        this.add(suhailButton);

        suhailButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene1');
            game.currentScene.add(new Suhail(300, 600));
        });

        const suhailPerk = new Label({
            text: 'Auto-collects trash',
            pos: new Vector(875, 520),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 20,
                unit: FontUnit.Px
            })
        });
        this.add(suhailPerk);


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
