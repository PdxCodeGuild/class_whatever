// ## Version 3 (optional)
// Next make a countdown timer. The countdown timer should have a text input for the time, and a drop-down list for the units (seconds, minutes, hours). Set an interval which will start a `date` at the given time, and decrement the seconds each second. The countdown timer should alert the user when it's finished (using an `alert("time's up")` or changing the background color, etc).
// There should be controls on the page to switch between the clock, stopwatch, and countdown timer (hint: `display:none` or `$('#the_div').hide() and .show()` if using jQuery).
// ## Version 4 (optional)
// Use animations when switching between the clock, stopwatch, and countdown timer (slide in/out, fade in/out).
//version 3
let time_input = document.getElementById('time_input');
let unit_selector = document.getElementById('unit_selector');
let begin_button = document.getElementById('begin_button');

begin_button.onclick = function() {
    console.log(time_input.value)
    console.log(unit_selector.value)
}