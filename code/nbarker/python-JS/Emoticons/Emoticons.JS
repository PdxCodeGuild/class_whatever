//for some reason the math.floor(math.random()*array.length) was giving me trouble, now I understand that it just gives us a random index for an array (duh!), it was themath.floor returning the largest integer for a given number, and that math.random give us a random number between 0-1, 



// function randomChar(array) {
//    let randomIndex = Math.floor(Math.random()*array.length);
//     return array[randomIndex];
// }

const noses = ['-', '^', '@'];
const eyes = ['8', 'B', ';', ':'];
const mouths = ['D', ')', 'P']

function randomNose(noses) {
    return noses[Math.floor(Math.random() * noses.length)];
}

function randomEye(eyes) {
    return eyes[Math.floor(Math.random() * eyes.length)];
}

function randomMouth(mouths) {
    return mouths[Math.floor(Math.random() * mouths.length)];
}
newNose = randomNose(noses);
console.log(newNose);

newEyes = randomEye(eyes);
console.log(newEyes);

newMouth = randomMouth(mouths);
console.log(newMouth);

console.log(newEyes + newNose + newMouth);

/*
//for (var i=1; i<101; i++) {
//    if (i % 3 == 0) console.log("fizz");
//    else if (i % 5 == 0) console.log("buzz");
//    else if (i % 15 == 0) console.log("fizzbuzz");
//    else console.log(i);
//} 

/*
for (var i=1; i<200; i++) {
    if (i % 15 ==0) console.log('buttfuck');
    else if (i % 3 == 0) console.log('assmunch');
    else if (i % 10 == 0) console.log('fuckinmuthafucka!');
    else if (i == 31) console.log("SPENCER GET IN MY BACKPACK!")
    else console.log(i)
}


var favoriteFoods = ['cheese', 'mammals', 'anchovies'];
favoriteFoods[3] = 'bananas';
console.log(favoriteFoods[0])
console.log(favoriteFoods[1])
console.log(favoriteFoods[2])
console.log(favoriteFoods[3])

console.log('1')

//write a function to iterate through the list!
for (var i=0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}

console.log('2')

for (var i=0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}

console.log('3')

for (var i=0; i<favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}

console.log('4')

var myKonaBear = {
    name: "kona",
    age: 14,
    isFiesty: true,
    likes: ['rubber bands', 'pet sessions', 'dinnertime!'],
    fur: {colors: ['orange', 'white'], pattern: "striped"},
    meow: function() {
    console.log("Meow!")}
    }

console.log(myKonaBear.fur.pattern)
console.log(myKonaBear['fur']['pattern'])
myKonaBear.meow()
console.log(myKonaBear.likes[0])
console.log(myKonaBear.age)
console.log(myKonaBear.fur.colors[0])
console.log(myKonaBear.isFiesty)

var headingEl = document.getElementById("heading");
console.log(headingEl);
headingEl.innerHTML = "No this should be it!";

for (var i=0; i<50; i++) {
    if (i % 5 == 0) console.log('boner!');
    else if (i % 7 == 0) console.log('sevenboner!');
    else if (i == 31) console.log("this is 31, fuckers!")
    else console.log(i)
}

/*

write a program to create a new string using the first and last 3 characters of a string and adding them together

make a const
name that function
what does it take in?
 if the length of the string is less than 3, we can return the str, otherwise we will return str+3 and str-3

const makeNewString = (str) => 
    str.length < 3 ? str: str.slice(0,3) + str.slice(-3);

console.log(makeNewString('ab'));
console.log(makeNewString('abc'));
console.log(makeNewString('abcdefghijk'));
console.log(makeNewString('abcabcabcabccabcab'));
console.log(makeNewString('zzzzabzzzcsdfasdf'));

//write a js program to extract the first half of a string of even length//
const getFirstHalf = (str) =>
    str.slice(0, str.length/2);

console.log(getFirstHalf('temp'))
console.log(getFirstHalf('temple'))
console.log(getFirstHalf('templess'))
console.log(getFirstHalf('nicq'))



write a js program to concatentate two string except their first character

const addStrings = (str1, str2) =>
    str1.slice(1) + str2.slice(1);

console.log(addStrings('nick', 'knock'))
console.log(addStrings('kasi', 'moon'))
console.log(addStrings('raptor', 'frog'))


//given 2 values, write a javascript program to find out which is closest to 100

const whichISClosest = (a, b) => (100 - a) > (100 - b) ? a : b; 
    console.log(whichISClosest(99, 1));


write a program that checks a string to see how many times a certain character shows up!
make helper function to count characters


const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const containsTwo = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(containsTwo('meow', 'm'));
console.log(containsTwo('measssow', 'md'));
console.log(containsTwo('meoasdfaw', 'mddd'));
console.log(containsTwo('meoasdsw', 'md'));
*/