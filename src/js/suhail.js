import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Suhail extends Actor {
    constructor() {
        super({
            width: Resources.Suhail.width,
            height: Resources.Suhail.height
        })
        this.graphics.use(Resources.Suhail.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(975, 400)
    }
}