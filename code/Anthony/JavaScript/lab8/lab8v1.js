let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let ball = {
    radius: 25,
    px: Math.random()*canvas.width,
    py: Math.random()*canvas.height,
    vx: (2*Math.random()-1)*10,
    vy: (2*Math.random()-1)*10
};
        
        
     
        
        

        function main_loop() {
   ctx.clearRect(0, 0, 500, 500); 

            if (ball.px - ball.radius <0 && ball.vx < 0){
                ball.vx=-ball.vx;
            }
            if (ball.px + ball.radius >canvas.width && ball.vx> 0){
                ball.vx=-ball.vx;
            }
            if (ball.py - ball.radius <0 && ball.vy < 0){
                ball.vy=-ball.vy;
            }
            if (ball.py + ball.radius >canvas.height && ball.vy> 0){
                ball.vy=-ball.vy;
            }
      

            ball.px += ball.vx;
            ball.py += ball.vy;
                   ctx.beginPath();
ctx.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
            window.requestAnimationFrame(main_loop);
        }
window.requestAnimationFrame(main_loop);


        setInterval(DrawMe, 10);