import {Actor, Vector, GraphicsGroup} from 'excalibur';
import {Resources} from './resources.js';

export class Background1 extends Actor {
    game;
    offset;

    onInitialize(engine) {
        this.background3Image = Resources.Background.toSprite(); // Eerste achtergrondafbeelding
        // this.scale = new Vector(0.3, 0.3);
        this.offset = this.background3Image.width;
        this.game = engine;

        this.members = [
            {
                graphic: this.background3Image,
                pos: new Vector(0, 0),
            },
            {
                graphic: this.background3Image,
                pos: new Vector(this.background3Image.width, 0),
            },
            {
                graphic: this.background3Image,
                pos: new Vector(this.background3Image.width * 2, 0),
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