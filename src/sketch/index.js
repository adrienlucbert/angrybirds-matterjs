import { Engine, MouseConstraint, World, Bodies } from 'matter-js'
import Box from '../entities/Box.js'
import Wall from '../entities/Wall.js'
import Ball from '../entities/Ball.js'

export default function sketch(p5) {
    const width = 1500
    const height = 800

    const engine = Engine.create()
    const world = engine.world

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
        p5.createCanvas(width, height)
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Wall(world, width / 2, height - 50, width, 50))
        entities.push(new Ball(world, width / 2 - 200, height - 200, 25))
    }

    p5.draw = () => {
        p5.background(p5.color(255, 255, 255))
        for (let entity of entities) {
            entity.draw(p5)
        }
        Engine.update(engine)
    }
}
