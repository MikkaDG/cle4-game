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
import {Ceren} from '../actors/ceren.js';
import {Mick} from '../actors/mick.js';
import {Mike} from '../actors/mike.js';
import {Suhail} from '../actors/suhail.js';
import {Sounds} from '../resources.js';

export class Level1 extends Scene {

    player = null;

    onInitialize(engine) {
        this.game = engine;

        this.on('enter', this.onEnter);

        Physics.gravity = new Vector(0, 500)

        const background1 = new Background1({});
        this.add(background1);

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
            height: 2000,
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
                family: 'Minecraft',
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
                family: 'Minecraft',
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
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(trashLabel);

        const trash1 = new Trash(2400, 658);
        this.add(trash1);

        const ground4 = new Ground(3400, 870, 1.5);
        this.add(ground4);

        const pigeon1 = new Pigeon(3672, 658);
        this.add(pigeon1);

        const sprintLabel = new Label({
            text: 'Sprint with SHIFT',
            pos: new Vector(3980, 250),
            color: '#575757',
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(sprintLabel);

        const ground5 = new Ground(4900, 870, 1.5);
        this.add(ground5);

        const ground7 = new Ground(6200, 680, 1.5);
        ground7.actions.rotateTo(Math.PI / -5.5, Math.PI, RotationType.Clockwise);
        this.add(ground7);

        const ground6 = new Ground(5400, 870, 1.5);
        this.add(ground6);

        const fground = new Fground(4900, 480, 1.5);
        this.add(fground);

        const trash2 = new Trash(4900, 423);
        this.add(trash2);

        const fground2 = new Fground(5200, 280, 1.5);
        this.add(fground2);

        const trash3 = new Trash(5200, 223);
        this.add(trash3);

        const fground3 = new Fground(5500, 480, 1.5);
        this.add(fground3);

        const trash4 = new Trash(5500, 423);
        this.add(trash4);

        const trash5 = new Trash(5200, 658);
        this.add(trash5);

        const fground5 = new Fground(7400, 480, 1.5);
        this.add(fground5);

        const ground8 = new Ground(6930, 464, 1.5);
        this.add(ground8);

        const trash6 = new Trash(6580, 252);
        this.add(trash6);

        const pigeon2 = new Pigeon(7002, 258);
        this.add(pigeon2);

        const trash7 = new Trash(7280, 252);
        this.add(trash7);

        const ground9 = new Ground(6840, 860, 1.8);
        ground9.actions.rotateTo(Math.PI / 1, Math.PI, RotationType.Clockwise);
        this.add(ground9);

        const fground4 = new Fground(7800, 300, 1.5);
        this.add(fground4);

        const trash8 = new Trash(7800, 243);
        this.add(trash8);

        const ground10 = new Ground(7830, 870, 1.5);
        this.add(ground10);

        const trash9 = new Trash(7420, 658);
        this.add(trash9);

        const pigeon3 = new Pigeon(7902, 658);
        this.add(pigeon3);

        const trash10 = new Trash(8240, 658);
        this.add(trash10);

        const fground6 = new Fground(8200, 200, 1.5);
        this.add(fground6);

        const pigeon4 = new Pigeon(8272, 148);
        this.add(pigeon4);

        const ground2n1 = new Ground2(8800, 770, 2.0);
        this.add(ground2n1);

        const ground2n2 = new Ground2(8990, 770, 2.0);
        this.add(ground2n2);

        const trashcan = new Trashcan(8800, 590);
        this.add(trashcan);

        const barrier2 = new Actor({
            pos: new Vector(8900, 400),
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
            // if (this.player instanceof Ceren) {
            //     this.game.currentScene.add(new Ceren(0, 0));
            // }
            // if (this.player instanceof Mick) {
            //     this.game.currentScene.add(new Mick(0, 0));
            // }

            // if (this.player instanceof Suhail) {
            //     this.game.currentScene.add(new Suhail(0, 0));
            // }
        }
        // if (this.player instanceof Mike) {
        //     this.playermusic = Sounds.mikeMusic;
        // }

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
        const offsetX = 300; // X-offset van de scorelabel ten opzichte van de camera
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
                this.game.goToScene('1');
            }
        });

        if (engine.input.keyboard.wasPressed(Input.Keys.Esc)) {
            this.game.goToScene('1');
        }
    }

    pickupTrash() {
        this.score += 1; // Verhoog de score
        this.scoreLabel.text = `SCORE: ${this.score}`; // Werk de scorelabel bij
    }

    gameOver() {
        localStorage.setItem('scores', JSON.stringify(this.score));
        this.game.goToScene('gameover');
    }


    onActivate() {
        // Sounds.bossMusic.loop = true;
        // Sounds.bossMusic.play(0.5);
    }

    onDeactivate() {
        // Sounds.bossMusic.pause();
    }
}