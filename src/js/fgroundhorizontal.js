import {Actor, CollisionType, Vector} from 'excalibur';
import {Resources} from './resources.js';

export class FgroundH extends Actor {
    constructor(posX, posY, distance) {
        super({
            width: Resources.Fground.width,
            height: Resources.Fground.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(1.5, 1.5);
        this.startX = posX; // Startpositie X
        this.distance = distance; // Afstand om te verplaatsen
        this.velocity = 100; // Snelheid van 100 pixels per seconde
        this.direction = -1; // Richting: -1 voor naar links, 1 voor naar rechts
        this.timer = 0; // Timer voor het bijhouden van de tijd
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fground.toSprite());
        this.body.collisionType = CollisionType.Fixed;
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
        this.pos.x += this.direction * distance;

        if (this.direction === -1 && this.pos.x <= this.startX - this.distance) {
            this.pos.x = this.startX - this.distance; // Zorg ervoor dat de actor niet verder naar links gaat dan de afstand
        } else if (this.direction === 1 && this.pos.x >= this.startX) {
            this.pos.x = this.startX; // Zorg ervoor dat de actor niet verder naar rechts gaat dan de startpositie
        }
    }
}
