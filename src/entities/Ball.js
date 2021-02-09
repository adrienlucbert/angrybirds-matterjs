import { Bodies } from 'matter-js'
import Entity from './Entity.js'

export default class Ball extends Entity
{
    constructor(world, x, y, r) {
        super(world, Bodies.circle(x, y, r, {}))
        this.r = r
    }

    draw(p5) {
        const pos = this.body.position

        p5.push()
        p5.translate(pos.x, pos.y)
        p5.fill(255)
        p5.ellipseMode(p5.CENTER)
        p5.circle(0, 0, this.r * 2)
        p5.pop()
    }
}
