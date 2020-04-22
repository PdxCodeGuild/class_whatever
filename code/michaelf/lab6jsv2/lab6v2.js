console.log('hello')
let startbtn=document.getElementById('start')
let lapbtn=document.getElementById('lap')
let stopbtn=document.getElementById('stop')

let ms=0
let sec= 0
let min=0
let hour=0
let div=document.querySelector('div')
div.innerHTML= '00:00:00:00'
function stopwatch(div){
    div.innerHTML= `${double_digits(hour)}:${double_digits(min)}:${double_digits(sec)}:${double_digits(ms)}`
    ms+= 1
    if (ms > 99){
        ms=0
        sec+=1
    }
    if (sec > 59){
        sec=0
        min+=1
    }
    if (min > 59){
        min=0
        hour+=1
    }
}

function double_digits(x){
    if (x < 10){
        return `0${x}`
    }
    else{
        return x
    }
}
stopbtn.addEventListener('click',function(){
    return stop=true
})

startbtn.addEventListener('click',function(){
    stop=false
    let interval = setInterval(function(){
        stopwatch(div)
        if (stop === true){
            clearInterval(interval)
        }
    },10)
})
counter=0
lapbtn.addEventListener('click', function(){
    counter+=1
    lap(counter)
})

function lap(counter){
    let body=document.querySelector('body')
    let lap_div=document.createElement('div')
    lap_div.innerHTML= `${double_digits(hour)}:${double_digits(min)}:${double_digits(sec)}:${double_digits(ms)} <<< lap ${counter}`
    body.append(lap_div)
  
}