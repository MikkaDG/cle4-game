import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Mick extends Actor {
    constructor() {
        super({
            width: Resources.Mick.width,
            height: Resources.Mick.height
        })
        this.graphics.use(Resources.Mick.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(475, 400)
    }
}