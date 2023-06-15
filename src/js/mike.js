import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Mike extends Actor {
    constructor() {
        super({
            width: Resources.Mike.width,
            height: Resources.Suhail.height
        })
        this.graphics.use(Resources.Mike.toSprite())
        this.scale = new Vector(0.8, 0.8)
        this.pos = new Vector(725, 400)
    }
}