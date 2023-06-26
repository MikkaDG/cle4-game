import '../../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Background1} from '../backgrounds/background1.js';
import {Suhail} from '../actors/suhail.js';
import {Ceren} from '../actors/ceren.js';
import {Mike} from '../actors/mike.js';
import {Mick} from '../actors/mick.js';
import {PlayerKnop} from '../actors/playerKnop.js';
import {Resources, Sounds} from '../resources.js';
import {BossSuhail} from '../actors/bossSuhail.js';
import {BossMike} from '../actors/bossMike';
import {BossMick} from '../actors/bossMick.js';
import {BossCeren} from '../actors/bossCeren.js';
import {Background3} from '../backgrounds/background3.js';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';

export class Prebossfight extends Scene {

    onInitialize(engine) {
        const game = engine;
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const gameOverbackground = new SelectScreenBackground(Resources.Background3);
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'Boss Fight Incoming!',
            pos: new Vector(360, 200),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(gameOverText);

        const lastScoreLabel = new Label({
            text: 'LV 3 SCORE: ' + storedScores,
            pos: new Vector(500, 270),
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const nextLevelCharacter = new Label({
            text: 'Choose your character for the boss fight!',
            pos: new Vector(270, 400),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(nextLevelCharacter);

        const cerenText = new Label({
            text: 'Ceren',
            pos: new Vector(180, 480),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(cerenText);

        const cerenButton = new PlayerKnop(225, 600, Resources.CerenKnop, 0.8, 0.8);
        this.add(cerenButton);

        cerenButton.on('pointerup', () => {
            this.clear()
            game.goToScene('bossfight');
            game.currentScene.add(new BossCeren(300, 600));

        });

        const cerenPerk = new Label({
            text: 'All-round',
            pos: new Vector(175, 720),
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
            pos: new Vector(435, 480),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mickText);

        const mickButton = new PlayerKnop(475, 600, Resources.MickKnop, 0.8, 0.8);
        this.add(mickButton);

        mickButton.on('pointerup', () => {
            this.clear()
            game.goToScene('bossfight');
            game.currentScene.add(new BossMick(300, 600));
        });

        const mickPerk = new Label({
            text: 'Jumps higher',
            pos: new Vector(410, 720),
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
            pos: new Vector(685, 480),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(mikeText);

        const mikeButton = new PlayerKnop(725, 600, Resources.MikeKnop, 0.8, 0.8);
        this.add(mikeButton);

        mikeButton.on('pointerup', () => {
            this.clear()
            game.goToScene('bossfight');
            game.currentScene.add(new BossMike(300, 600));
        });

        const mikePerk = new Label({
            text: 'Sprints faster',
            pos: new Vector(650, 720),
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
            pos: new Vector(925, 480),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(suhailText);

        const suhailButton = new PlayerKnop(975, 600, Resources.SuhailKnop, 0.92, 0.8);
        this.add(suhailButton);

        suhailButton.on('pointerup', () => {
            this.clear()
            game.goToScene('bossfight');
            game.currentScene.add(new BossSuhail(300, 620));
        });

        const suhailPerk = new Label({
            text: 'Shoots better',
            pos: new Vector(910, 720),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 20,
                unit: FontUnit.Px
            })
        });
        this.add(suhailPerk);
    }
    onActivate() {
        Sounds.preboss.loop = true;
        Sounds.preboss.play(0.5);
    }

    onDeactivate() {
        Sounds.preboss.pause();
    }
}
