import { Engine, Mouse, MouseConstraint, World, Bodies } from 'matter-js'
import Box from '../entities/Box.js'
import Wall from '../entities/Wall.js'
import Bird from '../entities/Bird.js'
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

    let birdsSpriteSheet = null
    let birdSpriteSheet = null

    p5.preload = () => {
        birdsSpriteSheet = p5.loadImage('assets/birds.png', img => {
            birdSpriteSheet = img.get(42.5, 1215, 363, 65)
        })
    }

    p5.setup = () => {
        canvas = p5.createCanvas(width, height)
        mouse = Mouse.create(canvas.elt)
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Box(world, width / 2, height - 200, 50, 50))
        entities.push(new Wall(world, width / 2, height - 50, width, 50))
        const bird = new Bird(world, width / 2 - 200, height - 200, birdSpriteSheet.get(0, 0, 75, 65))
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
        p5.background(p5.color(225, 225, 225))
        for (let entity of entities) {
            entity.draw(p5)
        }
        Engine.update(engine)
    }
}
