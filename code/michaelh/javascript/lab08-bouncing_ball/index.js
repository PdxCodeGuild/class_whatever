let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
let width = cnv.width;
let height = cnv.height;

class Ball {
    constructor(){
        this.mass = (2*Math.random()+1)*1000;
        this.radius = Math.pow(this.mass, 1/3);
        this.px = Math.random()*width;
        this.py = Math.random()*height;
        this.vx = (2*Math.random()-1)*10;
        this.vy = (2*Math.random()-1)*10;
        this.oldpx = [];
        this.oldpy = [];        
    } record(){
        this.oldpx.push(this.px)
        this.oldpy.push(this.py)
    } get_oldpx(){
        return this.oldpx
    } get_oldpy(){
        return this.oldpy
    }
}

let ball_1 = new Ball()
let ball_2 = new Ball()

ball_1.radius = 20
ball_1.mass = 5.9736e24
ball_2.radius = 0.2727 * ball_1.radius 
ball_2.mass = 0.0123 * ball_1.mass
ball_1.vx = 0
ball_1.vy = 0
ball_1.px = 0
ball_1.py = 0
ball_2.px = 3.85e8
ball_2.py = 0
ball_2.vx = 0
ball_2.vy = -1023

ctx.beginPath();
ctx.arc(width / 2 + (ball_1.px / 12e8) * width, height / 2 + (ball_1.py/ 12e8) * height, ball_1.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'blue';
ctx.fill();

ctx.beginPath();
ctx.arc(width / 2 + (ball_2.px / 12e8) * width, height / 2 + (ball_2.py/ 12e8) * height, ball_2.radius, 0, 2 * Math.PI, false);
ctx.strokeStyle = 'black';
ctx.stroke();

let distance = 0
let Fg = 0,
Fg1x = 0,
Fg1y = 0,
Fg2x = 0,
Fg2y = 0;

const dt = 10000,
G = 6.674e-11;


function main_loop() {
    ball_2.record()
    ball_2.px = ball_2.px + ball_2.vx * dt
    ball_2.py = ball_2.py + ball_2.vy * dt

    dx = ball_2.px - ball_1.px;
    dy = ball_2.py - ball_1.py;
    distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    Fg = G * ball_1.mass * ball_2.mass / Math.pow(distance, 2)
    theta = Math.atan2(ball_2.py, ball_2.px)
    Fg2x = -Math.cos(theta) * Fg
    Fg2y = -Math.sin(theta) * Fg

    ball_2.vx = ball_2.vx + (Fg2x / ball_2.mass) * dt
    ball_2.vy = ball_2.vy + (Fg2y / ball_2.mass) * dt

    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(0, 0, width, height)
    window.requestAnimationFrame(main_loop);

    ctx.beginPath();
    ctx.arc(width / 2 + (ball_1.px / 12e8) * width, height / 2 + (ball_1.py/ 12e8) * height, ball_1.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(width / 2 + (ball_2.px / 12e8) * width, height / 2 + (ball_2.py/ 12e8) * height, ball_2.radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    tracex = ball_2.get_oldpx()
    tracey = ball_2.get_oldpy()
    for (let i=0; i<tracex.length; i++) {
        ctx.fillStyle = 'black';
        ctx.fillRect(width / 2 + (tracex[i] / 12e8) * width, height / 2 + (tracey[i]/ 12e8) * height, 1, 1);
    }
}
window.requestAnimationFrame(main_loop);