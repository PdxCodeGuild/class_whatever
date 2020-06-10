//I know it's kind of dumb, but I'm proud of this timer!


let time = 0;
let x = setInterval(function () {
    document.getElementById("stopwatch_display").innerHTML = " " + time + " ";
    time = time + 1;
}, 1000);

function clearTime() {
    clearInterval(x)
};

function startTime() {
    location.reload();
};

function addLap() {

    let lap_time_capture = document.getElementById("stopwatch_display").innerText;
    laps.innerHTML += "<li>" + lap_time_capture + "</li>";
    // console.log(lap_time_capture);
}


// let lap_time_capture = document.getElementById("stopwatch_display").innerText;
let laps = document.getElementById('laps');





// /* setTimeout and setInterval */
// //setTimeout

// setTimeout(meow, 2000);
// //after 2000ms (or 2 seconds), run the function meow()
// console.log("ryu is the best!") //fires immediately
// //but before the meow function, console.log 'ryu is the best'
// //DO NOT FORGET THE() after the function when declaring it!
// function meow(){
//     console.log('right about meow!'); //after 2 seconds!
// }

// /*------------------------------------*/

// //you can stop the function from running after the setTimeout has been called
// //you must assign the setTimeout to a variable

// var timeoutID = setTimeout(meow, 3000);

// console.log('hello');

// clearTimeout(timeoutID); //calling clearTimeout and passing in the variable will clear the timeout (duh!) haha, this means it will always say 'hello' but it will never get to 'goodbye' because the clearTimeout method starts it over always!

// function meow(){
//     console.log('goodbye!');
// }

// /*-----------------------------------*/
// // setInterval
// //similar, you pass in a function AND milliseconds, but the program will execute the function continuously waiting the specified number of milliseconds between each function

// //timer time!
// var count = 0 //for sake of argument :-)
// var intId = setInterval(counter, 1000); //okay! we have another variable, 'intId', and a function called 'counter' which hasn't been designated yet

// function counter(){         //there's the function!
//     console.log(++count);  //everytime the function 'counter' runs, it will log the 'count' adding one each time the function is called, which is once per second, because we told it to in line 34 ;-)
// }

// function zoomAway(){
//     console.log("ZOOM!!!")
// }
///=========================================================
//make a div in your html page
//give it an id of anything you want, data or content are great names!
//THEN create a variable named anything and set it equal to the new Date() METHODMETHODMETHOD!
//i.e. <div id='data'>
//i.e. in JS select 'data' div with document.getElementbyId('data').innerHTML = d
//displays 'd' in the 'data' div! bam!
//we can convert the DATE to a STRING  with' d.toString()' throw in a console.log and we can log it, remember, only the .toString() method is doing anything!


// let d = new Date();
// console.log(typeof d.toString());
//wanna see just the date?
//document.getElementById('data').innerHTML = d.toLocaleDateString();
"document.getElementById('data').innerHTML = d.toLocale Date String();"
//returns >>>>>>> 6/7/2020

//wanna see JUST the time? no date info?
//document.getElementById('data').innerHTML = d.toLocaleTimeString();
"document.getElementById('data').innerHTML = d.toLocale Time String();"
// >>>>>>returns 5:18:17 PM

//wanna see the time with GMT and timezone, no date?
//document.getElementById('data').innerHTML = d.toTimeString();
"//document.getElementById('data').innerHTML = d.toTimeString();"
//>>>>>>returns 17: 17: 49 GMT - 0700(Pacific Daylight Time)

//wanna see the time with day of the week and date?
// document.getElementById('data').innerHTML = d.toDateString();
"//document.getElementById('data').innerHTML = d.to Date String();"
//>>>>>>returns  Sun Jun 07 2020

//------------------------------------------------------------//
//let d = new Date();
//select the element in the HTML that we want to bind to
//document.getElementById('clock_display').innerHTML = d.toLocaleTimeString();
//now we have other methods we can use on d (we added the .toLocalTimeString(); after)
//it works technically, but only shows as we REFRESH, noooooooooo!  We can make a function, put the 'd expression' in there! Yeah! 


// no time! lol call the function bro!

// okay, we have made a function that will display the time just by calling it, now we just gotta call it over and over again every second, FOR-EV-ER! 'there's a method for that!' setInterval(function, milliseconds)
// run 'displayTime' every 1000 ms or 1 second!



// function displayTime() {
//     let d = new Date();
//     // d.setHours(0,0,0,0);
//     document.getElementById('stopwatch_display').innerHTML = d.toLocaleTimeString();
// };
// displayTime();
// setInterval(displayTime, 1000);


