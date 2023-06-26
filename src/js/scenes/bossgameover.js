import '../../css/style.css';
import { Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector } from 'excalibur';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';
import {Resources} from '../resources.js';

export class Bossgameover extends Scene {

    onInitialize(engine) {

        const gameOverbackground = new SelectScreenBackground(Resources.Background3);
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
            text: 'You couldn\'t defeat the trash monster',
            pos: new Vector(200, 320),
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(lastScoreLabel);

        const homeButton = new Label({
            text: 'Home',
            x: 340,
            y: 510,
            width: 140,
            height: 40,
            anchor: new Vector(0, 0.9),
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            }),
            textAlign: TextAlign.Center
        });
        this.add(homeButton);

        homeButton.on('pointerup', () => {
            localStorage.setItem('level', JSON.stringify(''));
            location.reload();
            // engine.goToScene('start'); // Stuur de gebruiker naar de startscene
        });

        const backButton = new Label({
            text: 'Try again',
            x: 640,
            y: 510,
            width: 240,
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
