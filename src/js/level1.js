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
import {Background1} from './background1.js';
import {Player} from './player.js';
import {Ground} from './ground.js';
import {Trash} from './trash.js';
import {Pigeon} from './pigeon.js';

export class Level1 extends Scene {

    player = null;

    onInitialize(engine) {
        this.game = engine;

        Physics.gravity = new Vector(0, 500);


        const background1 = new Background1({});
        this.add(background1);

        this.score = 0;

        // Voeg score label toe
        this.scoreLabel = new Label({
            text: `SCORE: ${this.score}`,
            pos: new Vector(650, 190),
            color: Color.Black,
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(this.scoreLabel);

        // voeg barriere toe aan start van level zodat de speler niet naar links kan
        const barrier = new Actor({
            pos: new Vector(0, 400),
            width: 5,
            height: 800,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier);

        const ground = new Ground(450, 870, 1.5);
        this.add(ground);

        const moveLabel = new Label({
            text: 'ᐊ ᐅ / A D',
            pos: new Vector(350, 250),
            color: '#575757',
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(moveLabel);

        const ground2 = new Ground(900, 870, 1.5);
        this.add(ground2);

        const jumpLabel = new Label({
            text: 'SPACEBAR',
            pos: new Vector(1450, 250),
            color: '#575757',
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(jumpLabel);

        const ground3 = new Ground(2100, 870, 1.5);
        this.add(ground3);

        const trashLabel = new Label({
            text: 'E / X',
            pos: new Vector(2380, 250),
            color: '#575757',
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(trashLabel);

        const trash1 = new Trash(2400, 658);
        {
            this.add(trash1);
        }

        const ground4 = new Ground(3400, 870, 1.5);
        this.add(ground4);

        const pigeon1 = new Pigeon(800, 648);
        this.add(pigeon1);
    }


    onPreUpdate(_engine, _delta) {
        if (this.player === null) {
            // Koppel de player variabele aan de Player class die in het startscherm is toegevoegd aan de scene
            this.player = this.actors.find(a => a instanceof Player);
        }

        // Camera volgt de speler horizontaal, maar vergrendelt de Y-positie
        const targetCameraX = this.player.pos.x + 300;
        const cameraY = this.camera.pos.y; // Behoud de huidige Y-positie van de camera

        // Definieer de elastische factor (waarde tussen 0 en 1)
        const elasticFactor = 0.03;

        // Pas de elastische interpolatie toe op de camera-positie
        let cameraX = this.camera.pos.x + (targetCameraX - this.camera.pos.x) * elasticFactor;

        // Zorg ervoor dat de cameraX niet onder de waarde 300 komt
        cameraX = Math.max(cameraX, 600);

        this.camera.pos = new Vector(cameraX, cameraY);
    }

    onPostUpdate(engine, delta) {
        // Bijwerken van de positie van de scorelabel op basis van de huidige camera positie
        const cameraX = this.camera.pos.x;
        const cameraY = this.camera.pos.y;
        const offsetX = 350; // X-offset van de scorelabel ten opzichte van de camera
        const offsetY = -300; // Y-offset van de scorelabel ten opzichte van de camera

        // Bereken de nieuwe positie van de scorelabel gebaseerd op de camera positie
        const scoreLabelX = cameraX + offsetX;
        const scoreLabelY = cameraY + offsetY;

        // Stel de nieuwe positie in voor de scorelabel
        this.scoreLabel.pos = new Vector(scoreLabelX, scoreLabelY);
    }

    pickupTrash() {
        this.score += 1; // Verhoog de score
        this.scoreLabel.text = `SCORE: ${this.score}`; // Werk de scorelabel bij
    }

    gameOver() {
        localStorage.setItem('scores', JSON.stringify(this.score));
        this.game.goToScene('gameover');
    }
}