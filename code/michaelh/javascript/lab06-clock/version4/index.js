let function_selector = document.getElementById('function_selector');

let clock_div = document.getElementById('clock_div');
clock_div.style.display = 'none';
let clock_output = document.getElementById('clock_output')

let stopwatch_div = document.getElementById('stopwatch_div');
stopwatch_div.style.display = 'none';
let stopwatch_output = document.getElementById('stopwatch_output')
let stopwatch_start_button = document.getElementById('stopwatch_start_button');
let lap_button = document.getElementById('lap_button');
let lap_time_div = document.getElementById('lap_time_div');

let countdown_div = document.getElementById('countdown_div');
countdown_div.style.display = 'none';
let time_input = document.getElementById('time_input');
let unit_selector = document.getElementById('unit_selector');
let countdown_start_button = document.getElementById('countdown_start_button');
let countdown_output = document.getElementById('countdown_output');

function_selector.addEventListener('change', function() {
    let function_selection = function_selector.value;
    if (function_selection === 'clock') {
        $('#clock_div').fadeIn();
        // $('#stopwatch_div').fadeOut();
        // $('#countdown_div').fadeOut();
        // clock_div.style.display = 'block';
        stopwatch_div.style.display = 'none';
        countdown_div.style.display = 'none';
        setInterval(function() {
            clock_output.innerText = new Date();
        }, 1000);
    } else if (function_selection === 'stopwatch') {
        // $('#clock_div').fadeOut();
        $('#stopwatch_div').fadeIn();
        // $('#countdown_div').fadeOut();
        clock_div.style.display = 'none';
        // stopwatch_div.style.display = 'block';
        countdown_div.style.display = 'none';
        stopwatch_start_button.onclick = function() {
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
                stopwatch_output.innerText = `${h}:${m}:${s}`
            }, 1000);
        
            lap_button.onclick = function() {
                let lap_time_p = document.createElement('p');
                lap_time_p.innerText = `${h}:${m}:${s}`
                lap_time_div.prepend(lap_time_p)
            }
        }
    } else {
        // $('#clock_div').fadeOut();
        // $('#stopwatch_div').fadeOut();
        $('#countdown_div').fadeIn();
        clock_div.style.display = 'none';
        stopwatch_div.style.display = 'none';
        // countdown_div.style.display = 'block';
        countdown_start_button.onclick = function() {
            let time_input_num = parseInt(time_input.value);
            let unit = unit_selector.value;
            let end = new Date();
            if (unit === 'h') {
                end.setHours(time_input_num, 0, 0, 0)
            } else if (unit === 'm') {
                end.setHours(0, time_input_num, 0, 0)
            } else {
                end.setHours(0, 0, time_input_num, 0)
            }
        
            let count = new Date();
            count.setHours(0, 0, 0, 0)
            let time_left = new Date();
            let i = 0,
            h = '',
            m = '',
            s = '';
            let interval = setInterval(function() {
                count.setHours(0, 0, i, 0);
                i = i + 1;
                time_left.setHours(0, 0, 0, end - count)
                h = (time_left.getHours() < 10) ? '0' + time_left.getHours().toString() : time_left.getHours().toString();
                m = (time_left.getMinutes() < 10) ? '0' + time_left.getMinutes().toString() : time_left.getMinutes().toString();
                s = (time_left.getSeconds() < 10) ? '0' + time_left.getSeconds().toString() : time_left.getSeconds().toString();
                countdown_output.innerText = `${h}:${m}:${s}`
                if (h === '00' && m === '00' && s === '00') {
                    alert('time is up')
                    clearInterval(interval);
                }
            }, 1000);
        
        }   
    } 
})