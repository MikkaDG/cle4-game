import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Ceren extends Actor {
    constructor() {
        super({
            width: Resources.Ceren.width,
            height: Resources.Ceren.height
        })
        this.graphics.use(Resources.Ceren.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(225, 400)
    }
}