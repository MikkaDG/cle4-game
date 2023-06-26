import '../../css/style.css'
import {Actor, Animation, DegreeOfFreedom, Input, range, SpriteSheet, Vector} from 'excalibur';
import { Resources, ResourceLoader } from '../resources.js'

export class Trashmonster extends Actor {
    game;

    constructor() {
        super(
            {
                width: 400,
                height: 400,
            }
        )
        const throwSheet = SpriteSheet.fromImageSource({
            image: Resources.Trashmonster,
            grid: {rows: 1, columns: 2, spriteWidth: 700, spriteHeight: 600}
        })
        const idle = throwSheet.sprites[0] // geen animatie
        const throwing = throwSheet.sprites[1] // gooit afval
        this.scale = new Vector(0.8, 0.8)
        this.anchor = new Vector(0.5, 0.42)

        this.pos = new Vector(900, 600)

        this.graphics.add("idle", idle)
        this.graphics.add("throwing", throwing)

        this.graphics.use(idle)

        this.startY = this.pos.y; // Startpositie Y
        this.distance = 450; // Afstand om te verplaatsen
        this.velocity = 80; // Snelheid van 100 pixels per seconde
        this.direction = -1; // Richting: -1 voor naar links, 1 voor naar rechts
        this.timer = 0; // Timer voor het bijhouden van de tijd

        this.throwTimer = 0;
        this.throwIntervalMin = 1000; // Minimum interval in milliseconden (3 seconden)
        this.throwIntervalMax = 3000; // Maximum interval in milliseconden (5 seconden)

        // this.body.friction = 1;
        // this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

    onInitialize(engine) {
        this.game = engine;
        this.body.useGravity = false;
    }

    // onPreUpdate(engine, delta) {
    //     // monster gooit bosstrash en dit gebeurt random
    //     if (this.timer >= 2000 && Math.random() < 0.005) {
    //         this.game.currentScene.spawnBossTrash()
    //         this.graphics.use("throwing")
    //         setTimeout(() => {
    //             this.graphics.use("idle")
    //         }, 500)
    //     }
    //
    // }

    onPostUpdate(engine, delta) {
        this.timer += delta; // Verhoog de timer met de verstreken tijd

        // Controleer of de timer de tijdlimiet heeft bereikt
        if (this.timer >= this.distance / this.velocity * 1000) {
            this.direction *= -1; // Verander de richting wanneer de tijdlimiet is bereikt
            this.timer = 0; // Reset de timer
        }

        const distance = this.velocity * delta / 1000; // Bereken de afgelegde afstand op basis van de tijd

        // Verplaats de actor naar links of rechts op basis van de huidige richting
        this.pos.y += this.direction * distance;

        if (this.direction === -1 && this.pos.y <= this.startY - this.distance) {
            this.pos.y = this.startY - this.distance; // Zorg ervoor dat de actor niet verder omhoog gaat dan de afstand
        } else if (this.direction === 1 && this.pos.y >= this.startY) {
            this.pos.y = this.startY; // Zorg ervoor dat de actor niet verder naar rechts gaat dan de startpositie
        }
    }

    onPreUpdate(_engine, _delta) {
        // ...

        // Verhoog de throwTimer met de verstreken tijd
        this.throwTimer += _delta;

        // Controleer of het monster afval moet gooien op basis van de timer en het interval
        if (this.throwTimer >= this.getRandomThrowInterval()) {
            this.throwTrash();
            this.throwTimer = 0; // Reset de timer na het gooien van afval
        }
    }
        getRandomThrowInterval() {
            return Math.random() * (this.throwIntervalMax - this.throwIntervalMin) + this.throwIntervalMin;
        }

        throwTrash() {
            this.game.currentScene.spawnBossTrash();
            this.graphics.use("throwing");
            setTimeout(() => {
                this.graphics.use("idle");
            }, 500);
        }
}