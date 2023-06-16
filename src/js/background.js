import {Actor, Vector, GraphicsGroup} from 'excalibur';
import {Resources} from './resources.js';

export class Background extends Actor {
    game;
    offset;

    onInitialize(engine) {
        this.backgroundImage = Resources.Background.toSprite(); // Eerste achtergrondafbeelding
        // this.scale = new Vector(0.3, 0.3);
        this.offset = this.backgroundImage.width;
        this.game = engine;

        this.members = [
            {
                graphic: this.backgroundImage,
                pos: new Vector(0, 0),
            },
            {
                graphic: this.backgroundImage,
                pos: new Vector(this.backgroundImage.width, 0),
            },
            {
                graphic: this.backgroundImage,
                pos: new Vector(this.backgroundImage.width * 2, 0),
            }
        ];

        const group = new GraphicsGroup({
            members: this.members
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
    }

}