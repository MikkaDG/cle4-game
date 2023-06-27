import { Actor, Vector, Color, Sprite, Rectangle, clamp } from 'excalibur'

export class HealthBar extends Actor {

    healthrectangle

    constructor() {
        super({ width: 600, height: 30 })
        this.healthrectangle = new Rectangle({
            width: 600,
            height: 30,
            color: this.color,
        })
        this.pos = new Vector(300, 100)
        this.anchor = new Vector(0, 0)
        this.graphics.use(this.healthrectangle)
    }

    onPreUpdate(_engine, _delta) {
        if (this.healthrectangle.width >= 300){
            this.color = Color.Green
        }
        if (this.healthrectangle.width <= 300) {
            this.color = Color.Orange
        }
        if (this.healthrectangle.width <= 150) {
            this.color = Color.Red
        }
    }

    decreaseHealthBar(damage) {
        const currentWidth = this.healthrectangle.width;
        const newWidth = currentWidth - damage;
        this.healthrectangle.width = clamp(newWidth, 0, 600); // Zorg ervoor dat de breedte binnen de geldige grenzen blijft

        if (this.healthrectangle.width <= 0) {
            console.log("game over");
        }
    }


    // resetHealth(){
    //     this.timerectangle.width = 165
    // }
    //
    // loseHealth(damage) {
    //     this.healthrectangle.width = this.healthrectangle.width - damage
    //
    //     if (this.healthrectangle.width <= 0) {
    //         console.log("game over")
    //     }
    // }
}