import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';

export class Ceren extends Player {
    constructor(posX, posY) {
        super({
            width: Resources.Ceren.width,
            height: Resources.Ceren.height
        })
        this.graphics.use(Resources.Ceren.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(posX, posY)
    }
}