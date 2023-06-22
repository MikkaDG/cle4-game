import '../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {SelectScreenBackground} from './select.screen.background.js';

export class Level1complete extends Scene {

    onInitialize(engine) {
        const game = engine;
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const gameOverbackground = new SelectScreenBackground();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'Level Complete!',
            pos: new Vector(400, 250),
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
            pos: new Vector(500, 320),
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const restartButton = new Label({
            text: 'Restart',
            x: 250,
            y: 510,
            width: 210,
            height: 40,
            anchor: new Vector(0, 0.9),
            color: Color.Red,
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(restartButton);

        const nextButton = new Label({
            text: 'Next level',
            x: 700,
            y: 510,
            width: 270,
            height: 40,
            anchor: new Vector(0, 0.9),
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(nextButton);

        nextButton.on('pointerup', () => {
            game.goToScene('gamescene2'); // Stuur de gebruiker naar de startscene
        });
    }
}
