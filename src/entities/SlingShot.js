import { Constraint } from 'matter-js'
import Entity from './Entity.js'

export default class SlingShot extends Entity
{
    constructor(world, x, y, body = null) {
        super(world, Constraint.create({
            pointA: { x, y },
            bodyB: body,
            stiffness: 0.2,
            length: 40
        }))
    }

    draw(p5) {
        if (this.body.bodyB != null) {
            const pointA = this.body.pointA
            const pointB = this.body.bodyB.position

            p5.push()
            p5.stroke(0)
            p5.line(pointA.x, pointA.y, pointB.x, pointB.y)
            p5.pop()
        }
    }

    attach(body) {
        this.body.bodyB = body
    }

    detach() {
        const body = this.body.bodyB
        this.body.bodyB = null
        return body
    }
}
