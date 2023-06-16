import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';

export class Mike extends Player {
    constructor(posX, posY) {
        super({
            width: Resources.Mike.width,
            height: Resources.Mike.height
        })
        this.graphics.use(Resources.Mike.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(posX, posY)
    }
}