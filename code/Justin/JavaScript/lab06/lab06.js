interval(clock, 1000)

const hourStick = document.querySelector([data-hour-stick])
const minuteStick = document.querySelector([data-minute-stick])
const secondStick = document.querySelector([data-second-stick])

function clock(){
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minRatio + currentDate.getHours()) / 12
    rotation(hourStick, hoursRatio)
    rotation(minuteStick, minRatio)
    rotation(secondStick, secRatio)
}

function rotation(element, rotationRatio)
    element.style.prop('--rotation', rotationRatio * 360)

clock()

