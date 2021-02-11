import { Bodies } from 'matter-js'
import Entity from './Entity.js'

export default class Box extends Entity
{
    constructor(world, x, y, w, h, image = null) {
        super(world, Bodies.rectangle(x, y, w, h, {}))
        this.w = w
        this.h = h
        this.image = image
    }

    draw(p5) {
        const pos = this.body.position
        const angle = this.body.angle

        p5.push()
        p5.translate(pos.x, pos.y)
        p5.rotate(angle)
        if (this.image != null) {
            p5.image(this.image, -this.w / 2, -this.w / 2, this.w, this.h)
        } else {
            p5.fill(255)
            p5.rectMode(p5.CENTER)
            p5.rect(0, 0, this.w, this.h)
        }
        p5.pop()
    }
}
