import Ball from './Ball.js'

export default class Bird extends Ball
{
    constructor(world, x, y, image = null) {
        super(world, x, y, 25, image)
    }
}
