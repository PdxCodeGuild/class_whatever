//reference
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

const hourStick = document.querySelector('[data-hour-stick]')
const minuteStick = document.querySelector('[data-minute-stick]')
const secondStick = document.querySelector('[data-second-stick]')

//reference
//function startTime() {
  //  var today = new Date();
    //var h = today.getHours();
    //var m = today.getMinutes();
    //var s = today.getSeconds();
    //m = checkTime(m);
    //s = checkTime(s);
    //document.getElementById('txt').innerHTML =
    //h + ":" + m + ":" + s;
    //var t = setTimeout(startTime, 500);
  //}

setInterval(clock, 1000)

function clock(){
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minRatio + currentDate.getHours()) / 12
    setRotation(hourStick, hoursRatio)
    setRotation(minuteStick, minRatio)
    setRotation(secondStick, secRatio)
}

function setRotation(element, ratio){
    element.style.setProperty('--rotation', ratio * 360)
}

//reference
//function currentTime() {
//    var date = new Date(); /* creating object of Date class */
//    var hour = date.getHours();
//    var min = date.getMinutes();
//    var sec = date.getSeconds();
//  }

clock()
// dateTime()



