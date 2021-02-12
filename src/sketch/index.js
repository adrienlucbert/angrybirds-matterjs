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
    let canvas 
    let mouse 

    let entities = []

    let birdsSpriteSheet 
    let birdSpriteSheet 
    let boxesSpriteSheet
    let boxImage
    let backgroundImage

    let bird 
    let slingshot 
    let mouseConstraint 

    p5.preload = () => {
        backgroundImage = p5.loadImage('assets/background.png')
        birdsSpriteSheet = p5.loadImage('assets/birds.png', img => {
            birdSpriteSheet = img.get(42.5, 1215, 363, 65)
        })
        boxesSpriteSheet = p5.loadImage('assets/blocks.png', img => {
            boxImage = img.get(340, 534, 81, 81)
        })
    }

    p5.setup = () => {
        canvas = p5.createCanvas(width, height)
        mouse = Mouse.create(canvas.elt)

        // world bounds
        entities.push(new Wall(world, -25, height / 2, 50, height))
        entities.push(new Wall(world, width + 25, height / 2, 50, height))
        entities.push(new Wall(world, width / 2, -25, width, 50))
        entities.push(new Wall(world, width / 2, height, width, 50))

        // player and slingshot
        bird = new Bird(world, 250, height - 150, birdSpriteSheet.get(0, 0, 75, 65))
        entities.push(bird)
        slingshot = new SlingShot(world, 250, height - 150, bird.body)
        entities.push(slingshot)
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            body: bird
        })
        World.add(world, mouseConstraint)

        // boxes
        entities.push(new Box(world, width / 2 + 150, height - 50, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 150, height - 100, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 150, height - 150, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 150, height - 200, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 300, height - 50, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 300, height - 100, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 300, height - 150, 50, 50, boxImage))
        entities.push(new Box(world, width / 2 + 300, height - 200, 50, 50, boxImage))
    }

    p5.mouseReleased = () => {
        setTimeout(() => {
            slingshot.detach()
        }, 20)
    }

    p5.draw = () => {
        p5.background(p5.color(225, 225, 225))
        p5.background(backgroundImage)
        for (let entity of entities) {
            entity.draw(p5)
        }
        Engine.update(engine)
    }
}
