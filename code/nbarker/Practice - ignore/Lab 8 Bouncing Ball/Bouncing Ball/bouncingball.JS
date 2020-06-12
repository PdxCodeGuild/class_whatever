let canvas = document.querySelector('canvas')
    ;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
let gravity = 3;
let friction = .999;

//practice
//rectangle
// c.fillStyle = 'rgba( 55, 225, 99, .3)';
// c.fillRect(100, 200, 100, 100);
// c.fillStyle = 'rgba( 125, 205, 5, .3)';
// c.fillRect(200, 300, 100, 100);
// c.fillStyle = 'rgba( 32, 89, 225, .3)';
// c.fillRect(300, 400, 100, 100);
// c.fillStyle = 'rgba( 155, 55, 155, .3)';
// c.fillRect(400, 500, 100, 100);
// c.fillStyle = 'rgba( 255, 255, 0, .3)';
// c.fillRect(500, 600, 100, 100);
// c.fillStyle = 'rgba( 255, 0, 255, .3)';
// console.log(canvas);

//Line
// c.beginPath();
// c.moveTo(100, 200);
// c.lineTo(500, 600);
// c.strokeStyle = "#fa34a2";
// c.stroke();

//arc lots of arguments!
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

//random circles!
// for (var i = 0; i < 200; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2, false);
//     c.strokeStyle='blue';
//     c.stroke();

// }

//let's create a javascript object!
//each will have:
//it's OWN x and y value
// it's OWN direction, velocity, etc.


function Circle(x, y) {
    this.x = x;
    this.y = y; //still need to draw!

    this.draw = function() {
        //draw the circle when this is called
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }
}

let circle = new Circle(200, 200);


let x = Math.random() * innerWidth; //x value
let y = 100; //x value, don't need random lol, it's super boring when it starts on the ground 
let dx = (Math.random() - .5) * 5;  //starting speed x direction
let dy = (Math.random() - .5) * 5; //starting speed y direction
let radius = 50;

function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight
        ); //clear the canvas, for the entire view window, every.single.time
        
    circle.draw();

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
        
    if (x + radius > innerWidth || x - radius < 0){ //OR //||
        dx = -dx; //reverse velocity!
        radius -= .55; //made it shrink on the x axis, so awesome
    } 
    x += dx;
    
    if (y + radius > innerHeight || y - radius < 0){ //OR //||
        dy = -dy * friction; //reverse velocity!
        //radius += .25; //and get bigger on the y! this was hilarious
    } else{dy += gravity}
        y += dy;
    
    }

animate();