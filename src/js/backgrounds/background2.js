import {Actor, Vector, GraphicsGroup} from 'excalibur';
import {Resources} from '../resources.js';

export class Background2 extends Actor {
    game;
    offset;

    onInitialize(engine) {
        this.background2Image = Resources.Background2.toSprite(); // Eerste achtergrondafbeelding
        // this.scale = new Vector(0.3, 0.3);
        this.offset = this.background2Image.width;
        this.game = engine;

        this.members = [
            {
                graphic: this.background2Image,
                pos: new Vector(0, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 2, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 3, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 4, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 5, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 6, 0),
            },
            {
                graphic: this.background2Image,
                pos: new Vector(this.background2Image.width * 7, 0),
            },
        ];

        const group = new GraphicsGroup({
            members: this.members
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
    }

}