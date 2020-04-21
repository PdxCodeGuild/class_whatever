console.log('hello')

function now(){
    let date=new Date();
    let hour= double_digits(date.getHours())
    let min= double_digits(date.getMinutes())
    let sec= double_digits(date.getSeconds())
    let div=document.querySelector('div')
    div.innerHTML= `${hour}:${min}:${sec}`
}

function double_digits(x){
    if (x < 10){
        return `0${x}`
    }
    else{
        return x
    }
}
now()
setInterval(function(){now()},1000)

