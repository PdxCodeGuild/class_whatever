// Digital Clock

let clock_output = document.getElementById("clock_output");
// let stopwatch = document.getElementById("stopwatch");


function currentTime() {
  let today = new Date()
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let meridiem = "AM";
  // AM vs PM
  if (hour >= 12) {
    meridiem = "PM";
  }
  if (hour === 0) {
    hour = 12;   // to fix 12am
  }
  if (hour > 12) {
    hour = hour - 12;   // to not be military time
  }
  // to always have double digits for hour:min:sec
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  
  clock_output.innerText = hour + ":" + min + ":" + sec + " " + meridiem;
  // let time = setTimeout(currentTime, 1000);
  setTimeout(currentTime, 1000);
}

currentTime()


// Version 2:
// Next make a stopwatch. Start with a button that says 'start'. You can then create a date to keep track of the time, and use setHours(0,0,0,0). This function will set the date's time to 0 hours, 0 minutes, 0 seconds, and 0 milliseconds. Then set an interval to add 1 to the seconds of that date every second, and show the time in an html element. Add a 'lap' button which takes takes the current time and shows it in a separate list. E.g.:
// -Lap 1: 00:01:03
// -Lap 2: 00:02:34
// -Lap 3: 00:04:21

const stopwatch = document.getElementById("stopwatch");
const lap = document.getElementById("lap");
const start_btn = document.getElementById("start_btn");
const lap_btn = document.getElementById("lap_btn");
const stop_btn = document.getElementById("stop_btn");


// create a date to keep track of the time, and use setHours(0,0,0,0). This function will set the date's time to 0 hours, 0 minutes, 0 seconds, and 0 milliseconds

// set an interval to add 1 to the seconds of that date every second, and show the time in an html element
// setInterval(Date, 1000)





// let secs = 1;

// function stopWatch() {
//   // let day = Math.floor(secs/24/60/60);
//   // let hoursRemain = Math.floor((secs) - (day*86400));
//   let hoursRemain = Math.floor(secs);
//   let hours = Math.floor(hoursRemain/3600);
//   let minRemain = Math.floor((hoursRemain) - (hours*3600));
//   let mins = Math.floor(minRemain/60);
//   let secRemain = secs % 60;
//   // function pad(n) {
//   //   return (n < 10 ? "0" + n : n);
//   // }
//   // document.getElementById('stopwatch').innerHTML =pad(hours) + ":" + pad(mins) + ":" + pad(secRemain);
//   // if (secs === 0) {
//   //   // clearInterval(countdownTimer);
//   //   document.getElementById('stopwatch').innerHTML = "Completed";
//   // } else {
//   //   secs++;
//   // }
// }
// // let countdown = setInterval('stopwatch()', 1000);

let hrs = 0;
let mins = 0;
let secs = 0;
let millisec = 0;
let timer;

start_btn.addEventListener("click", function() {
  if (!timer) {  // to not speed start btn when running
    timer = setInterval(go, 10); // 10 because millisec
  }
})
function go() {
  // stopwatch.innerText = hrs + ":" + mins + ":" + secs + ":" + millisec;
  stopwatch.innerText = (hrs < 10 ? "0" + hrs : hrs) + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs) + ":" + (millisec < 10 ? "0" + millisec : millisec); // double digits
  // // to always have double digits for mins:secs:millisec
  // if (hrs < 10) {
  //   hrs = "0" + hrs;
  // }
  // if (mins < 10) {
  //   mins = "0" + mins;
  // }
  // if (secs < 10) {
  //   secs = "0" + secs;
  // }
  // if (millisec < 10) {
  //   millisec = "0" + millisec;
  // }
  millisec ++;
  if (millisec === 100) {
    millisec = 0;
    secs++;
  }
  if (secs === 60) {
    secs = 0;
    mins++;
  }
  if (mins === 60) {
    mins = 0;
    hrs++;
  }
  // stopwatch.innerText = hrs + ":" + mins + ":" + secs + ":" + millisec;
}
stop_btn.addEventListener("click", function() {
  clearInterval(timer);
  timer = false;
  hrs = 0;
  mins = 0;
  secs = 0;
  millisec = 0;
  stopwatch.innerText = (hrs < 10 ? "0" + hrs : hrs) + (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs) + ":" + (millisec < 10 ? "0" + millisec : millisec);
})

// lap_btn.addEventListener("click", function() {})