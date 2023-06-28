import '../../css/style.css';
import {
    Actor,
    Color,
    Engine,
    Label,
    Physics,
    Scene,
    Sound,
    TextAlign,
    Vector,
    Input,
    Font,
    FontUnit,
    CollisionType, RotationType
} from 'excalibur';
import {Background1} from '../backgrounds/background1.js';
import {Player} from '../actors/player.js';
import {Ground} from '../objects/ground.js';
import {Fground} from '../objects/fground.js';
import {Trash} from '../objects/trash.js';
import {Pigeon} from '../actors/pigeon.js';
import {Ground2} from '../objects/ground2.js';
import {Trashcan} from '../objects/trashcan.js';
import {Background3} from '../backgrounds/background3.js';
import {FgroundH} from '../objects/fgroundhorizontal.js';
import {FgroundV} from '../objects/fgroundvertical.js';
import {FgroundS} from '../objects/fgroundsquare.js';
import {Sounds} from '../resources.js';
import {FBirdV} from "../actors/fBirdV.js";
import {FBirdH} from "../actors/fBirdH.js";

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
            text: `SCORE: ${this.score}/50`,
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

        const trash01 = new Trash(30, 658);
        this.add(trash01);

        const trash02 = new Trash(105, 658);
        this.add(trash02);

        const trash0 = new Trash(180, 658);
        this.add(trash0);

        const fbirdh0 = new FBirdH(800, 250, 500);
        this.add(fbirdh0);

        const fgroundh1 = new FgroundH(1400, 480, 400);
        this.add(fgroundh1);

        const fgroundv1 = new FgroundV(1600, 680, 400);
        this.add(fgroundv1);

        // const pigeon = new Pigeon(1672, 230, 144);
        // this.add(pigeon);

        const fbirdv0 = new FBirdV(1850, 600, 400)
        this.add(fbirdv0);

        const fgroundh2 = new FgroundH(2380, 480, 400);
        this.add(fgroundh2);

        const fbirdv = new FBirdV(2500, 600, 400);
        this.add(fbirdv);

        const fgroundv2 = new FgroundV(2800, 680, 400);
        this.add(fgroundv2);

        // const pigeon2 = new Pigeon(2872, 230, 144);
        // this.add(pigeon2);

        const fground1 = new Fground(3400, 700, 1.5);
        this.add(fground1);

        const trash = new Trash(3400, 642);
        this.add(trash);

        const fbirdh = new FBirdH(3600, 450, 400);
        this.add(fbirdh);

        const fground2 = new Fground(3400, 200, 1.5);
        this.add(fground2);

        const trash2 = new Trash(3400, 142);
        this.add(trash2);

        const fgrounds1 = new FgroundS(4400, 200, 500);
        this.add(fgrounds1);

        const fbirdv1 = new FBirdV(4700, 650, 500);
        this.add(fbirdv1);

        const fgroundv3 = new FgroundV(5000, 700, 500);
        this.add(fgroundv3);

        // const pigeon3 = new Pigeon(5072, 150, 144);
        // this.add(pigeon3);

        const fbirdv2 = new FBirdV(5300, 650, 500);
        this.add(fbirdv2);

        const fgroundv4 = new FgroundV(5600, 700, 500);
        this.add(fgroundv4);

        // const pigeon4 = new Pigeon(5672, 150, 144);
        // this.add(pigeon4);

        const fbirdv3 = new FBirdV(5900, 650, 500);
        this.add(fbirdv3);

        const fgroundh3 = new FgroundH(7000, 680, 1200);
        this.add(fgroundh3);

        const fbirdh2 = new FBirdH(7000, 450, 900);
        this.add(fbirdh2);

        const ground2 = new Ground(7500, 900, 1.5);
        this.add(ground2);

        const trash3 = new Trash(7710, 688);
        this.add(trash3);

        const pigeon5 = new Pigeon(7400, 150, 300);
        this.add(pigeon5);

        const pigeon6 = new Pigeon(7950, 150, 290);
        this.add(pigeon6);

        const pigeon7 = new Pigeon(7715, 700, 660);
        this.add(pigeon7);

        const trash4 = new Trash(7150, 149);
        this.add(trash4);

        const ground2n1 = new Ground2(7250, 350, 3.0);
        this.add(ground2n1);

        const ground2n3 = new Ground2(7848, 620, 2.12);
        this.add(ground2n3);

        const ground2n4 = new Ground2(8060, 680, 2.5);
        this.add(ground2n4);

        const ground2n2 = new Ground2(7806, 350, 3.0);
        this.add(ground2n2);

        const trash5 = new Trash(8720, 676);
        this.add(trash5);

        const ground4 = new Ground(9200, 955, 1.5);
        this.add(ground4);

        const trash48 = new Trash(8805, 743);
        this.add(trash48);

        const trash32 = new Trash(9345, 743);
        this.add(trash32);

        const trash18 = new Trash(9065, 743);
        this.add(trash18);

        const trash24 = new Trash(9185, 743);
        this.add(trash24);

        const trash23 = new Trash(9165, 743);
        this.add(trash23);

        const trash13 = new Trash(8965, 743);
        this.add(trash13);

        const trash26 = new Trash(9225, 743);
        this.add(trash26);

        const trash43 = new Trash(9565, 743);
        this.add(trash43);

        const trash9 = new Trash(8885, 743);
        this.add(trash9);

        const trash45 = new Trash(9605, 743);
        this.add(trash45);

        const trash27 = new Trash(9245, 743);
        this.add(trash27);

        const trash38 = new Trash(9465, 743);
        this.add(trash38);

        const trash11 = new Trash(8925, 743);
        this.add(trash11);

        const trash16 = new Trash(9025, 743);
        this.add(trash16);

        const trash21 = new Trash(9125, 743);
        this.add(trash21);

        const trash36 = new Trash(9425, 743);
        this.add(trash36);

        const trash41 = new Trash(9525, 743);
        this.add(trash41);

        const trash8 = new Trash(8865, 743);
        this.add(trash8);

        const trash39 = new Trash(9485, 743);
        this.add(trash39);

        const trash42 = new Trash(9545, 743);
        this.add(trash42);

        const trash28 = new Trash(9265, 743);
        this.add(trash28);

        const trash30 = new Trash(9305, 743);
        this.add(trash30);

        const trash19 = new Trash(9085, 743);
        this.add(trash19);

        const trash35 = new Trash(9405, 743);
        this.add(trash35);

        const trash12 = new Trash(8945, 743);
        this.add(trash12);

        const trash25 = new Trash(9205, 743);
        this.add(trash25);

        const trash7 = new Trash(8845, 743);
        this.add(trash7);

        const trash37 = new Trash(9445, 743);
        this.add(trash37);

        const trash14 = new Trash(8985, 743);
        this.add(trash14);

        const trash33 = new Trash(9365, 743);
        this.add(trash33);

        const trash31 = new Trash(9325, 743);
        this.add(trash31);

        const trash6 = new Trash(8825, 743);
        this.add(trash6);

        const trash10 = new Trash(8905, 743);
        this.add(trash10);

        const trash22 = new Trash(9145, 743);
        this.add(trash22);

        const trash15 = new Trash(9005, 743);
        this.add(trash15);

        const trash29 = new Trash(9285, 743);
        this.add(trash29);

        const trash34 = new Trash(9385, 743);
        this.add(trash34);

        const trash1 = new Trash(8825, 743);
        this.add(trash1);

        const trash20 = new Trash(9105, 743);
        this.add(trash20);

        const trash44 = new Trash(9585, 743);
        this.add(trash44);

        const trash17 = new Trash(9045, 743);
        this.add(trash17);

        const trash40 = new Trash(9505, 743);
        this.add(trash40);

        const ground2n5 = new Ground2(8700, 820, 2.0);
        this.add(ground2n5);

        const ground3 = new Ground(8205.1, 590.6, 1.5);
        ground3.actions.rotateTo(Math.PI / 5, Math.PI, RotationType.CounterClockwise);
        this.add(ground3);

        const barrier2 = new Actor({
            pos: new Vector(9600, -300),
            width: 5,
            height: 2000,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier2);

        const barrier3 = new Actor({
            pos: new Vector(9150, 768),
            width: 900,
            height: 5,
            color: Color.Transparent,
            collisionType: CollisionType.Passive
        });
        this.add(barrier3);

        barrier3.on('collisionstart', (e) => {
            if (e.other instanceof Player) {
                localStorage.setItem('scores', JSON.stringify(this.score));
                this.clear();
                this.engine.goToScene('3')
            }
        });
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
        const maxCameraX = 9000;
        cameraX = Math.min(cameraX, maxCameraX);

        this.camera.pos = new Vector(cameraX, cameraY);
    }


    onPostUpdate(engine, delta) {
        // Bijwerken van de positie van de scorelabel op basis van de huidige camera positie
        const cameraX = this.camera.pos.x;
        const cameraY = this.camera.pos.y;
        const offsetX = 300; // X-offset van de scorelabel ten opzichte van de camera
        const offsetY = -300; // Y-offset van de scorelabel ten opzichte van de camera

        // Bereken de nieuwe positie van de scorelabel gebaseerd op de camera positie
        const scoreLabelX = cameraX + offsetX;
        const scoreLabelY = cameraY + offsetY;

        // Stel de nieuwe positie in voor de scorelabel
        this.scoreLabel.pos = new Vector(scoreLabelX, scoreLabelY);

        if (engine.input.keyboard.wasPressed(Input.Keys.Esc)) {
            this.game.goToScene('3');
        }
    }

    pickupTrash() {
        this.score += 1; // Verhoog de score
        this.scoreLabel.text = `SCORE: ${this.score}`; // Werk de scorelabel bij
    }

    gameOver() {
        localStorage.setItem('scores', JSON.stringify(this.score));
        localStorage.setItem('level', JSON.stringify(2));
        this.game.goToScene('gameover');
    }

    onActivate() {
        Sounds.Level3.loop = true;
        Sounds.Level3.play(0.5);
    }

    onDeactivate() {
        Sounds.Level3.stop();
    }
}