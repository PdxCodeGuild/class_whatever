// //Nodes
// //everything in the dom is a node, html tag, body tag, every element in this page is a node!

// //create a variable containing any element, in this case, I chose the footer
// const footer = document.querySelector(".footer"); //selecting the footer
// console.log('footer whatever type is:', footer.nodeType); //show type in console, it will be a number representing a type(check W3 schools)

// //this is how we show the 'name' of the element, NOT the ID, in this case: DIV, exact same syntax, just change type to name and nodeType to nodeName
// console.log('footer whatever name is:', footer.nodeName);

// //we can find out if this node has any child nodes
// console.log('footer has child nodes:', footer.hasChildNodes());

// //this method for cloning a node, and insert it later on the DOM, super simple.  new constant  we pass in 'true' because we want it to go deeply into the node, and clone the nested content as well
// const clonedFooter = footer.cloneNode(true);
// console.log(clonedFooter);

// // tutorial #9, event listeners, events, callback fx
// //first, select title (for this example, id:blogheader h2 inside that)
var title = document.querySelector('#blogheader h2');
// console.log(title);

//attach event listener to an element, and a callback fx (in the line above, we reference the title)
title.addEventListener('click', function(e){ //callback fx takes in event param
    console.log(e.target); //.target property on event object (there are several, it tells us which element was clicked, the target of the event)
    console.log(e);
})

//pull out stardates
var stardates = document.querySelectorAll('.description');
console.log(stardates);

//make into an array (we don't have to, b/c it's a node list, but okay!)
Array.from(stardates).forEach(function(stardate){
    stardate.addEventListener('click', function(e){

        const h5 = e.target.parentElement;

        h5.parentElement.removeChild(h5);

    });
});

//prevent default method! if you want to make a link inactive or something
const link = document.querySelector('#wrapper a');
console.log(link);
//now we have a refernce to the link itself in JS! this is how we prevent an event from happening!
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log("NO", e.target.textContent, "for you!");
})


// var allthetext = document.querySelectorAll("div.section > p:nth-of-type(2)");
// console.log(allthetext);

// allthetext.forEach(function(allthetext){
//     allthetext.textContent += "bone city!";
//     allthetext.style.color = 'black';
//     allthetext.style.background = 'blue';
// });

// var thedates = document.querySelectorAll("h5:first-of-type");
// console.log(thedates);

// thedates.forEach(function(thedates){
//     console.log(thedates.innerHTML = "and now this");
// });

// const wrapper = document.querySelector("#wrapper");
// console.log(wrapper.innerHTML);

// wrapper.innerHTML = "<h1> can I add this? </h1>"

// wrapper.innerHTML = "baa baa black sheep!";

// const sects = document.querySelectorAll('section');
// console.log(sects);

// sects.forEach(function(sect){
//     console.log(sect.textContent)
// });

// var elements = document.getElementsByClassName("section");
// console.log(elements);

// Array.from(elements).forEach(function(element){
//     console.log(element)
// })





// //pull the header out and call it 'banner' in this case
// const banner = document.querySelector("#blogheader");

// //this command will output in console node type, it will give a number, that corresponds to a 'node type' google node types
// console.log('#blogheader node type is:',banner.nodeType);
// //>>>returns 1

// //copy and paste from above, change type to name and nodeType to nodeName
// console.log('#blogheader node name is:', banner.nodeName);
// //>>>returns div

// //we can find out if it has any child nodes! a method called .hasChildNodes()
// console.log('#blogheader has child nodes:', banner.hasChildNodes());




// const sections = document.querySelector(".section");
// console.log(sections.innerHTML);

// //selecting the blocks of text
// const textblocks = document.querySelectorAll("p:nth-of-type(2)");
// console.log(textblocks);

// //selecting the text inside the blocks using .textContent, we will turn 'textblocks' into an array, nope nm we don't need to, because it's a 'node list' not an HTML collection, it will behave like an array

// //selecting the text itself INSIDE the variable 'textblocks'
// textblocks.forEach(function(textblocks){
//     console.log(textblocks.textContent);
// })

// //altering the text!
// textblocks.forEach(function(textblocks){
//     textblocks.textContent += "(this is from an episode)"
// })

/*
Remember: 
document.querySelectorAll() will return a 'node list' which behaves like an array 
document.getElementById or .getElementByTagName, it will return an 'html collection' which we will need to make into an array to do array stuff to it, like the .forEach method that will iterate through an array, not an HTML collection ;-)
*/



// subtitles.forEach(function(subtitle){
//     console.log(subtitle.innerHTML);
// })



// // in jquery: $('#wrapper')

// //in vanilla JS:
// const wrapper = document.querySelectorAll("#subpara");
// console.log(wrapper);

// // var djangoboy = document.querySelector("section p .subpara");
// // console.log(djangoboy);

// Array.from(wrapper).forEach(function(wrap){
//     wrap.textContent += "TESTICLES!";
// })

// var paracontent = document.querySelectorAll("subpara");
// paracontent.innerHTML = "<h1> holy fuck we changed this! </h1>";

// // const sections = document.querySelectorAll(".section");
// // console.log(sections);

// //let's store this in a variable