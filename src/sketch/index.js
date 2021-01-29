export default function sketch(p5) {
    const width = 500
    const height = 500

    p5.setup = () => {
        p5.createCanvas(width, height)
    }

    p5.draw = () => {
        p5.background(p5.color(255, 255, 255))
    }
}
