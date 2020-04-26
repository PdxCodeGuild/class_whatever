let milliseconds = 0, seconds = 0, minutes = 0;
let timer;

let stopwatchElement = document.querySelector('.stopwatch');
let cyclesContainer = document.querySelector('.cycles')

function getTimer() {
    return (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + ":" + 
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function begin() {
    if(!timer) {
    timer = setInterval(run, 10);
    }
    
}

function run() {
    stopwatchElement.textContent = getTimer();
    milliseconds++;
    if(milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }

}

function halt() {
   stopTimer();

function cease() {
    minutes = 0
    seconds = 0
    milliseconds = 0
    stopwatchElement.textContent = getTimer();
}

function renew() {
    cease();
    begin();
}

function cycle() {
    if(timer) {
        let li = document.createElement("li");
        li.innerText = getTimer();
        cyclesContainer.appendChild(li);

    }
}

function resetCycles() {
    cyclesContainer.innerHTML = '';
    }

}
