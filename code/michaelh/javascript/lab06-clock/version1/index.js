let clock_output = document.getElementById('clock_output')
setInterval(function() {
    clock_output.innerText = new Date();
}, 1000);