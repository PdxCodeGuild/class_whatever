let clock_output = document.getElementById('clock_output')
let start_button = document.getElementById('start_button');
let lap_button = document.getElementById('lap_button');
let lap_time_div = document.getElementById('lap_time_div');

start_button.onclick = function() {
    let time = new Date();
    time.setHours(0, 0, 0, 0)
    let i = 0, 
    h = '',
    m = '',
    s = '';
    setInterval(function() {
        time.setHours(0, 0, i, 0)
        i = i + 1;
        h = (time.getHours() < 10) ? '0' + time.getHours().toString() : time.getHours().toString();
        m = (time.getMinutes() < 10) ? '0' + time.getMinutes().toString() : time.getMinutes().toString();
        s = (time.getSeconds() < 10) ? '0' + time.getSeconds().toString() : time.getSeconds().toString();
        clock_output.innerText = `${h}:${m}:${s}`
    }, 1000);

    lap_button.onclick = function() {
        let lap_time_p = document.createElement('p');
        lap_time_p.innerText = `${h}:${m}:${s}`
        lap_time_div.prepend(lap_time_p)
    }
}