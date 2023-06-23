import '../../css/style.css';
import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';

export class GameOver extends Scene {

    onInitialize(engine) {
        const storedScores = JSON.parse(localStorage.getItem('scores'));

        const gameOverbackground = new SelectScreenBackground();
        this.add(gameOverbackground);

        const gameOverText = new Label({
            text: 'Game over!',
            pos: new Vector(455, 250),
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
            pos: new Vector(505, 320),
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const backButton = new Label({
            text: 'Restart',
            x: 480,
            y: 510,
            width: 220,
            height: 40,
            anchor: new Vector(0, 0.9),
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(backButton);

        backButton.on('pointerup', () => {
            location.reload();
            // engine.goToScene('start'); // Stuur de gebruiker naar de startscene
        });
    }
}
