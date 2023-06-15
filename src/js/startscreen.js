import '../css/style.css';
import {Actor, Color, Engine, Label, Physics, Scene, TextAlign, Vector, Input, Font, FontUnit} from 'excalibur';
import {Resources} from './resources.js';
import {Player} from './player.js';
import {Suhail} from './suhail.js';
import {Ceren} from './ceren.js';
import {Mick} from './mick.js';
import {Mike} from './mike.js';
import {Background} from './background.js';

export class Startscreen extends Scene {

    onInitialize(engine) {
        const game = engine;

        const background = new Background({});
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

        const cerenButton = new Ceren({
            width: Resources.Ceren.width,
            height: Resources.Ceren.height,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(cerenButton);

        cerenButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Player(Resources.Ceren.toSprite()));
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

        const mickButton = new Mick({
            width: Resources.Mick.width,
            height: Resources.Mick.height,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(mickButton);

        mickButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Player(Resources.Mick.toSprite()));
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

        const mikeButton = new Mike({
            width: Resources.Mike.width,
            height: Resources.Mike.height,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(mikeButton);

        mikeButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Player(Resources.Mike.toSprite()));
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

        const suhailButton = new Suhail({
            width: Resources.Suhail.width,
            height: Resources.Suhail.height,
            anchor: new Vector(0.5, 0.5),
        });
        this.add(suhailButton);

        suhailButton.on('pointerup', () => {
            game.goToScene('gamescene');
            game.currentScene.add(new Player(Resources.Suhail.toSprite()));
        });



const instructions = new Label({
    text: 'Collect trash and avoid the pigeons.' +
        '\nMove  ᐊ ᐅ' +
        '\nJump    ⎵',
    pos: new Vector(400, 600),
    textAlign: TextAlign.Center,
    color: Color.Black,
    font: new Font({
        family: 'impact',
        size: 24,
        unit: FontUnit.Px
    })
});
this.add(instructions);

}
}
