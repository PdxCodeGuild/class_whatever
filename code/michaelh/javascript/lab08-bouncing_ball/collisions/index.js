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
    } get theta(){
        return this.calcTheta()
    } calcTheta(){
        return Math.atan2(this.vy, this.vx)
    } get v(){
        return this.calcV()
    } calcV(){
        return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
    }
}

function calcPhi(a, b){
    let dx = a.px - b.px;
    let dy = a.py - b.py;
    if(dx === 0){
        return Math.PI/2
    } else{
        Math.atan(dy/dx)
    }
}

let ball_1 = new Ball()
let ball_2 = new Ball()

ctx.beginPath();
ctx.arc(ball_1.px, ball_1.py, ball_1.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.arc(ball_2.px, ball_2.py, ball_2.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'blue';
ctx.fill();

// ball_1.px = 100
// ball_1.py = 100
// ball_2.px = 200
// ball_2.py = 100
// ball_1.vx = 1
// ball_1.vy = 0
// ball_2.vx = -1
// ball_2.vy = 0

// ball_1.radius = 20
// ball_2.radius = 0.2727 * ball_1.radius 
// ball_2.mass = 0.0123 * ball_1.mass
// ball_1.vx = 0
// ball_1.vy = 0
// ball_1.px = width/2
// ball_1.py = height/2
// ball_2.px = 100
// ball_2.py = 0

let distance = 0,
dx = 0,
dy = 0,
phi = 0,
v1xr = 0,
v2xr = 0,
v1xrf = 0,
v2xrf = 0,
v1fyr = 0,
v2fyr = 0;
function main_loop() {
    ball_1.px = ball_1.px + ball_1.vx
    ball_1.py = ball_1.py + ball_1.vy
    // ball_1.vy = ball_1.vy + 1

    ball_2.px = ball_2.px + ball_2.vx
    ball_2.py = ball_2.py + ball_2.vy
    // ball_2.vy = ball_2.vy + 1 

    if (ball_1.px <= ball_1.radius || ball_1.px >= width - ball_1.radius) {
        ball_1.vx = -ball_1.vx
        // ball_1.vx = 0.99*ball_1.vx
    }if (ball_1.py <= ball_1.radius || ball_1.py >= width - ball_1.radius) {
        ball_1.vy = -ball_1.vy 
        // ball_1.vy = 0.99*ball_1.vy        
    }if (ball_2.px <= ball_2.radius || ball_2.px >= width - ball_2.radius) {
        ball_2.vx = -ball_2.vx
        // ball_2.vx = 0.99*ball_2.vx
    }if (ball_2.py <= ball_2.radius || ball_2.py >= width - ball_2.radius) {
        ball_2.vy = -ball_2.vy 
        // ball_2.vy = 0.99*ball_2.vy        
    }

    if(ball_1.px + ball_1.radius > ball_2.px - ball_2.radius || ball_1.px - ball_1.radius > ball_2.px + ball_2.radius || ball_1.py + ball_1.radius > ball_2.py - ball_2.radius || ball_1.py - ball_1.radius > ball_2.py + ball_2.radius){
        distance = Math.sqrt(Math.pow(ball_1.px - ball_2.px, 2) + Math.pow(ball_1.py - ball_2.py, 2))        
        if(distance < ball_1.radius + ball_2.radius){
            dx = ball_1.px - ball_2.px;
            dy = ball_1.py - ball_2.py;
            if(dx === 0){
                return Math.PI/2
            } else{
                Math.atan(dy/dx)
            }
            v1xr = ball_1.v * Math.cos(ball_1.theta - phi)
            v1fyr = ball_1.v * Math.sin(ball_1.theta - phi)
            v2xr = ball_2.v * Math.cos(ball_2.theta - phi)
            v2fyr = ball_2.v * Math.sin(ball_2.theta - phi)
            v1fxr = ((ball_1.mass - ball_2.mass) * v1xr + 2 * ball_2.mass * v2xr) / (ball_1.mass + ball_2.mass)
            v2fxr = ((ball_2.mass - ball_1.mass) * v2xr + 2 * ball_1.mass * v1xr) / (ball_1.mass + ball_2.mass)
            ball_1.vx = Math.cos(phi) * v1fxr + Math.cos(phi + Math.PI / 2) * v1fyr
            ball_1.vy = Math.sin(phi) * v1fxr + Math.sin(phi + Math.PI / 2) * v1fyr            
            ball_2.vx = Math.cos(phi) * v2fxr + Math.cos(phi + Math.PI / 2) * v2fyr
            ball_2.vy = Math.sin(phi) * v2fxr + Math.sin(phi + Math.PI / 2) * v2fyr      
            ball_1.px = ball_1.px + ball_1.vx
            ball_1.py = ball_1.py + ball_1.vy
            ball_2.px = ball_2.px + ball_2.vx
            ball_2.py = ball_2.py + ball_2.vy
        }
    }

    

    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(0, 0, width, height)
    window.requestAnimationFrame(main_loop);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(ball_1.px, ball_1.py, ball_1.radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(ball_2.px, ball_2.py, ball_2.radius, 0, 2 * Math.PI, false);
    ctx.fill();
}
window.requestAnimationFrame(main_loop);