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
    CollisionType, RotationType
} from 'excalibur';
import {Background1} from './background1.js';
import {Player} from './player.js';
import {Ground} from './ground.js';
import {Fground} from './fground.js';
import {Trash} from './trash.js';
import {Pigeon} from './pigeon.js';
import {Ground2} from './ground2.js';
import {Trashcan} from './trashcan.js';
import {Background3} from './background3.js';
import {FgroundH} from './fgroundhorizontal.js';
import {FgroundV} from './fgroundvertical.js';
import {FgroundS} from './fgroundsquare.js';

export class Level3 extends Scene {

    player = null;

    onInitialize(engine) {
        this.game = engine;

        Physics.gravity = new Vector(0, 500);

        const background3 = new Background3({});
        this.add(background3);

        this.score = 0;

        // Voeg score label toe
        this.scoreLabel = new Label({
            text: `SCORE: ${this.score}`,
            pos: new Vector(650, 190),
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
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

        const fgroundh1 = new FgroundH(1200, 480, 200);
        this.add(fgroundh1);

        const fgroundv1 = new FgroundV(1600, 680, 400);
        this.add(fgroundv1);

        const fgroundh2 = new FgroundH(2200, 480, 200);
        this.add(fgroundh2);

        const fgroundv2 = new FgroundV(2800, 680, 400);
        this.add(fgroundv2);

        const fground1 = new Fground(3400, 700, 1.5);
        this.add(fground1);

        const trash = new Trash(3400, 642);
        this.add(trash);

        const fground2 = new Fground(3400, 200, 1.5);
        this.add(fground2);

        const trash2 = new Trash(3400, 142);
        this.add(trash2);

        const fgrounds1 = new FgroundS(4400, 200, 500);
        this.add(fgrounds1);

        const fgroundv3 = new FgroundV(5000, 700, 500);
        this.add(fgroundv3);

        const fgroundv4 = new FgroundV(5600, 700, 500);
        this.add(fgroundv4);


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

        // Zorg ervoor dat de cameraX niet onder de waarde 600 komt
        cameraX = Math.max(cameraX, 600);

        // Zorg ervoor dat de cameraX niet hoger dan de waarde 9000 komt
        const maxCameraX = 8300;
        cameraX = Math.min(cameraX, maxCameraX);

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

        this.player.on('collisionstart', (e) => {
            if (e.other instanceof Trashcan) {
                this.game.goToScene('level1complete');
            }
        });
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