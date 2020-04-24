var urls = ["https://www.google.com/", "https://www.facebook.com/", "https://twitter.com/login","https://www.linkedin.com/","https://www.wikipedia.org/","https://www.youtube.com/"];
urls_length = urls.length;
var random_index = Math.floor((Math.random() * urls_length) + 0);
var url_address = urls[random_index];

var seconds = 0;
function incrementSeconds() {
    seconds += 1;
    document.getElementById("counter").innerHTML = "Wait for " + seconds + " seconds."   
}

var stop = setInterval(incrementSeconds, 1000);
setTimeout(myFunction, 5000);
function myFunction(){
    clearInterval(stop);
    location = url_address;
}