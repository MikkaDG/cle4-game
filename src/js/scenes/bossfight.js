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
import {Background3} from '../backgrounds/background3.js';
import {Trashmonster} from '../actors/trashmonster.js';
import {Trashp} from '../objects/trashp.js';
import {Decortrash} from '../objects/decortrash.js';
import {Suhail} from '../actors/suhail.js';
import {BossSuhail} from '../actors/bossSuhail.js';
import {Bosstrash} from '../objects/bosstrash.js';
import {Heart} from '../objects/heart.js';
import {Sounds} from '../resources.js';


export class Bossfight extends Scene {
    chargedVel = 0;
    chargeTimer = 0;
    chargeTimeThreshold; // Duur (in milliseconden) voordat de chargedVel zijn maximum bereikt

    player = null;

    chargeLabel = null; // Label voor het weergeven van de laadtijd

    lives;

    onInitialize(engine) {
        // const storedScores = JSON.parse(localStorage.getItem('scores'));

        this.game = engine;

        this.on('enter', this.onEnter);

        Physics.gravity = new Vector(0, 500);

        const background = new Background3({});
        this.add(background);

        // this.score = storedScores;

        // Voeg score label toe
        // this.scoreLabel = new Label({
        //     text: `SCORE: ${this.score}`,
        //     pos: new Vector(650, 190),
        //     color: Color.Black,
        //     font: new Font({
        //         family: 'Minecraft',
        //         size: 50,
        //         unit: FontUnit.Px
        //     })
        // });
        // this.add(this.scoreLabel);

        this.lives = 3;

        this.heart1 = new Heart(20,20);
        this.add(this.heart1);

        this.heart2 = new Heart(60,20);
        this.add(this.heart2);

        this.heart3 = new Heart(100,20);
        this.add(this.heart3);

        // voeg barriere toe aan start van level zodat de speler niet naar links kan
        const barrier = new Actor({
            pos: new Vector(0, 400),
            width: 5,
            height: 2000,
            color: Color.Transparent,
            collisionType: CollisionType.Fixed
        });
        this.add(barrier);

        const ground = new Ground(0, 870, 1.5);
        this.add(ground);


        const decortrash2 = new Decortrash(60, 658);
        this.add(decortrash2);

        const decortrash5 = new Decortrash(180, 658);
        this.add(decortrash5);

        const decortrash3 = new Decortrash(100, 658);
        this.add(decortrash3);

        const decortrash = new Decortrash(20, 658);
        this.add(decortrash);

        const decortrash11 = new Decortrash(420, 658);
        this.add(decortrash11);

        const decortrash8 = new Decortrash(300, 658);
        this.add(decortrash8);

        const decortrash4 = new Decortrash(140, 658);
        this.add(decortrash4);

        const decortrash6 = new Decortrash(220, 658);
        this.add(decortrash6);

        const decortrash10 = new Decortrash(380, 658);
        this.add(decortrash10);

        const decortrash7 = new Decortrash(260, 658);
        this.add(decortrash7);

        const decortrash9 = new Decortrash(340, 658);
        this.add(decortrash9);

        this.trashmonster = new Trashmonster();
        this.add(this.trashmonster);

        const barrier2 = new Actor({
            pos: new Vector(1200, 400),
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
        const maxCameraX = 600;
        cameraX = Math.min(cameraX, maxCameraX);

        this.camera.pos = new Vector(cameraX, cameraY);
    }


    onPostUpdate(engine, delta) {
        // Bijwerken van de positie van de scorelabel op basis van de huidige camera positie
        // const cameraX = this.camera.pos.x;
        // const cameraY = this.camera.pos.y;
        // const offsetX = 300; // X-offset van de scorelabel ten opzichte van de camera
        // const offsetY = -300; // Y-offset van de scorelabel ten opzichte van de camera
        //
        // // Bereken de nieuwe positie van de scorelabel gebaseerd op de camera positie
        // const scoreLabelX = cameraX + offsetX;
        // const scoreLabelY = cameraY + offsetY;
        //
        // // Stel de nieuwe positie in voor de scorelabel
        // this.scoreLabel.pos = new Vector(scoreLabelX, scoreLabelY);

        if (this.player instanceof BossSuhail) {
            this.chargeTimeThreshold = 750;
            this.maxChargedVel = 800;
        } else {
            this.chargeTimeThreshold = 1500;
            this.maxChargedVel = 500;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.X) || engine.input.keyboard.isHeld(Input.Keys.E)) {
            this.chargeLabel = new Label({
                text: '0%', // Begin met 0% laadtijd
                pos: new Vector(this.player.pos.x - 20, this.player.pos.y - 100), // Positie boven de speler
                color: Color.Black,
                font: new Font({
                    family: 'Minecraft',
                    size: 30,
                    unit: FontUnit.Px
                }),
                textAlign: TextAlign.Center
            });
            this.add(this.chargeLabel);
            this.remove(this.chargeLabel);
            // Werk de positie van de chargeLabel bij
            this.chargeLabel.pos = new Vector(this.player.pos.x - 20, this.player.pos.y - 100);

            // Werk de tekst van de chargeLabel bij op basis van de laadtijd
            const chargePercentage = Math.floor((this.chargeTimer / this.chargeTimeThreshold) * 100);
            this.chargeLabel.text = `${chargePercentage}%`;
            if (chargePercentage >= 100) {
                this.chargeLabel.text = '100%';
            }

            this.chargeTimer += delta; // Verhoog de oplaadtijd

            // Bepaal de maximale waarde van chargedVel op basis van de laadtijd
            const chargeTimeThresholdSeconds = this.chargeTimeThreshold / 1000; // Omzetten naar seconden
            const chargedVelIncrement = this.maxChargedVel / chargeTimeThresholdSeconds;

            // Bereken de nieuwe waarde van chargedVel op basis van de laadtijd
            if (this.chargeTimer <= this.chargeTimeThreshold) {
                this.chargedVel = Math.min(this.chargeTimer / 1000 * chargedVelIncrement, this.maxChargedVel);
            } else {
                this.chargedVel = this.maxChargedVel;
            }
        }

        if (engine.input.keyboard.wasReleased(Input.Keys.X) || engine.input.keyboard.wasReleased(Input.Keys.E)) {
            let trashprojectile = new Trashp(this.player.pos.x + 100, this.player.pos.y, this.chargedVel);
            this.add(trashprojectile);

            this.chargeTimer = 0;
            this.chargedVel = 0;

            this.remove(this.chargeLabel);
        }

        console.log(this.chargedVel);
        console.log(this.chargeTimeThreshold);

        if (this.lives === 2){
            this.remove(this.heart3);
        }
        if (this.lives === 1){
            this.remove(this.heart2);
        }
        if (this.lives === 0){
            this.remove(this.heart1);
        }
    }

    // hitMonster() {
    //     this.score += 1; // Verhoog de score
    //     this.scoreLabel.text = `SCORE: ${this.score}`; // Werk de scorelabel bij
    // }

    hitPlayer() {
        this.lives -= 1;
        if (this.lives <= 0) {
            this.gameOver();
        }
    }

    spawnBossTrash() {
        let bossTrash = new Bosstrash(this.trashmonster.pos.x - 100, this.trashmonster.pos.y);
        this.add(bossTrash);
    }

    gameOver() {
        // localStorage.setItem('scores', JSON.stringify(this.score));
        // this.clear();
        this.game.goToScene('bossgameover');
    }

    onActivate() {
        Sounds.bossMusic.loop = true;
        Sounds.bossMusic.play(0.5);
    }

    onDeactivate() {
        Sounds.bossMusic.pause();
    }
}