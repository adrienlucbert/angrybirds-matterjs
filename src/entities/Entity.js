import { World } from 'matter-js'

export default class Entity
{
    constructor(world, body) {
        this.body = body
        World.add(world, body)
    }

    draw(p5) {
        throw new Error('Not implemented')
    }
}
