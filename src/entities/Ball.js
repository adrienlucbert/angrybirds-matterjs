import { Bodies } from 'matter-js'
import Entity from './Entity.js'

export default class Ball extends Entity
{
    constructor(world, x, y, r, image = null) {
        super(world, Bodies.circle(x, y, r, {}))
        this.image = image
        this.r = r
    }

    draw(p5) {
        const pos = this.body.position
        const angle = this.body.angle

        p5.push()
        p5.translate(pos.x, pos.y)
        p5.rotate(angle)
        if (this.image != null) {
            p5.image(this.image, -this.r, -this.r, this.r * 2, this.r * 2)
        } else {
            p5.fill(255)
            p5.ellipseMode(p5.CENTER)
            p5.circle(0, 0, this.r * 2)
        }
        p5.pop()
    }
}
