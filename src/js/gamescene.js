import '../css/style.css'
import {Actor, Engine, Scene, Vector} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'
import {Player} from './player.js';

export class Gamescene extends Scene {

        onInitialize(engine) {
                // this.game = this.engine

                //de player die wordt meegegeven vanuit het startscherm zijn position wordt opnieuw ingesteld
                this.player = new Player()
                this.player.pos = new Vector(150, 600)

        }
}