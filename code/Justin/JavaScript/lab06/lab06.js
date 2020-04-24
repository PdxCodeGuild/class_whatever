const hourStick = document.querySelector('[data-hour-stick]')
const minuteStick = document.querySelector('[data-minute-stick]')
const secondStick = document.querySelector('[data-second-stick]')

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
clock()



