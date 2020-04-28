// Make a clock that displays the current time and updates every second. Check out JavaScript timing events and dates. Writing new Date() creates a date with the current date and time. You can then create a string from that date, and set it in the DOM.

// Version 2:
// Next make a stopwatch. Start with a button that says 'start'. You can then create a date to keep track of the time, and use setHours(0,0,0,0). This function will set the date's time to 0 hours, 0 minutes, 0 seconds, and 0 milliseconds. Then set an interval to add 1 to the seconds of that date every second, and show the time in an html element. Add a 'lap' button which takes takes the current time and shows it in a separate list. E.g.:
// -Lap 1: 00:01:03
// -Lap 2: 00:02:34
// -Lap 3: 00:04:21


// Digital Clock

let clock_output = document.getElementById("clock_output");
let stopwatch = document.getElementById("stopwatch");


// append clock to output
getDate or setDate
new Date()
setInterval(Date, 1000)


// append stopwatch to output