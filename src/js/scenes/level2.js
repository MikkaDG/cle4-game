import '../../css/style.css';
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
import {Background2} from '../backgrounds/background2.js';
import {Player} from '../actors/player.js';
import {Ground} from '../objects/ground.js';
import {Fground} from '../objects/fground.js';
import {Trash} from '../objects/trash.js';
import {Pigeon} from '../actors/pigeon.js';
import {Ground2} from "../objects/ground2.js";
import {Trashcan} from "../objects/trashcan.js";

export class Level2 extends Scene {

    player = null;

    onInitialize(engine) {
        this.game = engine;

        Physics.gravity = new Vector(0, 500);


        const background2 = new Background2({});
        this.add(background2);

        this.score = 0;

        // Laad onderstaande elementen in voor de scorelabel zodat deze altijd vooraan blijft staan
        const fground16 = new Fground(8700, 75, 1.5);
        this.add(fground16);

        const trash14 = new Trash(8700, 18,);
        this.add(trash14);

        const fground17 = new Fground(9300, 75, 1.5);
        this.add(fground17);

        const fground18 = new Fground(9900, 75, 1.5);
        this.add(fground18);

        const trash15 = new Trash(9900, 18,);
        this.add(trash15);

        const fground19 = new Fground(10500, 75, 1.5);
        this.add(fground19);

        const fground20 = new Fground(11600, 75, 1.5);
        this.add(fground20);

        const trash16 = new Trash(11565, 18,);
        this.add(trash16);

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
            height: 2000,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier);

        const ground = new Ground(250, 870, 1.5);
        this.add(ground);

        const ground2 = new Ground(700, 870, 1.5);
        this.add(ground2);

        const fground = new Fground(1400, 520, 1.5);
        this.add(fground);

        const trash = new Trash(1400, 463,);
        this.add(trash);

        const fground2 = new Fground(1800, 370, 1.5);
        this.add(fground2);

        const fground3 = new Fground(2200, 220, 1.5);
        this.add(fground3);

        const fground4 = new Fground(2600, 370, 1.5);
        this.add(fground4);

        const pigeon = new Pigeon(2672, 320,);
        this.add(pigeon);

        const fground5 = new Fground(3000, 520, 1.5);
        this.add(fground5);

        const trash2 = new Trash(3000, 463,);
        this.add(trash2);

        const fground6 = new Fground(3400, 370, 1.5);
        this.add(fground6);

        const pigeon2 = new Pigeon(3472, 320,);
        this.add(pigeon2);

        const fground7 = new Fground(3800, 520, 1.5);
        this.add(fground7);

        const trash3 = new Trash(3800, 463,);
        this.add(trash3);

        const fground8 = new Fground(4200, 670, 1.5);
        this.add(fground8);

        const pigeon3 = new Pigeon(4272, 620,);
        this.add(pigeon3);

        const fground9 = new Fground(4600, 520, 1.5);
        this.add(fground9);

        const trash4 = new Trash(4600, 463,);
        this.add(trash4);

        const ground3 = new Ground(5300, 920, 1.5);
        this.add(ground3);

        const trash5 = new Trash(5500, 708,);
        this.add(trash5);

        const ground4 = new Ground(6000, 920, 1.5);
        this.add(ground4);

        const trash6 = new Trash(5800, 708,);
        this.add(trash6);

        const fground10 = new Fground(5950, 525, 1.5);
        this.add(fground10);

        const pigeon4 = new Pigeon(6022, 478,);
        this.add(pigeon4);

        const trash7 = new Trash(6100, 708,);
        this.add(trash7);

        const fground11 = new Fground(6250, 375, 1.5);
        this.add(fground11);

        const trash8 = new Trash(6220, 318,);
        this.add(trash8);

        const trash9 = new Trash(6280, 318,);
        this.add(trash9);

        const ground5 = new Ground(6700, 920, 1.5);
        this.add(ground5);

        const trash10 = new Trash(6400, 708,);
        this.add(trash10);

        const fground12 = new Fground(6550, 525, 1.5);
        this.add(fground12);

        const pigeon5 = new Pigeon(6622, 478,);
        this.add(pigeon5);

        const trash11 = new Trash(6700, 708,);
        this.add(trash11);

        const trash12 = new Trash(7000, 708,);
        this.add(trash12);

        const ground6 = new Ground(7400, 920, 1.5);
        this.add(ground6);

        const fground13 = new Fground(7800, 525, 1.5);
        this.add(fground13);

        const fground14 = new Fground(8100, 375, 1.5);
        this.add(fground14);

        const trash13 = new Trash(8100, 318,);
        this.add(trash13);

        const fground15 = new Fground(8400, 225, 1.5);
        this.add(fground15);

        const ground2n1 = new Ground2(11500, 770, 2.0);
        this.add(ground2n1);

        const ground2n2 = new Ground2(11690, 770, 2.0);
        this.add(ground2n2);

        const trashcan = new Trashcan(11500, 590);
        this.add(trashcan);



        const barrier2 = new Actor({
            pos: new Vector(11600, 400),
            width: 5,
            height: 2000,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier2);
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
        const maxCameraX = 11000;
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
                localStorage.setItem('scores', JSON.stringify(this.score));
                this.clear();
                this.game.goToScene('2');
                // if (this.player instanceof Ceren) {
                //     this.game.currentScene.add(new Ceren(0, 0));
                // }
                // if (this.player instanceof Mick) {
                //     this.game.currentScene.add(new Mick(0, 0));
                // }
                // if (this.player instanceof Mike) {
                //     this.game.currentScene.add(new Mike(0, 0));
                // }
                // if (this.player instanceof Suhail) {
                //     this.game.currentScene.add(new Suhail(0, 0));
                // }
            }
        });

        if (engine.input.keyboard.wasPressed(Input.Keys.Esc)) {
            this.game.goToScene('2');
        }
    }

    pickupTrash() {
        this.score += 1; // Verhoog de score
        this.scoreLabel.text = `SCORE: ${this.score}`; // Werk de scorelabel bij
    }

    gameOver() {
        localStorage.setItem('scores', JSON.stringify(this.score));
        localStorage.setItem('level', JSON.stringify(1));
        this.game.goToScene('gameover');
    }
}