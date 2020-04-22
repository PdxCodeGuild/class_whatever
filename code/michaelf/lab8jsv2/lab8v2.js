let canvas=document.getElementById('canvas')
let ctx=canvas.getContext('2d')

let ball = {
    radius: 20,
    px: Math.random()*500,
    py: Math.random()*500,
    vx: (2*Math.random()-1)*10,
    vy: (2*Math.random()-1)*10,
}

ctx.beginPath();
ctx.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'black';
ctx.fill();

function main_loop() {
    ctx.clearRect(0,0,500,500)
    ball.px+=ball.vx
    ball.py+=ball.vy
    if (ball.px-20 < 0){
        ball.vx=-ball.vx*.99
        ball.vy=ball.vy*.99
    }
    if (ball.px+20 > 500){
        ball.vx=-ball.vx*.99
        ball.vy=ball.vy*.99
    }
    if (ball.py-20 < 0){
        ball.vy=-ball.vy*.99
        ball.vx=ball.vx*.99
    }    
    if (ball.py+20 > 500){
        ball.vy=-ball.vy*.99
        ball.vx=ball.vx*.99
    }
    ball.vy+=.5
    ctx.beginPath();
    ctx.arc(ball.px, ball.py, ball.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    window.requestAnimationFrame(main_loop);
}
window.requestAnimationFrame(main_loop);