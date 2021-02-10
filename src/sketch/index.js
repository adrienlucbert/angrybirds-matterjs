import { Engine, Mouse, MouseConstraint, World, Bodies } from 'matter-js'
import Box from '../entities/Box.js'
import Wall from '../entities/Wall.js'
import Ball from '../entities/Ball.js'
import SlingShot from '../entities/SlingShot.js'

export default function sketch(p5) {
    const width = 1500
    const height = 800

    const engine = Engine.create()
    const world = engine.world
    let canvas = null
    let mouse = null

    world.bounds = {
        min: {
            x: 0,
            y: 0
        },
        max: {
            x: width,
            y: height
        }
    }

    let entities = []

    p5.setup = () => {
        canvas = p5.createCanvas(width, height)
        mouse = Mouse.create(canvas.elt)
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Wall(world, width / 2, height - 50, width, 50))
        const bird = new Ball(world, width / 2 - 200, height - 200, 25)
        entities.push(bird)
        const slingshot = new SlingShot(world, width / 2 - 150, height - 200, bird.body)
        entities.push(slingshot)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            body: bird
        })
        World.add(world, mouseConstraint)
    }

    p5.draw = () => {
        p5.background(p5.color(255, 255, 255))
        for (let entity of entities) {
            entity.draw(p5)
        }
        Engine.update(engine)
    }
}
