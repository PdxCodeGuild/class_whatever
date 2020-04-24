<canvas id="Bucephalus" width="1000" height="500"></canvas> 

// declare variables
const FPS = 30;
var bs = 30;
var bx, by;
var xv, yv;
var canvas, context;

// load canvas
canvas = document.getElementById("Bucephalus");
context = canvas.getContext("2d");

// set up interval (game loop)
setInterval(update, 1000 / FPS);

// ball starting position
bx = canvas.width / 2;
by = canvas.height / 2;

// random ball starting speed (between 25 and 100 pps)
xv = Math.floor(Math.random() * 76 + 25) / FPS;
yv = Math.floor(Math.random() * 76 + 25) / FPS;

// random ball direction
if (Math.floor(Math.random() * 2) == 0) {
    xv = -xv;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv = -yv;
}

// update function
function update() {
    // move the ball
    bx += xv;
    by += yv;
    
    // bounce the ball off each wall
    if (bx - bs / 2 < 0 && xv < 0) {
        xv = -xv;
    }
    if (bx + bs / 2 > canvas.width && xv > 0) {
        xv = -xv;
    }
    if (by - bs / 2 < 0 && yv < 0) {
        yv = -yv;
    }
    if (by + bs / 2 > canvas.height && yv > 0) {
        yv = -yv;
    }
    
    // draw background and ball
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
}

//     let content = document.getElementById("Bucephalus");
//     let x=content.getContext("2d");
//     x.clearRect(0,0,content.width,content.height);

//     cx = cx + dx;
//     cy = cy + dy;
//     x.begin();
//     x.arc(cx,cy,radius,0,Math.PI*2,false);
//     x.stroke();
//     x.fillStyle = "red";
//     }

// function animate();
//     {
//     clearInterval(animation);
//     setInterval(ball,50);
//     }
