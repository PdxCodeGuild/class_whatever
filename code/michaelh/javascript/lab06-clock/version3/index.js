// ## Version 3 (optional)
// Next make a countdown timer. The countdown timer should have a text input for the time, and a drop-down list for the units (seconds, minutes, hours). Set an interval which will start a `date` at the given time, and decrement the seconds each second. The countdown timer should alert the user when it's finished (using an `alert("time's up")` or changing the background color, etc).
// There should be controls on the page to switch between the clock, stopwatch, and countdown timer (hint: `display:none` or `$('#the_div').hide() and .show()` if using jQuery).
// ## Version 4 (optional)
// Use animations when switching between the clock, stopwatch, and countdown timer (slide in/out, fade in/out).
//version 3
let time_input = document.getElementById('time_input');
let unit_selector = document.getElementById('unit_selector');
let begin_button = document.getElementById('begin_button');
let clock_output = document.getElementById('clock_output')

begin_button.onclick = function() {
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
        clock_output.innerText = `${h}:${m}:${s}`
        if (h === '00' && m === '00' && s === '00') {
            alert('time is up')
            clearInterval(interval);
        }
    }, 1000);

}