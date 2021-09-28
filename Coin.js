class Coin {
    constructor({x, y}, size) {
        this.x = x,
        this.y = y,
        this.size = size
        this.images = []
        this.imageCounter = 0
        this.speed = Math.random()
    }

    render() {
        image(this.images[Math.floor(this.imageCounter)], this.x, this.y, this.size, this.size)
    }

    update() {
        if (this.imageCounter < this.images.length - 1) {
            this.imageCounter += this.speed
        } else {
            this.imageCounter = 0
        }
    }
}