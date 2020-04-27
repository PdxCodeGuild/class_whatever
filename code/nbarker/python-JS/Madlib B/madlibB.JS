//okay! let's get our madlib on, we're using alert in place of print, and promt in place of input.  I can definitely make it 'alert' whatever I want with quotes.
//don't forget the fucking semicolon! christ! it's like the WORST of the punctuators
//LET not VAR, camelcase that ass!
//1. make a story, CHECK!
//2. make some variables, CHECK!
//3. next - prompt that will assign inputs to variables
//4. print story to screen, get the story, use document.write to place it on the webpage(this is what that tutorial said, but I think alert is the correct way to do it for this lab)
//5. f*ck it I did it both ways, with document.write and with alert, why in the hell do we have to use such a ridiculous syntax? " + variable + "
//LOOK AT ALL THE WAYS WE CAN MAKE STUFF APPEAR!!!!

var app = new Vue({
    el: '#app',
    data: {              
        message: 'Hey Everybody!' 
    }, 
    methods: { 
        splitMessage: function () { 
            this.message = this.message.split('')
        },
        joinMessage: function () {
            this.message = this.message.join('')
        }
    }
})

/*
var madlib = new Vue({
    el: '#madlib',
    data: {
        story: 'There was was a man from "+ place1 +", he had the most glorious " + animal1 + "  you had ever seen! He once crossed an " + animal1 + " with an " + animal2 + ", which took over the city, killing millions! You may remember it as the book Moby "+animal1+"-"+animal2+" ! In fact, this is how the planet " + planet + " was formed trillions of years ago.'
    },
    methods: {
        showMadlib: function () {
    this.place = document.getElementById('place');
    this.animal1 = animal1.getElementById('animal1');
    this.animal2 = animal2.getElementById('animal2')
    this.planet = planet.getElementById('planet');
    story = this.story.showMadlib()
        }
}
})
*/

//View Instance
//yup
//make a method!
//don't forget this comma! also, METHOD time!  "with the v-on directive, allows us to attach event listeners that invoke methods on our view instance" Holy fuck what a sentence.
//called it splitMessage
//this is what splitMessage does essentially, split the message

///////everything below this line is from part A/////////////
/*
alert("MAD LIBS");
let place1 = prompt("enter a place: ");
let animal1 = prompt("enter an animal: ");
let animal2 = prompt("enter another animal: ");
let planet = prompt("enter an planet: ");
alert("let's get mad libby!");


//it says violation? should I not do this?
document.write("There was was a man from "+ place1 +", he had the most glorious " + animal1 + "  you had ever seen! He once crossed an " + animal1 + " with an " + animal2 + ", which took over the city, killing millions! You may remember it as the book Moby "+animal1+"-"+animal2+" ! In fact, this is how the planet " + planet + " was formed trillions of years ago.");

//show up in the console!
console.log("There was was a man from "+ place1 +", he had the most glorious " + animal1 + "  you had ever seen! He once crossed an " + animal1 + " with an " + animal2 + ", which took over the city, killing millions! You may remember it as the book Moby "+animal1+"-"+animal2+" ! In fact, this is how the planet " + planet + " was formed trillions of years ago.");

//show up as an alert
alert("There was was a man from "+ place1 +", he had the most glorious " + animal1 + "  you had ever seen! He once crossed an " + animal1 + " with an " + animal2 + ", which took over the city, killing millions! You may remember it as the book Moby "+animal1+"-"+animal2+" ! In fact, this is how the planet " + planet + " was formed trillions of years ago.");*/
