// Version 1
const v1_output = document.getElementById("current");

let interval_current = setInterval(function() {
    v1_output.innerText = (new Date()).toString().split(" ").slice(0, 5).join(" ");
}, 1000);


// Version 2
const total_time_out = document.getElementById("total_time");
const lap_list_out = document.getElementById("laps");
const start_button = document.getElementById("start_timer");
const stop_button = document.getElementById("stop_timer");

let stopwatch_state = 0; //0 for stopped, 1 for started
let total_time = new Date(0, 0, 0, 0, 0, 0, 0);
let lap_time = new Date(0, 0, 0, 0, 0, 0, 0);
let laps = 1;

let interval = 0;

let display_time = function(time) {
    return time.toString().split(" ")[4];
}

start_button.addEventListener("click", function(){
    if(stopwatch_state === 0){ //START
        interval = setInterval(function(){
            total_time.setSeconds(total_time.getSeconds() + 1);
            lap_time.setSeconds(lap_time.getSeconds() + 1);
            total_time_out.innerText = display_time(total_time);
            stopwatch_state = 1;

            start_button.value = "Split";
            stop_button.value = "Stop";
        }, 1000);
    } else { //SPLIT
        let temp = document.createElement("li");
        temp.innerText = `Lap ${laps++}: ` + display_time(lap_time);
        lap_list_out.appendChild(temp);
        lap_time = new Date(0,0,0,0,0,0,0);
    }
});

stop_button.addEventListener("click", function(){
    if(stopwatch_state === 1){ //STOP
        clearInterval(interval);
        stopwatch_state = 0;

        start_button.value = "Start";
        stop_button.value = "Reset";
    } else { //RESET
        total_time = new Date(0, 0, 0, 0, 0, 0, 0);
        lap_time = new Date(0, 0, 0, 0, 0, 0, 0);
        lap_list_out.innerHTML = "";
        total_time_out.innerText = "";
        laps = 1;
    }
});


// Version 3
const timer_input = document.getElementById("timer_input");
const timer_units = document.getElementById("timer_units");
const timer_button = document.getElementById("timer_button");
const timer_output = document.getElementById("timer_output");

let timer = new Date(0, 0, 0, 0, 0, 0, 0);
let timer_interval = 0;

timer_button.addEventListener("click", function(){
    if(parseInt(timer_input.value) !== 0 && !isNaN(parseInt(timer_input.value))){
        clearInterval(timer_interval);
        timer = new Date(0, 0, 0, 0, 0, 0, 0);
        if(timer_units.value === "min"){
            timer.setMinutes(parseInt(timer_input.value));
        } else if(timer_units.value === "hrs"){
            timer.setHours(parseInt(timer_input.value));
        } else {
            timer.setSeconds(parseInt(timer_input.value));
        }
        timer_interval = setInterval(function(){
            timer.setSeconds(timer.getSeconds() - 1);
            timer_output.innerText = display_time(timer);
            if(timer.getSeconds() <= 0 && timer.getMinutes() <= 0 && timer.getHours() <= 0 ){
                clearInterval(timer_interval);
                alert("TIME'S UP");
            }
        }, 1000);
    }
});

// Version 3 Display & Version 4
const button_v1 = document.getElementById("button_v1");
const button_v2 = document.getElementById("button_v2");
const button_v3 = document.getElementById("button_v3");

const div_v1 = document.getElementById("v1");
const div_v2 = document.getElementById("v2");
const div_v3 = document.getElementById("v3");

let current_div = 1;
let anime_counter = 0;
let anime_interval = 0;

let anime = function(what){
    what.style.display = "block";
    what.style.opacity = "0";
    anime_interval = setInterval(function(){
        if(++anime_counter < 10){
            what.style.opacity = String(anime_counter/10);
        } else {
            anime_counter = 0;
            clearInterval(anime_interval);
        }
    }, 32);
}

button_v1.addEventListener("click", function(){
    if(current_div !== 1){
        div_v2.style.display = "none";
        div_v3.style.display = "none";
        current_div = 1;
        anime(div_v1);
    }
});

button_v2.addEventListener("click", function(){
    if(current_div !== 2){
        div_v1.style.display = "none";
        div_v3.style.display = "none";
        current_div = 2;
        anime(div_v2);
    }
});

button_v3.addEventListener("click", function(){
    if(current_div !== 3){
        div_v1.style.display = "none";
        div_v2.style.display = "none";
        current_div = 3;
        anime(div_v3);
    }
});