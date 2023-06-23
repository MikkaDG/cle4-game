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

        this.graphics.use(throwing)

        this.startY = this.pos.y; // Startpositie Y
        this.distance = 300; // Afstand om te verplaatsen
        this.velocity = 80; // Snelheid van 100 pixels per seconde
        this.direction = -1; // Richting: -1 voor naar links, 1 voor naar rechts
        this.timer = 0; // Timer voor het bijhouden van de tijd

        // this.body.friction = 1;
        // this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }

    onInitialize(engine) {
        this.body.useGravity = false;
    }

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
}