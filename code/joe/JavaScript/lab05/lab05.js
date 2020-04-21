/*
// Version 1 & 2
const output = document.getElementById("output");

const websites = ["http://www.google.com", "http://www.mozilla.org", "http://www.apple.com",
"http://www.microsoft.com",
"https://github.com/PdxCodeGuild/class_whatever/blob/master/4%20JavaScript/labs/lab05-random_redirector.md"];

let choice = Math.floor(Math.random() * websites.length);
let second = 5;
output.innerText = `Redirecting in ${second} seconds...`;
let timer = setInterval(function(){
    output.innerText = `Redirecting in ${--second} seconds...`;
    if(second <= 0){
        window.location.href = websites[choice];
        clearInterval(timer);
    }
}, 1000);*/

// Version 3
const myframe = document.getElementById("myframe");
const allowed_websites = ["01b", "02b", "03b", "04", "06"]; // most websites prevent me from using an iframe to load them; so we'll load local stuff
const reload = document.getElementById("reload");

let choice = Math.floor(Math.random() * allowed_websites.length);

myframe.src = `../lab${allowed_websites[choice]}/index.html`;

reload.addEventListener("click", function(){
    choice = Math.floor(Math.random() * allowed_websites.length);
    myframe.src = `../lab${allowed_websites[choice]}/index.html`;
});