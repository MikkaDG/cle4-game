import {Actor, CollisionType, Vector} from 'excalibur';
import {Resources} from '../resources.js';

export class FgroundS extends Actor {
    constructor(posX, posY, distance) {
        super({
            width: Resources.Fground.width,
            height: Resources.Fground.height,
        });
        this.pos = new Vector(posX, posY);
        this.scale = new Vector(1.5, 1.5);
        this.startX = posX; // Startpositie X
        this.startY = posY; // Startpositie Y
        this.distance = distance; // Afstand om te verplaatsen
        this.velocity = 200; // Snelheid van 100 pixels per seconde
        this.directionX = -1; // Richting X: -1 voor naar links, 1 voor naar rechts
        this.directionY = 1; // Richting Y: -1 voor naar boven, 1 voor naar beneden
        this.timer = 0; // Timer voor het bijhouden van de tijd
        this.state = 0; // Huidige staat van de beweging (0: naar links, 1: naar beneden, 2: naar rechts, 3: naar boven)
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
            this.timer = 0; // Reset de timer

            // Verander de huidige staat van de beweging
            this.state = (this.state + 1) % 4;

            // Reset de timer wanneer de richting wordt gewijzigd
            this.timer = 0;
        }

        const distance = this.velocity * delta / 1000; // Bereken de afgelegde afstand op basis van de tijd

        // Verplaats de actor op basis van de huidige staat van de beweging
        switch (this.state) {
            case 0: // Naar links
                this.pos.x += this.directionX * distance;
                break;
            case 1: // Naar beneden
                this.pos.y += this.directionY * distance;
                break;
            case 2: // Naar rechts
                this.pos.x += this.directionX * distance;
                break;
            case 3: // Naar boven
                this.pos.y += this.directionY * distance;
                break;
        }

        // Controleer of de actor de juiste positie heeft bereikt en verander de richtingen indien nodig
        if (this.state === 0 && this.pos.x <= this.startX - this.distance) {
            this.directionX = 1; // Verander de richting X naar rechts
            this.pos.x = this.startX - this.distance; // Zorg ervoor dat de actor niet verder naar links gaat dan de afstand
        } else if (this.state === 1 && this.pos.y >= this.startY + this.distance) {
            this.directionY = -1; // Verander de richting Y naar boven
            this.pos.y = this.startY + this.distance; // Zorg ervoor dat de actor niet verder naar beneden gaat dan de afstand
        } else if (this.state === 2 && this.pos.x >= this.startX) {
            this.directionX = -1; // Verander de richting X naar links
            this.pos.x = this.startX; // Zorg ervoor dat de actor niet verder naar rechts gaat dan de startpositie
        } else if (this.state === 3 && this.pos.y <= this.startY) {
            this.directionY = 1; // Verander de richting Y naar beneden
            this.pos.y = this.startY; // Zorg ervoor dat de actor niet verder naar boven gaat dan de startpositie
        }
    }
}
