// Version 2 (same as version 1, but the step and collide functions are slightly modified)

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const WIDTH = 500;
const HEIGHT = 500;
const GRAVITY = 0.49;
const FRICTION = 0.98;
const REPEL = 0.666;

const pause_button = document.getElementById("pause");
const remove_button = document.getElementById("remove");


function randomColor() {
    return ["red", "green", "blue", "magenta", "yellow", "cyan", "orange", "purple"][Math.floor(Math.random()*8)];
}


class Ball {
    constructor(x, y) {
        this.radius = Math.random() * 8 + 12;
        this.color = randomColor();
        this.px = x > -1 ? x : Math.random()*(WIDTH-this.radius)+this.radius;
        this.py = y > -1 ? y : Math.random()*(HEIGHT-this.radius)+this.radius;
        this.vx = (2*Math.random()-1)*10;
        this.vy = (2*Math.random()-1)*10;
        this.mass = 1 //may or may not want to change this later; might as well put it in now if I do want to use it later
    }

    draw() {
        context.beginPath();
        context.arc(this.px, this.py, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
    }

    step() {
        this.px += this.vx;
        //this.vy += GRAVITY; // acceleration must come before repositioning, as otherwise an odd edge case where the ball could get stuck at the top appeared
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

    collision(ball) { //balls colliding with each other
        if (((this.px + this.radius + ball.radius) > ball.px) && (this.px < (ball.px + this.radius + ball.radius)) && ((this.py + this.radius + ball.radius) > ball.py) && (this.py < (ball.py + this.radius + ball.radius))){
            let distance = Math.sqrt(Math.pow(this.px - ball.px, 2) + Math.pow(this.py - ball.py, 2));
            if(this.radius + ball.radius >= distance){ //balls have collided
                let temp = this.vx;
                this.vx = ball.vx;
                ball.vx = temp;
                temp = this.vy;
                this.vy = ball.vy;
                ball.vy = temp; //why does this work so well? I would have imagined a bit more math going into making momentum transfers, but no; just swapping velocity works fine for some reason. ok
                if(Math.min(this.radius, ball.radius) >= distance){ //balls are way to close, add a bit of speed to get them outta there
                    this.vx += this.px > ball.px ? REPEL : -REPEL;
                    ball.vx += this.px > ball.px ? -REPEL : REPEL;
                    this.vy += this.py > ball.py ? REPEL : -REPEL;
                    ball.vy += this.py > ball.py ? -REPEL : REPEL;
                }
            }
        }
    }
}

let balls = [new Ball(-1, -1)];
let playing = true;

pause_button.onclick = function(){
    playing = !playing;
    pause.value = playing ? "Pause" : "Play";
    if(playing){
        window.requestAnimationFrame(main_loop);
    }
}

remove_button.onclick = function(){
    if(balls.length){
        balls.pop(); //remove the most recent, as that will be the hardest to click on to remove
        if(!playing){ //we should update the canvas manually if it won't automatically
            drawAll();
        }
    }
}

function remove(index){ //removes a ball from the list o balls
    let ret = [];
    for(let i = 0; i < balls.length; ++i){
        if(i !== index){
            ret.push(balls[i]);
        }
    }
    balls = ret;
}


function mouseBallCollide(x, y){ //returns index of ball mouse is over, or -1 if mouse not over a ball
    const give = 16 //it's hard to be precise, so I'm extending the clickable area
    // there seems to be more leeway given to clicks under and/or to the left; compensate
    for(let i = 0; i < balls.length; ++i){
        if(((balls[i].px + balls[i].radius + give) > x) && (balls[i].px < (x + balls[i].radius)) && ((balls[i].py + balls[i].radius + give) > y)  && (balls[i].py < (y + balls[i].radius))){
            return i;
        }
    }
    return -1;
}

canvas.onclick = function(event){
    let ball = mouseBallCollide(event.clientX, event.clientY);
    if(ball >= 0){
        remove(ball); //removes ball that was clicked on
    } else {
        balls.push(new Ball(event.clientX, event.clientY)); //places ball where clicked
    }
    if(!playing){ //we should update the canvas manually if it won't automatically
        drawAll();
    }
};

function drawAll() {
    context.fillStyle = "white";
    if(playing) {context.globalAlpha = 0.1;}
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.globalAlpha = 1;
    balls.forEach(function(ball){
        ball.draw();
    });
}

function main_loop() {
    for(let i = 0; i < balls.length; ++i){
        for(let k = i+1; k < balls.length; ++k){
            balls[i].collision(balls[k]);
        }
    }


    balls.forEach(function(ball){
        ball.step();
        ball.collide();
    });
    drawAll();

    if(playing){
        window.requestAnimationFrame(main_loop);
    }
}
window.requestAnimationFrame(main_loop);