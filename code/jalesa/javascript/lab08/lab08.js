let canvas = document.getElementById("canvas");

let draw = canvas.getContext("2d");

let ball = {
    radius: 4,
    px: Math.random()*canvas.width, //px balls location 500=wid
    py: Math.random()*canvas.height, //py balls location 500=hei
    vx: (2*Math.random()-1)*10, //balls velocity
    vy: (2*Math.random()-1)*10 //balls velocity
};





// function draw_ball() {
//     draw.beginPath();
//     draw.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, true);
//     draw.fillStyle = 'green';
//     draw.fill();
// }
// draw_ball()



// draw.fillRect(100,100,100,100);
// draw.fillRect(450,200,30,30); //width,height,locat,locat

function main_loop() {
    // ------UPDATING BALL POSITION ------
    

    // -----PUTTING BALL IN MOTION-----
    ball.px += ball.vx;
    ball.py += ball.vy;
   
    ball.vx = -1
    ball.vy = 0.1
    // ball.vy *= .99;
    // ball.vy += .5;
    

    //--- CHECK IF BALL HIT Y-AXIS AND X-AXIS BOUNDARY ----

    //two if statements merged together w a pipe ||
    if (ball.px + ball.vx > canvas.width -4 || ball.px + ball.vx < 4 ) {
        ball.vx = -ball.vx
        
        
    }

    //two if statements merged together w a pipe ||
    // if (ball.py + ball.vy > canvas.height - 4 || ball.py + ball.vy > 4) {
    //     ball.vy = -ball.vy
    //     // ball.vy *= .99; adds friction
    //     // ball.vy += .5; adds friction
    // }

    if (ball.px <= ball.radius ){
        ball.vx = -ball.vx
    }

    // ----- DRAWING THE BALL -----
    draw.beginPath();
    draw.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, true);
    draw.fillStyle = 'green';
    draw.fill(); 
         
     
    
        
    window.requestAnimationFrame(main_loop);

}

window.requestAnimationFrame(main_loop);

// function run() {
//     window.requestAnimationFrame(run);
//     main_loop()
//     draw_ball()
// }
// canvas.addEventListener("click", function(e) {
//     window.requestAnimationFrame(run)
// }) 




