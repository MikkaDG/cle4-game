import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';

export class Mick extends Player {
    constructor(posX, posY) {
        super()
        this.graphics.use(Resources.Mick.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(posX, posY)
    }
}