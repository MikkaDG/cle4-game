import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';

export class Suhail extends Player {
    constructor(posX, posY) {
        super({
            width: Resources.Suhail.width,
            height: Resources.Suhail.height
        })
        this.graphics.use(Resources.Suhail.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(posX, posY)
    }
}