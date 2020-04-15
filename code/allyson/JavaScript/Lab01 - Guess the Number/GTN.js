//## Guess the Number! ##//S

let num = Math.floor(Math.random() * 21)
let guess = parseInt(
  prompt(
    "Guess what number I am thinking of!  It's between One and Twenty. ${num}",
  ),
)
let guessdig = 0
let totgsnum = 0
let gtn = true
while (gtn) {
  if (guess === num) {
    ++guessdig
    gtn = false
    alert(`Correct!!  That took you ${guessdig} tries.  Good job!`)
  } else if (guess !=== num) {
    if (guessdig < 1) {
      if (guess < num) {
        ++guessdig
        totgsnum = guess
        guess = parseInt(prompt('Not high enough, but you can do it!'))
      } else if (guess > num) {
        ++guessdig
        totgsnum = guess
        guess = parseInt(prompt('Little too high, But you are doing well!'))
      }
    }
  }
}
