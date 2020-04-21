// Version 2 (same as version 1, but the step and collide functions are slightly modified)

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const WIDTH = 500;
const HEIGHT = 500;
const GRAVITY = 0.49;
const FRICTION = 0.99;


function randomColor() {
    return ["red", "green", "blue", "magenta", "yellow", "cyan"][Math.floor(Math.random()*6)];
}


class Ball {
    constructor(radius) {
        this.radius = radius;
        this.color = randomColor();
        this.px = Math.random()*(WIDTH-radius)+radius;
        this.py = Math.random()*(HEIGHT-radius)+radius;
        this.vx = (2*Math.random()-1)*10;
        this.vy = (2*Math.random()-1)*10;
    }

    draw() {
        context.beginPath();
        context.arc(this.px, this.py, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
    }

    step() {
        this.px += this.vx;
        this.vy += GRAVITY; // acceleration must come before repositioning, as otherwise an odd edge case where the ball could get stuck at the top appeared
        // actually, acceleration before reposition seems to have fixed a few odd behaviors
        this.py += this.vy;
    }

    collide() {
        let did_collide = false;
        if(this.px < this.radius) {
            this.px = this.radius;
            this.vx *= -1;
            did_collide = true;
        } else if(this.px > (WIDTH-this.radius)) {
            this.px = WIDTH - this.radius;
            this.vx *= -1;
            did_collide = true;
        }

        if(this.py < this.radius) {
            this.py = this.radius;
            this.vy *= -1;
            did_collide = true;
        } else if(this.py > (HEIGHT-this.radius)) {
            this.py = HEIGHT - this.radius;
            this.vy *= -1;
            did_collide = true;
        }

        if(did_collide) { //any collision means both dimensions of velocity are affected by friction
            this.vx *= FRICTION;
            this.vy *= FRICTION;
        }
    }
}

let ball = new Ball(12);

function clearCanvas() {
    context.fillStyle = "white";
    context.clearRect(0, 0, WIDTH, HEIGHT);
}

function main_loop() {
    ball.step();
    ball.collide();
    clearCanvas();
    ball.draw();
    window.requestAnimationFrame(main_loop);
}
window.requestAnimationFrame(main_loop);