urls_length = urls.length;
let random_index = Math.floor((Math.random() * urls_length) ;
let url_address = urls[random_index];

function seconds() {
    seconds += 1;
    document.getElementById("counter").innerHTML = "Wait for " + seconds + " seconds."   
}