import '../../css/style.css';
import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Physics, Scene, TextAlign, Vector} from 'excalibur';
import {Background1} from '../backgrounds/background1.js';
import {Suhail} from '../actors/suhail.js';
import {Ceren} from '../actors/ceren.js';
import {Mike} from '../actors/mike.js';
import {Mick} from '../actors/mick.js';
import {PlayerKnop} from '../actors/playerKnop.js';
import {Resources, Sounds} from '../resources.js';
import {SelectScreenBackground} from '../backgrounds/select.screen.background.js';
import {Background2} from '../backgrounds/background2.js';
import {Logo} from '../objects/logo.js';

export class Credits extends Scene {

    onInitialize(engine) {
        const game = engine;

        const background = new Background2();
        this.add(background);

        const creditTitle = new Label({
            text: 'Credits',
            pos: new Vector(500, 700),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 50,
                unit: FontUnit.Px
            })
        });
        this.add(creditTitle);

        const creditText = new Label({
            text: 'This game was made by: \n\n\n\n' +
                'Ceren - Designer\n\n\n\n' +
                'Mick - Programmer\n\n\n\n' +
                'Mike - Programmer\n\n\n\n' +
                'Suhail - Designer\n\n\n\n\n\n\n\n\n\n\n' +
                'Special thanks to: \n\n\n\n' +
                'Jack - Coaching + Programming Support\n\n\n\n' +
                'Niek - Game Design Classes\n\n\n\n' +
                'Rob - Game Design Classes\n\n\n\n' +
                'Bob - Programming Classes\n\n\n\n' +
                'Leanne - Programming Classes\n\n\n\n' +
                'Erik - Programming Classes\n\n\n\n' +
                'Noa - Sustainability Classes\n\n\n\n' +
                'Marlous - Cultural Sensitivity Classes\n\n\n\n' +
                'Dieuwertje - Without them no CLE\n\n\n\n' +
                'Sam - Emotional Support\n\n\n\n' +
                'Sabit - Emotional Support\n\n\n\n' +
                'Jerrel - Emotional Support\n\n\n\n' +
                'Abu - Emotional Support\n\n\n\n' +
                'Mitchel - Emotional Support\n\n\n\n' +
                'Hosea - Emotional Support\n\n\n\n\n\n\n\n\n\n\n\n' +
                'And you - For playing our game!',
            pos: new Vector(400, 800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            }),
        });
        this.add(creditText);

        this.logo = new Logo(600, 3200);
        this.add(this.logo);

        this.byLabel = new Label({
            text: 'By',
            pos: new Vector(570, 3450),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 40,
                unit: FontUnit.Px
            })
        });
        this.add(this.byLabel);

        this.cerenLabel = new Label({
            text: 'Ceren',
            pos: new Vector(185, 3800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(this.cerenLabel);

        this.cerenButton = new PlayerKnop(225, 3900, Resources.CerenKnop, 0.8, 0.8);
        this.add(this.cerenButton);

        this.mickLabel = new Label({
            text: 'Mick',
            pos: new Vector(440, 3800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(this.mickLabel);

        this.mickButton = new PlayerKnop(475, 3900, Resources.MickKnop, 0.8, 0.8);
        this.add(this.mickButton);

        this.mikeLabel = new Label({
            text: 'Mike',
            pos: new Vector(690, 3800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(this.mikeLabel);

        this.mikeButton = new PlayerKnop(725, 3900, Resources.MikeKnop, 0.8, 0.8);
        this.add(this.mikeButton);

        this.suhailLabel = new Label({
            text: 'Suhail',
            pos: new Vector(935, 3800),
            textAlign: TextAlign.Center,
            color: Color.Black,
            font: new Font({
                family: 'Minecraft',
                size: 30,
                unit: FontUnit.Px
            })
        });
        this.add(this.suhailLabel);

        this.suhailButton = new PlayerKnop(975, 3900, Resources.SuhailKnop, 0.92, 0.8);
        this.add(this.suhailButton);

        this.creditTitle = creditTitle;
        this.creditText = creditText;

        this.creditTitle.vel.y = -80;
        this.creditText.vel.y = -80;
        this.logo.vel.y = -80;
        this.byLabel.vel.y = -80;
        this.cerenLabel.vel.y = -80;
        this.cerenButton.vel.y = -80;
        this.mickLabel.vel.y = -80;
        this.mickButton.vel.y = -80;
        this.mikeLabel.vel.y = -80;
        this.mikeButton.vel.y = -80;
        this.suhailLabel.vel.y = -80;
        this.suhailButton.vel.y = -80;
        // this.creditTitle.vel.y = -200;
        // this.creditText.vel.y = -200;
        // this.logo.vel.y = -200;
        // this.byLabel.vel.y = -200;
        // this.cerenLabel.vel.y = -200;
        // this.cerenButton.vel.y = -200;
        // this.mickLabel.vel.y = -200;
        // this.mickButton.vel.y = -200;
        // this.mikeLabel.vel.y = -200;
        // this.mikeButton.vel.y = -200;
        // this.suhailLabel.vel.y = -200;
        // this.suhailButton.vel.y = -200;

    }

    onPreUpdate(_engine, _delta) {
        if (this.logo.pos.y <= 200) {
            this.logo.vel.y = 0; // Stop de beweging van het logo
        }
        if (this.byLabel.pos.y <= 400) {
            this.byLabel.vel.y = 0; // Stop de beweging van de "By" label
        }
        if (this.cerenLabel.pos.y <= 500) {
            this.cerenLabel.vel.y = 0; // Stop de beweging van de "Ceren" label
        }
        if (this.cerenButton.pos.y <= 600) {
            this.cerenButton.vel.y = 0; // Stop de beweging van de "Ceren" knop
        }
        if (this.mickLabel.pos.y <= 500) {
            this.mickLabel.vel.y = 0; // Stop de beweging van de "Mick" label
        }
        if (this.mickButton.pos.y <= 600) {
            this.mickButton.vel.y = 0; // Stop de beweging van de "Mick" knop
        }
        if (this.mikeLabel.pos.y <= 500) {
            this.mikeLabel.vel.y = 0; // Stop de beweging van de "Mike" label
        }
        if (this.mikeButton.pos.y <= 600) {
            this.mikeButton.vel.y = 0; // Stop de beweging van de "Mike" knop
        }
        if (this.suhailLabel.pos.y <= 500) {
            this.suhailLabel.vel.y = 0; // Stop de beweging van de "Suhail" label
        }
        if (this.suhailButton.pos.y <= 600) {
            this.suhailButton.vel.y = 0; // Stop de beweging van de "Suhail" knop
        }

        if (this.cerenButton.pos.y <= 600 && this.mickButton.pos.y <= 600 &&
            this.mikeButton.pos.y <= 600 && this.suhailButton.pos.y <= 600) {

            // Stel de rotatiehoek in voor elk van de acteurs
            const rotationAmount = 10;
            const rotationSpeed = 0.006;

            // Houd de huidige draairichting bij (1 voor links, -1 voor rechts)
            if (!this.rotationDirection) {
                this.rotationDirection = 1;
            }

            // Draai de acteurs volgens de huidige draairichting
            this.cerenButton.rotation += rotationAmount * rotationSpeed * this.rotationDirection;
            this.mickButton.rotation -= rotationAmount * rotationSpeed * this.rotationDirection;
            this.mikeButton.rotation += rotationAmount * rotationSpeed * this.rotationDirection;
            this.suhailButton.rotation -= rotationAmount * rotationSpeed * this.rotationDirection;

            // Controleer of de acteurs een bepaalde rotatiehoek hebben bereikt
            const maxRotation = 3; // Aantal graden dat ze maximaal draaien

            if (Math.abs(this.cerenButton.rotation) >= maxRotation) {
                // Keer de draairichting om
                this.rotationDirection *= -1;
            }
        }
    }

    onActivate() {
        Sounds.victoryMusic.loop = true;
        Sounds.victoryMusic.play(0.6);
    }

    onDeactivate() {
        Sounds.victoryMusic.stop();
    }
}
