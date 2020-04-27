let canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        
        
         let gravity = 0.9;
        let friction = 0.99;
        let bounce = 0.8;
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
                
                 ball.vy *= -bounce;
                
                 if(ball.vy<0 && ball.vy>-2.1)
                         ball.vy=0;
                
                if(Math.abs(ball.vx)<1.1)
                 ball.vx=0;
       
             xF();
             
            }
      

            ball.px += ball.vx;
            ball.py += ball.vy;
            ball.vy += gravity;
          
          
        
            
                   ctx.beginPath();
ctx.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
            window.requestAnimationFrame(main_loop);
        }
window.requestAnimationFrame(main_loop);

        setInterval(DrawMe, 10);

    function xF(){
        if(ball.vx>0)
            ball.vx = ball.vx - friction;
        if(ball.vx<0)
            ball.vx = ball.vx + friction;
        if(ball.vy>0)
            ball.vy = ball.vy - friction;
        if(ball.vy<0)
            ball.vy = ball.vy + friction;
    }