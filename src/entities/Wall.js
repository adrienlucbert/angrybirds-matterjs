import Box from './Box.js'

export default class Wall extends Box
{
    constructor(world, x, y, w, h) {
        super(world, x, y, w, h)
        this.body.isStatic = true
    }
}
