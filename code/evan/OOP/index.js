
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const GRID_RESOLUTION = 50
const CELL_SIZE = canvas.width / GRID_RESOLUTION
const INTERVAL = 100

function getRandomCoord() {
    return Math.round(Math.random() * GRID_RESOLUTION)
}

const animals = []
for (let i = 0; i < 200; i++) {
    animals.push(new Animal(getRandomCoord(), getRandomCoord()))
}

for (let i = 0; i < 50; i++) {
    animals.push(new Predator(getRandomCoord(), getRandomCoord()))
}

function draw(animals) {
    ctx.clearRect(0,0, canvas.width, canvas.height)

    animals.forEach(function(animal) {
        ctx.fillStyle = `rgb(${animal.color.r},${animal.color.g},${animal.color.b})`
        ctx.fillRect(animal.x*CELL_SIZE, animal.y*CELL_SIZE, CELL_SIZE, CELL_SIZE)
    })
}


const interval = setInterval(function() {
    draw(animals)

    animals.forEach(function(animal) {
        animal.move(animals)
    })

}, INTERVAL)