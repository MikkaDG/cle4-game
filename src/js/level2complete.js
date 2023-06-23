import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Background2} from './background2.js';
import {Suhail} from './suhail.js';
import {Ceren} from './ceren.js';
import {Mike} from './mike.js';
import {Mick} from './mick.js';
import {PlayerKnop} from './playerKnop.js';
import {Resources} from './resources.js';

export class Level2complete extends Scene {

    onInitialize(engine) {
        const game = engine;
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const gameOverbackground = new Background2();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'Level Complete!',
            pos: new Vector(400, 200),
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
            text: 'SCORE: ' + storedScores,
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
            text: 'Choose your character for the next level!',
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

        const cerenButton = new PlayerKnop(225, 600, Resources.CerenKnop);
        this.add(cerenButton);

        cerenButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Ceren(300, 600));

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

        const mickButton = new PlayerKnop(475, 600, Resources.MickKnop);
        this.add(mickButton);

        mickButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Mick(300, 600));
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

        const mikeButton = new PlayerKnop(725, 600, Resources.MikeKnop);
        this.add(mikeButton);

        mikeButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Mike(500, 600));
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

        const suhailButton = new PlayerKnop(975, 600, Resources.SuhailKnop);
        this.add(suhailButton);

        suhailButton.on('pointerup', () => {
            this.clear()
            game.goToScene('gamescene3');
            game.currentScene.add(new Suhail(300, 620));
        });

        const suhailPerk = new Label({
            text: 'Auto-collects trash',
            pos: new Vector(875, 720),
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
}