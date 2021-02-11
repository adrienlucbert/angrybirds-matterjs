import Ball from './Ball.js'

export default class Bird extends Ball
{
    constructor(world, x, y, image) {
        super(world, x, y, 25)
        this.image = image
    }

    draw(p5) {
        const pos = this.body.position

        p5.push()
        p5.translate(pos.x, pos.y)
        p5.image(this.image, -this.r, -this.r, this.r * 2, this.r * 2)
        p5.pop()
    }
}
