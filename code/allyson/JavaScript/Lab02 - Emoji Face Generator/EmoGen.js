//Emoticon Generator//

let random_emote = document.querySelector('#random_emote')
var btn = document.createElement('BUTTON')
function random_element(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
button_submit.addEventListener('click', function() {
  let eyes = [':', ';', 'X', '8', '<:', '<;']
  let noses = ['^', ' ', '', 'o', '-']
  let mouths = ['D', ')', '(', 'P', '>', '*', '$', '|', '/']

  random_emote.innerText =
    random_element(eyes) + random_element(noses) + random_element(mouths)
})
