let milliseconds = 0, seconds = 0, minutes = 0;

let timer;

    //reference
    //var setTime = setTimeout( function ( ) { 
    // javascript statements }, 500 ); Or var setTime = setTimeout( "setTimeFunction( )", 500 );

let stopwatchElement = document.querySelector('.stopwatch');

//reference
//var clear; function stopWatch( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } Or function stopWatch( ) { // javascript statement here clear = setTimeout( function ( ) { // javascript statement here }, 1000 ); } Or var stopWatch = function ( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); }

let cyclesContainer = document.querySelector('.cycles')

function getTimer() {
    return (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + ":" + 
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    //reference
    //1000ms = 1s Yms = Xs if 1000ms = 1s 300ms = Xs #cross multiplying 1000ms * Xs = 300ms * 1s X * 1000 = 300 * 1 1000X = 300 X = 300 / 1000 X = 0.3s
}

//reference
//var startTimerButton = document.querySelector('.startTimer');
//var pauseTimerButton = document.querySelector('.pauseTimer');
//var timerDisplay = document.querySelector('.timer');
//var startTime;
//var updatedTime;
//var difference;
//var tInterval;
//var savedTime;
//var paused = 0;
//var running = 0;

function stopTimer() {
    clearInterval(timer);
    timer = false;
    //reference
    //clearTimeout( return ID of setTimeout() );
}

function begin() {
    if(!timer) {
    timer = setInterval(run, 10);
    }

    //reference
    //function pauseTimer(){
      //  if (!difference){
          // if timer never started, don't allow pause button to do anything
        //} else if (!paused) {
          //clearInterval(tInterval);
          //savedTime = difference;
          //paused = 1;
          //running = 0;
    
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

//reference
//function resetTimer(){
//    clearInterval(tInterval);
//    savedTime = 0;
//    difference = 0;
//    paused = 0;
//    running = 0;

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
